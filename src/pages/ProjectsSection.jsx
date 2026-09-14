import React, { useState, useRef } from "react";
import PlanModal from "../components/PlanModal.jsx";
import portfolioData from "../data/portfolioData.js";

export default function ProjectsSection() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    images: [],
    isVideo: false,
    videoUrl: "",
  });

  const projectRefs = useRef([]);
  const projects = portfolioData.projects;

  const handleLinkClick = (e, link, projectTitle) => {
    const modalConfig = PlanModal.getModalConfig(link, projectTitle);
    if (modalConfig) {
      e.preventDefault();
      setModalData(modalConfig);
    }
  };

  const handleCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNextProject = (e) => {
    e.preventDefault();
    if (!projectRefs.current || projectRefs.current.length === 0) return;

    // 반응형 스티키 헤더 높이(Desktop: 80px, Mobile: 72px) + 여백을 고려한 오프셋 계산 (프로젝트 카드가 상단 헤더 근처로 올라오도록 수치 조정)
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 640;
    const headerOffset = isDesktop ? 100 : 80;
    const currentScroll = window.scrollY + headerOffset;

    let nextIndex = 0;
    let found = false;

    for (let i = 0; i < projectRefs.current.length; i++) {
      const el = projectRefs.current[i];
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top > currentScroll + 20) {
          nextIndex = i;
          found = true;
          break;
        }
      }
    }

    if (!found) {
      nextIndex = 0; // 마지막 프로젝트에 도달하면 첫 번째 프로젝트로 순환
    }

    const targetEl = projectRefs.current[nextIndex];
    if (targetEl) {
      const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
      const targetPosition = elementTop - headerOffset; // 상단 여백을 줄여 프로젝트 카드를 화면 더 위로 올림

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="works" className="scroll-mt-[100px] py-[40px] md:py-[80px] px-4 sm:px-12 md:px-[80px] max-w-[1920px] mx-auto"> {/* token-exempt: section layout */}
      {/* 2-Column Sidebar + Vertical List Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start justify-between"> {/* token-exempt: sidebar layout */}
        {/* Left Column: Sidebar */}
        <div className="w-full lg:w-[400px] flex-shrink-0 lg:sticky lg:top-[160px] space-y-6 sm:space-y-[40px]"> {/* token-exempt: sidebar spacing */}
          <div className="space-y-3 sm:space-y-[20px]"> {/* token-exempt: sidebar heading spacing */}
            <h2 className="font-['Funnel_Display'] font-semibold text-[38px] sm:text-[60px] md:text-[80px] leading-[1.1] text-[#161616] dark:text-white tracking-tight"> {/* token-exempt: sidebar heading typography */}
              Featured
              <br />
              projects
            </h2>
            <p className="font-['Pretendard'] font-normal text-[15px] sm:text-[18px] leading-[1.6em] text-[#585858] dark:text-[#B2AEAD] max-w-sm whitespace-pre-line">Explore a selection of projects blending{"\n"}creativity with practical design</p> {/* token-exempt: sidebar subtext */}
          </div>
          <div>
            <a 
              href="#works" 
              onClick={handleNextProject}
              className="inline-flex items-center space-x-3 px-5 py-2.5 sm:px-[26px] sm:py-[12px] rounded-[200px] border border-[#161616] dark:border-white font-['Funnel_Display'] font-semibold text-[16px] sm:text-[18px] text-[#161616] dark:text-white hover:bg-[#161616] dark:hover:bg-white hover:text-white dark:hover:text-[#161616] transition-colors cursor-pointer" // token-exempt: sidebar button
            >
              <span>Works</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Project Card List */}
        <div className="flex-1 w-full space-y-12 sm:space-y-[80px]"> {/* token-exempt: project list spacing */}
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => (projectRefs.current[index] = el)}
              className="space-y-4 sm:space-y-[24px]" // token-exempt: project card spacing
            >
              {/* Media Preview Frame */}
              <div className="w-full h-[260px] sm:h-[480px] md:h-[600px] rounded-[24px] sm:rounded-[50px] overflow-hidden relative shadow-lg bg-[#FAF7F6] dark:bg-[#303030]"> {/* token-exempt: figma layout frame */}
                <img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-[50px]" // token-exempt: preview image rounded corners
                  onError={(e) => {
                    e.target.src = project.fallbackImage;
                  }}
                />
              </div>

              {/* Tags Row */}
              <div className="flex flex-wrap gap-2 sm:gap-[10px]"> {/* token-exempt: tags gap */}
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 sm:px-[16px] sm:py-[6px] rounded-[12px] sm:rounded-[16px] bg-white dark:bg-[#303030] border border-[#E5E5E5] dark:border-[#404040] font-['Pretendard'] text-[12px] sm:text-[14px] text-[#585858] dark:text-[#B2AEAD]"> {/* token-exempt: tag badge styling */}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & External Links Row */}
              <div className="space-y-3 sm:space-y-[16px] pt-1 sm:pt-[8px]"> {/* token-exempt: title spacing */}
                <h3 className="font-['Pretendard'] font-semibold text-[20px] sm:text-[28px] md:text-[34px] leading-[1.3em] text-[#161616] dark:text-white"> {/* token-exempt: figma font typography */}
                  {project.title}
                </h3>

                {/* External Link Badges */}
                <div className="flex flex-wrap gap-3 sm:gap-[16px]"> {/* token-exempt: links gap */}
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url || "#"}
                      onClick={(e) => handleLinkClick(e, link, project.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 font-['Funnel_Display'] font-medium text-[14px] sm:text-[16px] text-[#161616] dark:text-white underline hover:text-[#9F8BE7] transition-colors cursor-pointer" // token-exempt: link badge styling
                    >
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

      {/* Proposal Modal Popup */}
      <PlanModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        images={modalData.images}
        isVideo={modalData.isVideo}
        videoUrl={modalData.videoUrl}
      />
    </section>
  );
}
