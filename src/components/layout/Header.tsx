'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/utils/scrollUtils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Work', path: '#work' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu (e.g., after clicking a link)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-elegant py-5">
      <div className="container mx-auto px-4 flex justify-between items-center">        <button 
          onClick={() => scrollToSection('home')} 
          className="font-bold text-2xl bg-transparent border-none p-0 cursor-pointer"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Swati Singh
          </motion.span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, i) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >                <button 
                  onClick={() => scrollToSection(item.path.replace('#', ''))}
                  className="text-gray-600 hover:text-primary font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-gray-600 hover:text-primary"
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <nav className="container mx-auto py-4 px-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>                    <button 
                      className="text-gray-600 hover:text-primary font-medium transition-colors duration-200 block py-2 w-full text-left"
                      onClick={() => {
                        closeMenu();
                        scrollToSection(item.path.replace('#', ''));
                      }}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
