import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: "ikea",
      title: "IKEA Website 반응형 웹페이지 리디자인",
      titleLink: "https://heebon00.github.io/Team_Synergos_esg/index.html",
      previewImage: "/assets/project_ikea_full_preview.png",
      fallbackImage: "/assets/figma_8bed76a4.png",
      links: [
        { label: "WEBSITE", url: "https://heebon00.github.io/Team_Synergos_esg/index.html" },
        { label: "GITHUB", url: "https://github.com/heebon00/Team_Synergos_esg.git" },
        { label: "리디자인 기획안", url: "/assets/ikea_redesign_makeplan.pdf" },
        { label: "Redesign", url: "https://www.figma.com/design/SDTgcPmNqolK9N3QBKHwAY/3.-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=533-3396&t=dbcQAySd7xC5k2tI-1" },
      ],
      tags: ["UI/UX", "Web design", "Figma", "Figma mcp", "Claude", "AGY", "Vibe coding"],
    },
    {
      id: "campaign",
      title: "보건복지부 금연캠페인 영상 AI-powered",
      titleLink: "https://drive.google.com/file/d/10d6UEqNIgxSS0ldjxd8_MTxDG_yDMS_Y/view?usp=sharing",
      previewImage: "/assets/project_campaign_full_preview.png",
      fallbackImage: "/assets/figma_4b660c10.png",
      links: [
        { label: "VIDEO", url: "/assets/no_smoking_video.mp4" },
        { label: "영상기획서", url: "/assets/no_smoking_makeplan.pdf" },
        { label: "스토리보드", url: "/assets/no_smoking_storyboard.pdf" },
      ],
      tags: ["Flow", "AGY", "Adobe premiere pro", "Adobe after effect"],
    },
    {
      id: "archive",
      title: "웹 개발 아카이브 프론트엔드 도구 학습 아카이브",
      titleLink: "https://dbd01350-eng.github.io/VScode_study/archive/",
      previewImage: "/assets/project_archive_full_preview.png",
      fallbackImage: "/assets/figma_bcd0c6b6.png",
      links: [
        { label: "WEBSITE", url: "https://dbd01350-eng.github.io/VScode_study/archive/" },
        { label: "GITHUB", url: "https://github.com/dbd01350-eng/VScode_study.git" },
      ],
      tags: ["React", "AGY", "Claude", "Vibe coding"],
    },
  ];

  return (
    <section id="works" className="py-[40px] md:py-[80px] px-4 sm:px-12 md:px-[80px] max-w-[1920px] mx-auto">
      {/* 2-Column Sidebar + Vertical List Layout (Figma Node #7006:1550) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start justify-between">
        {/* Left Column: Sidebar (projects-sidebar #7006:1551) */}
        <div className="w-full lg:w-[400px] flex-shrink-0 lg:sticky lg:top-[160px] space-y-6 sm:space-y-[40px]">
          <div className="space-y-3 sm:space-y-[20px]">
            <h2 className="font-['Funnel_Display'] font-semibold text-[38px] sm:text-[60px] md:text-[80px] leading-[1.1] text-[#161616] tracking-tight">
              Featured
              <br />
              projects
            </h2>
            <p className="font-['Pretendard'] font-normal text-[15px] sm:text-[18px] leading-[1.6em] text-[#585858] max-w-sm whitespace-pre-line">Explore a selection of projects blending{"\n"}creativity with practical design</p>
          </div>

          <div>
            <a href="#works" className="inline-flex items-center space-x-3 px-5 py-2.5 sm:px-[26px] sm:py-[12px] rounded-[200px] border border-[#161616] font-['Funnel_Display'] font-semibold text-[16px] sm:text-[18px] text-[#161616] hover:bg-[#161616] hover:text-white transition-colors">
              <span>Works</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Project Card List (projects-article-list #7006:1563) */}
        <div className="flex-1 w-full space-y-12 sm:space-y-[80px]">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4 sm:space-y-[24px]">
              {/* Media Preview Frame (Exact Figma Original Node #I7067:926;7006:1567, borderRadius: 50px) */}
              <div className="w-full h-[260px] sm:h-[480px] md:h-[600px] rounded-[24px] sm:rounded-[50px] overflow-hidden relative shadow-lg bg-[#FAF7F6]">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-[50px]"
                  onError={(e) => {
                    e.target.src = project.fallbackImage;
                  }}
                />
              </div>

              {/* Tags Row */}
              <div className="flex flex-wrap gap-2 sm:gap-[10px]">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 sm:px-[16px] sm:py-[6px] rounded-[12px] sm:rounded-[16px] bg-white border border-[#E5E5E5] font-['Pretendard'] text-[12px] sm:text-[14px] text-[#585858]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & External Links Row */}
              <div className="space-y-3 sm:space-y-[16px] pt-1 sm:pt-[8px]">
                <h3 className="font-['Pretendard'] font-semibold text-[20px] sm:text-[28px] md:text-[34px] leading-[1.3em] text-[#161616]">
                  <a href={project.titleLink} target="_blank" rel="noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                </h3>

                {/* External Link Badges */}
                <div className="flex flex-wrap gap-3 sm:gap-[16px]">
                  {project.links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-1 font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] text-[#161616] underline hover:text-[#9F8BE7] transition-colors">
                      <span>{link.label}</span>
                      <span>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
