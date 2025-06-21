'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading 
        title="Get in Touch"
        subtitle="Let's connect and discuss how I can help with your HR needs"
        centered={true}
      />
      
      <div className="grid md:grid-cols-2 gap-12 mt-16">        {/* Contact Form */}
        <ContactForm />
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-md p-8 h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-primary w-5 h-5" />
                </div>                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Email</h3>
                  <a href="mailto:rajputswatisingh78@gmail.com" className="text-primary hover:underline">rajputswatisingh78@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaPhone className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Phone</h3>
                  <a href="tel:+919076646400" className="text-primary hover:underline">+91 90766 46400</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-1">Location</h3>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-gray-700 mb-4">Connect with me</h3>
              <div className="flex space-x-4">                <a 
                  href="https://linkedin.com/in/swati-singh-36b2a1280" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-primary w-6 h-6" />
                </a>
                <a 
                  href="tel:+919076646400" 
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                  aria-label="Phone"
                >
                  <FaPhone className="text-primary w-6 h-6" />
                </a>
                <a 
                  href="mailto:rajputswatisingh78@gmail.com" 
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-200"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-primary w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium text-gray-700 mb-4">Available for</h3>              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Student Training Coordination
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Career Guidance Workshops
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Tech Seminar Facilitation
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  HR & Recruitment Consulting
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">          {[
            {
              question: "What types of training programs do you coordinate?",
              answer: "I specialize in coordinating summer training programs for students interested in technology careers, including PHP development, web design, and other IT disciplines. These programs provide hands-on experience and industry exposure."
            },
            {
              question: "How do you help students with placement?",
              answer: "I organize placement drives, conduct mock interviews, provide resume workshops, and maintain relationships with tech companies looking for fresh talent. My goal is to prepare students thoroughly for their entry into the professional world."
            },
            {
              question: "Do you work with educational institutions?",
              answer: "Yes, I build partnerships with colleges and training institutes to create pathways for students into tech careers. These collaborations include guest lectures, workshops, and coordinated placement activities."
            },
            {
              question: "Can you help with internship opportunities?",
              answer: "Absolutely! I coordinate internship programs between students and tech companies, ensuring both parties benefit from the arrangement. I've successfully placed many students in internship positions that led to full-time employment."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}