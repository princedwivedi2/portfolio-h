'use client';

import { KeyboardEvent } from 'react';

// Hook to handle keyboard navigation for interactive elements
export const useKeyboardNavigation = () => {
  // Handle Enter or Space key press for interactive elements that aren't native buttons
  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
    callback: () => void
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return { handleKeyDown };
};

// Hook to force focus outline for keyboard users only
export const useFocusOutline = () => {
  // This would be used in a component that needs to adjust focus styles
  // For keyboard users, we keep the outline, for mouse users, we might hide it
  if (typeof window !== 'undefined') {
    document.body.addEventListener('mousedown', () => {
      document.body.classList.add('using-mouse');
    });

    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.remove('using-mouse');
      }
    });
  }
};

// You would add this CSS to globals.css:
// .using-mouse *:focus { outline: none; }
