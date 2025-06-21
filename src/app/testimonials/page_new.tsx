import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { FaQuoteLeft } from 'react-icons/fa';

export const metadata = {
  title: 'Testimonials | Swati - HR Professional',
  description: 'Read what colleagues, managers, and employees have to say about working with Swati as an HR professional.',
};

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading 
        title="Testimonials"
        subtitle="What colleagues and clients say about working with me"
        centered={true}
      />
      
      {/* Featured Testimonial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        {testimonials.length > 0 && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <FaQuoteLeft className="text-primary/30 w-16 h-16 mx-auto mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "{testimonials[0].quote}"
              </p>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                  {/* We'll use a placeholder for now */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30" />
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 text-lg">{testimonials[0].author}</h4>
                  <p className="text-gray-500">{testimonials[0].position}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* More Testimonials */}
      <div className="mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(1).map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Client Companies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">Organizations I've Worked With</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* We're using placeholders here that would normally be company logos */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-32 h-16 bg-white rounded-md shadow flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-gray-300">Logo {index + 1}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Would you like to share your experience?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          If we've worked together, I'd love to hear your feedback. Your testimonial can help others understand my approach to HR.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
        >
          Share Your Feedback
        </a>
      </motion.div>
    </div>
  );
}