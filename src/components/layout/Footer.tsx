'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-white to-gray-50 py-16 mt-24 border-t border-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerAnimation}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">            
            <Link href="/" className="font-bold text-2xl inline-block">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Swati Singh
              </motion.span>
            </Link>
            <p className="text-gray-600 mt-3 max-w-sm">HR Manager | Talent Acquisition | Training & Placement</p>
            <motion.div 
              className="flex items-center text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Made with <FaHeart className="text-secondary mx-1" size={14} /> in India
            </motion.div>
          </div>          <motion.div 
            className="flex flex-col md:flex-row md:space-x-16"
            variants={staggerItems}
          >
            <motion.div variants={itemAnimation} className="mb-8 md:mb-0">
              <h4 className="font-semibold text-gray-800 mb-4 text-lg">Quick Links</h4>
              <motion.ul variants={staggerItems} className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Skills', path: '/skills' },
                  { name: 'Work', path: '/work' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <motion.li key={link.name} variants={itemAnimation}>
                    <Link 
                      href={link.path} 
                      className="text-gray-600 hover:text-primary transition-all duration-200 hover:pl-1"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div variants={itemAnimation}>
              <h4 className="font-semibold text-gray-800 mb-4 text-lg">Connect</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://linkedin.com/in/swati-singh-36b2a1280" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white p-3 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100"
                  aria-label="LinkedIn"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="text-primary w-5 h-5" />
                </motion.a>
                
                <motion.a 
                  href="tel:+919076646400"
                  className="bg-white p-3 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100"
                  aria-label="Phone"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.003 5.884L10.243 1.664C11.133 1.219 12.131 1 13.143 1H13.379C15.228 1 16.95 2.088 17.893 3.772L19.296 6.202C19.806 7.144 19.871 8.275 19.475 9.273C19.079 10.27 18.266 11.04 17.269 11.436C15.524 12.146 13.683 12.567 11.812 12.685C9.378 12.84 6.933 13.21 4.528 13.795C2.564 14.269 1.034 15.722 0.56 17.686C0.086 19.651 0.636 21.705 2.003 23.112V5.884Z" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="mailto:rajputswatisingh78@gmail.com" 
                  className="bg-white p-3 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 border border-gray-100"
                  aria-label="Email"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="text-primary w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8 text-center"
          variants={itemAnimation}
        >
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Swati Singh. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Phone: 90766 46400 | Email: rajputswatisingh78@gmail.com
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
