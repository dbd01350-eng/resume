# 범용 하드코딩 차단 Hook 구축 메타 프롬프트 (`check_hardcode_hook_maker.md`)

> **[사용 방법]**
> 아래 **프롬프트 내용** 전체를 복사하여 현재 작업 중인 프로젝트의 AI 에이전트에게 전송하세요. AI가 프로젝트 내에 하드코딩 및 규칙 위반 코드가 편집 도중 들어가지 못하도록 자동 차단 Hook 스크립트와 설정 파일을 자동 생성 및 연결해 줍니다.

---

```markdown
[지시사항: 하드코딩 차단 PreToolUse Hook 검사 스크립트 및 설정 자동 생성]

너는 이 프로젝트의 코드 품질 및 디자인 하네스를 강제하는 **Hook 엔지니어**이다.
AI 에이전트가 코드를 편집(Edit / Write / MultiEdit 등)하기 직전에 하드코딩된 스타일, 단위, 비허용 CDN/모듈을 검사하여 위반 시 편집을 자동 차단하는 Hook 스크립트를 구축해 줘.

---

### 1. 차단 검사 스크립트 생성 (`hooks/check-hardcode.mjs` 또는 프로젝트 검사 스크립트 디렉토리)

프로젝트 구조에 맞게 검사 스크립트를 생성해 줘.

**[검사 스크립트 핵심 로직 요구사항]**:
1. **대상 파일**: `.html`, `.css`, `.scss`, `.jsx`, `.tsx`, `.vue`, `.js`, `.ts` 등 프론트엔드 코드 파일.
2. **검사 항목**:
   - 하드코딩 색상: `#HEX`, `rgb()`, `rgba()`, `hsl()`, `hsla()` 패턴
   - 임의 단위/크기: `24px`, `1.5rem`, `2em` 등 토큰 미사용 수치
   - Arbitrary Class: Tailwind 등의 임의 값 대괄호 사용 (`p-[20px]`, `bg-[#fff]` 등)
   - 허용되지 않은 외부 CDN 주소 및 비인가 패키지 링크
3. **예외 처리 (Exemption)**:
   - `@theme` 블록, `:root` CSS 변수 선언부, Tailwind 설정 파일 내부의 토큰 정의 라인은 예외로 인정.
   - 해당 줄 끝에 주석 `// token-exempt: 사유` 또는 `/* token-exempt: 사유 */`, `<!-- token-exempt: 사유 -->`가 붙은 경우 검사 통과.
4. **차단 동작 (Exit Code)**:
   - 위반 사항 발견 시 `process.stderr`에 파일 경로, 라인 번호, 위반 내용을 명확히 출력하고 **종료 코드 `2` (PreToolUse 차단)**를 반환하여 편집 작업을 즉시 취소시킬 것. (종료 코드 0은 통과, 2는 차단)

---

### 2. Hook 실행 설정 파일 연결 (`settings.json` 또는 에이전트 Hook 설정)

AI 에이전트 환경의 설정 파일(예: `.agent/settings.json`, `settings.json`, 또는 에이전트 전용 Hook 설정)을 생성/수정하여, 파일 수정 도구가 호출되기 전에 위 스크립트가 실행되도록 등록해 줘.

예시 (`settings.json` / Hook 설정):
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "node \"./hooks/check-hardcode.mjs\""
          }
        ]
      }
    ]
  }
}

---

위 스크립트와 설정 파일을 오류 없이 생성하고, 차단 검사 스크립트가 정상 동작하는지 검증하는 테스트 가이드를 함께 제공해 줘.
```
