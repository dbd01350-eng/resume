import React from 'react';

export default function CTASection({ onOpenContact }) {
  return (
    <section id="contact" className="py-[40px] md:py-[80px] px-4 sm:px-10 lg:px-12 xl:px-[80px] max-w-[1920px] mx-auto">
      {/* Dark Block: cta-block (Figma Node #7006:2079, bg #161616, borderRadius 200px, padding 80px) */}
      <div className="bg-[#161616] text-white rounded-[32px] sm:rounded-[60px] lg:rounded-[200px] p-6 sm:p-10 lg:p-12 xl:p-[80px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-[60px] min-h-[480px] md:min-h-[540px] lg:min-h-[580px] xl:min-h-[640px]">
        
        {/* cta-background image (Figma Node #7006:2080) */}
        <img 
          src="/assets/figma_58d0ae89.png" 
          alt="" 
          className="absolute right-0 top-0 w-[45%] sm:w-[55%] md:w-[65%] lg:w-auto h-auto lg:h-full object-contain object-right-top opacity-30 lg:opacity-35 pointer-events-none z-0" 
          onError={(e) => e.target.style.display = 'none'}
        />

        {/* Left Column: cta-content (Figma Node #7006:2081, mode: column, gap: 60px) */}
        <div className="flex flex-col justify-center gap-6 sm:gap-10 xl:gap-[60px] z-10 max-w-3xl w-full flex-shrink-0 lg:w-auto">
          
          {/* cta-heading (#7006:2082) & cta-title-group (#7119:539, mode: column, gap: 10px) */}
          <div className="flex flex-col justify-center gap-[6px] sm:gap-[10px]">
            {/* cta-title-row-1 (#7119:688, mode: row, gap: 10px) */}
            <div className="flex flex-nowrap items-center gap-1.5 min-[380px]:gap-2 sm:gap-[10px] whitespace-nowrap">
              <div className="w-[26px] h-[26px] min-[380px]:w-[34px] min-[380px]:h-[34px] sm:w-[46px] sm:h-[46px] md:w-[54px] md:h-[54px] lg:w-[60px] lg:h-[60px] xl:w-[76px] xl:h-[76px] 2xl:w-[80px] 2xl:h-[80px] flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/figma_d4c367a2.png" 
                  alt="" 
                  className="w-full h-full object-contain" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <h2 className="font-['Funnel_Display'] font-semibold text-[clamp(20px,5vw,24px)] min-[380px]:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[88px] 2xl:text-[120px] leading-[1.1] text-white opacity-90 tracking-tight whitespace-nowrap flex-shrink-0">
                Let's talk about
              </h2>
            </div>

            {/* Row 2: "your project" text node (#7119:686) */}
            <div className="whitespace-nowrap">
              <h2 className="font-['Funnel_Display'] font-semibold text-[clamp(20px,5vw,24px)] min-[380px]:text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[88px] 2xl:text-[120px] leading-[1.1] text-white opacity-90 tracking-tight whitespace-nowrap flex-shrink-0">
                your project
              </h2>
            </div>
          </div>

          {/* cta-button-wrap (Figma Node #7006:2089, AnimatedCTAButton #7006:2090) */}
          <div>
            <a 
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="inline-flex items-center space-x-3 sm:space-x-[20px] bg-[#DDF160] text-[#161616] px-6 py-3 sm:px-8 sm:py-4 xl:px-[36px] xl:py-[22px] rounded-[200px] font-['Funnel_Display'] font-semibold text-[18px] sm:text-[22px] md:text-[28px] xl:text-[34px] leading-tight hover:bg-[#cbe046] transition-colors cursor-pointer"
            >
              <span>Contact me</span>
              <span className="text-[22px] sm:text-[26px] md:text-[30px] xl:text-[36px]">→</span>
            </a>
          </div>

        </div>

        {/* Right Column: CTA Image Artwork Stack */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-none lg:w-1/2 h-[220px] sm:h-[270px] md:h-[340px] lg:h-[420px] xl:h-[500px] 2xl:h-[540px] flex items-center justify-center z-10 mx-auto lg:mx-0 flex-shrink-0">
          {/* Large Helmet Image */}
          <img 
            src="/assets/figma_ffd7f43c.png" 
            alt="CTA Image Large" 
            className="absolute bottom-[40px] sm:bottom-[30px] md:bottom-[25px] lg:bottom-[20px] xl:bottom-[15px] right-[20px] sm:right-[15px] md:right-[10px] lg:right-[0px] h-[170px] sm:h-[220px] md:h-[280px] lg:h-[360px] xl:h-[440px] 2xl:h-[480px] max-h-full object-contain drop-shadow-2xl" 
            onError={(e) => e.target.style.display = 'none'}
          />
          {/* Small Bouncing Image */}
          <img 
            src="/assets/figma_9b50fe7b.png" 
            alt="CTA Image Small" 
            className="absolute bottom-[20px] sm:bottom-[15px] md:bottom-[10px] lg:bottom-[5px] xl:bottom-[0px] right-[140px] sm:right-[180px] md:right-[240px] lg:right-[290px] xl:right-[380px] 2xl:right-[440px] w-[70px] sm:w-[95px] md:w-[125px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px] object-contain animate-bounce" 
            style={{ animationDuration: '3s' }}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>

      </div>
    </section>
  );
}
