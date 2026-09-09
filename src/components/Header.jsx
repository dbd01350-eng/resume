import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import sparkleData from '../assets/Sparkle.json';

export default function Header({ onOpenContact, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!lottieContainerRef.current) return;
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: sparkleData,
    });
    anim.setSpeed(2.0);

    return () => anim.destroy();
  }, []);

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 h-[72px] sm:h-[96px] px-4 sm:px-10 lg:px-[60px] flex items-center transition-colors duration-300 ${
        scrolled ? 'bg-[#FAF7F6]/95 backdrop-blur-[4px] shadow-xs' : 'bg-[#FAF7F6]'
      }`}
    >
      <div className="w-[1664px] mx-auto flex items-center justify-between">
        {/* Nav Logo */}
        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-[10px] sm:gap-[15px] h-[44px] sm:h-[56px] cursor-pointer"
        >
          <div className="relative w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] flex items-center justify-center flex-shrink-0">
            {/* Sparkle Lottie Animation Behind Logo (Centered & Larger, Faster Lime Accent) */}
            <div 
              ref={lottieContainerRef} 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] sm:w-[210px] sm:h-[210px] pointer-events-none z-0 flex items-center justify-center"
            />
            {/* Original Logo Icon (Foreground) */}
            <img 
              src="/assets/logo_icon.svg" 
              alt="Logo" 
              className="relative z-10 w-full h-full object-contain drop-shadow-xs" 
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>
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

          {/* Main GitHub Profile Link Button */}
          <a
            href="https://github.com/dbd01350-eng"
            target="_blank"
            rel="noreferrer"
            className="w-[44px] h-[44px] sm:w-auto sm:h-[56px] px-0 sm:px-5 rounded-[200px] bg-[#161616] text-white flex items-center justify-center gap-2 font-['Funnel_Display'] font-semibold text-xs sm:text-base backdrop-blur-[3px] hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
            title="GitHub 프로필"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span className="hidden sm:inline">GitHub</span>
            <span className="hidden sm:inline">↗</span>
          </a>

          {/* Resume Link Button */}
          <a
            href="#resume"
            onClick={(e) => {
              if (onOpenResume) {
                e.preventDefault();
                onOpenResume();
              }
            }}
            className="w-[44px] h-[44px] sm:w-auto sm:h-[56px] px-0 sm:px-5 rounded-[200px] bg-[#9F8BE7] text-white flex items-center justify-center gap-2 font-['Funnel_Display'] font-semibold text-xs sm:text-base backdrop-blur-[3px] hover:bg-opacity-90 transition-colors cursor-pointer whitespace-nowrap"
            title="이력서"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 fill-none stroke-current shrink-0" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">이력서</span>
            <span className="hidden sm:inline">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
