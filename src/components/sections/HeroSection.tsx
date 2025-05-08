
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../ParticlesBackground';

const HeroSection: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.05,
        duration: 0.8, 
        ease: "easeOut" 
      } 
    })
  };
  
  // Split title text into individual spans
  const renderTitleLetters = (text: string) => {
    return text.split('').map((letter, i) => (
      <motion.span 
        key={i} 
        className="letter inline-block"
        custom={i}
        initial="hidden"
        animate="visible"
        variants={letterVariants}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ));
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="mb-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block relative">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink blur-sm opacity-50"></span>
              <span className="relative bg-background px-4 py-1 rounded-lg text-neon-purple">Full-stack SEO + Web Solutions</span>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-1 md:space-y-0 md:space-x-2">
              <span className="inline-flex ">{renderTitleLetters("Rank")}</span>
              <span className="inline-flex">{renderTitleLetters("Optimize")}</span>
              <span className="inline-flex">{renderTitleLetters("Convert")}</span>
            </div>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white/70 dark:text-white/70 light:text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I design stunning landing pages, build Chrome extensions, and turbocharge SEO that actually works.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium text-lg relative overflow-hidden group"
              whileHover={{ 
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)",
                scale: 1.03
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 bg-white/20 transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Let's Build Your Growth Engine 🚀</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
              <motion.div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>
            <p className="text-white/50 dark:text-white/50 light:text-gray-500 text-sm mt-2">Scroll Down</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
