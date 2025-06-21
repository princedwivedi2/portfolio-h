'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackToTop from '../ui/BackToTop';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {children}
        <BackToTop />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout;
