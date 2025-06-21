import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none';
}

const Card = ({ 
  children, 
  className = '', 
  delay = 0, 
  hoverEffect = 'lift'
}: CardProps) => {
  // Define different hover animations based on the effect prop
  const hoverAnimations = {
    lift: { y: -8, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)" },
    scale: { scale: 1.02 },
    glow: { boxShadow: "0 0 30px 5px rgba(99, 102, 241, 0.15)" },
    none: {}
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={hoverAnimations[hoverEffect]}
      className={`bg-white/80 dark:bg-neutral-800/70 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-gray-50 dark:border-gray-700 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
