import React from 'react';
import Tag from './Tag.jsx';

export default function ProjectCard({ title, type, links = [], tags = [], className = '' }) {
  return (
    <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="space-y-4">
        {/* Type badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-[#F3EFEF] text-[var(--color-accent-purple)] rounded-full font-[var(--font-funnel)]">
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold font-[var(--font-pretendard)] text-[var(--color-text-main)] leading-snug">
          {title}
        </h3>

        {/* Action Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || '#'}
                className="inline-flex items-center text-sm font-semibold font-[var(--font-funnel)] underline text-[var(--color-text-main)] hover:text-[var(--color-accent-purple)] transition-colors"
              >
                {link.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Tech Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          {tags.map((tag, idx) => (
            <Tag key={idx} variant="default">
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}
