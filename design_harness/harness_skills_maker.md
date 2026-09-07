# 범용 하네스 슬래시 스킬 구축 메타 프롬프트 (`harness_skills_maker.md`)

> **[사용 방법]**
> 아래 **프롬프트 내용** 전체를 복사하여 프로젝트의 AI 에이전트에게 전송하세요. AI가 사용자가 직접 슬래시 커맨드(예: `/figma-to-section`, `/sync-tokens`, `/review-design` 등)를 입력하여 작업을 제어할 수 있도록 스킬 정의 파일과 공통 도구를 자동 구축해 줍니다.

---

```markdown
[지시사항: 슬래시 스킬 4종 및 공통 분석 도구 자동 생성]

너는 프로젝트 작업의 제어 흐름과 진입점을 관리하는 **워크플로우 엔지니어**이다.
사용자가 에이전트 대화창에서 명령어로 부를 수 있는 스킬 모듈(`skills/*/SKILL.md` 또는 `.agent/skills/*/SKILL.md`) 4종과 공통 영역 추출 분석 도구를 작성해 줘.

모든 스킬 파일의 프런트매터에는 `disable-model-invocation: true`를 포함시켜 AI가 임의 판단으로 자동 실행하지 않고, 사용자가 직접 명령어를 입력했을 때만 작동하도록 보장해 줘.

---

### 1. 슬래시 스킬 4종 생성 (`skills/`)

1. `skills/figma-to-section/SKILL.md`
   - **description**: Figma 시안을 하네스 규칙에 따라 코드로 구현한다.
   - **본문**: 사용자에게 Figma 주소, 대상 컴포넌트/파일 위치를 확인한 후, `figma-implementer` 에이전트에게 Clarify → Reuse → Implement → Evaluate 순서로 구현을 지시한다. 종료 후 `/review-design` 검사를 안내한다.

2. `skills/new-section/SKILL.md` (또는 `new-component`)
   - **description**: 기존 디자인 토큰만으로 새로운 UI 컴포넌트/영역을 작성한다.
   - **본문**: 프로젝트의 공통 헤더/푸터 및 토큰을 확인 후 `section-builder` 에이전트에 작성을 지시한다. 종료 후 `/review-design` 검사를 안내한다.

3. `skills/sync-tokens/SKILL.md`
   - **description**: 코드에 남아있는 하드코딩 수치를 찾아 토큰으로 정리한다.
   - **본문**: `token-guardian` 에이전트를 호출하여 검사 범위 내 하드코딩을 찾아 토큰 파일에만 등록하게 하고, 일반 코드 수정 대상 목록을 사용자에게 제시한다.

4. `skills/review-design/SKILL.md`
   - **description**: 현재 작성이 끝난 코드가 디자인 하네스 및 규칙을 준수했는지 검사한다.
   - **본문**: `design-reviewer` 에이전트를 호출하여 5가지 핵심 항목을 검사하고 PASS/FAIL 결과를 출력한다. 실패 항목에 대해서는 직접 고치지 말고 조치 스킬을 사용자에게 추천한다.

---

### 2. 공통 요소 추출 및 검사 도구 생성 (`hooks/extract-common.js` 등)

여러 페이지/컴포넌트 간의 공통 영역(Header, Footer, Head 태그 등)을 파싱하여 공통 파일로 추출하고 불일치 여부를 탐지하는 유틸리티 스크립트를 작성해 줘.

- **기능**: 현재 프로젝트의 페이지/컴포넌트 파일들을 탐색하여 공통 태그/구조를 파악하고, 일치하지 않거나 누락된 파일이 있을 경우 `차이: 파일명` 또는 `누락: 파일명`으로 출력한다.
- **실행**: `node ./hooks/extract-common.js` 등의 형태로 직접 실행 가능하도록 CommonJS 또는 ESM 유틸리티로 생성할 것.

---

위 스크립트와 4개 스킬 파일을 완벽히 작성해 줘.
```
