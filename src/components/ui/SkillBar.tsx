'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

interface SkillBarProps {
  name: string;
  level: number;
  description?: string;
  index: number;
}

const SkillBar = ({ name, level, description, index }: SkillBarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state with a staggered effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400 + (index * 150)); // Staggered loading effect
    
    return () => clearTimeout(timer);
  }, [index]);

  if (isLoading) {
    return <SkeletonLoader type="skill" />;
  }

  return (
    <motion.div 
      className="mb-8 transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <motion.div 
        className="flex justify-between items-center mb-3"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5 }}
      >
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <span className="text-sm font-semibold py-1 px-3 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full shadow-sm border border-primary/5">
          {level}%
        </span>
      </motion.div>
      
      <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient"
          style={{ 
            width: `${level}%`,
            backgroundSize: '200% 100%',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: index * 0.15 + 0.3,
            ease: "easeOut"
          }}
        />
      </div>
      
      {description && (
        <motion.p 
          className="text-sm text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SkillBar;
