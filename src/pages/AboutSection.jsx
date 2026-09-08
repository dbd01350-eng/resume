import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-[1920px] mx-auto w-full"> {/* token-exempt: section max container width */}
      <div className="flex flex-col xl:flex-row items-start justify-between gap-8 xl:gap-16 w-full">
        {/* Left Column: About me Header (Shifted slightly rightward as preferred) */}
        <div className="flex items-center gap-3 py-1.5 flex-shrink-0 lg:pl-10 xl:pl-16 2xl:pl-24">
          <img 
            src="/assets/about_badge_icon.svg" 
            alt="About Icon" 
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" 
            onError={(e) => e.target.style.display = 'none'} 
          />
          <span className="font-funnel font-bold text-2xl sm:text-3xl leading-tight text-text-main whitespace-nowrap">
            About me
          </span>
        </div>

        {/* Right Column: Restored exact preferred positions for 자기소개 and 경력 */}
        <div className="flex flex-col md:flex-row justify-end items-start gap-12 xl:gap-24 2xl:gap-32 flex-1 w-full overflow-x-auto pb-2">
          {/* ManifestParagraph-Intro (Positioned comfortably between About me and Career) */}
          <div className="space-y-3 flex-shrink-0 max-w-sm">
            <h3 className="font-pretendard font-bold text-xl sm:text-2xl text-text-main whitespace-nowrap">
              자기소개
            </h3>
            <div className="font-pretendard font-normal text-sm sm:text-base leading-relaxed text-text-mid-gray space-y-2 whitespace-nowrap">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-text-mid-gray w-20 inline-block whitespace-nowrap">이름</span>
                <span className="whitespace-nowrap">: 심다은</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-text-mid-gray w-20 inline-block whitespace-nowrap">생년월일</span>
                <span className="whitespace-nowrap">: 1994년 12월 15일 ( 만 31세 )</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-text-mid-gray w-20 inline-block whitespace-nowrap">휴대폰</span>
                <span className="whitespace-nowrap">: 010-7272-6639</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-text-mid-gray w-20 inline-block whitespace-nowrap">주소</span>
                <span className="whitespace-nowrap">: 서울시 중구 동호로 173</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-semibold text-text-mid-gray w-20 inline-block whitespace-nowrap">email</span>
                <span className="whitespace-nowrap">: dbd01350@gmail.com</span>
              </div>
            </div>
          </div>

          {/* ManifestParagraph-Career (Fixed in preferred far-right position) */}
          <div className="space-y-3 flex-shrink-0 max-w-lg">
            <h3 className="font-pretendard font-bold text-xl sm:text-2xl text-text-main whitespace-nowrap">
              경력
            </h3>
            <div className="flex gap-6 sm:gap-8 font-pretendard text-sm sm:text-base leading-relaxed">
              {/* Date column - strictly whitespace-nowrap flex-shrink-0 so date ranges never wrap */}
              <div className="font-semibold text-text-light-gray space-y-2 whitespace-nowrap flex-shrink-0">
                <div className="whitespace-nowrap flex-shrink-0">2013.03 ~ 2021.02</div>
                <div className="whitespace-nowrap flex-shrink-0">2020.10 ~ 2021.12</div>
                <div className="whitespace-nowrap flex-shrink-0">2021.10 ~ 2025.11</div>
                <div className="whitespace-nowrap flex-shrink-0">2022.04 ~ 2025.06</div>
                <div className="whitespace-nowrap flex-shrink-0">2022.12 ~ 2023.04</div>
                <div className="whitespace-nowrap flex-shrink-0">2023.06 ~ 2025.06</div>
              </div>

              {/* Description column - whitespace-nowrap */}
              <div className="font-normal text-text-mid-gray space-y-2 whitespace-nowrap flex-shrink-0">
                <div className="whitespace-nowrap flex-shrink-0">서울시립대학교 토목공학과 졸업</div>
                <div className="whitespace-nowrap flex-shrink-0">온이앤지 (상하수도 설계회사)</div>
                <div className="whitespace-nowrap flex-shrink-0">브랜드 하루필름 이태원점 운영</div>
                <div className="whitespace-nowrap flex-shrink-0">브랜드 그믐달스튜디오 이태원점 운영</div>
                <div className="whitespace-nowrap flex-shrink-0">브랜드 하루필름 본사 근무</div>
                <div className="whitespace-nowrap flex-shrink-0">자개장롱 운영</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
