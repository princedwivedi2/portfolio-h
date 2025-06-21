'use client';

/**
 * Smoothly scrolls to the specified element ID with an offset for the fixed header
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  const headerOffset = 80; // Match this to your header height
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
