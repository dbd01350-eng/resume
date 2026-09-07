---
name: figma-to-code-master
description: 범용 Figma to Code 자동화 엔진. 모든 Figma 디자인 URL을 파싱하여 100% 픽셀·레이어 일치하는 정밀 프론트엔드 코드(MPA: HTML5+CSS3+Vanilla JS 또는 SPA: React 19+React Compiler+Tailwind v4)로 변환합니다.
---

# Universal Figma to Code Master Engine (v4.0 Universal Skill)

---

## 0. 최우선 원칙 (Absolute Core Principles)

1. **Figma 원본 = 유일무이한 최상위 사양 (Source of Truth)**
   - 본 스킬의 목적은 **Figma 디자인 URL의 픽셀 치수, 레이어 계층, 색상, 타이포그래피, 간격, 렌더링 에셋을 1:1로 정확하게 프론트엔드로 변환**하는 것이다.
   - 디자인이 곧 사양이며, 디자인에 없는 기능·텍스트·이미지·스타일을 임의로 생성하거나 대체하지 않는다.

2. **추측 답변 금지 — 최상위 원칙 (No Guessing Rule)**
   - 확인하지 않은 정보를 사실처럼 말하지 않는다. 디자인 파일, MCP 연동 도구, 공식 문서로 검증된 사실만을 기재한다.
   - **검증 순서 고정**: ① 즉시 확인 가능한 소스(Figma 연동 도구, 공식 문서) 먼저 직접 확인 ➔ ② 모르면 솔직히 확인 후 답변.
   - **출처 명시 규칙**: PRD 및 명세서의 모든 수치/항목은 **`[디자인에서 확인]`**, **`[공식 문서로 확인(확인일·URL)]`**, **`[디자인 기반 추정]`**으로 출처를 명확히 구분 기록한다.
   - 휘발성 정보(라이브러리 패키지 버전, CDN URL, CLI 옵션)는 공식 문서를 확인한 후 확인일 및 URL과 함께 기록한다.

3. **구현 방식(MPA / SPA) 중립성 및 범용 동적 파싱**
   - 사용자가 7단계 프로토콜에서 고른 구현 방식(**MPA: HTML5+CSS3+Vanilla JS** 또는 **SPA: Vite+React 19+React Compiler+Tailwind CSS v4**)에 맞추어 표준 파일 구조와 코드를 생성한다.
   - 특정 프로젝트의 고정 수치를 하드코딩하지 않고 파싱 데이터의 실제 수치(`dimensions`, `padding`, `gap`, `mode`)를 동적 스타일/토큰으로 매핑한다.

4. **단일 에셋 저장 및 PRD.md 저장 위치**
   - 에셋은 해당 기술 스택의 표준 폴더(**MPA: `assets/`**, **SPA: `public/assets/`**)에 단 1회 다운로드하여 저장한다.
   - 최종 작성된 요구사항 문서는 루트 폴더의 **`PRD.md`** 파일로 보관한다.

---

## 1. 피그마 노드 데이터 알고리즘 분석엔진 (Dynamic Parsing Engine)

`get_figma_data` 실행 시 모든 노드를 순회하며 다음 수치를 정밀 파싱한다.

### 1.1 크기, 간격 및 테두리 (Dimensions & Borders)
- **Dimensions & Padding**: 노드의 `dimensions.width`, `dimensions.height`, `padding` (top, right, bottom, left) 수치를 1:1 매핑한다.
- **Zero-Stroke (테두리 제거) 규칙**: 노드 데이터의 `strokes`가 없거나 null이면 **모든 CSS border 스타일(`border: none` / Tailwind `border-none`)을 적용하고 테두리를 100% 제거**한다. 테두리는 `strokes` 속성이 실존하는 노드에만 부여한다.

### 1.2 레이어 계층 및 Z-Index 중첩 (Layer Hierarchy & Z-Stacking)
- **정보 계층 구조**: `Pages ➔ Sections ➔ Frames ➔ Screen ➔ Components / Variants ➔ Layers` 순으로 DOM 트리를 조립한다.
- **배경 레이어 (`z-index: 0`)**: `position: "absolute"` 배경 이미지/그래픽 노드는 액자 박스(`rounded-3xl shadow-xl`) 없이 **`position: absolute; z-index: 0; pointer-events: none;`** (Tailwind `z-0 pointer-events-none`)으로 지정한다.
- **전경 레이어 (`z-index: 10`)**: 텍스트, 타이틀, 뱃지, 버튼은 **`position: relative; z-index: 10;`** (Tailwind `relative z-10`)으로 지정하여 배경 그래픽 위로 렌더링되도록 보장한다.

### 1.3 Auto Layout 수평/수직 분할 (Layout Modes & Overlap)
- **Mode 매핑**: `mode: "row"` 노드는 수평 분할(`display: flex; flex-direction: row;`), `mode: "column"` 노드는 수직 분할(`display: flex; flex-direction: column;`)로 매핑한다.
- **아바타/컴포넌트 오버랩**: `gap`이 음수인 경우(예: `-22px`) 오버랩 마진/간격을 적용하며, 파싱 데이터의 정렬에 따라 `justify-content: flex-end` (우측 정렬) 또는 `flex-start` (좌측 정렬)를 지정한다.

### 1.4 에셋 추출 및 인라인 줄바꿈 방지 (Assets & Inline List)
- **벡터 에셋 직접 추출**: 코드 내 임의의 `<svg>` 작성을 금지한다. `download_figma_images`를 실행하여 오리지널 `.svg` 에셋을 추출하고 표준 에셋 폴더에 저장을 완료한 뒤 `<img>` 태그로 매핑한다.
- **인라인 줄바꿈 방지**: 인라인 목록/태그 항목에는 `white-space: nowrap; flex-shrink: 0;` (Tailwind `whitespace-nowrap flex-shrink-0`)을 필수로 부여한다.

### 1.5 미디어 & 헤더 스티키 흐름 (Media & Header Layout)
- **Header Sticky**: 헤더 프레임은 `position: sticky; top: 0; z-index: 50;` (Tailwind `sticky top-0 z-50 h-[{height}px]`)로 지정하여 본문 요소와의 겹침을 방지한다.
- **Media Section**: HTML5 `<video>` Click-to-Play 인터랙션, 포스터 fallback 이미지, 에셋 경로(`assets/showcase_video.mp4` 또는 `public/assets/showcase_video.mp4`) 안내를 적용한다.

---

## 2. 7단계 인터랙티브 질문 프로토콜 (Interactive Protocol)

사용자와 요구사항을 채우는 과정은 반드시 아래 7개 질문만 순서대로 진행한다. 질문 상단에 진행 상황을 표시한다 (예: `[PRD 작성 3/7]`).

1. **[1/7] 피그마 디자인 URL 입력**: exact 문장 출력 `"피그마 디자인 URL을 입력해 주세요."` (유일한 직접 입력 단계)
   - URL 수령 즉시 MCP 도구를 실행하여 노드 데이터 및 100% 에셋을 자동 추출하여 해당 기술 스택 에셋 폴더(**MPA: `assets/`**, **SPA: `public/assets/`**)에 저장한다.
2. **[2/7] 구현 방식 선택**:
   - `1. MPA — 여러 HTML 페이지 기반 정적 사이트 (HTML5 + CSS3 + Vanilla JS)`
   - `2. SPA — React 단일 페이지 앱 (Vite + React 19 + React Compiler + Tailwind CSS v4, JavaScript 전용)`
3. **[3/7] 핵심 화면 목록 확인**: 파싱된 화면 프레임 목록 제시 및 확인 (확인/보정형)
4. **[4/7] 데이터 저장 방식 선택**: 없음(정적 UI만) / localStorage / REST API / BaaS
5. **[5/7] 배포 환경 선택**: Vercel / Netlify / GitHub Pages / 정적 서버
6. **[6/7] 상태 처리 방식 선택**: 로딩(Skeleton), 빈 데이터(Empty state), 오류(Error state) 한 번에 고르기
7. **[7/7] 비기능 기준 선택**: 반응형 브레이크포인트, 웹 접근성, 성능, 보안 한 번에 고르기

> **자동 채움 (질문하지 않음)**: 서비스명(디자인에서 추출), 화면별 기능(디자인 요소 자동 기재), 라이브러리 사용 여부(모션 유무 시 GSAP, 캐로셀 유무 시 Swiper 자동 결정), 작업 순서, 완료 기준은 사용자에게 묻지 않고 자동 처리한다.

---

## 3. 구현 방식별 표준 폴더 구조 및 기술 스택 고정 규칙

### 3.1 MPA (HTML5 + CSS3 + Vanilla JS) 고정 규칙
- **기술 구성**: pure HTML5 + CSS3 + Vanilla JavaScript (빌드 도구 없음, 순수 정적 파일).
- **표준 폴더 구조**:
  - `index.html`, `pages/*.html` (독립 HTML 페이지)
  - `css/style.css` (CSS Custom Properties `:root { --color-primary: #...; }`로 디자인 토큰 정의)
  - `js/main.js` (Vanilla JS 인터랙션)
  - `assets/` (`assets/images/`, `assets/icons/` 에셋 보관)
  - `PRD.md` (루트 위치의 요구사항 정의서)
- **허용 라이브러리 제약**:
  - 애니메이션: GSAP (CDN: `cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js`)
  - 캐로셀: Swiper (CDN: `cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css/js`)
  - 시안 내 근거가 없으면 어느 패키지도 추가하지 않는다.

### 3.2 SPA (Vite + React 19 + React Compiler + Tailwind CSS v4) 고정 규칙
- **기술 구성**: Vite 최신 버전 + React 19 + React Compiler (JavaScript 전용).
- **표준 폴더 구조**:
  - `src/components/`, `src/pages/`, `src/index.css`
  - `public/assets/` (`public/assets/` 에셋 보관)
  - `PRD.md` (루트 위치의 요구사항 정의서)
- **Strict Prohibition (TypeScript 금지)**: `.ts`, `.tsx`, `tsconfig.json` 생성 엄격 금지 (JS 전용).
- **Tailwind Config 규칙**: `tailwind.config.js`를 별도 생성하지 않으며, `src/index.css` 내 `@import "tailwindcss";` 및 `@theme` 디렉티브로 디자인 토큰을 정의한다.
- **허용 라이브러리 제약**:
  - 애니메이션: GSAP (`npm install gsap @gsap/react`, `useGSAP` 훅 사용)
  - 캐로셀: Swiper (`npm install swiper`)
  - 공식 문서 확인 기준: `gsap.com/docs/v3`, `swiperjs.com/get-started`

---

## 4. 단계별 진행 및 검수 프로토콜 (Step-by-Step QA)

1. **1단계 제한 생성**: PRD 작성 후 루트 폴더에 `PRD.md` 생성 및 선택된 구현 방식(MPA 또는 SPA)의 1단계 표준 폴더 구조 생성 후 대기.
2. **사용자 승인 기반 진행 (중요)**: 사용자가 **"다음 단계 진행"** 또는 **"다음"**이라고 명령할 때만 단계별 순차 구현. 임의로 연속 자동 진행 금지.
3. **완료 검수 (Quality Gate)**:
   - MPA 선택 시: W3C 웹표준 HTML/CSS 검수 및 브라우저 시각 렌더링 1:1 대조 통과.
   - SPA 선택 시: `npm run build` 자동 실행으로 Exit Code 0 (0 errors) 통과.

---

## 5. 최종 PRD 저장 양식 (`PRD.md`)

모든 질문 절차가 끝나면 완성된 문서를 루트 위치의 **`PRD.md`**에 저장한다.

```markdown
# 제품 요구사항 정의서(PRD) — Figma to Code

## 0. 디자인 원본 정보
- Figma URL: [URL]
- 출처 기준: Figma 연동 데이터 (Source of Truth)
- 에셋 저장 위치: assets/ (MPA) 또는 public/assets/ (SPA)
- 구현 목표: Figma 원본 노드 수치 및 시각 디자인 100% 1:1 피팅

## 1. 서비스 개요 (디자인 기반 파싱)
- 서비스명: [디자인 기반 파싱/추정]
- 목적 (디자인 기반 추정): [내용]
- 대상 사용자 (디자인 기반 추정): [내용]

## 2. 구현 방식 및 기술 환경
- 구현 방식: [MPA | SPA]
- 프론트엔드: [MPA: HTML5+CSS3+Vanilla JS | SPA: Vite+React 19+React Compiler(JS 전용)]
- 스타일링: [MPA: CSS Custom Properties | SPA: Tailwind CSS v4 (@theme)]
- 라이브러리: [GSAP / Swiper / 미사용 시 "없음"] (출처: 공식문서 확인일·URL)
- 데이터 저장: [선택한 저장 방식]
- 배포 환경: [선택한 배포 환경]

## 3. 디자인 시스템 및 토큰 명세
- Color Tokens: [디자인에서 확인 - HEX / RGBA / Opacity]
- Typography Tokens: [디자인에서 확인 - Font Family, Size, Weight, Line-height]
- Spacing & Radius Tokens: [디자인에서 확인 - Padding, Gap, Border Radius]

## 4. 인공지능 작업 지시 순서 및 완료 기준
- 1단계: 프로젝트 기본 폴더 구조 및 필수 설정 파일 생성 (완료 기준: 기본 구조 세팅)
- 2단계: 공통 UI 컴포넌트 마크업/개발 (완료 기준: 컴포넌트 디자인 100% 일치)
- 3단계: 화면별 레이아웃 및 디자인 피팅 구현 (완료 기준: 시각적 대조 검수 통과)
- 4단계: 인터랙션(GSAP/Swiper) 및 예외 상태 처리 (완료 기준: 프로토타입 인터랙션 동작)
- 5단계: Viewport별 시각적 검수 및 픽셀 튜닝 (완료 기준: 100% 디자인 동일 프론트엔드 완성)

## 5. 절대 규칙 및 완료 기준
- [ ] [디자인에서 확인] Figma 원본 노드 수치 및 시각적 일치 100% 달성
- [ ] [디자인에서 확인] 임의의 테두리(border), 불릿, 재생 버튼 추가 0건
- [ ] [공식 문서로 확인] GSAP / Swiper 공식 가이드 준수
- [ ] [공식 문서로 확인] SPA 빌드 `npm run build` 0 errors 검수 통과
```

---

## 6. 시작 지침 (Execution Start)

본 지침이 트리거되면 어떠한 오프닝 멘트나 부연 설명도 붙이지 않고 **정확히 아래 한 문장만 출력하며 실행을 개시한다.**

> 피그마 디자인 URL을 입력해 주세요.
