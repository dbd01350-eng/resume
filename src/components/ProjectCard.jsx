import React from 'react';
import Tag from './Tag.jsx';

export default function ProjectCard({ title, type, links = [], tags = [], className = '', onLinkClick }) {
  return (
    <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="space-y-4">
        {/* Type badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-[#FAF7F6] text-accent-purple rounded-full font-['Funnel_Display']"> {/* token-exempt: badge style */}
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold font-['Pretendard'] text-text-main leading-snug"> {/* token-exempt: heading font */}
          {title}
        </h3>

        {/* Action Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url || '#'}
                onClick={(e) => onLinkClick && onLinkClick(e, link)}
                className="inline-flex items-center text-sm font-semibold font-['Funnel_Display'] underline text-text-main hover:text-accent-purple transition-colors cursor-pointer" // token-exempt: link font
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
