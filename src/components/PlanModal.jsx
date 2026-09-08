import React, { useState, useEffect } from 'react';

export default function PlanModal({ isOpen, onClose, title, images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slide'); // 'slide' or 'scroll'

  useEffect(() => {
    setCurrentIndex(0);
  }, [images, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && viewMode === 'slide') {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowLeft' && viewMode === 'slide') {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, viewMode, onClose]);

  if (!isOpen || images.length === 0) return null;

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn"> {/* token-exempt: modal backdrop layout */}
      <div className="w-full max-w-6xl h-[92vh] bg-bg-dark text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800 relative"> {/* token-exempt: modal main container */}
        
        {/* Header */}
        <div className="px-5 py-4 bg-bg-dark border-b border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent-purple inline-block" />
            <h2 className="font-semibold text-base sm:text-lg font-['Funnel_Display'] leading-none"> {/* token-exempt: font style */}
              {title}
            </h2>
            <span className="text-xs text-neutral-400 bg-white/10 px-2.5 py-1 rounded-full font-['Pretendard']"> {/* token-exempt: font style */}
              {viewMode === 'slide' ? `${currentIndex + 1} / ${images.length}` : `전체 ${images.length}페이지`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <button
              onClick={() => setViewMode(viewMode === 'slide' ? 'scroll' : 'slide')}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 transition-colors font-['Pretendard'] cursor-pointer" // token-exempt: font style
            >
              {viewMode === 'slide' ? '📜 전체 스크롤 보기' : '🖼️ 슬라이드 보기'}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 relative bg-neutral-950 overflow-hidden">
          {viewMode === 'slide' ? (
            /* Slide View Mode */
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-6 select-none">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-bg-dark/80 hover:bg-bg-dark border border-neutral-700 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                aria-label="Previous slide"
              >
                ◀
              </button>

              {/* Slide Image */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={images[currentIndex]}
                  alt={`${title} Slide ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl transition-all duration-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/figma_8bed76a4.png';
                  }}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={currentIndex === images.length - 1}
                className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-bg-dark/80 hover:bg-bg-dark border border-neutral-700 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
                aria-label="Next slide"
              >
                ▶
              </button>
            </div>
          ) : (
            /* Scroll View Mode */
            <div className="absolute inset-0 overflow-y-auto p-4 sm:p-8 space-y-6 flex flex-col items-center">
              {images.map((imgUrl, idx) => (
                <div key={idx} className="w-full max-w-4xl bg-bg-dark rounded-xl overflow-hidden border border-neutral-800 shadow-md shrink-0">
                  <div className="px-3 py-1.5 bg-neutral-900 text-xs text-neutral-400 font-['Pretendard']"> {/* token-exempt: font style */}
                    Page {idx + 1}
                  </div>
                  <img
                    src={imgUrl}
                    alt={`${title} Page ${idx + 1}`}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/figma_8bed76a4.png';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Thumbnail Bar (Only in Slide Mode) */}
        {viewMode === 'slide' && (
          <div className="h-20 bg-bg-dark border-t border-neutral-800 px-4 py-2 flex items-center gap-2 overflow-x-auto overflow-y-hidden shrink-0 select-none">
            {images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-14 w-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'border-accent-purple scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/figma_8bed76a4.png';
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
