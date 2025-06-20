import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ children, className = '', delay = 0 }: CardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
