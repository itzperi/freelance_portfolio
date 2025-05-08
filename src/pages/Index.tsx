
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index: React.FC = () => {
  return (
    <motion.div
      className="bg-background min-h-screen relative overflow-hidden bg-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <CustomCursor />
      <div className="pointer-events-none fixed inset-0 z-30 bg-gradient-to-b from-background via-transparent to-background"></div>
      
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
