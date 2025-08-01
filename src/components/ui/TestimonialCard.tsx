'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import SkeletonLoader from './SkeletonLoader';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image?: string; // Making this optional since it's not used
  index: number;
}

const TestimonialCard = ({ quote, author, position, index }: TestimonialCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000 + Math.random() * 1000); // Random time between 1000-2000ms for staggered effect
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader type="testimonial" />;
  }

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-elegant p-8 border border-gray-50 relative"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
        y: -5,
        transition: { duration: 0.3 } 
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
        className="absolute -top-5 -left-2"
      >
        <FaQuoteLeft className="text-primary/20 w-12 h-12" />
      </motion.div>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
        className="text-gray-600 mb-8 italic leading-relaxed pl-6 relative text-lg"
      >
        {quote}
      </motion.p>
      
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 mr-5 flex-shrink-0 shadow-sm border-2 border-white">
          {/* We'll use a placeholder for now */}
          <div className="w-full h-full bg-gradient-to-br from-softPurple to-softPink" />
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
