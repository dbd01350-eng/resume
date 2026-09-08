import React from 'react';
import portfolioData from '../data/portfolioData.js';

export default function HowIWorkSection() {
  const { values, marqueeTexts } = portfolioData;

  return (
    <section className="py-20 md:py-32 figma-container space-y-20">
      {/* Section Header */}
      <div className="space-y-4">
        <span className="text-sm font-semibold font-[var(--font-funnel)] text-[#9F8BE7] uppercase tracking-wider block"> {/* token-exempt: section header badge */}
          How I work
        </span>
        <h2 className="figma-title-44 text-3xl md:text-5xl font-semibold text-[#161616]"> {/* token-exempt: heading typography */}
          Design, Development, Branding &amp; Vibe coding
        </h2>
      </div>

      {/* Marquee Text Track (Height: 144px, Icon: 81px x 81px) */}
      <div className="overflow-hidden py-6 bg-[#FAF7F6] border-y border-gray-200 text-[#B2AEAD] h-36 flex items-center"> {/* token-exempt: marquee container */}
        <div className="whitespace-nowrap flex space-x-12 animate-marquee font-[var(--font-funnel)] font-bold text-4xl md:text-6xl uppercase tracking-tight"> {/* token-exempt: marquee typography */}
          {marqueeTexts.map((text, idx) => (
            <span key={idx} className="flex items-center space-x-8">
              <span>{text}</span>
              <span className="text-[#9F8BE7]">•</span> {/* token-exempt: bullet dot */}
            </span>
          ))}
          {marqueeTexts.map((text, idx) => (
            <span key={`dup-${idx}`} className="flex items-center space-x-8">
              <span>{text}</span>
              <span className="text-[#9F8BE7]">•</span> {/* token-exempt: bullet dot */}
            </span>
          ))}
        </div>
      </div>

      {/* 4 Value Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((val, idx) => (
          <div 
            key={val.id}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#9F8BE7] transition-all group" // token-exempt: card hover border
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-mono text-[#838383] font-bold">0{idx + 1}</span> {/* token-exempt: card index badge */}
              {val.icon && (
                <img 
                  src={val.icon} 
                  alt={val.title} 
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
            </div>

            <div className="space-y-4">
              <h3 className="figma-title-30 text-2xl font-bold text-[#161616]"> {/* token-exempt: card title */}
                {val.title}
              </h3>
              <p className="figma-body-16 text-base text-[#303030] leading-[2em] whitespace-pre-line"> {/* token-exempt: card description */}
                {val.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
