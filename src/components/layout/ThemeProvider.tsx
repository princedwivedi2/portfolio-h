'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Initialize with default values instead of undefined
const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => null,
});

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  // On mount, read the preferred theme from localStorage
  useEffect(() => {
    // Always wrap browser API access in try-catch for SSR
    try {
      const storedTheme = localStorage?.getItem('theme') as Theme | null;
      if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        setTheme(storedTheme);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    setMounted(true);
  }, []);

  // When the theme changes, update localStorage and document classes
  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage?.setItem('theme', theme);
      
      // Set the data-theme attribute on the document element
      const root = document.documentElement;
      
      if (theme === 'system') {
        const systemTheme = window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
        root.classList.remove('light', 'dark');
        root.classList.add(systemTheme);
        root.dataset.theme = systemTheme;
      } else {
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        root.dataset.theme = theme;
      }
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  }, [theme, mounted]);

  // Avoid rendering anything until mounted to prevent hydration errors
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}