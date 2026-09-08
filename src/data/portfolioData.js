const portfolioData = {
  profile: {
    name: '심다은',
    nameEn: 'Daeun Sim',
    birth: '1994년 12월 15일 ( 만 31세 )',
    phone: '010-7272-6639',
    address: '서울시 중구 동호로 173',
    email: 'dbd01350@gmail.com',
  },
  hero: {
    badge: '예쁘게, 될 때 까지',
    title: 'Design and Coding',
    subtext: '디자인 하고, 코드로 만듭니다.\n가끔은 둘 다 하다가 새벽을 만납니다.\n결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.',
    tags: [
      'Git', 'VS code', 'HTML', 'CSS', 'Javascript', 
      'React', 'Python', 'Figma', 'illustrator', 
      'after effect', 'primiere pro'
    ],
  },
  stats: [
    {
      value: '3+',
      label: 'Completed Project',
      sublabel: 'Project list',
      highlight: true
    },
    {
      value: '20+',
      label: 'Pages built',
      sublabel: 'Team Project / IKEA website redesigned',
      highlight: false
    },
    {
      value: '12+',
      label: 'Creative & Development Tools',
      sublabel: 'GIT / VS code / HTML / CSS / Javascript / React / Python / Figma / Notion / illustrator / after effect / primiere pro',
      highlight: false
    },
    {
      value: '7+',
      label: 'AI Tools',
      sublabel: 'Claude / AGY / GPT / Figma agent / VS code chat / SUNO / FLOW',
      highlight: false
    },
  ],
  experience: [
    { period: '2013.03 ~ 2021.02', title: '서울시립대학교 토목공학과 졸업' },
    { period: '2020.10 ~ 2021.12', title: '온이앤지 (상하수도 설계회사) 근무' },
    { period: '2021.10 ~ 2025.11', title: '브랜드 하루필름 이태원점 대표' },
    { period: '2022.04 ~ 2025.06', title: '브랜드 그믐달스튜디오 이태원점 대표' },
    { period: '2022.12 ~ 2023.04', title: '브랜드 하루필름 본사 근무' },
    { period: '2023.06 ~ 2025.06', title: '자개장롱 대표' },
  ],
  projects: [
    {
      id: "ikea-redesign",
      title: "IKEA Website 리디자인",
      previewImage: "/assets/project_ikea_full_preview.png",
      fallbackImage: "/assets/figma_8bed76a4.png",
      type: "WEBSITE",
      links: [
        { label: "리디자인 기획안", url: "#" },
        { label: "Figma", url: "https://www.figma.com/design/SDTgcPmNqolK9N3QBKHwAY/3.-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=533-3396&t=dbcQAySd7xC5k2tI-1" }, // token-exempt: external project link
      ],
      tags: ["Web design", "Figma", "Photoshop", "Illustrator"],
    },
    {
      id: "ikea-dev",
      title: "IKEA 반응형 웹사이트 UI/UX 개발",
      previewImage: "/assets/project_ikea_full_preview2.png",
      fallbackImage: "/assets/figma_8bed76a4.png",
      type: "WEBSITE",
      links: [
        { label: "WEBSITE", url: "https://heebon00.github.io/Team_Synergos_esg/index.html" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/heebon00/Team_Synergos_esg.git" }, // token-exempt: external project link
        { label: "개발 기획안", url: "#" },
      ],
      tags: ["UI/UX", "Frontend", "React", "Claude", "Vibe coding"],
    },
    {
      id: "campaign",
      title: "보건복지부 금연캠페인 홍보영상",
      previewImage: "/assets/project_campaign_full_preview.jpeg",
      fallbackImage: "/assets/figma_4b660c10.png",
      type: "VIDEO",
      links: [
        { label: "VIDEO", url: "/assets/no_smoking_video.mp4" },
        { label: "영상기획서", url: "#" },
        { label: "스토리보드", url: "#" },
      ],
      tags: ["Flow", "AGY", "Premiere pro", "After effect"],
    },
    {
      id: "archive",
      title: "웹 개발 학습 아카이브",
      previewImage: "/assets/project_archive_full_preview2.png",
      fallbackImage: "/assets/figma_bcd0c6b6.png",
      type: "WEBSITE",
      links: [
        { label: "WEBSITE", url: "https://dbd01350-eng.github.io/VScode_study/archive/" }, // token-exempt: external project link
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/VScode_study.git" }, // token-exempt: external project link
      ],
      tags: ["React", "AGY", "Claude", "Vibe coding"],
    },
  ],
  values: [
    {
      id: 'detail',
      title: 'Detail-Oriented',
      description: '디테일에 집착합니다.\n픽셀 하나, 코드 한 줄까지 타협 없이 완성도 높은 결과물을 만들어냅니다.',
      icon: '/assets/end_to_end_icon.png'
    },
    {
      id: 'trend',
      title: 'Trend-Driven',
      description: '트렌드를 읽고, 새로운 시각적 언어를 프로젝트에 녹여냅니다.\n늘 한 발 앞선 디자인을 지향합니다.',
      icon: '/assets/trend_driven_icon.png'
    },
    {
      id: 'tech',
      title: 'Tech-Savvy',
      description: '인터랙션, 모션 디자인, 반응형 설계 등 기술적 깊이로 차별화된 사용자 경험을 설계합니다.',
      icon: '/assets/tech_savvy_icon.png'
    },
    {
      id: 'endtoend',
      title: 'End-to-End',
      description: '기획부터 UX/UI 디자인, 프론트엔드 개발, 브랜딩까지\n프로젝트를 처음부터 끝까지 책임집니다.',
      icon: '/assets/end_to_end_icon.png'
    },
  ],
  marqueeTexts: ['Desktop', 'Mobile', 'Vibe coding', 'Design'],
};

export default portfolioData;
