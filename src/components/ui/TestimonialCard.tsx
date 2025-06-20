import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
  index: number;
}

const TestimonialCard = ({ quote, author, position, image, index }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <FaQuoteLeft className="text-primary/20 w-10 h-10 mb-4" />
      
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4 flex-shrink-0">
          {/* We'll use a placeholder for now */}
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
        </div>
        
        <div>
          <h4 className="font-medium text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
