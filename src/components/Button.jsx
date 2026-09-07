import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '', href, ...props }) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-[var(--font-funnel)] font-semibold transition-all duration-200 cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-[var(--color-accent-lime)] text-[var(--color-text-main)] hover:bg-[#cbe046] shadow-sm",
    secondary: "bg-[var(--color-accent-purple)] text-white hover:bg-[#8b76d4]",
    dark: "bg-[var(--color-bg-dark)] text-white hover:bg-[#303030]",
    outline: "border border-[var(--color-text-main)] text-[var(--color-text-main)] hover:bg-[var(--color-text-main)] hover:text-white",
    ghost: "text-[var(--color-text-main)] hover:bg-black/5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
