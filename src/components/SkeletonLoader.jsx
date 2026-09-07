import React from 'react';

export default function SkeletonLoader({ className = '' }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-2xl ${className}`} />
  );
}
