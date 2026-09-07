# Design System Harness Guidelines (`design-system-harness.md`)

---

## 1. 개요 및 목적 (Overview & Purpose)

본 문서는 **daeun-sim-portfolio** 프로젝트 (React 19 + Vite + Tailwind CSS v4)의 일관된 시각적 디자인 시스템 유지, 하드코딩 방지 및 코드 품질 강제를 위한 디자인 하네스(Design Harness) 가이드라인 본체입니다.

- **디자인 토큰 준수**: 모든 시각적 스타일(색상, 간격, 폰트, 모서리 곡률 등)은 프로젝트의 디자인 토큰 선언부(`src/index.css`)에 선언된 토큰 및 유틸리티 클래스만을 참조해야 합니다.
- **하드코딩 차단**: 하드코딩된 색상 코드(HEX, RGB, HSL), 임의 단위 수치(`px`, `rem` 등), arbitrary class(`bg-[#...]`, `p-[...]`), 허용되지 않은 외부 CDN 주소의 사용은 자동 차단 검사 대상입니다.
- **4단계 개발 프로세스**: 모든 UI 작업은 `Clarify(명확화) → Reuse(재사용) → Implement(구현) → Evaluate(검증)` 4단계를 따릅니다.

---

## 2. 4대 핵심 원칙 (Principles)

1. **Think Before Coding (코딩 전 사유)**:
   - 디자인 시안이나 반응형 레이아웃 스펙이 명확하지 않은 경우 코딩을 즉시 멈추고 사용자에게 명확화를 요청합니다.
2. **Simplicity First (단순성 및 재사용 우선)**:
   - 새로운 스타일 수치를 임의로 작성하지 말고, `src/index.css`에 기존 정의된 토큰(`--color-*`, `--font-*`) 및 Figma 유틸리티 클래스(`.figma-container`, `.figma-btn-pill`, `.figma-tag-badge` 등)를 우선 재사용합니다.
3. **Surgical Changes (정교하고 최소화된 변경)**:
   - 요구사항에 해당하는 파일과 라인만 최소한으로 정교하게 수정하고 무관한 기존 코드를 임의로 재구성하지 않습니다.
4. **Goal-Driven Execution (목표 지향 검증)**:
   - 모든 코드 수정 후 반드시 검사 Hook 및 하네스 검증 규칙을 수행하여 통과(PASS)한 경우에만 작업을 완료합니다.

---

## 3. 디자인 토큰 및 코드 규칙 (Tokens & Code Rules)

### 3.1 디자인 토큰 위치 (Token Location)
- **주 파일 경로**: `file:///Z:/0_AI/0.%20GPT/project/project/src/index.css` (`@theme` 블록)
- **주요 선언 토큰**:
  - 배경색: `--color-bg-primary` (`#FFFFFF`), `--color-bg-secondary` (`#FAF7F6`), `--color-bg-dark` (`#161616`)
  - 포인트색: `--color-accent-purple` (`#9F8BE7`), `--color-accent-lime` (`#DDF160`)
  - 텍스트색: `--color-text-main` (`#161616`), `--color-text-sub` (`#303030`), `--color-text-muted` (`#B2AEAD`)
  - 타이포그래피: `--font-funnel` (`'Funnel Display', sans-serif`), `--font-pretendard` (`'Pretendard', sans-serif`)

### 3.2 하드코딩 금지 규칙
- `src/index.css`의 `@theme` 및 `:root` 선언부를 제외한 모든 JSX, HTML, CSS 코드에서 raw hex (`#HEX`), `rgb()`, `rgba()`, `hsl()`, `px`, `rem` 단위를 임의로 직접 기술하는 것을 금지합니다.
- Tailwind arbitrary value (`p-[20px]`, `text-[#161616]` 등) 사용을 금지하며, 등록된 토큰 클래스(`bg-bg-primary`, `text-text-main` 등)를 사용해야 합니다.

### 3.3 예외 처리 (Exemption)
- 불가피하게 하드코딩 수치가 필요한 경우, 해당 라인 끝에 예외 사유 주석을 추가해야만 검사를 통과할 수 있습니다:
  - JSX/JS: `// token-exempt: 사유` 또는 `/* token-exempt: 사유 */`
  - CSS: `/* token-exempt: 사유 */`
  - HTML: `<!-- token-exempt: 사유 -->`

---

## 4. 허용 서드파티 및 CDN (Allowed Libraries & CDNs)

- **패키지**: `react`, `react-dom`, `@emailjs/browser`, `vite`, `tailwindcss`, `@tailwindcss/vite`, `@vitejs/plugin-react`
- **웹 폰트/CDN**:
  - Google Fonts (`Funnel Display`)
  - CDN fonts / Pretendard (`cdn.jsdelivr.net/gh/orioncactus/pretendard...`)
  - Google reCAPTCHA (`www.google.com/recaptcha/...`, `recaptcha.net`)
- 상기 목록 외 허용되지 않은 외래 CDN 주소 및 미승인 라이브러리의 임의 추가를 금지합니다.
