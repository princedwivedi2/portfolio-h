import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  style?: 'gradient' | 'underline' | 'boxed';
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  style = 'gradient' 
}: SectionHeadingProps) => {
    // Define different title styles
  const titleClasses = {
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
    underline: "text-gray-800 dark:text-gray-100 relative inline-block",
    boxed: "text-gray-800 dark:text-gray-100"
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''}`}>
      {/* Pre-title accent */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`inline-block h-1 w-12 bg-primary mb-3 rounded ${centered ? 'mx-auto' : ''}`}
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`text-3xl md:text-5xl font-bold mb-5 inline-block ${titleClasses[style]}`}
      >
        {title}
        {style === 'underline' && (
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 -z-10 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        )}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`text-gray-600 text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      {style === 'boxed' && (
        <motion.div 
          className={`h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: centered ? 'center' : 'left' }}
        />
      )}
    </div>
  );
};

export default SectionHeading;
