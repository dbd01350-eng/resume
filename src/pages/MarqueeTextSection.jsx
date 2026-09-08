import React from 'react';

export default function MarqueeTextSection() {
  const items = ['Desktop', 'Mobile', 'Vibe coding', 'Design'];

  return (
    <section className="py-8 bg-[#FAF7F6] overflow-hidden"> {/* token-exempt: section bg */}
      <div className="overflow-hidden py-4">
        <div className="whitespace-nowrap flex gap-[48px] animate-marquee text-[#B2AEAD] items-center"> {/* token-exempt: marquee layout */}
          {items.concat(items).concat(items).concat(items).map((item, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center gap-[32px]"> {/* token-exempt: marquee item gap */}
              <span className="text-5xl md:text-8xl font-normal font-['Funnel_Display'] tracking-tight whitespace-nowrap flex-shrink-0"> {/* token-exempt: font style */}
                {item}
              </span>
              <img 
                src="/assets/marquee_text_icon.svg" 
                alt="" 
                className="w-[81px] h-[81px] object-contain flex-shrink-0" // token-exempt: marquee icon size
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
