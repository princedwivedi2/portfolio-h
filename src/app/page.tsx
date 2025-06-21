'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { bio } from '@/data/bio';
import { FaArrowRight } from 'react-icons/fa';
import ProfileAvatar from '@/components/ui/ProfileAvatar';
import { scrollToSection } from '@/utils/scrollUtils';

// Import components for single-page application
import ContactForm from '@/components/contact/ContactForm';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SkillBar from '@/components/ui/SkillBar';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Home() {
  return (    <>
      {/* Hero Section */}
      <section id="home" className="py-20 md:py-28">
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
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>                  <button 
                    onClick={() => scrollToSection('about')}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Learn More <FaArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Get in Touch
                  </button>
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
          >            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300 inline-block"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my professional background and approach to HR management"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-softPurple to-softPink rounded-2xl blur-xl opacity-30" />
                  <ProfileAvatar 
                    size="lg" 
                    showBackground={true}
                  />
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {bio.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-6 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {bio.longDescription}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                {[
                  { label: "Name", value: "Swati Singh" },
                  { label: "Email", value: "rajputswatisingh78@gmail.com" },
                  { label: "Phone", value: "+91 90766 46400" },
                  { label: "Location", value: "Indore, Madhya Pradesh" },
                ].map((item, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="text-sm uppercase text-gray-500 mb-1">{item.label}</h4>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Skills" 
            subtitle="Areas of expertise and professional capabilities"
          />
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    description={skill.description}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-12">HR Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    description={skill.description}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>      {/* Work Experience Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Projects" 
            subtitle="Selected HR initiatives and accomplishments"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  achievements={project.achievements}
                  year={project.year}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Testimonials" 
            subtitle="What colleagues and clients say about working with me"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            {testimonials.slice(0, 3).map((testimonial, index) => (
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Have a question or want to work together? Send me a message!"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4">
                    <FaArrowRight className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">rajputswatisingh78@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4">
                    <FaArrowRight className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 90766 46400</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4">
                    <FaArrowRight className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}