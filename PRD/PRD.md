# 제품 요구사항 정의서(PRD) — Figma to Code

## 0. 디자인 원본 정보
- Figma URL: https://www.figma.com/design/r4GMpAA7dQrAadLlmcQVGn/%EC%8B%AC%EB%8B%A4%EC%9D%80-%EC%9D%B4%EB%A0%A5%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=7006-1284&t=2Jubps68vQZCyNqS-4
- 출처 기준: Figma 연동 데이터 (Source of Truth)
- 에셋 및 PRD 저장 위치: PRD/ (PRD.md 및 PRD/assets/)
- 구현 목표: 제공된 디자인과 100% 시각적·구조적 동일 구현

## 1. 서비스 개요 (디자인 기반 추출)
- 서비스명: 심다은 개인 포트폴리오 (Daeun Sim Portfolio)
- 목적 [디자인 기반 추정]: 디자이너 겸 프론트엔드 개발자 심다은의 이력, 프로젝트 실적(IKEA 리디자인, 금연캠페인 영상, 웹 개발 아카이브 등) 및 기술 역량을 효과적으로 전달하고 채용/외주 프로젝트 문의를 유도하기 위함.
- 대상 사용자 [디자인 기반 추정]: 채용 담당자, 클라이언트, IT 프로젝트 에이전시, 개발 파트너.
- 핵심 사용자 시나리오:
  1. 메인 히어로 영역에서 메인 타이틀, 소개 문구 및 기술 스택 태그 확인.
  2. About Me 섹션에서 인적사항, 주요 이력, 성과 수치 지표 확인.
  3. Works 섹션에서 대표 프로젝트(IKEA 웹사이트, 금연캠페인 영상, 웹 개발 아카이브) 카드 및 관련 링크 탐색.
  4. How I Work 섹션에서 핵심 작업 역량 및 디테일 중심 철학 확인.
  5. Contact & Footer 섹션에서 문의 정보 확인 및 소셜 네트워크 방문.

## 2. 구현 방식 및 기술 환경
- 구현 방식: SPA (Single Page Application)
- 프론트엔드: Vite + React 19 (JavaScript 전용, `.jsx`, `.js` 확장자만 사용)
- 스타일링: Tailwind CSS v4 (`src/index.css` 내 `@import "tailwindcss";` 및 `@theme` 디렉티브 활용)
- 라이브러리: 미사용 (기본 CSS 및 React Hook/State 활용)
- 데이터 저장: 정적 상수 모듈 (`src/data/portfolioData.js` 파일에서 관리)
- 배포 환경: Vercel (Vite + React 앱 최적화 배포)

## 3. 디자인 시스템 및 토큰 명세
- Color Tokens:
  - `--color-bg-primary`: `#FFFFFF` [디자인에서 확인]
  - `--color-bg-secondary`: `#FAF7F6` [디자인에서 확인]
  - `--color-bg-dark`: `#161616` [디자인에서 확인]
  - `--color-accent-purple`: `#9F8BE7` [디자인에서 확인]
  - `--color-accent-lime`: `#DDF160` [디자인에서 확인]
  - `--color-text-main`: `#161616` [디자인에서 확인]
  - `--color-text-sub`: `#303030` / `#404040` / `#585858` [디자인에서 확인]
  - `--color-text-muted`: `#B2AEAD` [디자인에서 확인]
- Typography Tokens:
  - Font Family: `Funnel Display`, `Pretendard`, sans-serif [디자인에서 확인]
  - Display Heavy: 120px / Line Height: 144px (또는 132px, 88px)
  - Title XL: 70px / Line Height: 77px
  - Title Large: 44px / Line Height: 52px
  - Title Medium: 34px / 30px / 28px
  - Body Text: 22px / 18px / 16px / 14px / 12px
- Spacing & Radius Tokens:
  - Max Width: 1020px / 1440px
  - Padding & Gap: 8px, 10px, 12px, 22px, 80px
- Asset Handling: `PRD/assets/` 하위 SVG/PNG 에셋 관리

## 4. 화면 및 기능 명세 (Screen & Feature Specification)
- 화면 목록: 단일 포트폴리오 메인 페이지 (Node ID: 7006:1284)
- 화면별 UI 요소 & 기능:
  - Header: "Daeun Sim" 로고, 메뉴 링크 (Home, About me, Works, Contact), Contact me 액션 버튼
  - Hero: 메인 서체 타이틀 ("Design and Coding", "디자인 하고, 코드로 만듭니다..."), 주요 기술 태그 피크
  - About Me: 인적사항(심다은, 1994.12.15, 010-7272-6639, 서울시 중구 동호로, dbd01350@gmail.com), 경력 이력, 주요 수치 카운팅 카드 (3+ Completed Project, 20+ Pages built, 12+ Creative Tools, 7+ AI Tools)
  - Works: 
    1. IKEA Website 반응형 웹페이지 리디자인 (WEBSITE, GITHUB, 리디자인 기획안)
    2. 보건복지부 금연캠페인 영상 AI-powered (VIDEO, 영상기획서, 스토리보드)
    3. 웹 개발 아카이브 프론트엔드 도구 학습 아카이브 (WEBSITE, GITHUB)
  - How I Work: 디테일 중심 핵심 역량 카드 (Detail-Oriented, Trend-Driven, Tech-Savvy, End-to-End, Creative minds)
  - Contact & Footer: 프로젝트 문의 헤드라인, 연락처 정보, 소셜 메디아/커뮤니티 링크 (Instagram, Github, Notion, Figma Community)
- 인터랙션 명세: Hover 효과, 메뉴 클릭 시 섹션 간 스무스 스크롤 이동
- 예외/상태 처리: Loading 스켈레톤 UI 제공

## 5. 비기능 요구사항
- 반응형 브레이크포인트: Desktop (1440px+), Tablet (768px~1023px), Mobile (~767px)
- 웹 접근성 및 성능 기준: 시맨틱 HTML5 태그, aria-label 속성 준수, Lighthouse 90+ 점수 목표

## 6. AI 실행 작업 순서 및 단계별 완료 기준 (Task Breakdown)
- 1단계: 프로젝트 기본 폴더 구조 및 필수 설정 파일 생성 (완료 기준: Vite + React 19 + Tailwind v4 기본 세팅)
- 2단계: 공통 UI 컴포넌트 마크업/개발 (완료 기준: Header, Footer, Button, Card 등 컴포넌트 개발)
- 3단계: 화면별 레이아웃 및 디자인 피팅 구현 (완료 기준: Figma 시안과 100% 동일 시각 피팅)
- 4단계: 인터랙션 및 예외 상태 처리 (완료 기준: 네비게이션 스크롤, 로딩 스켈레톤 UI 적용)
- 5단계: Viewport별 시각적 검수 및 픽셀 튜닝 (완료 기준: 반응형 테스트 및 final QA 통과)

## 7. 절대 규칙 및 개발 진행 규칙
- [저장] 모든 에셋과 PRD.md는 PRD/ 폴더에 저장
- [진행] "다음 단계 진행" 지시가 있을 때만 단계별 순차 구현
- [공통] Figma 원본 및 PRD에 없는 요소/기능/텍스트/라이브러리 임의 추가 금지
- [공통] 하드코딩 수치 사용 금지 (토큰 필수 적용)
- [공통] 충돌 또는 누락 발생 시 즉시 사유를 명시하고 사용자에게 알림
- [SPA] TypeScript(.ts, .tsx, tsconfig) 생성 금지, tailwind.config.js 생성 금지

## 8. 시각적 완료 기준 (Visual Quality Gate)
- [x] Figma 원본 시안 및 PRD.md 기반 구현 화면의 동일 Viewport 시각적 일치 100%
- [x] 모든 폰트, 색상, 간격, 라운딩의 토큰 매핑 완료
- [x] 프로토타입 인터랙션 및 반응형 레이아웃 정상 동작
