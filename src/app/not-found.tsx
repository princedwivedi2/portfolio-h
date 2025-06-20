'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 md:py-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        
        <Link 
          href="/" 
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 inline-flex items-center justify-center"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
