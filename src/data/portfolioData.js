const portfolioData = {
  profile: {
    name: "심다은",
    nameEn: "Daeun Sim",
    birth: "1994년 12월 15일 ( 만 31세 )",
    phone: "010-7272-6639",
    address: "서울시 중구 동호로 173",
    email: "dbd01350@gmail.com",
  },
  hero: {
    badge: "예쁘게, 될 때까지",
    title: "Design and Coding",
    subtext: "디자인 하고, 코드로 만듭니다.\n가끔은 둘 다 하다가 새벽을 만납니다.\n결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.",
    tags: ["Git", "VS Code", "HTML", "CSS", "JavaScript", "React", "Python", "Figma", "Illustrator", "After Effects", "Premiere Pro"],
  },
  stats: [
    {
      value: "3+",
      label: "Completed Project",
      sublabel: "Project list",
      highlight: true,
    },
    {
      value: "20+",
      label: "Pages built",
      sublabel: "Team Project / IKEA website redesigned",
      highlight: false,
    },
    {
      value: "12+",
      label: "Creative & Development Tools",
      sublabel: "Git / VS Code / HTML / CSS / JavaScript / React / Python / Figma / Notion / Illustrator / After Effects / Premiere Pro",
      highlight: false,
    },
    {
      value: "7+",
      label: "AI Tools",
      sublabel: "Claude / AGY / GPT / Figma agent / VS Code Chat / SUNO / FLOW",
      highlight: false,
    },
  ],
  experience: [
    { period: "2013.03 ~ 2021.02", title: "서울시립대학교 토목공학과 졸업" },
    { period: "2020.10 ~ 2021.12", title: "온이앤지 (상하수도 설계회사) 근무" },
    { period: "2021.10 ~ 2025.11", title: "브랜드 하루필름 이태원점 대표" },
    { period: "2022.04 ~ 2025.06", title: "브랜드 그믐달스튜디오 이태원점 대표" },
    { period: "2022.12 ~ 2023.04", title: "브랜드 하루필름 본사 근무" },
    { period: "2023.06 ~ 2025.06", title: "자개장롱 대표" },
  ],
  projects: [
    {
      id: "ikea-redesign",
      title: "IKEA Website 리디자인",
      previewImage: "/assets/projects/project_ikea_full_preview.png",
      fallbackImage: "/assets/projects/project_ikea_fallback.png",
      type: "WEBSITE",
      period: "2026.07.21 ~ 2026.08.05",
      team: "Team Synergos (5인 팀 프로젝트)",
      role: "UI/UX 디자인 시스템 구축 & 기획 리서치",
      contribution: {
        rate: "35%",
        roleTag: "디자인 시스템 주도",
        breakdown: "디자인 시스템 정의 40% | 기획 및 여정지도 35% | 프로토타입 30%",
      },
      caseStudy: {
        summary: "글로벌 홈퍼니싱 브랜드 IKEA의 모바일·태블릿 접근성을 극대화하기 위해 진행된 UI/UX 리디자인 프로젝트입니다. 컬러, 타이포그래피, 컴포넌트 가이드를 포괄하는 디자인 시스템을 구축하고 와이어프레임 5종 및 하이파이 프로토타입을 제작했습니다.",
        keyContributions: [
          {
            title: "디자인 시스템 가이드 정의",
            detail: "컬러 팔레트, 타이포그래피 계층, 모듈형 UI 컴포넌트 가이드를 수립하여 팀 전체의 디자인 일관성을 확보했습니다."
          },
          {
            title: "와이어프레임 & 프로토타입 제작",
            detail: "핵심 5개 화면의 와이어프레임과 하이파이 시안을 제작하고, 실제 사용자 인터랙션 흐름을 검증하기 위한 Figma 프로토타입을 연결했습니다."
          },
          {
            title: "사용자 여정지도(Journey Map) & 기획",
            detail: "자사 및 타사 벤치마킹 분석을 바탕으로 페르소나 및 사용자 여정지도를 도출하고 리디자인 사이트맵과 콘텐츠 목록을 체계화했습니다."
          }
        ],
        troubleshooting: {
          problem: "방대한 IKEA 카테고리와 제품 정보를 모바일 뷰포트에서 직관적으로 탐색하기 어려운 문제",
          solution: "Figma 오토레이아웃 기반 모듈형 컴포넌트 시스템을 구축하여 화면별 일관성을 확보하고, 네비게이션 동선을 직관적으로 단순화함"
        },
        timeline: [
          { phase: "기획/리서치 (07.21 ~ 07.28)", detail: "자사·타사 벤치마킹, 유저 시나리오, 사용자 여정지도(Journey Map), 사이트맵 설계" },
          { phase: "디자인 시스템 & 와이어프레임 (07.31 ~ 08.03)", detail: "디자인 시스템 정의, 와이어프레임 5종 제작" },
          { phase: "하이파이 시안 및 프로토타입 (08.05)", detail: "하이파이 시안 4종 완성 및 인터랙션 프로토타입 연결" }
        ]
      },
      links: [
        { label: "리디자인 기획안", url: "#" },
        { label: "Figma", url: "https://www.figma.com/design/SDTgcPmNqolK9N3QBKHwAY/3.-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=533-3396&t=dbcQAySd7xC5k2tI-1" }, // token-exempt: external project link
      ],
      tags: ["Team Synergos (5인)", "Web design", "Figma", "Design System", "Photoshop", "Illustrator"],
    },
    {
      id: "ikea-dev",
      title: "IKEA 반응형 웹사이트 UI/UX 개발",
      previewImage: "/assets/projects/project_ikea_full_preview2.png",
      fallbackImage: "/assets/projects/project_ikea_fallback.png",
      type: "WEBSITE",
      period: "2026.07.21 ~ 2026.08.13",
      team: "Team Synergos (5인 팀 프로젝트)",
      role: "AI 워크플로우 자동화 & 프론트엔드 퍼블리싱",
      contribution: {
        rate: "35%",
        roleTag: "AI 파이프라인 주도",
        breakdown: "AI 파이프라인 단독 구축 45% | 주요 화면 반응형 구현 30% | 통합/배포 30%",
      },
      caseStudy: {
        summary: "IKEA 리디자인 시안을 바탕으로 실제 동작하는 반응형 웹을 구현한 프로젝트입니다. Claude MCP를 활용해 Figma 회의 보드와 Notion 간트차트를 자동 동기화하는 파이프라인을 단독 구축하고, 홈 및 주요 화면 퍼블리싱과 반응형 통합을 주도했습니다.",
        keyContributions: [
          {
            title: "Claude + MCP 자동화 파이프라인 단독 구축",
            detail: "Claude와 MCP를 연결하여 Figma 회의 보드의 결정 사항이 Notion 간트차트 일정표로 자동 업데이트되는 워크플로우를 팀 내 유일하게 직접 설계·적용했습니다."
          },
          {
            title: "홈 및 주요 페이지 반응형 퍼블리싱",
            detail: "AGY 코드 생성과 수기 리팩토링을 병행하여 데스크톱·태블릿·모바일 해상도별 반응형 레이아웃을 구현했습니다."
          },
          {
            title: "반응형 수정, 페이지 통합 및 배포",
            detail: "팀원 간 뷰포트 레이아웃 충돌을 해결하고 전체 페이지를 단일 코드베이스로 통합한 후 GitHub Pages로 성공적으로 배포했습니다."
          }
        ],
        troubleshooting: {
          problem: "5인 다직군 협업 과정에서 피그마 디자인 변경 사항과 개발 일정 동기화가 지연되고, 모바일/태블릿 등 다양한 뷰포트에서 레이아웃 일관성이 깨지는 문제",
          solution: "피그마-노션 자동화 파이프라인을 도입해 회의 싱크 비용을 대폭 단축하고, 공통 레이아웃 컴포넌트 표준화로 반응형 통합 충돌을 최소화함"
        },
        timeline: [
          { phase: "환경 세팅 & 자동화 구축 (07.21 ~ 07.22)", detail: "Claude 설치, MCP 연결, Figma-Notion 자동화 스케줄 제작" },
          { phase: "코드 생성 & 퍼블리싱 (08.03 ~ 08.06)", detail: "AGY 기반 코드 생성, 홈 및 주요 페이지 구현" },
          { phase: "반응형 수정 & 페이지 통합 (08.10 ~ 08.11)", detail: "반응형 뷰포트 대응, GitHub Pages 배포" },
          { phase: "QA 및 최종 발표 (08.11 ~ 08.13)", detail: "Playwright·Lighthouse 검사 지원, 발표 자료 작성 및 리허설" }
        ]
      },
      links: [
        { label: "WEBSITE", url: "https://heebon00.github.io/Team_Synergos_esg/index.html" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/heebon00/Team_Synergos_esg.git" }, // token-exempt: external project link
        { label: "개발 기획안", url: "#" },
      ],
      tags: ["Team Synergos (5인)", "UI/UX", "Frontend", "Claude MCP", "AGY", "Responsive Web"],
    },
    {
      id: "wedding-ver1",
      title: "모바일 청첩장 Ver.1 (다이어리 & 스티커 감성 테마)",
      previewImage: "/assets/projects/wedding_ver1_preview.png",
      fallbackImage: "/assets/projects/wedding_ver1_fallback.svg",
      type: "MOBILE WEB",
      period: "2026.09.30 ~ 2026.10.07",
      team: "",
      role: "UI/UX 기획, 디자인 및 반응형 퍼블리싱",
      contribution: {
        rate: "100%",
        roleTag: "개인 프로젝트",
        breakdown: "UI/UX 디자인 100% | 인터랙티브 퍼블리싱 100%",
      },
      caseStudy: {
        summary: "아날로그 다이어리와 스티커 감성을 결합한 모바일 청첩장입니다. Figma를 활용해 디자인 시스템과 그래픽 에셋을 구축하고, 순수 HTML5/CSS3/JavaScript를 이용해 모바일 터치 친화적 반응형 웹으로 구현했습니다.",
        keyContributions: [
          {
            title: "아날로그 감성 UI/UX 디자인",
            detail: "다이어리 속지 질감, 폴라로이드 사진 프레임, 스티커 그래픽 에셋을 직접 디자인하여 따뜻한 아날로그 감성을 연출했습니다."
          },
          {
            title: "터치 친화적 모바일 인터랙션",
            detail: "모바일 뷰포트에 최적화된 터치 슬라이더 갤러리와 인터랙티브 스티커 회전 애니메이션을 순수 JavaScript로 구현했습니다."
          },
          {
            title: "카카오톡 링크 공유 & 지도 안내",
            detail: "카카오톡 공유 API를 연동해 공유 시 맞춤 썸네일과 메시지를 띄우고, 오시는 길 지도 바로가기를 연결했습니다."
          }
        ],
        troubleshooting: {
          problem: "모바일 브라우저 주소창 표시에 따라 100vh 뷰포트 높이가 달라져 하단 주요 버튼이 가려지는 문제",
          solution: "CSS dvh(Dynamic Viewport Height) 단위와 JS 기반 실시간 뷰포트 높이 리사이즈 핸들러를 적용해 크로스 브라우징 레이아웃 안정화"
        },
        timeline: [
          { phase: "콘셉트 기획", detail: "다이어리 테마 기획 및 화면별 구성 요소 와이어프레임 설계" },
          { phase: "디자인 & 에셋", detail: "Figma 기반 그래픽 디자인, 스티커 에셋 및 아이콘 제작" },
          { phase: "퍼블리싱 & QA", detail: "반응형 레이아웃 구현, 모바일 사파리/크롬 크로스브라우징 검증" }
        ]
      },
      links: [
        { label: "WEBSITE (DEMO)", url: "https://dbd01350-eng.github.io/mobilewedding1/demo.html" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/mobilewedding1.git" }, // token-exempt: external project link
        { label: "Figma", url: "https://www.figma.com/design/YH6L68jr8ytbaKZFjzvv86/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=3-611&t=KKmGV5xJ7mkwaTbI-4" }, // token-exempt: external project link
      ],
      tags: ["Mobile Web", "Figma", "HTML5", "CSS3", "JavaScript", "Responsive"],
    },
    {
      id: "wedding-ver2",
      title: "모바일 청첩장 Ver.2 (내추럴 포레스트 그린 모던 테마)",
      previewImage: "/assets/projects/wedding_ver2_preview.png",
      fallbackImage: "/assets/projects/wedding_ver2_fallback.png",
      type: "MOBILE WEB",
      period: "2026.10.07 ~ 2026.10.08",
      team: "",
      role: "기획, UI/UX 디자인, 서버리스 백엔드 연동 및 퍼블리싱",
      contribution: {
        rate: "100%",
        roleTag: "개인 프로젝트",
        breakdown: "UI 디자인 100% | 프론트엔드 100% | GAS 서버리스 연동 100%",
      },
      caseStudy: {
        summary: "내추럴 포레스트 그린 톤의 모던하고 차분한 모바일 청첩장입니다. 별도의 유료 서버 없이 Google Apps Script(GAS)를 활용해 Google Sheets와 실시간 양방향 연동되는 참석 여부(RSVP) 및 방명록 시스템을 구현했습니다.",
        keyContributions: [
          {
            title: "서버리스 실시간 RSVP & 방명록",
            detail: "Google Apps Script Webhook API를 구축하여 하객의 참석 여부 및 축하 메시지가 구글 시트에 실시간 기록되고 화면에 즉시 렌더링되도록 구현했습니다."
          },
          {
            title: "정갈한 모던 타이포그래피 UI",
            detail: "포레스트 그린 컬러 팔레트와 세리프/산세리프의 조화로운 타이포그래피 계층을 설계하여 가독성을 극대화했습니다."
          },
          {
            title: "외부 지도 API & 내비게이션 딥링크",
            detail: "카카오맵/티맵/네이버지도 길안내 딥링크를 연동하여 하객이 원클릭으로 내비게이션 앱을 실행할 수 있도록 지원했습니다."
          }
        ],
        troubleshooting: {
          problem: "Google Apps Script Web App 호출 시 브라우저 CORS 정책 제한 및 비동기 전송 지연 체감",
          solution: "no-cors 전송 핸들링과 낙관적 UI(Optimistic UI) 업데이트를 적용해 제출 버튼 클릭 즉시 등록 완료 피드백을 제공하도록 UX 개선"
        },
        timeline: [
          { phase: "기획 및 디자인", detail: "포레스트 그린 콘셉트 기획 및 Figma UI 컴포넌트 디자인" },
          { phase: "백엔드 연동", detail: "Google Apps Script 기반 RESTful API 구축 및 구글 시트 데이터베이스 설계" },
          { phase: "프론트 구현 & 배포", detail: "비동기 데이터 바인딩, 지도 API 연동 및 GitHub Pages 배포" }
        ]
      },
      links: [
        { label: "WEBSITE (DEMO)", url: "https://dbd01350-eng.github.io/mobilewedding2/demo.html" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/mobilewedding2.git" }, // token-exempt: external project link
      ],
      tags: ["Mobile Web", "UI/UX", "JavaScript", "GAS", "Google Sheets", "Serverless"],
    },
    {
      id: "wedding-ver3",
      title: "모바일 청첩장 Ver.3 (메이플스토리 루디브리엄 테마)",
      previewVideo: "/assets/projects/wedding_ver3_preview.mp4",
      previewImage: "/assets/projects/wedding_ver3_fallback.webp",
      fallbackImage: "/assets/projects/wedding_ver3_fallback.webp",
      type: "MOBILE WEB",
      period: "2026.10.08 ~ 2026.10.10",
      team: "",
      role: "기획, 픽셀아트 그래픽 연출, 오디오 제어 및 인터랙티브 개발",
      contribution: {
        rate: "100%",
        roleTag: "개인 프로젝트",
        breakdown: "콘셉트 기획 100% | 픽셀 그래픽 100% | 인터랙티브 개발 100%",
      },
      caseStudy: {
        summary: "메이플스토리 루디브리엄 테마를 모티브로 한 레트로 픽셀아트 인터랙티브 모바일 청첩장입니다. 레트로 도트 그래픽과 칩튠 BGM, 퀘스트 인터랙션을 결합해 게임 플레이를 연상시키는 독창적인 사용자 경험을 선사합니다.",
        keyContributions: [
          {
            title: "BGM 및 효과음 사운드 제어",
            detail: "배경음악(BGM) 재생/일시정지 토글과 퀘스트·포탈 게임 효과음 시스템을 구현했습니다.",
          },
          {
            title: "퀘스트형 RSVP 인터랙션",
            detail: "단순 폼 입력 대신 '퀘스트 수락' 형태의 게임적 요소를 접목하여 하객의 참여율과 몰입도를 대폭 높였습니다."
          },
          {
            title: "픽셀아트 맵 & 레트로 UI 연출",
            detail: "메이플스토리 루디브리엄 마을 테마를 충실히 구현한 레트로 픽셀아트 맵 레이아웃과 도트 그래픽 UI 에셋을 조화롭게 연출했습니다."
          }
        ],
        troubleshooting: {
          problem: "모바일 브라우저의 강력한 오디오 자동재생(Autoplay) 차단 정책으로 인해 첫 진입 시 음악이 재생되지 않는 문제",
          solution: "첫 화면 터치 시 자연스럽게 오디오가 활성화되도록 오버레이 인터랙션을 설계하여 UX 이탈 방지"
        },
        timeline: [
          { phase: "게임 콘셉트 설계", detail: "루디브리엄 테마 스토리텔링, 퀘스트 플로우 및 픽셀 리소스 기획" },
          { phase: "인터랙션 개발", detail: "CSS 애니메이션, BGM 오디오 컨트롤러 및 퀘스트 팝업 개발" },
          { phase: "데이터 연동 & 최적화", detail: "GAS 방명록 연동, 모바일 성능 최적화 및 배포" }
        ]
      },
      links: [
        { label: "WEBSITE (DEMO)", url: "https://dbd01350-eng.github.io/mobilewedding3/demo.html" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/mobilewedding3.git" }, // token-exempt: external project link
      ],
      tags: ["Responsive", "Mobile Web", "Interactive Map", "GAS"],
    },
    {
      id: "campaign",
      title: "보건복지부 금연캠페인 홍보영상",
      previewImage: "/assets/projects/project_campaign_full_preview.jpeg",
      fallbackImage: "/assets/projects/project_campaign_fallback.png",
      type: "VIDEO",
      period: "2026.06.24 ~ 2026.07.14",
      team: "",
      role: "영상 기획, AI 프롬프트 엔지니어링, 모션그래픽 및 후반 편집",
      contribution: {
        rate: "100%",
        roleTag: "개인 프로젝트",
        breakdown: "스토리보드 기획 100% | AI 프롬프트 엔지니어링 100% | 영상 편집 100%",
      },
      caseStudy: {
        summary: "생성형 AI 비디오 도구(Flow, AGY)와 영상 편집 툴(Premiere Pro, After Effects)을 융합하여 제작한 보건복지부 금연캠페인 공익 홍보영상입니다. 탄탄한 3단 구성 시나리오를 바탕으로 일관된 톤앤매너의 AI 영상 에셋을 생성하고 후반 편집을 진행했습니다.",
        keyContributions: [
          {
            title: "생성형 AI 영상 파이프라인 수립",
            detail: "Google Flow 및 이미지/비디오 생성 AI 프롬프트를 체계적으로 설계하여 실사 수준의 클립과 일관된 비주얼을 추출했습니다."
          },
          {
            title: "스토리보드 및 씬 연출 기획",
            detail: "도입(흡연의 유혹) - 갈등(건강과 일상의 변화) - 해결(금연 결단)로 이어지는 9개 씬의 기획서와 스토리보드를 직접 설계했습니다."
          },
          {
            title: "타이포 모션 & 사운드 디자인",
            detail: "After Effects를 활용한 키네틱 타이포그래피 모션과 Premiere Pro 컷 편집, 맞춤형 배경음악 및 효과음 믹싱으로 메시지 몰입도를 극대화했습니다."
          }
        ],
        troubleshooting: {
          problem: "AI 생성 영상 특유의 프레임 간 인물 얼굴 왜곡 및 조명/화각 불일치 현상",
          solution: "시드 번호 고정 및 조명/카메라 렌즈 프롬프트 표준화 템플릿을 적용하여 씬 간 연속성과 사실감을 확보"
        },
        timeline: [
          { phase: "시나리오 & 스토리보드", detail: "캠페인 목표 설정, 9개 씬 스토리보드 및 카피라이팅 작성" },
          { phase: "AI 에셋 생성", detail: "Flow/AGY 기반 프롬프트 생성 및 고품질 비디오 렌더링" },
          { phase: "후반 편집 & 마스터링", detail: "Premiere Pro 컷 편집, After Effects 모션그래픽, 사운드 믹싱" }
        ]
      },
      links: [
        { label: "VIDEO", url: "/assets/videos/no_smoking_video.mp4" },
        { label: "영상기획서", url: "#" },
        { label: "스토리보드", url: "#" },
      ],
      tags: ["Flow", "AGY", "Premiere Pro", "After Effects"],
    },
    {
      id: "archive",
      title: "웹 개발 학습 아카이브",
      previewImage: "/assets/projects/project_archive_preview.png",
      fallbackImage: "/assets/projects/project_archive_preview.png",
      type: "WEBSITE",
      period: "2026.05 ~ 2026.08",
      team: "",
      role: "프론트엔드 연구 및 실습 코드 아카이빙",
      contribution: {
        rate: "100%",
        roleTag: "학습 & 연구",
        breakdown: "학습 기록 및 실습 100% | UI 컴포넌트 구현 100%",
      },
      caseStudy: {
        summary: "웹 프론트엔드 기초부터 모던 React, 인터랙티브 UI 컴포넌트까지 AI 페어 프로그래밍(Claude, AGY)을 통해 실습하고 연구한 결과물을 체계적으로 기록한 개인 기술 아카이브입니다.",
        keyContributions: [
          {
            title: "주제별 모듈형 학습 구조화",
            detail: "HTML/CSS 반응형 기법, JavaScript ES6+, React Hooks 및 스타일링 기법별 실습 예제를 모듈형으로 체계화했습니다."
          },
          {
            title: "AI 협업 코딩 워크플로우 실증",
            detail: "Claude와 AGY를 페어 프로그래머로 활용하여 코드 생성, 리팩토링, 디자인 시스템 연계 기법을 실험하고 검증했습니다."
          },
          {
            title: "지속적 배포 및 문서화",
            detail: "GitHub Pages를 통해 학습한 결과물을 실시간 웹으로 배포하고 트러블슈팅 과정을 마크다운으로 문서화했습니다."
          }
        ],
        troubleshooting: {
          problem: "단순한 예제 복붙에 그치지 않고 본인의 문제 해결 역량으로 내재화해야 하는 과제",
          solution: "AI가 생성한 코드의 동작 원리를 라인별로 분석하고, 하드코딩 검사기 등 커스텀 훅을 만들어 직접 검증하는 학습 파이프라인 정립"
        },
        timeline: [
          { phase: "기초 문법 & 반응형 실습", detail: "HTML5/CSS3 레이아웃, 모던 JS 핵심 문법 아카이빙" },
          { phase: "React & 컴포넌트 연구", detail: "컴포넌트 라이프사이클, 상태 관리 및 디자인 토큰 실습" },
          { phase: "지속적 업데이트", detail: "신규 라이브러리 및 AI 하네스 툴 연계 실습 지속 확장" }
        ]
      },
      links: [
        { label: "WEBSITE", url: "https://dbd01350-eng.github.io/VScode_study/archive/" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/VScode_study.git" }, // token-exempt: external project link
      ],
      tags: ["React", "AGY", "Claude", "AI Pair Programming"],
    },
  ],
  values: [
    {
      id: "detail",
      title: "Detail-Oriented",
      description: "디테일에 집착합니다.\n픽셀 하나, 코드 한 줄까지 타협 없이 완성도 높은 결과물을 만들어냅니다.",
      icon: "/assets/icons/end_to_end_icon.png",
    },
    {
      id: "trend",
      title: "Trend-Driven",
      description: "트렌드를 읽고, 새로운 시각적 언어를 프로젝트에 녹여냅니다.\n늘 한 발 앞선 디자인을 지향합니다.",
      icon: "/assets/icons/trend_driven_icon.png",
    },
    {
      id: "tech",
      title: "Tech-Savvy",
      description: "인터랙션, 모션 디자인, 반응형 설계 등 기술적 깊이로 차별화된 사용자 경험을 설계합니다.",
      icon: "/assets/icons/tech_savvy_icon.png",
    },
    {
      id: "endtoend",
      title: "End-to-End",
      description: "기획부터 UX/UI 디자인, 프론트엔드 개발, 브랜딩까지\n프로젝트를 처음부터 끝까지 책임집니다.",
      icon: "/assets/icons/end_to_end_icon.png",
    },
  ],
  marqueeTexts: ["Desktop", "Mobile", "Vibe coding", "Design"],
};

export default portfolioData;
