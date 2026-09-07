import React from 'react';

export default function Tag({ children, variant = 'default', className = '' }) {
  const baseStyles = "inline-block px-3 py-1.5 rounded-full text-sm font-[var(--font-funnel)] transition-colors";
  
  const variants = {
    default: "bg-white/80 border border-gray-200 text-[var(--color-text-sub)] shadow-xs",
    dark: "bg-[var(--color-bg-dark)] text-white",
    purple: "bg-[#F3EFEF] text-[var(--color-accent-purple)] font-medium",
    lime: "bg-[var(--color-accent-lime)] text-[var(--color-text-main)] font-semibold"
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
}
