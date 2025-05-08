
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '@/lib/animations';
import ProjectCard from '../ProjectCard';

const projects = [
  {
    title: "No.1 Quality Pest Control",
    description: "Complete website redesign and SEO optimization resulting in 200% increase in organic traffic.",
    image: "./asserts/websiteseo.png"
  },
  {
    title: "SS Catering SEO Audit",
    description: "Comprehensive SEO audit and optimization for local catering business, achieving top 3 rankings.",
    image: "./asserts/gmd.png"
  },
  {
    title: "OmniMeet Video Platform",
    description: "Modern video conferencing app with AI-powered features and responsive design.",
    image: "./asserts/software.png"
  }
];

const ProjectsSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="max-w-xl mx-auto"
          >
            <p className="text-white/70">
              Showcasing successful web solutions and SEO campaigns that deliver results.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
