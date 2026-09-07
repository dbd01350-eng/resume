import React from 'react';

export default function ValueCard({ title, description, index }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-[var(--color-accent-purple)] transition-all">
      <div className="space-y-3">
        <span className="text-xs font-mono text-gray-400 font-semibold">0{index + 1}</span>
        <h4 className="text-2xl md:text-3xl font-bold font-[var(--font-funnel)] text-[var(--color-text-main)]">
          {title}
        </h4>
      </div>
      <p className="text-base text-[var(--color-text-sub)] font-[var(--font-pretendard)] leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
