import React from 'react';

export default function MarqueeTextSection() {
  const items = ['Desktop', 'Mobile', 'Vibe coding', 'Design'];
  const groupItems = items.concat(items); // 8 items per group for wide screen support

  return (
    <section className="py-8 bg-[#FAF7F6] dark:bg-[#161616] overflow-hidden">
      <div className="overflow-hidden py-4">
        <div className="flex w-max animate-marquee transform-gpu text-[#B2AEAD] dark:text-[#838383] items-center" style={{ animationDuration: '35s', animationTimingFunction: 'linear' }}>
          {/* Group 1 */}
          <div className="flex items-center gap-[48px] pr-[48px]">
            {groupItems.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center gap-[32px]">
                <span className="text-5xl md:text-8xl font-normal font-['Funnel_Display'] tracking-tight whitespace-nowrap flex-shrink-0">
                  {item}
                </span>
                <img 
                  src="/assets/marquee_text_icon.svg" 
                  alt="" 
                  className="w-[81px] h-[81px] object-contain flex-shrink-0" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>

          {/* Group 2 (Exact Duplicate Second Half for 100% Seamless Loop Reset) */}
          <div className="flex items-center gap-[48px] pr-[48px]">
            {groupItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex-shrink-0 flex items-center gap-[32px]">
                <span className="text-5xl md:text-8xl font-normal font-['Funnel_Display'] tracking-tight whitespace-nowrap flex-shrink-0">
                  {item}
                </span>
                <img 
                  src="/assets/marquee_text_icon.svg" 
                  alt="" 
                  className="w-[81px] h-[81px] object-contain flex-shrink-0" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
