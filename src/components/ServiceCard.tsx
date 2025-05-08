
import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '@/lib/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, index }) => {
  const magneticProps = useMagneticEffect(15);

  return (
    <motion.div
      className="magnetic-container relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      {...magneticProps}
    >
      <div className="glass-morphism h-full p-6 rounded-2xl flex flex-col justify-between hover:neon-glow transition-all duration-300">
        <div>
          <h3 className="text-xl font-bold mb-2 text-gradient-purple">{title}</h3>
          <p className="text-sm text-white/70 mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <motion.button 
            className="text-neon-purple border border-neon-purple/30 px-4 py-2 rounded-full text-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
