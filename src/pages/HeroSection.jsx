import React from 'react';

export default function HeroSection() {
  const toolsCol1 = ['Git', 'VS code', 'HTML'];
  const toolsCol2 = ['CSS', 'Javascript', 'React'];
  const toolsCol3 = ['Python', 'Figma', 'Notion'];
  const toolsCol4 = ['illustrator', 'after effect', 'primiere pro'];

  return (
    <section id="home" className="pt-0 pb-10 sm:pb-[60px] lg:pb-[80px] px-4 md:px-12 xl:px-[60px] 2xl:px-[80px] max-w-[1920px] mx-auto relative min-h-[700px] sm:min-h-[840px] flex flex-col justify-between overflow-hidden">
      {/* Background Floating Images (Responsive across Mobile, Tablet, Desktop) */}
      <div className="absolute top-[40px] left-[20px] sm:left-[50px] md:left-[10%] xl:left-[12%] 2xl:left-[15%] sm:top-[40px] md:top-[35px] xl:top-[20px] z-0 pointer-events-none">
        <img 
          src="/assets/figma_a90ff28f.png" 
          alt="" 
          className="w-[180px] sm:w-[240px] md:w-[280px] xl:w-[340px] h-auto object-contain opacity-50 sm:opacity-70 xl:opacity-90" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="absolute top-[170px] right-[20px] sm:right-[20px] md:right-[4%] sm:top-[190px] md:top-[190px] lg:top-[240px] xl:top-[240px] xl:right-[8%] 2xl:right-[10%] z-0 pointer-events-none">
        <img 
          src="/assets/figma_40a26bbc.png" 
          alt="" 
          className="w-[80px] sm:w-[120px] md:w-[140px] xl:w-[170px] h-auto object-contain opacity-50 sm:opacity-70 xl:opacity-90" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="absolute top-[220px] right-[120px] sm:top-[280px] sm:right-[160px] md:right-[24%] md:top-[300px] lg:top-[360px] xl:top-[400px] xl:right-[22%] 2xl:right-[30%] z-0 pointer-events-none">
        <img 
          src="/assets/figma_40a26bb.png" 
          alt="" 
          className="w-[90px] sm:w-[130px] md:w-[140px] xl:w-[170px] h-auto object-contain opacity-40 sm:opacity-60 xl:opacity-80" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      {/* hero-top & hero-title-wrap (Balanced Middle Ground Alignment) */}
      <div className="w-full max-w-[1500px] 2xl:max-w-[1640px] mx-auto px-1 sm:px-6 xl:px-8 relative z-10 min-h-[380px] sm:min-h-[480px] lg:min-h-[600px] flex flex-col justify-center py-4 sm:py-6">
        {/* hero-title-text (padding: 0px 40px, gap: 20px) */}
        <div className="px-0 sm:px-4 xl:px-[20px] space-y-3 sm:space-y-4 lg:space-y-[20px]">
          
          {/* hero-title-row-1 (Right aligned with balanced middle ground offset) */}
          <div className="flex flex-nowrap items-center justify-end gap-2 sm:gap-3 lg:gap-[26px] pr-0 sm:pr-2 md:pr-6 lg:pr-[50px] xl:pr-[90px] 2xl:pr-[100px]">
            <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-[#161616] whitespace-nowrap">
              예쁘게,
            </span>
            <div className="bg-[#9F8BE7] border border-[#FAF7F6] rounded-[30px] sm:rounded-[66px] px-3 sm:px-8 lg:px-[40px] py-1 sm:py-2 lg:py-[10px] flex items-center gap-2 sm:gap-3 lg:gap-[20px] flex-shrink-0">
              <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-white whitespace-nowrap">
                될 때 까지
              </span>
              <img 
                src="/assets/hero_title_star_icon.svg" 
                alt="Star Icon" 
                className="w-[28px] h-[28px] sm:w-[clamp(36px,5vw,92px)] sm:h-[clamp(36px,5vw,92px)] object-contain flex-shrink-0" 
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>

          {/* hero-title-row-2 (Left aligned with balanced middle ground offset) */}
          <div className="flex flex-nowrap items-center justify-start gap-2 sm:gap-3 lg:gap-[36px] pl-0 sm:pl-2 md:pl-6 lg:pl-[50px] xl:pl-[90px] 2xl:pl-[100px]">
            <img 
              src="/assets/hero_title_icon_2.svg" 
              alt="Hero Icon 2" 
              className="w-[28px] h-[28px] sm:w-[clamp(36px,5vw,92px)] sm:h-[clamp(36px,5vw,92px)] object-contain flex-shrink-0" 
              onError={(e) => e.target.style.display = 'none'}
            />
            <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-[#161616] whitespace-nowrap">
              Design and Coding
            </span>
          </div>

        </div>
      </div>

      {/* hero-bottom & hero-data */}
      <div className="relative z-10 pb-[20px] w-full max-w-[1500px] 2xl:max-w-[1640px] mx-auto px-1 sm:px-6 xl:px-8">
        
        {/* 1) DESKTOP VERSION (Before Breakpoint): 100% Original Desktop Layout (Description -> Tools -> Photo Card) */}
        <div className="hidden lg:flex items-center justify-between gap-[40px] xl:gap-[60px] w-full">
          {/* Circular Badge + Description Text */}
          <div className="flex items-center gap-[40px] flex-1">
            <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <img 
                src="/assets/figma_225ce678.png" 
                alt="" 
                className="w-[60px] h-[60px] object-contain animate-spin-slow" 
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>

            <p className="font-['Funnel_Display'] font-normal text-[22px] leading-[1.6em] text-[#161616]">
              <span className="block whitespace-nowrap">디자인 하고, 코드로 만듭니다.</span>
              <span className="block whitespace-nowrap">가끔은 둘 다 하다가 새벽을 만납니다.</span>
              <span className="block whitespace-nowrap">결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.</span>
            </p>
          </div>

          {/* Desktop Tools Grid with Progressive Visibility */}
          <div className="w-[624px] flex flex-nowrap items-start gap-[20px] font-['Funnel_Display'] text-[22px] leading-[1.6em] text-[#161616] whitespace-nowrap overflow-hidden flex-shrink-0">
            <div className="space-y-1 flex-shrink-0">
              {toolsCol1.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[19px] h-[19px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex-shrink-0">
              {toolsCol2.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[19px] h-[19px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 hidden xl:block flex-shrink-0">
              {toolsCol3.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[19px] h-[19px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 hidden 2xl:block flex-shrink-0">
              {toolsCol4.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[19px] h-[19px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Thumbnail Card in Original Desktop Position */}
          <div className="w-[205px] h-[160px] bg-[#9F8BE7] rounded-[26px] flex items-center justify-center relative overflow-hidden flex-shrink-0">
            <img 
              src="/assets/figma_bb286482.png" 
              alt="Hero Photo Thumbnail" 
              className="w-[171px] h-[228px] object-cover rounded-xl"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>

        {/* 2) TABLET / MOBILE VERSION (After Breakpoint Reached): Photo Card moves to Right Side of Description Text */}
        <div className="flex lg:hidden flex-col gap-6 sm:gap-8 w-full">
          {/* Top Row: Description Text + Photo Card placed on Right Side */}
          <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 w-full">
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/figma_225ce678.png" 
                  alt="" 
                  className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] object-contain animate-spin-slow" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              <p className="font-['Funnel_Display'] font-normal text-[14px] sm:text-[18px] leading-[1.5em] sm:leading-[1.6em] text-[#161616] break-keep">
                <span className="block sm:whitespace-nowrap">디자인 하고, 코드로 만듭니다.</span>
                <span className="block sm:whitespace-nowrap">가끔은 둘 다 하다가 새벽을 만납니다.</span>
                <span className="block sm:whitespace-nowrap">결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.</span>
              </p>
            </div>

            {/* Photo Thumbnail Card placed on Right Side of Description Text in Breakpoint Mode */}
            <div className="w-[110px] sm:w-[160px] h-[95px] sm:h-[130px] bg-[#9F8BE7] rounded-[18px] sm:rounded-[26px] flex items-center justify-center relative overflow-hidden flex-shrink-0">
              <img 
                src="/assets/figma_bb286482.png" 
                alt="Hero Photo Thumbnail" 
                className="w-[90px] sm:w-[130px] h-[125px] sm:h-[175px] object-cover rounded-lg sm:rounded-xl"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>

          {/* Bottom Row: Restored Full Tools Grid aligned to hero_study_icon.svg (Shifted Rightward for Optical Balance on Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 sm:gap-4 font-['Funnel_Display'] text-[13px] sm:text-[18px] leading-[1.6em] text-[#161616] whitespace-nowrap w-full justify-items-start max-w-sm sm:max-w-none mx-auto sm:mx-0 pl-6 sm:pl-0">
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol1.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol2.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol3.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol4.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/hero_study_icon.svg" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] object-contain flex-shrink-0" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
