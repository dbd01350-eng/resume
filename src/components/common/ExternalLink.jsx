import React from 'react';

/**
 * Common ExternalLink component for external links with target="_blank" and accessibility attributes
 */
export default function ExternalLink({ 
  href, 
  children, 
  className = '', 
  showArrow = false, 
  ariaLabel, 
  title,
  ...props 
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel || (typeof children === 'string' ? `${children} 외부 링크` : undefined)}
      title={title || (typeof children === 'string' ? children : undefined)}
      className={className}
      {...props}
    >
      {children}
      {showArrow && <span className="text-xs opacity-60">↗</span>}
    </a>
  );
}
