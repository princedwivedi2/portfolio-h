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
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="text-sm font-medium py-1 px-3 bg-primary/10 text-primary rounded-full">{year}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Key Achievements:</h4>
          <ul className="space-y-1 pl-5 list-disc text-gray-600">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
