
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '@/lib/animations';
import TestimonialCard from '../TestimonialCard';

const testimonials = [
  {
    quote: "The SEO strategy completely transformed our online presence. We've seen a 150% increase in organic traffic within just 3 months.",
    name: "Sudharsan",
    position: "Founder SS Catering"
  },
  {
    quote: "Not only did our website look amazing, but the conversion-focused design doubled our lead generation rate.",
    name: "Babu",
    position: "No.1 Quality Pest Control"
  },
  {
    quote: "Our Google rankings improved dramatically after implementing the recommended SEO changes. Extremely professional service.",
    name: "Omni Meet",
    position: "Small Business Owner"
  }
];

const TestimonialsSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation();
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            Client Success Stories
          </motion.h2>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="max-w-xl mx-auto"
          >
            <p className="text-white/70">
              Hear what my clients have to say about working together.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
