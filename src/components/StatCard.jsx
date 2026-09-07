import React from 'react';

export default function StatCard({ label, value, highlight = false }) {
  return (
    <div 
      className={`p-6 md:p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${
        highlight 
          ? 'bg-[var(--color-bg-dark)] text-white' 
          : 'bg-white text-[var(--color-text-main)] shadow-sm border border-gray-100'
      }`}
    >
      <div className="text-5xl md:text-7xl font-bold font-[var(--font-funnel)] tracking-tight mb-2">
        {value}
      </div>
      <div className={`text-base md:text-lg font-[var(--font-funnel)] font-medium ${
        highlight ? 'text-gray-300' : 'text-[var(--color-text-sub)]'
      }`}>
        {label}
      </div>
    </div>
  );
}
