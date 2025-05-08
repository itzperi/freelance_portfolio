
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '@/lib/animations';
import ServiceCard from '../ServiceCard';

const services = [
  {
    title: "SEO Audit",
    description: "Comprehensive analysis of website speed, mobile optimization, and sitemap structure.",
    price: "$100–$300"
  },
  {
    title: "Off-Page SEO",
    description: "Strategic backlink building and guest posting to boost domain authority.",
    price: "$150–$500/mo"
  },
  {
    title: "GMB Setup",
    description: "Complete Google My Business optimization for local search visibility.",
    price: "$75–$200"
  },
  {
    title: "Landing Page",
    description: "High-converting landing pages built with React, Tailwind, and GSAP animations.",
    price: "$80–$250"
  },
  {
    title: "Functional Website",
    description: "Custom 3-5 page websites designed for performance and user experience.",
    price: "$200–$700"
  },
  {
    title: "Software Dev",
    description: "End-to-end software development with frontend and backend integration.",
    price: "$500–$1500"
  }
];

const ServicesSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section id="services" className="py-20 relative">
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
            Services & Expertise
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="max-w-xl mx-auto"
          >
            <p className="text-white/70">
              Comprehensive solutions to boost your online presence and drive conversions.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
