---
name: figma-to-section
description: Figma 시안 URL과 대상 위치를 전달받아 하네스 규칙에 맞춰 코드로 완벽 구현합니다.
disable-model-invocation: true
---

# /figma-to-section

사용자가 입력한 Figma 시안 및 컴포넌트 위치를 바탕으로 시안을 정교하게 코드로 작성합니다.

## 실행 절차

1. **요구사항 확인**:
   - 사용자에게 Figma 시안 URL 및 구현 대상 파일 경로(예: `src/components/MySection.jsx`)를 확인합니다.

2. **서브 에이전트 호출**:
   - `figma-implementer` 서브 에이전트를 호출하여 `Clarify → Reuse → Implement → Evaluate` 4단계를 수행하게 합니다.

3. **검증 및 후속 안내**:
   - 구현 완료 후 사용자에게 `/review-design` 커맨드로 디자인 하네스 검사를 수행할 것을 안내합니다.
