
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 z-10"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: hovered ? 0.85 : 0.6 }}
        />
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
          animate={{ 
            scale: hovered ? 1.05 : 1,
            filter: hovered ? 'brightness(0.8)' : 'brightness(1)'
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-6 z-20"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: hovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <motion.p 
            className="text-sm text-white/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: hovered ? 1 : 0,
              height: hovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.button
            className="mt-4 py-2 px-4 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-medium border border-neon-purple/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
            }}
          >
            View Project
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
