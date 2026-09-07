import React, { useRef, useState } from 'react';

export default function ParallaxSection() {
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
    <section className="py-8 sm:py-[80px] px-4 sm:px-12 xl:px-[80px] max-w-[1920px] mx-auto min-h-[300px] lg:h-[960px] flex items-center justify-center">
      {/* parallax-wrapper & parallax-container (Mobile Aspect Ratio & Rounded Corners Optimized) */}
      <div 
        onClick={handleTogglePlay}
        className="w-full h-[240px] sm:h-[480px] md:h-[600px] lg:h-[800px] rounded-[24px] sm:rounded-[50px] overflow-hidden relative shadow-2xl bg-black cursor-pointer group"
      >
        {/* HTML5 Video element (Click to Play, NO autoPlay) */}
        <video 
          ref={videoRef}
          loop 
          playsInline 
          poster="/assets/figma_5681b522.png" 
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover rounded-[24px] sm:rounded-[50px]"
        >
          <source src="/assets/showcase_video.mp4" type="video/mp4" />
          <source src="/assets/hero_video.mp4" type="video/mp4" />
          {/* Poster fallback image */}
          <img 
            src="/assets/figma_5681b522.png" 
            alt="Showcase Video Poster" 
            className="w-full h-full object-cover" 
            onError={(e) => e.target.style.display = 'none'}
          />
        </video>

        {/* Play Overlay (Visible when not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center space-y-2 sm:space-y-4">
            <div className="w-12 h-12 sm:w-[100px] sm:h-[100px] rounded-full bg-white/90 backdrop-blur-md text-[#161616] flex items-center justify-center font-bold text-lg sm:text-3xl shadow-2xl group-hover:scale-110 transition-transform">
              ▶
            </div>
            <span className="font-['Funnel_Display'] text-white font-semibold text-xs sm:text-xl tracking-wider uppercase drop-shadow-md">
              Click to Play
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
