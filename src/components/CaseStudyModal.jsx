import React, { useEffect } from "react";

export default function CaseStudyModal({ isOpen, onClose, project, onOpenPlanModal }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy, contribution } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#FAF7F6] dark:bg-[#1E1E1E] rounded-[24px] sm:rounded-[36px] shadow-2xl overflow-hidden flex flex-col border border-[#E5E5E5] dark:border-[#333333] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#E5E5E5] dark:border-[#2D2D2D] flex items-start justify-between gap-4 bg-white/70 dark:bg-[#252525]/70 backdrop-blur-md">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#161616] text-white dark:bg-white dark:text-[#161616]">
                {project.type || "CASE STUDY"}
              </span>
              {contribution?.rate && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DDF160] text-[#161616] border border-[#C5DC3C]">
                  기여도 {contribution.rate}
                </span>
              )}
              {contribution?.roleTag && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DDF160] text-[#161616] border border-[#C5DC3C]">
                  {contribution.roleTag}
                </span>
              )}
              {project.team && !project.team.includes("개인") && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EFECE9] dark:bg-[#333333] text-[#585858] dark:text-[#B2AEAD]">
                  {project.team}
                </span>
              )}
            </div>
            <h2 className="font-['Pretendard'] font-bold text-2xl sm:text-3xl text-[#161616] dark:text-white leading-tight">
              {project.title}
            </h2>
            <p className="font-['Pretendard'] text-sm sm:text-base text-[#6B6B6B] dark:text-[#A0A0A0]">
              <span className="font-semibold text-[#161616] dark:text-white">역할:</span> {project.role} | <span className="font-semibold text-[#161616] dark:text-white">기간:</span> {project.period}
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#EFECE9] dark:bg-[#333333] hover:bg-[#E0DDD9] dark:hover:bg-[#444444] text-[#161616] dark:text-white text-xl transition-colors cursor-pointer flex-shrink-0"
            aria-label="모달 닫기"
          >
            ✕
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#161616] dark:text-[#E0E0E0] font-['Pretendard']">
          
          {/* Contribution Breakdown Banner */}
          {contribution && contribution.breakdown && (
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#252525] border border-[#E5E5E5] dark:border-[#333333] shadow-sm">
              <div className="text-xs font-semibold text-[#7E7E7E] dark:text-[#9A9A9A] mb-1 uppercase tracking-wider">
                Detailed Contribution
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#161616] dark:text-[#F3F3F3]">
                {contribution.breakdown}
              </div>
            </div>
          )}

          {/* Project Summary */}
          {caseStudy.summary && (
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#161616] dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#161616] dark:bg-white inline-block"></span>
                프로젝트 개요 (Overview)
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#4A4A4A] dark:text-[#C5C5C5] pl-4">
                {caseStudy.summary}
              </p>
            </div>
          )}

          {/* Key Contributions */}
          {caseStudy.keyContributions && caseStudy.keyContributions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#161616] dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DDF160] border border-[#B0C430] inline-block"></span>
                주도적 핵심 기여 (Key Contributions)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pl-0 sm:pl-4">
                {caseStudy.keyContributions.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#262626] border border-[#E5E5E5] dark:border-[#3A3A3A] flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <div className="text-xs font-bold text-[#8A8A8A] mb-1">0{idx + 1}</div>
                      <h4 className="font-bold text-sm sm:text-base text-[#161616] dark:text-white leading-snug mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#555555] dark:text-[#BBBBBB] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution (Troubleshooting) */}
          {caseStudy.troubleshooting && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#161616] dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9F8BE7] inline-block"></span>
                문제 해결 및 트러블슈팅 (Problem & Solution)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-4">
                <div className="p-5 rounded-2xl bg-[#FFF5F5] dark:bg-[#2C2121] border border-[#FED7D7] dark:border-[#4A2D2D] space-y-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#E53E3E] text-white">Problem</span>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#E2E2E2] leading-relaxed">
                    {caseStudy.troubleshooting.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F0FFF4] dark:bg-[#1E2E22] border border-[#C6F6D5] dark:border-[#2D4A33] space-y-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#38A169] text-white">Solution & Impact</span>
                  <p className="text-xs sm:text-sm text-[#4A4A4A] dark:text-[#E2E2E2] leading-relaxed">
                    {caseStudy.troubleshooting.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Timeline & Process */}
          {caseStudy.timeline && caseStudy.timeline.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#161616] dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#161616] dark:bg-white inline-block"></span>
                타임라인 & 프로세스 (Notion 일정 기준)
              </h3>
              <div className="pl-4 space-y-2.5 border-l-2 border-[#E5E5E5] dark:border-[#383838] ml-2">
                {caseStudy.timeline.map((step, idx) => (
                  <div key={idx} className="relative pl-5">
                    <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#1E1E1E] border-2 border-[#161616] dark:border-white"></span>
                    <div className="font-bold text-xs sm:text-sm text-[#161616] dark:text-white">
                      {step.phase}
                    </div>
                    <div className="text-xs sm:text-sm text-[#666666] dark:text-[#AAAAAA]">
                      {step.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links & Artifacts */}
          <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#2D2D2D] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {project.links && project.links.map((link, idx) => {
                const isInternalPlan = link.url === "#";
                return isInternalPlan ? (
                  <button
                    key={idx}
                    onClick={() => {
                      onClose();
                      if (onOpenPlanModal) onOpenPlanModal(link, project.title);
                    }}
                    className="px-4 py-2 rounded-full font-['Funnel_Display'] font-semibold text-xs sm:text-sm bg-[#161616] dark:bg-white text-white dark:text-[#161616] hover:bg-[#333333] dark:hover:bg-[#E0E0E0] transition-colors cursor-pointer"
                  >
                    {link.label} 슬라이드 보기 ↗
                  </button>
                ) : (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full font-['Funnel_Display'] font-medium text-xs sm:text-sm border border-[#161616] dark:border-white text-[#161616] dark:text-white hover:bg-[#161616] hover:text-white dark:hover:bg-white dark:hover:text-[#161616] transition-colors"
                  >
                    {link.label} ↗
                  </a>
                );
              })}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs sm:text-sm font-medium text-[#777777] dark:text-[#999999] hover:text-[#161616] dark:hover:text-white transition-colors cursor-pointer"
            >
              닫기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
