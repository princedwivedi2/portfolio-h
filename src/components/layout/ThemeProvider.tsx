'use client';

import { createContext, useState, useEffect } from 'react';

// Create a context for theme management
export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: string) => {},
  toggleTheme: () => {},
});

export default function ThemeProvider({ 
  children,
}: { 
  children: React.ReactNode 
}) {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  // On mount, get the preferred theme
  useEffect(() => {
    // Set the theme state to avoid hydration mismatch
    setTheme('light'); // Default to light

    // Defer getting the stored theme until after hydration
    const getStoredTheme = () => {
      try {
        // Check if user has previously set theme
        const storedTheme = localStorage.getItem('theme');
        
        // If the user has explicitly chosen a theme
        if (storedTheme) {
          setTheme(storedTheme);
          return;
        }
        
        // Otherwise check for system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    };

    // Run after hydration
    const timer = setTimeout(() => {
      getStoredTheme();
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  // Update the theme class and local storage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
