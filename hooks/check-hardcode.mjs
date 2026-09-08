import fs from 'fs';
import path from 'path';

/**
 * PreToolUse Hook: Check for hardcoded colors, arbitrary classes, and unauthorized CDNs.
 * Returns Exit Code 2 on violation (PreToolUse block) or 0 on pass.
 */

const ALLOWED_CDNS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net/gh/orioncactus/pretendard',
  'cdn.jsdelivr.net',
  'www.google.com',
  'www.gstatic.com',
  'recaptcha.net',
  'spline.design',
  'prod.spline.design',
  'build.spline.design'
];

const TARGET_EXTENSIONS = new Set(['.html', '.css', '.scss', '.jsx', '.tsx', '.vue', '.js', '.ts']);
const EXCLUDED_DIRS = new Set(['node_modules', 'dist', '.git', 'hooks', 'design_harness', 'scratch', '.gemini', 'brain']);

function checkLine(line, lineNumber, filePath) {
  // Check for exemption comments
  if (line.includes('token-exempt:')) {
    return null; // Exempt
  }

  // Check if line is within CSS @theme or :root definition in token files
  const isCssFile = filePath.endsWith('.css') || filePath.endsWith('.scss');
  const isTokenDefinitionLine = isCssFile && (line.trim().startsWith('--color-') || line.trim().startsWith('--font-') || line.trim().startsWith('@theme') || line.trim().startsWith(':root'));
  if (isTokenDefinitionLine) {
    return null; // Exempt token definitions
  }

  const errors = [];

  // 1. Check for hardcoded color HEX (#fff, #161616, #9F8BE7) - exclude standard CSS / JS entities if any
  // Regex for HEX colors: # followed by 3, 6, or 8 hex digits, not part of a URL fragment or standard string anchor if not color
  const hexPattern = /#(?:[0-9a-fA-F]{3,4}){1,2}\b/g;
  let hexMatch;
  while ((hexMatch = hexPattern.exec(line)) !== null) {
    // Avoid matching Tailwind class names or exemptions if already handled
    errors.push(`Hardcoded HEX color found: "${hexMatch[0]}"`);
  }

  // 2. Check for rgb / rgba / hsl / hsla
  const colorFuncPattern = /\b(rgb|rgba|hsl|hsla)\([^)]+\)/gi;
  let colorMatch;
  while ((colorMatch = colorFuncPattern.exec(line)) !== null) {
    errors.push(`Hardcoded color function found: "${colorMatch[0]}"`);
  }

  // 3. Check for Tailwind arbitrary values like p-[20px], bg-[#161616], w-[100px]
  const arbitraryPattern = /\b[a-z0-9:-]+-\[[^\]]+\]/gi;
  let arbitraryMatch;
  while ((arbitraryMatch = arbitraryPattern.exec(line)) !== null) {
    errors.push(`Arbitrary Tailwind class found: "${arbitraryMatch[0]}"`);
  }

  // 4. Check for unauthorized external CDN/URLs in http/https links
  const urlPattern = /https?:\/\/([^\s/'"]+)/gi;
  let urlMatch;
  while ((urlMatch = urlPattern.exec(line)) !== null) {
    const domain = urlMatch[1].toLowerCase();
    const isAllowed = ALLOWED_CDNS.some(allowed => domain === allowed || domain.endsWith('.' + allowed));
    if (!isAllowed) {
      errors.push(`Unauthorized external CDN/URL domain found: "${urlMatch[0]}" (${domain})`);
    }
  }

  return errors.length > 0 ? errors : null;
}

function scanFile(filePath) {
  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return [];
  }

  const lines = fileContent.split('\n');
  const violations = [];

  // Track if inside @theme or :root in CSS files
  let inExemptBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNumber = i + 1;

    if (filePath.endsWith('.css') || filePath.endsWith('.scss')) {
      if (line.includes('@theme') || line.includes(':root')) {
        inExemptBlock = true;
      }
      if (inExemptBlock && line.includes('}')) {
        inExemptBlock = false;
        continue;
      }
      if (inExemptBlock) {
        // Token block is exempt from hardcoded color check unless explicit violation
        if (!line.includes('token-exempt:')) {
          continue;
        }
      }
    }

    const errors = checkLine(line, lineNumber, filePath);
    if (errors) {
      for (const err of errors) {
        violations.push({ filePath, lineNumber, lineContent: line.trim(), error: err });
      }
    }
  }

  return violations;
}

function scanDirectory(dirPath) {
  let results = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) {
        results = results.concat(scanDirectory(fullPath));
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (TARGET_EXTENSIONS.has(ext)) {
        results = results.concat(scanFile(fullPath));
      }
    }
  }

  return results;
}

// Main execution
const targetArg = process.argv[2];
let violations = [];

if (targetArg && fs.existsSync(targetArg)) {
  const stat = fs.statSync(targetArg);
  if (stat.isDirectory()) {
    violations = scanDirectory(targetArg);
  } else {
    violations = scanFile(targetArg);
  }
} else {
  // Default: scan src/ directory and index.html
  const rootDir = process.cwd();
  const srcDir = path.join(rootDir, 'src');
  if (fs.existsSync(srcDir)) {
    violations = violations.concat(scanDirectory(srcDir));
  }
  const indexHtml = path.join(rootDir, 'index.html');
  if (fs.existsSync(indexHtml)) {
    violations = violations.concat(scanFile(indexHtml));
  }
}

if (violations.length > 0) {
  console.error('\n❌ [Hardcode Check Failed] 하드코딩 및 디자인 하네스 위반이 감지되었습니다:\n');
  for (const v of violations) {
    console.error(`- 파일: ${v.filePath}:${v.lineNumber}`);
    console.error(`  내용: ${v.lineContent}`);
    console.error(`  원인: ${v.error}`);
    console.error(`  해결: 디자인 토큰(src/index.css)을 사용하거나 라인 끝에 "// token-exempt: 사유" 주석을 추가하세요.\n`);
  }
  process.exit(2); // PreToolUse block code
} else {
  console.log('✅ [Hardcode Check Passed] 모든 코드 검사를 통과하였습니다.');
  process.exit(0);
}
