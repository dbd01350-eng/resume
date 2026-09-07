import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-[40px] md:py-[80px] px-6 sm:px-12 md:px-[80px] max-w-[1920px] mx-auto min-h-[400px] flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-12">
      {/* Left Column: about-heading-col & about-subtitle-badge */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-[10px] py-[8px]">
          <img 
            src="/assets/about_badge_icon.svg" 
            alt="About Icon" 
            className="w-[19px] h-[19px] object-contain" 
            onError={(e) => e.target.style.display = 'none'} 
          />
          <span className="font-['Funnel_Display'] font-normal text-[22px] leading-[26px] text-[#161616]">
            About me
          </span>
        </div>
      </div>

      {/* Right Column: about-intro (ManifestParagraph-Intro & ManifestParagraph-Career) */}
      {/* Instant vertical stack (flex-col) before any text line-breaks happen (< 1280px xl), switching to flex-row only at xl (1280px+) */}
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-[80px] flex-1 justify-end w-full">
        {/* ManifestParagraph-Intro */}
        <div className="space-y-[8px] max-w-md w-full">
          <h3 className="font-['Pretendard'] font-semibold text-[24px] sm:text-[30px] leading-[36px] text-[#161616] mb-3 sm:mb-4">
            자기소개
          </h3>
          <p className="font-['Pretendard'] font-normal text-[15px] sm:text-[18px] leading-[1.8em] text-[#585858] whitespace-pre-line">
            <span className="font-semibold text-[#585858]">이름</span> : 심다은<br />
            <span className="font-semibold text-[#585858]">생년월일</span> : 1994년 12월 15일 ( 만 31세 )<br />
            <span className="font-semibold text-[#585858]">휴대폰</span> : 010-7272-6639<br />
            <span className="font-semibold text-[#585858]">주소</span> : 서울시 중구 동호로 173<br />
            <span className="font-semibold text-[#585858]">email</span> : dbd01350@gmail.com
          </p>
        </div>

        {/* ManifestParagraph-Career */}
        <div className="space-y-[8px] max-w-lg w-full">
          <h3 className="font-['Pretendard'] font-semibold text-[24px] sm:text-[30px] leading-[36px] text-[#161616] mb-3 sm:mb-4">
            경력
          </h3>
          <div className="flex gap-[16px] sm:gap-[26px]">
            <div className="font-['Pretendard'] font-semibold text-[14px] sm:text-[16px] leading-[2em] text-[#737373] whitespace-pre-line">
              2013.03 ~ 2021.02<br />
              2020.10 ~ 2021.12<br />
              2021.10 ~ 2025.11<br />
              2022.04 ~ 2025.06<br />
              2022.12 ~ 2023.04<br />
              2023.06 ~ 2025.06
            </div>
            <div className="font-['Pretendard'] font-normal text-[14px] sm:text-[16px] leading-[2em] text-[#585858] whitespace-pre-line">
              서울시립대학교 토목공학과 졸업<br />
              온이앤지 (상하수도 설계회사)<br />
              브랜드 하루필름 이태원점 운영<br />
              브랜드 그믐달스튜디오 이태원점 운영<br />
              브랜드 하루필름 본사 근무<br />
              자개장롱 운영
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
