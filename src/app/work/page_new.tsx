import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Work & Projects | Swati - HR Professional',
  description: 'Explore HR initiatives and projects led by Swati including employee engagement programs, diversity initiatives, and performance management systems.',
};

export default function Work() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <SectionHeading 
        title="My Projects"
        subtitle="Key HR initiatives I've led throughout my career"
      />
      
      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        {projects.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <span className="text-primary font-medium">Featured Project</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{projects[0].title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{projects[0].description}</p>
              
              <h3 className="text-lg font-medium text-gray-800 mb-3">Key Achievements:</h3>
              <ul className="space-y-2 mb-6">
                {projects[0].achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex w-5 h-5 bg-primary/10 text-primary rounded-full items-center justify-center mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {projects[0].year}
              </span>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Project Timeline */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Project Timeline</h2>
        
        <div className="space-y-12">
          {projects.slice(1).map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              achievements={project.achievements}
              year={project.year}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* HR Approach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-gray-50 rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Approach to HR Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Research & Analysis",
              description: "I begin each project by thoroughly researching best practices and analyzing organizational needs.",
              icon: "🔍"
            },
            {
              title: "Strategic Planning",
              description: "Developing comprehensive strategies with clear goals, timelines, and success metrics.",
              icon: "📝"
            },
            {
              title: "Inclusive Implementation",
              description: "Ensuring all stakeholders are involved and aligned throughout the implementation process.",
              icon: "👥"
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
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
        className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Need help with an HR initiative?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          I'm passionate about tackling HR challenges and delivering impactful solutions for organizations.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
        >
          Discuss Your Project
        </a>
      </motion.div>
    </div>
  );
}