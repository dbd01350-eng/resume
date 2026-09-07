import fs from 'fs';
import path from 'path';

/**
 * Utility tool: Extract common components/structures and detect discrepancies across pages/components.
 * Run with: node ./hooks/extract-common.js
 */

const TARGET_DIRS = ['src/pages', 'src/components'];
const COMMON_STRUCTURES = ['Header', 'Footer', 'Navbar'];

function findFiles(dirPath, extList = ['.jsx', '.js', '.tsx', '.html']) {
  let fileList = [];
  if (!fs.existsSync(dirPath)) return fileList;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      fileList = fileList.concat(findFiles(fullPath, extList));
    } else if (entry.isFile() && extList.includes(path.extname(entry.name))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function analyzeCommonStructures() {
  console.log('🔍 [공통 요소 분석 및 검사 시작]');
  const rootDir = process.cwd();
  let filesToScan = [];

  for (const target of TARGET_DIRS) {
    const fullTargetDir = path.join(rootDir, target);
    filesToScan = filesToScan.concat(findFiles(fullTargetDir));
  }

  const indexHtmlPath = path.join(rootDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    filesToScan.push(indexHtmlPath);
  }

  if (filesToScan.length === 0) {
    console.log('스캔 대상 파일이 없습니다.');
    return;
  }

  const report = {
    scannedFilesCount: filesToScan.length,
    missing: [],
    differences: []
  };

  for (const file of filesToScan) {
    const relativePath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf8');

    // Example check: pages missing Header / Footer
    if (relativePath.includes('pages')) {
      for (const structure of COMMON_STRUCTURES) {
        const regex = new RegExp(`<${structure}|import.*${structure}`, 'i');
        if (!regex.test(content)) {
          report.missing.push({ file: relativePath, structure });
          console.log(`누락: ${relativePath} (${structure} 미포함)`);
        }
      }
    }
  }

  console.log('\n--- [분석 결과 요약] ---');
  console.log(`총 스캔 파일 수: ${report.scannedFilesCount}`);
  if (report.missing.length === 0 && report.differences.length === 0) {
    console.log('✅ 공통 구조 및 태그 불일치 사항이 발견되지 않았습니다.');
  } else {
    console.log(`⚠️ 누락 사항: ${report.missing.length}건`);
  }
}

analyzeCommonStructures();
