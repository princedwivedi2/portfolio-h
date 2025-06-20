'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillBar from '@/components/ui/SkillBar';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading 
        title="My Skills"
        subtitle="As an HR professional, I've developed a diverse set of skills across talent management, organizational development, and HR technology"
      />
      
      {/* HR Soft Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8">HR Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {skills.soft.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              level={skill.level}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Technical Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Technical HR Systems</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {skills.technical.map((skill, index) => (
            <SkillBar 
              key={index}
              name={skill.name}
              level={skill.level}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Skills Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Skill Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              category: "Strategic HR Planning",
              skills: ["Workforce Planning", "HR Budgeting", "Succession Planning"],
              icon: "🎯"
            },
            {
              category: "Talent Acquisition",
              skills: ["Technical Interviewing", "Candidate Assessment", "Employer Branding"],
              icon: "🔍"
            },
            {
              category: "Employee Development",
              skills: ["Career Pathing", "Skills Assessment", "Leadership Development"],
              icon: "📈"
            },
            {
              category: "HR Technology",
              skills: ["HRIS Implementation", "HR Analytics", "Digital HR Transformation"],
              icon: "💻"
            },
            {
              category: "Employee Relations",
              skills: ["Conflict Resolution", "Employee Advocacy", "Team Building"],
              icon: "🤝"
            },
            {
              category: "Organizational Development",
              skills: ["Change Management", "Culture Development", "Process Optimization"],
              icon: "🏢"
            }
          ].map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
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
        className="mt-20 bg-gray-50 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking for specialized HR expertise?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          I'm always eager to apply my skills to new challenges and help organizations excel through effective HR practices.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
        >
          Let's Connect
        </a>
      </motion.div>
    </div>
  );
}