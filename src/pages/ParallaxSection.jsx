import React, { useRef, useState } from 'react';

export default function ParallaxSection({ onOpenResume }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-[40px] md:py-[80px] px-4 sm:px-10 lg:px-12 xl:px-[80px] max-w-[1920px] mx-auto"> {/* token-exempt: section layout */}
      <div className="flex flex-col lg:flex-row items-end justify-between gap-6 lg:gap-8">
        {/* Left Column: Video Showcase with expanded width */}
        <div 
          onClick={handleTogglePlay}
          className="w-full lg:w-[72%] xl:w-[75%] h-[220px] sm:h-[400px] md:h-[500px] lg:h-[640px] rounded-[24px] sm:rounded-[40px] overflow-hidden relative shadow-2xl bg-transparent cursor-pointer group flex-shrink-0 isolate transform-gpu" // token-exempt: parallax video container sizing
        >
          {/* HTML5 Video element */}
          <video 
            ref={videoRef}
            loop 
            playsInline 
            poster="/assets/figma_5681b522.webp" 
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover rounded-[24px] sm:rounded-[40px] block" // token-exempt: video rounded corners
          >
            <source src="/assets/showcase_video.mp4" type="video/mp4" />
            <source src="/assets/hero_video.mp4" type="video/mp4" />
            {/* Poster fallback image */}
            <img 
              src="/assets/figma_5681b522.webp" 
              alt="Showcase Video Poster" 
              className="w-full h-full object-cover" 
              onError={(e) => e.target.style.display = 'none'}
            />
          </video>

          {/* Play Overlay (Visible when not playing) */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center space-y-2 sm:space-y-4">
              <div className="w-12 h-12 sm:w-[100px] sm:h-[100px] rounded-full bg-white/90 backdrop-blur-md text-[#161616] flex items-center justify-center font-bold text-lg sm:text-3xl shadow-2xl group-hover:scale-110 transition-transform"> {/* token-exempt: play button sizing */}
                ▶
              </div>
              <span className="font-['Funnel_Display'] text-white font-semibold text-xs sm:text-xl tracking-wider uppercase drop-shadow-md"> {/* token-exempt: font style */}
                Click to Play
              </span>
            </div>
          )}
        </div>

        {/* Right Column: Horizontally Aligned Buttons ONLY (Bottom Aligned with Video) */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 flex-wrap lg:flex-nowrap pb-2 sm:pb-4">
          {/* Resume GitHub Repository Link Button */}
          <a
            href="https://github.com/dbd01350-eng/resume" // token-exempt: external resume repo link
            target="_blank"
            rel="noreferrer"
            className="py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl sm:rounded-[200px] bg-bg-dark dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-[#161616] font-semibold font-['Funnel_Display'] text-sm sm:text-base inline-flex items-center gap-2.5 sm:gap-3 transition-all shadow-md group cursor-pointer whitespace-nowrap" // token-exempt: button styling
            title="Resume GitHub Repository"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Resume</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </a>

          {/* Figma Design Link Button */}
          <a
            href="https://www.figma.com/design/r4GMpAA7dQrAadLlmcQVGn/%EC%8B%AC%EB%8B%A4%EC%9D%80-%EC%9D%B4%EB%A0%A5%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=7227-600&t=sRrX4rlgyUj93qVx-1" // token-exempt: external figma design link
            target="_blank"
            rel="noreferrer"
            className="py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl sm:rounded-[200px] bg-[#DDF160] hover:bg-[#cbe046] text-[#161616] font-semibold font-['Funnel_Display'] text-sm sm:text-base inline-flex items-center gap-2.5 sm:gap-3 transition-all shadow-md group cursor-pointer whitespace-nowrap"
            title="Figma 디자인 시안"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM8 0C5.792 0 4 1.792 4 4s1.792 4 4 4h4V0H8zm0 8c-2.208 0-4 1.792-4 4s1.792 4 4 4h4V8H8zm8 0c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm0-8h-4v8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4z"/>
            </svg>
            <span>Figma</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
