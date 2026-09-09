import React, { useEffect } from 'react';

/**
 * Common ModalWrapper component with ESC key handler and ARIA accessibility attributes
 */
export default function ModalWrapper({ 
  isOpen, 
  onClose, 
  children, 
  titleId = 'modal-title', 
  className = '',
  backdropClassName = 'fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn'
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={backdropClassName}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={className}>
        {children}
      </div>
    </div>
  );
}
