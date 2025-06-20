'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { bio } from '@/data/bio';
import Card from '@/components/ui/Card';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* About Hero */}
      <SectionHeading 
        title="About Me"
        subtitle="Get to know me and my approach to HR in the technology sector"
      />
      
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            {bio.longDescription}
          </p>
          
          <p className="text-gray-600 mb-6 text-lg">
            Throughout my career, I've worked at the intersection of human resources and technology, 
            developing strategies that address the unique challenges of the IT industry. From sourcing 
            specialized technical talent to creating retention programs in a competitive market, I take 
            pride in delivering HR solutions that contribute to business success.
          </p>
          
          <p className="text-gray-600 text-lg">
            I believe that effective HR goes beyond administrative functions – it's about creating 
            environments where people can flourish professionally and personally, ultimately driving 
            organizational success.
          </p>
        </motion.div>
        
        {/* Values */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            My Values
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bio.values.map((value, index) => (
              <Card key={index} delay={index * 0.1}>
                <h4 className="text-xl font-medium text-primary mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Experience Timeline */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20"
      >
        <SectionHeading 
          title="Professional Journey"
          subtitle="My experience in the HR field"
        />
        
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {/* Timeline Items */}
          {bio.experience.map((exp, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="md:w-1/2 flex justify-end pr-8">
                <div className="relative">
                  {/* Circle on timeline */}
                  <div className="absolute right-[-37px] md:right-[-45px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
                  
                  <div className={`bg-white p-6 rounded-lg shadow md:mx-4 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <span className="block text-sm text-gray-500 mb-1">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                    <h4 className="text-primary font-medium mb-3">{exp.company}</h4>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Education & Certifications */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionHeading title="Education" />
          
          <div className="mt-8 space-y-6">
            {bio.education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{edu.institution}</span>
                  <span className="text-primary font-medium">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <SectionHeading title="Certifications" />
          
          <div className="mt-8 space-y-6">
            {bio.certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-1">{cert.name}</h3>
                <span className="text-primary font-medium">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}