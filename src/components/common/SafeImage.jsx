import React, { useState } from 'react';

/**
 * Common SafeImage component that gracefully handles image loading errors
 */
export default function SafeImage({ src, alt = '', fallbackSrc, className = '', ...props }) {
  const [error, setError] = useState(false);

  if (error && !fallbackSrc) {
    return null;
  }

  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
