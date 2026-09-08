import React from 'react';
import portfolioData from '../data/portfolioData.js';

export default function ResumePage({ onClose }) {
  const { profile, experience, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const getExperienceLink = (title) => {
    if (title.includes('하루필름') && !title.includes('본사')) {
      return 'https://www.google.com/search?q=%ED%95%98%EB%A3%A8%ED%95%84%EB%A6%84+%EC%9D%B4%ED%83%9C%EC%9B%90&tbm=isch'; // token-exempt: google image search link
    }
    if (title.includes('그믐달스튜디오')) {
      return 'https://www.google.com/search?q=%EA%B7%B8%EB%AF%B0%EB%8B%AC%EC%8A%A4%ED%8A%AC%EB%94%94%EC%98%A4+%EC%9D%B4%ED%83%9C%EC%9B%90&tbm=isch'; // token-exempt: google image search link
    }
    if (title.includes('자개장롱')) {
      return 'https://www.google.com/search?q=%EC%9E%90%EA%B0%9C%EC%9E%A5%EB%A1%B1+%EC%95%BD%EC%88%98&tbm=isch'; // token-exempt: google image search link
    }
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-bg-dark/80 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-8 print:p-0 print:bg-white print:static print:overflow-visible font-pretendard">
      {/* Print styles optimization */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          body {
            background-color: white !important;
            color: #161616 !important; /* token-exempt: print text color override */
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      {/* Top Action Controls - Hidden during print */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3 print:hidden">
        <button
          onClick={handlePrint}
          type="button"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-lime text-text-main font-semibold shadow-lg hover:opacity-90 transition-all font-funnel cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          A4 인쇄 / PDF 저장
        </button>
        {onClose && (
          <button
            onClick={onClose}
            type="button"
            className="w-10 h-10 rounded-full bg-bg-primary text-text-main font-bold shadow-lg hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="닫기"
          >
            ✕
          </button>
        )}
      </div>

      {/* Main A4 Resume Paper Container */}
      <div className="bg-bg-primary text-text-main w-full max-w-4xl my-6 print:my-0 p-6 sm:p-10 print:p-4 rounded-3xl print:rounded-none shadow-2xl print:shadow-none border border-gray-200 print:border-none print:w-full space-y-7 print:space-y-5">
        
        {/* Header & Personal Profile Card */}
        <div className="border-b border-gray-200 pb-6 print:pb-4 flex flex-col sm:flex-row gap-6 items-start justify-between">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Profile Photo */}
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-shrink-0 bg-bg-secondary">
              <img
                src="/assets/Person_standing_in_white_shirt_202608261512.jpeg"
                alt="심다은 프로필 사진"
                className="w-full h-full object-cover object-[center_15%]" // token-exempt: custom image center crop ratio
              />
            </div>

            {/* Profile Details */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl font-bold font-funnel text-text-main">
                  {profile.name}
                </h1>
                <span className="text-lg text-text-light-gray font-funnel">
                  ({profile.nameEn})
                </span>
              </div>
              <p className="text-sm font-semibold text-accent-purple font-funnel">
                Web Frontend Developer &amp; UI/UX Designer
              </p>
              
              <div className="pt-2 text-xs sm:text-sm text-text-sub space-y-1.5 leading-relaxed">
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-text-mid-gray">생년월일</span>
                  <span>{profile.birth}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-text-mid-gray">연락처</span>
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-text-mid-gray">이메일</span>
                  <a href={`mailto:${profile.email}`} className="text-text-main underline hover:text-accent-purple">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-text-mid-gray">주소</span>
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-text-mid-gray">GitHub</span>
                  <a
                    href="https://github.com/dbd01350-eng" // token-exempt: external github profile link
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-main underline hover:text-accent-purple font-funnel break-all"
                  >
                    https://github.com/dbd01350-eng {/* token-exempt: external url display text */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end justify-between self-stretch print:flex">
            <span className="px-3 py-1 bg-accent-lime text-text-main rounded-full text-xs font-bold font-funnel">
              이력서
            </span>
            <span className="text-xs text-text-muted font-funnel">
              최종 수정일: 2026.09
            </span>
          </div>
        </div>

        {/* Section 1: Self Introduction */}
        <div className="space-y-3 break-inside-avoid">
          <h2 className="text-lg font-bold font-funnel text-text-main flex items-center gap-2 border-l-4 border-accent-lime pl-2.5">
            자기소개 (Self Introduction)
          </h2>
          
          <div className="p-4 bg-bg-secondary rounded-2xl border border-gray-100 space-y-2.5">
            <blockquote className="text-sm sm:text-base font-bold text-text-main border-l-4 border-accent-purple pl-3 py-0.5">
              &quot;예쁘게, 될 때 까지 - 디자인 하고, 코드로 만듭니다. 결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-text-sub leading-relaxed">
              공학적 데이터 기반 사고와 실제 비즈니스 브랜딩 운영 경험을 결합하여, 기획부터 UX/UI 디자인, 최신 AI 에이전트 기반 프론트엔드 개발까지 완성도 높게 이끄는 융합형 디자이너 겸 개발자입니다. 토목공학과 졸업 및 설계 회사 근무를 통해 다져진 세밀한 구조 설계 감각과, 하루필름·그믐달스튜디오·자개장롱 등 다수의 핫플 공간 브랜드를 운영하며 쌓은 실전 사용자 경험(UX) 분석력을 바탕으로 완성도 있는 디지털 웹 서비스를 구축합니다.
            </p>
          </div>
        </div>

        {/* Section 2: Strengths & Weaknesses */}
        <div className="space-y-3 break-inside-avoid">
          <h2 className="text-lg font-bold font-funnel text-text-main flex items-center gap-2 border-l-4 border-accent-lime pl-2.5">
            장점 및 단점 (Strengths &amp; Weaknesses)
          </h2>
          
          <div className="p-4 sm:p-5 bg-bg-secondary rounded-2xl border border-gray-100 space-y-3 text-xs sm:text-sm text-text-sub leading-relaxed">
            <p>
              완성도와 픽셀 단위 디테일에 대한 높은 집착으로 인해, 초반 세부 요소를 다듬는 과정에서 필요 이상의 시간과 리소스가 집중되는 경향이 있습니다. 이를 극복하기 위해 프로젝트 초기 단계부터 재사용 가능한 컴포넌트 구조와 디자인 시스템 토큰을 엄격히 정립하고, 최신 AI 에이전트와의 페어 프로그래밍 워크플로우를 조기에 도입하여 작업 속도와 고품질 결과물 간의 균형을 체계적으로 극대화하고 있습니다.
            </p>
            <p>
              이러한 세심한 디테일 감각은 타협 없는 정밀한 UI 디자인과 깔끔하고 유지보수가 용이한 프론트엔드 코드 구조라는 결과물로 나타납니다. 나아가 Claude, GPT, AGY, Figma Agent 등 최신 AI 바이브 코딩 기술을 누구보다 빠르게 습득하여 압도적인 개발 생산성을 발휘하며, 단순 코딩에 그치지 않고 아이디어 기획부터 UX/UI 디자인, 코드 개발, 실전 브랜드 운영까지 프로젝트 전 과정을 통합 완수하는 엔드투엔드(End-to-End) 수행 능력이 가장 큰 강점입니다.
            </p>
          </div>
        </div>

        {/* Section 3: Experience & Education */}
        <div className="space-y-3 break-inside-avoid">
          <h2 className="text-lg font-bold font-funnel text-text-main flex items-center gap-2 border-l-4 border-accent-lime pl-2.5">
            경력 및 학력 (Experience &amp; Education)
          </h2>

          <div className="overflow-hidden border border-gray-200 rounded-2xl">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-bg-secondary text-text-mid-gray border-b border-gray-200 font-funnel">
                  <th className="py-2.5 px-4 font-semibold w-2/5">기간 (Period)</th>
                  <th className="py-2.5 px-4 font-semibold w-3/5">구분 및 상세 내용 (Details)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-text-sub">
                {experience.map((item, idx) => {
                  const linkUrl = getExperienceLink(item.title);
                  return (
                    <tr key={idx} className="hover:bg-bg-secondary/50 transition-colors">
                      <td className="py-2.5 px-4 font-funnel text-text-mid-gray whitespace-nowrap">
                        {item.period}
                      </td>
                      <td className="py-2.5 px-4 font-medium text-text-main flex items-center justify-between gap-2">
                        <span>{item.title}</span>
                        {linkUrl && (
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-text-sub hover:text-accent-purple underline font-funnel inline-flex items-center gap-0.5 shrink-0 cursor-pointer print:hidden"
                          >
                            link ↗
                          </a>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Skills & Tools */}
        <div className="space-y-3 break-inside-avoid">
          <h2 className="text-lg font-bold font-funnel text-text-main flex items-center gap-2 border-l-4 border-accent-lime pl-2.5">
            기술 스택 및 도구 (Skills &amp; Tools)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-bg-secondary rounded-2xl border border-gray-100 space-y-1.5">
              <h3 className="text-xs font-bold text-accent-purple font-funnel uppercase">
                Frontend Dev
              </h3>
              <p className="text-xs text-text-sub leading-relaxed font-funnel">
                React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Python, Git, VS Code
              </p>
            </div>

            <div className="p-3.5 bg-bg-secondary rounded-2xl border border-gray-100 space-y-1.5">
              <h3 className="text-xs font-bold text-accent-purple font-funnel uppercase">
                UI/UX &amp; Design
              </h3>
              <p className="text-xs text-text-sub leading-relaxed font-funnel">
                Figma, Photoshop, Illustrator, Premiere Pro, After Effects
              </p>
            </div>

            <div className="p-3.5 bg-bg-secondary rounded-2xl border border-gray-100 space-y-1.5">
              <h3 className="text-xs font-bold text-accent-purple font-funnel uppercase">
                AI &amp; Vibe Coding
              </h3>
              <p className="text-xs text-text-sub leading-relaxed font-funnel">
                Claude, GPT, AGY, Figma Agent, VS Code Chat, SUNO, FLOW
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Key Projects */}
        <div className="space-y-3 break-inside-avoid">
          <h2 className="text-lg font-bold font-funnel text-text-main flex items-center gap-2 border-l-4 border-accent-lime pl-2.5">
            주요 프로젝트 (Key Projects)
          </h2>

          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="p-4 bg-bg-secondary rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-funnel px-2 py-0.5 bg-accent-purple text-bg-primary rounded-full uppercase"> {/* token-exempt: badge font size */}
                      {proj.type}
                    </span>
                    <h3 className="text-sm font-bold text-text-main">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-funnel text-text-mid-gray bg-bg-primary px-2 py-0.5 rounded-md border border-gray-200"> {/* token-exempt: tag font size */}
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap flex-shrink-0">
                  {proj.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold font-funnel text-text-main hover:text-accent-purple underline bg-bg-primary px-2.5 py-1 rounded-lg border border-gray-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info in Resume */}
        <div className="pt-4 border-t border-gray-200 text-center text-xs text-text-muted font-funnel">
          Above resume information is created by Daeun Sim &bull; Powered by React &amp; Tailwind CSS
        </div>

      </div>
    </div>
  );
}
