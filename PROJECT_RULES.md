# Project Rules & Session Harness Guide (`PROJECT_RULES.md`)

---

## 1. 프로젝트 개요 (Project Overview)
- **프로젝트명**: Daeun Sim Portfolio (`daeun-sim-portfolio`)
- **기술 스택**: React 19, Vite 6, Tailwind CSS v4 (`@tailwindcss/vite`), EmailJS (`@emailjs/browser`)
- **디자인 하네스 적용**: 본 프로젝트에는 시각적 정합성 및 디자인 토큰 강제를 위한 **디자인 시스템 하네스(Design Harness)**가 적용되어 있습니다.

---

## 2. 에이전트 필수 독해 규칙 (Mandatory Agent Instructions)

1. **하네스 문서 상시 준수**:
   - 모든 AI 에이전트 세션 및 코드 편집 시 반드시 최상위의 [`design-system-harness.md`](file:///Z:/0_AI/0.%20GPT/project/project/design-system-harness.md) 지침을 읽고 엄격히 이행해야 합니다.

2. **디자인 토큰 경로**:
   - 토큰 선언부: [`src/index.css`](file:///Z:/0_AI/0.%20GPT/project/project/src/index.css) (`@theme` 블록)
   - 새로운 시각 수치가 필요할 경우 일반 코드에 직기술하지 않고 `src/index.css`의 토큰으로 먼저 등록한 뒤 사용해야 합니다.

3. **범위 및 수정 제한**:
   - 요청받은 대상 파일/라인 범위 밖의 코드 수정을 금지합니다.
   - 하드코딩 색상(`#HEX`, `rgb`, `hsl`), arbitrary value (`p-[...]`, `bg-[#...]`), 미허용 CDN/패키지 추가를 엄격히 차단합니다.
   - 예외적인 하드코딩 필요 시 반드시 `// token-exempt: 사유` 주석을 추가하십시오.

4. **검증 가이드**:
   - 코드 수정 후에는 Hook 검사 및 `/review-design`을 실행하여 모든 하네스 규칙에 대해 PASS 판정을 받아야 작업이 완결됩니다.
