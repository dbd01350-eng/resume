---
name: review-design
description: 작성된 코드가 프로젝트 디자인 하네스 및 접근성 규칙을 준수했는지 읽기 전용으로 검사합니다.
disable-model-invocation: true
---

# /review-design

코드를 수정하지 않고 5가지 핵심 항목(하드코딩, 토큰 참조, 허용 CDN, 접근성, 시안 일치)을 정밀 검사하여 PASS/FAIL을 판정합니다.

## 실행 절차

1. **서브 에이전트 호출**:
   - `design-reviewer` 서브 에이전트를 읽기 전용 모드로 호출하여 전체 점검을 수행하게 합니다.

2. **검사 리포트 출력**:
   - PASS / FAIL 결과를 사용자에게 제시합니다.
   - FAIL 발생 항목이 있는 경우 직접 코드를 수정하지 않고, 적절한 조치 스킬(예: `/sync-tokens`)을 사용자에게 추천합니다.
