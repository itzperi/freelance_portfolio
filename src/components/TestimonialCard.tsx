
import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, position, index }) => {
  return (
    <motion.div
      className="glass-morphism p-6 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.5)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-neon-purple text-5xl mb-4">"</div>
      <p className="mb-6 text-white/80 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mr-3"></div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-white/60">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
