import React from 'react';

export default function HeroSection() {
  const toolsCol1 = ['Git', 'VS code', 'HTML'];
  const toolsCol2 = ['CSS', 'Javascript', 'React'];
  const toolsCol3 = ['Python', 'Figma', 'Notion'];
  const toolsCol4 = ['illustrator', 'after effect', 'primiere pro'];

  return (
    <section id="home" className="pt-0 pb-10 sm:pb-15 lg:pb-20 px-4 md:px-12 xl:px-15 2xl:px-20 max-w-[1920px] mx-auto relative min-h-175 sm:min-h-210 flex flex-col justify-between overflow-hidden"> {/* token-exempt: hero responsive section layout */}
      {/* Background Floating Images (Zero-gravity Float + Interactive Hover Outward Push) */}
      <div className="absolute top-10 left-5 sm:left-12.5 md:left-[3%] xl:left-[6%] 2xl:left-[8%] sm:top-10 md:top-[35px] xl:top-[20px] z-10 pointer-events-auto"> {/* token-exempt: floating image 1 absolute offsets */}
        <img 
          src="/assets/hero/figma_a90ff28f.png" 
          alt="무중력 인터랙티브 3D 그래픽 1" 
          tabIndex={0}
          role="button"
          aria-label="인터랙티브 3D 아트워크 1"
          className="w-[180px] sm:w-[240px] md:w-[280px] xl:w-[340px] h-auto object-contain opacity-70 sm:opacity-85 xl:opacity-95 animate-float-slow transition-all duration-300 ease-out hover:-translate-x-6 hover:-translate-y-3 hover:-rotate-3 hover:opacity-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-purple" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="absolute top-[170px] right-[20px] sm:right-[20px] md:right-[4%] sm:top-[190px] md:top-[190px] lg:top-[240px] xl:top-[240px] xl:right-[8%] 2xl:right-[10%] z-10 pointer-events-auto"> {/* token-exempt: floating image 2 absolute offsets */}
        <img 
          src="/assets/hero/figma_40a26bbc.png" 
          alt="무중력 인터랙티브 3D 그래픽 2" 
          tabIndex={0}
          role="button"
          aria-label="인터랙티브 3D 아트워크 2"
          className="w-[80px] sm:w-[120px] md:w-[140px] xl:w-[170px] h-auto object-contain opacity-70 sm:opacity-85 xl:opacity-95 animate-float-medium transition-all duration-300 ease-out hover:translate-x-6 hover:-translate-y-4 hover:rotate-4 hover:opacity-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-purple" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      <div className="absolute top-[220px] right-[120px] sm:top-70 sm:right-[160px] md:right-[24%] md:top-75 lg:top-90 xl:top-100 xl:right-[22%] 2xl:right-[30%] z-10 pointer-events-auto"> {/* token-exempt: floating image 3 absolute offsets */}
        <img 
          src="/assets/hero/figma_40a26bb.png" 
          alt="무중력 인터랙티브 3D 그래픽 3" 
          tabIndex={0}
          role="button"
          aria-label="인터랙티브 3D 아트워크 3"
          className="w-22.5 sm:w-32.5 md:w-35 xl:w-42.5 h-auto object-contain opacity-60 sm:opacity-75 xl:opacity-90 animate-float-fast transition-all duration-300 ease-out hover:translate-x-7 hover:translate-y-3 hover:rotate-6 hover:opacity-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-purple" 
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      {/* hero-top & hero-title-wrap (Always on top of background images) */}
      <div className="w-full max-w-375 2xl:max-w-[1640px] mx-auto px-1 sm:px-6 xl:px-8 relative z-20 min-h-95 sm:min-h-120 lg:min-h-150 flex flex-col justify-center py-4 sm:py-6 pointer-events-none">
        {/* hero-title-text (Centered title layout across 2 rows) */}
        <div className="px-0 sm:px-4 xl:px-5 space-y-3 sm:space-y-4 lg:space-y-5 pointer-events-none flex flex-col items-center w-full">
          
          {/* hero-title-row-1 (Center aligned) */}
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-6.5 w-full">
            <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-[#161616] dark:text-white whitespace-nowrap">
              예쁘게,
            </span>
            <div className="bg-accent-purple dark:bg-accent-lime rounded-[30px] sm:rounded-[66px] px-3 sm:px-8 lg:px-10 py-1 sm:py-2 lg:py-2.5 flex items-center shrink-0 overflow-hidden relative pointer-events-none">
              {/* Invisible Sizing Placeholder (Ensures 100% exact original pill badge width & height) */}
              <div className="invisible flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0 whitespace-nowrap pointer-events-none">
                <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-white dark:text-[#161616] whitespace-nowrap">
                  될 때 까지
                </span>
                <img 
                  src="/assets/icons/hero_title_star_icon.svg" 
                  alt="Star Icon" 
                  className="w-7 h-7 sm:w-[clamp(36px,5vw,92px)] sm:h-[clamp(36px,5vw,92px)] object-contain shrink-0 dark:invert" 
                />
              </div>

              {/* Infinite Marquee Layer (Scrolls seamlessly inside the exact original pill badge) */}
              <div className="absolute inset-0 px-3 sm:px-8 lg:px-10 flex items-center overflow-hidden pointer-events-none">
                <div className="flex w-max animate-marquee transform-gpu pointer-events-none" style={{ animationDuration: '7s', animationTimingFunction: 'linear', animationPlayState: 'running' }}>
                  {/* Group 1 */}
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 pr-6 sm:pr-10 lg:pr-14">
                    <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-white dark:text-[#161616] whitespace-nowrap">
                      될 때 까지
                    </span>
                    <img 
                      src="/assets/icons/hero_title_star_icon.svg" 
                      alt="Star Icon" 
                      className="w-7 h-7 sm:w-[clamp(36px,5vw,92px)] sm:h-[clamp(36px,5vw,92px)] object-contain shrink-0 dark:invert" 
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>

                  {/* Group 2 */}
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 pr-6 sm:pr-10 lg:pr-14">
                    <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-white dark:text-[#161616] whitespace-nowrap">
                      될 때 까지
                    </span>
                    <img 
                      src="/assets/icons/hero_title_star_icon.svg" 
                      alt="Star Icon" 
                      className="w-7 h-7 sm:w-[clamp(36px,5vw,92px)] sm:h-[clamp(36px,5vw,92px)] object-contain shrink-0 dark:invert" 
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* hero-title-row-2 (Center aligned) */}
          <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3 lg:gap-6.5 w-full">
            <span className="font-['Funnel_Display'] font-semibold text-[clamp(28px,5.8vw,120px)] leading-[clamp(34px,6.8vw,132px)] tracking-[-0.005em] text-[#161616] dark:text-white whitespace-nowrap">
              Design and Coding
            </span>
          </div>

        </div>
      </div>

      {/* hero-bottom & hero-data */}
      <div className="relative z-10 pb-5 w-full max-w-375 2xl:max-w-[1640px] mx-auto px-1 sm:px-6 xl:px-8">
        
        {/* 1) DESKTOP VERSION (Before Breakpoint): 100% Original Desktop Layout (Description -> Tools -> Photo Card) */}
        <div className="hidden lg:flex items-center justify-between gap-10 xl:gap-15 w-full">
          {/* Circular Badge + Description Text */}
          <div className="flex items-center gap-10 flex-1">
            <div className="w-20 h-20 rounded-full bg-white dark:bg-text-sub flex items-center justify-center shrink-0">
              <img 
                src="/assets/hero/figma_225ce678.png" 
                alt="" 
                className="w-15 h-15 object-contain animate-spin-slow" 
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>

            <p className="font-['Funnel_Display'] font-normal text-[22px] leading-[1.6em] text-[#161616] dark:text-white">
              <span className="block whitespace-nowrap">디자인 하고, 코드로 만듭니다.</span>
              <span className="block whitespace-nowrap">가끔은 둘 다 하다가 새벽을 만납니다.</span>
              <span className="block whitespace-nowrap">결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.</span>
            </p>
          </div>

          {/* Desktop Tools Grid with Progressive Visibility */}
          <div className="w-156 flex flex-nowrap items-start gap-5 font-['Funnel_Display'] text-[22px] leading-[1.6em] text-[#161616] dark:text-text-muted whitespace-nowrap overflow-hidden shrink-0">
            <div className="space-y-1 shrink-0">
              {toolsCol1.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-4.75 h-4.75 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 shrink-0">
              {toolsCol2.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-4.75 h-4.75 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 hidden xl:block shrink-0">
              {toolsCol3.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-4.75 h-4.75 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 hidden 2xl:block shrink-0">
              {toolsCol4.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-4.75 h-4.75 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Thumbnail Card in Original Desktop Position */}
          <div className="w-51.25 h-40 bg-accent-purple dark:bg-accent-lime rounded-[26px] flex items-center justify-center relative overflow-hidden shrink-0">
            <img 
              src="/assets/hero/figma_bb286482.png" 
              alt="Hero Photo Thumbnail" 
              className="w-42.75 h-57 object-cover rounded-xl"
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>

        {/* 2) TABLET / MOBILE VERSION (After Breakpoint Reached): Photo Card moves to Right Side of Description Text */}
        <div className="flex lg:hidden flex-col gap-6 sm:gap-8 w-full">
          {/* Top Row: Description Text + Photo Card placed on Right Side */}
          <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 w-full">
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-white dark:bg-text-sub flex items-center justify-center shrink-0">
                <img 
                  src="/assets/hero/figma_225ce678.png" 
                  alt="" 
                  className="w-9 h-9 sm:w-11 sm:h-11 object-contain animate-spin-slow" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              <p className="font-['Funnel_Display'] font-normal text-[14px] sm:text-[18px] leading-[1.5em] sm:leading-[1.6em] text-[#161616] dark:text-white break-keep">
                <span className="block sm:whitespace-nowrap">디자인 하고, 코드로 만듭니다.</span>
                <span className="block sm:whitespace-nowrap">가끔은 둘 다 하다가 새벽을 만납니다.</span>
                <span className="block sm:whitespace-nowrap">결국 중요한 건, 잘 돌아가는 예쁜 웹사이트니까요.</span>
              </p>
            </div>

            {/* Photo Thumbnail Card placed on Right Side of Description Text in Breakpoint Mode */}
            <div className="w-27.5 sm:w-40 h-23.75 sm:h-32.5 bg-accent-purple dark:bg-accent-lime rounded-[18px] sm:rounded-[26px] flex items-center justify-center relative overflow-hidden shrink-0">
              <img 
                src="/assets/hero/figma_bb286482.png" 
                alt="Hero Photo Thumbnail" 
                className="w-22.5 sm:w-32.5 h-31.25 sm:h-43.75 object-cover rounded-lg sm:rounded-xl"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>

          {/* Bottom Row: Restored Full Tools Grid aligned to hero_study_icon.svg (Shifted Rightward for Optical Balance on Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 sm:gap-4 font-['Funnel_Display'] text-[13px] sm:text-[18px] leading-[1.6em] text-[#161616] dark:text-text-muted whitespace-nowrap w-full justify-items-start max-w-sm sm:max-w-none mx-auto sm:mx-0 pl-6 sm:pl-0"> {/* token-exempt: mobile tools grid layout */}
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol1.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol2.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol3.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 flex flex-col items-start">
              {toolsCol4.map((t, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <img src="/assets/icons/hero_study_icon.svg" alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain shrink-0 dark:invert" onError={(e) => e.target.style.display = 'none'} />
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
