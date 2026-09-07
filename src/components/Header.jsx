import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 h-[72px] sm:h-[120px] px-4 sm:px-10 lg:px-[60px] flex items-center transition-colors duration-300 ${
        scrolled ? 'bg-[#FAF7F6]/95 backdrop-blur-[4px] shadow-xs' : 'bg-[#FAF7F6]'
      }`}
    >
      <div className="w-[1664px] mx-auto flex items-center justify-between">
        {/* Nav Logo */}
        <a href="#home" className="flex items-center gap-[10px] sm:gap-[15px] h-[44px] sm:h-[56px]">
          <img 
            src="/assets/logo_icon.svg" 
            alt="Logo" 
            className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] object-contain" 
            onError={(e) => e.target.style.display = 'none'} 
          />
          <div className="font-['Funnel_Display'] font-semibold text-[15px] sm:text-[22px] leading-[1.2] sm:leading-[26px] text-[#161616] whitespace-nowrap">
            <div className="whitespace-nowrap">Daeun Sim</div>
            <div className="whitespace-nowrap text-[13px] sm:text-[22px]">Portfolio</div>
          </div>
        </a>

        {/* Nav Actions (ArrowButton, TextIconButton, nav-hamburger) */}
        <div className="flex items-center gap-3 sm:gap-[20px] h-[44px] sm:h-[56px]">
          {/* ArrowButton */}
          <a 
            href="#works" 
            className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-[200px] border border-[#161616] flex items-center justify-center backdrop-blur-[3px] hover:bg-[#161616] hover:text-white transition-colors text-[#161616]"
          >
            <img 
              src="/assets/arrow_button_icon.svg" 
              alt="Arrow" 
              className="w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] object-contain" 
              onError={(e) => e.target.style.display = 'none'} 
            />
          </a>

          {/* TextIconButton "Contact me" (Hidden on Mobile) */}
          <a 
            href="#contact" 
            className="hidden sm:flex h-[56px] px-[22px] rounded-[200px] border border-[#161616] items-center justify-center gap-2 font-['Funnel_Display'] font-semibold text-[22px] leading-[33px] text-[#161616] backdrop-blur-[3px] hover:bg-[#161616] hover:text-white transition-colors"
          >
            <span>Contact me</span>
            <img 
              src="/assets/text_icon_button_icon.svg" 
              alt="" 
              className="w-[26px] h-[26px] object-contain" 
              onError={(e) => e.target.style.display = 'none'} 
            />
          </a>

          {/* Nav Hamburger */}
          <div className="w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] rounded-[50px] bg-[#161616] flex flex-col items-center justify-center gap-[6px] sm:gap-[8px] cursor-pointer">
            <span className="w-[22px] sm:w-[28px] h-[2.5px] sm:h-[3px] bg-white rounded-full block" />
            <span className="w-[22px] sm:w-[28px] h-[2.5px] sm:h-[3px] bg-white rounded-full block" />
          </div>
        </div>
      </div>
    </header>
  );
}
