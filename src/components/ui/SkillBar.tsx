import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  description?: string;
  index: number;
}

const SkillBar = ({ name, level, description, index }: SkillBarProps) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <span className="text-sm font-medium text-gray-600">{level}%</span>
      </div>
      
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${level}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        />
      </div>
      
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </motion.div>
  );
};

export default SkillBar;
