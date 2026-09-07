---
name: sync-tokens
description: 코드에 남아있는 하드코딩 수치를 탐지하여 디자인 토큰 파일(src/index.css)에 안전하게 등록합니다.
disable-model-invocation: true
---

# /sync-tokens

프로젝트 전체 코드의 하드코딩 수치(hex, arbitrary class 등)를 탐지하여 `src/index.css`의 `@theme` 토큰으로 추가하고 정돈합니다.

## 실행 절차

1. **서브 에이전트 호출**:
   - `token-guardian` 서브 에이전트를 호출하여 프로젝트 내 하드코딩 라인을 스캔하고 `src/index.css` 토큰 선언부에 안전하게 동기화합니다.

2. **교체 목록 제시**:
   - 일반 코드 파일 중 토큰 치환이 필요한 파일, 라인 번호, 추천 토큰명 목록을 사용자에게 리포트로 제시합니다.
