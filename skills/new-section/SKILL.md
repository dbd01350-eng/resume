---
name: new-section
description: 기존 선언된 디자인 토큰만 활용하여 새로운 화면 컴포넌트/영역을 작성합니다.
disable-model-invocation: true
---

# /new-section

기존 선언된 디자인 토큰(`src/index.css`)만을 사용하여 독립된 화면 영역 및 컴포넌트를 작성합니다.

## 실행 절차

1. **요구사항 확인**:
   - 생성하고자 하는 컴포넌트/섹션 이름 및 위치를 확인합니다.

2. **서브 에이전트 호출**:
   - `section-builder` 서브 에이전트를 호출하여 `src/index.css` 토큰만 활용해 신규 영역을 작성하게 합니다.

3. **검증 및 후속 안내**:
   - 작성 완료 후 사용자에게 `/review-design` 커맨드로 디자인 하네스 검사를 수행할 것을 안내합니다.
