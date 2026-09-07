# 범용 디자인 시스템 하네스 생성 메타 프롬프트 (`design_harness_maker.md`)

> **[사용 방법]**
> 아래 **프롬프트 내용** 전체를 복사하여 현재 작업 중인 프로젝트의 AI 에이전트(Antigravity, Cursor, Windsurf, ChatGPT, Gemini, Claude 등)에게 전송하세요. AI가 현재 프로젝트의 기술 스택을 자동으로 파악하고 최적화된 하네스 규칙 문서(`design-system-harness.md` 및 `PROJECT_RULES.md`)를 생성합니다.

---

```markdown
[지시사항: 하네스 엔지니어링 규칙 문서 자동 생성]

너는 지금부터 이 프로젝트의 디자인 시스템 및 코드 품질을 강제하는 **하네스(Harness) 관리자**이다.
현재 프로젝트의 폴더 구조, 기술 스택(React, Vue, Next.js, HTML, Tailwind, CSS Modules 등), 패키지 설정(`package.json` 등)을 분석한 뒤, 프로젝트 최상위에 아래 2개의 가이드라인 문서를 작성해 줘.

---

### 1. `design-system-harness.md` 생성 (규칙 본체)

프로젝트 최상위에 `design-system-harness.md`를 만든다. 이 파일은 다른 프로젝트에도 복사해 재사용할 수 있는 범용적인 디자인 시스템 및 작업 원칙 본체이다.

포함할 내용:
1. **목적**:
   - 모든 시각적 스타일(색상, 간격, 폰트 크기, 모서리 곡률 등)은 프로젝트에 선언된 디자인 토큰(Tailwind theme, CSS Variables, Theme Provider 등)만 참조해야 한다.
   - 하드코딩된 색상 코드(HEX, RGB, HSL), 임의 단위(px, rem 등), 허용되지 않은 외부 CDN/라이브러리는 자동 검사 및 차단 대상이다.
   - 모든 구현은 `Clarify(명확화) → Reuse(재사용) → Implement(구현) → Evaluate(검증)` 4단계를 따른다.

2. **4대 핵심 원칙 (Principles)**:
   - **Think Before Coding**: 요구사항이나 반응형 스펙이 모호하면 코딩을 멈추고 사용자에게 명확히 질문한다.
   - **Simplicity First**: 새 스타일에 값을 직접 적지 말고 기존 토큰과 공통 컴포넌트/유틸리티를 먼저 재사용한다.
   - **Surgical Changes**: 요청받은 파일과 라인만 최소한으로 정교하게 수정한다.
   - **Goal-Driven Execution**: 모든 작업 후 검증 기준(Evaluator/Hook)을 통과한 경우에만 완료를 보고한다.

3. **토큰 및 코드 규칙**:
   - 프로젝트의 토큰 위치(예: Tailwind `@theme`, `tailwind.config.js`, `globals.css`의 CSS 변수 등)를 명시한다.
   - raw hex, rgb, rgba, hsl, px, rem 단위를 토큰 선언부 밖의 일반 코드에 직접 적는 것을 금지한다.
   - 예외 처리: 특정 라인에서 불가피하게 하드코딩이 필요한 경우 줄 끝에 `// token-exempt: 사유` 또는 `/* token-exempt: 사유 */` 주석을 추가해야만 통과된다.

4. **허용 서드파티/CDN 목록**:
   - 프로젝트에서 사용 승인된 라이브러리 및 CDN 목록을 지정하고, 허용되지 않은 외래 주소 추가를 금지한다.

---

### 2. `PROJECT_RULES.md` 생성 (프로젝트 세션 연결 문서)

프로젝트 최상위에 `PROJECT_RULES.md` (또는 해당 에이전트 환경에 맞는 프로젝트 규칙 파일, 예: `.cursorrules`, `AGENT_RULES.md`)를 생성하여 AI 세션이 시작될 때 가장 먼저 이 하네스 규칙을 인지하도록 설정한다.

포함할 내용:
- 이 프로젝트의 개요 및 디자인 하네스 적용 사실 명시.
- "모든 코드 수정 전 반드시 `design-system-harness.md` 규칙을 독해하고 준수할 것"을 명시.
- 토큰이 선언되어 있는 정확한 파일 경로 기재.
- 범위를 벗어난 수정이나 임의 파일 생성을 자제하고 승인 후 진행할 것.

---

위 2개 파일을 현재 프로젝트 스택에 맞춰 정확히 작성한 뒤 생성된 결과와 주요 규칙을 요약해서 보고해 줘.
```
