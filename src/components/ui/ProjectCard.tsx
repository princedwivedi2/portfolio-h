import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  achievements: string[];
  year: string;
  index: number;
}

const ProjectCard = ({ title, description, achievements, year, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
    >
      <div className="p-8">
        <motion.div 
          className="flex justify-between items-start mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 + index * 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-sm font-medium py-1 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full shadow-sm">{year}</span>
        </motion.div>
        
        <motion.p 
          className="text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          <h4 className="font-medium text-gray-700 mb-3">Key Achievements:</h4>
          <ul className="space-y-2 pl-5 list-disc text-gray-600">
            {achievements.map((achievement, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.05) + (index * 0.1) }}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
