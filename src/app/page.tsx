'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { bio } from '@/data/bio';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import ProfileAvatar from '@/components/ui/ProfileAvatar';

export default function Home() {
  return (
    <>      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16">            
            {/* Image */}
            <motion.div 
              className="lg:w-2/5"
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-softPurple to-softPink rounded-full blur-xl opacity-30 animate-pulse" />
                <ProfileAvatar 
                  size="xl" 
                  // When you have an actual image, uncomment and provide the path:
                  // imageUrl="/images/profile.jpg" 
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:w-3/5 space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-lg font-medium inline-block px-4 py-1 rounded-full bg-primary/5 border border-primary/10"
              >
                {bio.welcomeMessage}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                {bio.intro}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                {bio.description}
              </motion.p>              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href="/about" 
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Learn More <FaArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href="/contact" 
                    className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '8+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'People Recruited', value: '300+' },
              { label: 'Happy Employees', value: '1000+' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What I Do"
            subtitle="As an HR Professional specialized in the IT sector, I combine deep industry knowledge with strategic human resource practices."
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Recruitment & Selection",
                description: "Sourcing and hiring the best talent for technical and non-technical roles.",
                icon: "👥"
              },
              {
                title: "Employee Engagement",
                description: "Creating strategies to keep employees motivated, productive, and connected.",
                icon: "🌟"
              },
              {
                title: "Performance Management",
                description: "Designing and implementing effective performance evaluation systems.",
                icon: "📈"
              },
              {
                title: "Onboarding & Training",
                description: "Developing comprehensive onboarding programs and learning opportunities.",
                icon: "🚀"
              },
              {
                title: "HR Analytics",
                description: "Using data to drive strategic HR decisions and measure success.",
                icon: "📊"
              },
              {
                title: "Culture Building",
                description: "Fostering positive workplace culture aligned with company values.",
                icon: "🏗️"
              }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to transform your HR approach?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
          >
            Let's connect and discuss how I can help your organization thrive through effective human resource strategies.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}