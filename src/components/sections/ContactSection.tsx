
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/animations';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const { ref, controls, inView } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_nuz09uq',
      'template_vktr538', 
      formRef.current!, 
      'SqcevlkYLMGRw2ZD7'
    )
    .then((result) => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "success",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again or contact directly via email",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  // Orb animation variants
  const orbVariants = {
    animate: (i: number) => ({
      x: [0, Math.random() * 200 - 100, 0],
      y: [0, Math.random() * 200 - 100, 0],
      transition: {
        duration: 15 + Math.random() * 15,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: i * 2
      }
    })
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="orb w-32 h-32 rounded-full absolute top-1/4 left-1/4 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-xl"
          variants={orbVariants}
          animate="animate"
          custom={0}
        />
        <motion.div 
          className="orb w-40 h-40 rounded-full absolute top-2/3 left-2/3 bg-gradient-to-r from-neon-purple to-neon-pink opacity-10 blur-xl"
          variants={orbVariants}
          animate="animate"
          custom={1}
        />
        <motion.div 
          className="orb w-24 h-24 rounded-full absolute bottom-1/4 right-1/4 bg-gradient-to-r from-neon-pink to-neon-blue opacity-15 blur-xl"
          variants={orbVariants}
          animate="animate"
          custom={2}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="max-w-3xl mx-auto glass-morphism p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">Ready to grow with me?</h2>
          <p className="text-center text-white/70 dark:text-white/70 light:text-gray-700 mb-8">Let's discuss how I can help optimize your online presence and drive real results.</p>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-white/70 dark:text-white/70 light:text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-gray-300 rounded-lg p-3 text-white dark:text-white light:text-gray-900 focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-white/70 dark:text-white/70 light:text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-gray-300 rounded-lg p-3 text-white dark:text-white light:text-gray-900 focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>
            </div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-white/70 dark:text-white/70 light:text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-gray-300 rounded-lg p-3 text-white dark:text-white light:text-gray-900 focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50"
                placeholder="What's this about?"
                required
              />
            </motion.div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-white/70 dark:text-white/70 light:text-gray-700 mb-1">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                className="w-full bg-white/5 dark:bg-white/5 light:bg-gray-100 border border-white/10 dark:border-white/10 light:border-gray-300 rounded-lg p-3 text-white dark:text-white light:text-gray-900 focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium relative overflow-hidden group disabled:opacity-70"
                whileHover={{ boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)", scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-white/20 transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
