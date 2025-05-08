
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hover: {
      color: "#8B5CF6",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="py-10 border-t border-white/10 dark:border-white/10 light:border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient-purple mb-4">ORBIT</h3>
            <p className="text-white/70 dark:text-white/70 light:text-gray-600 mb-4 max-w-md">
              Specialized in full-stack web development and SEO optimization solutions that help businesses grow their online presence.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://x.com/itzmeperi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-gray-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/periyanan-p"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-gray-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/itzperi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-gray-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4 dark:text-white light:text-gray-800">Services</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  SEO Audit
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Off-Page SEO
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Landing Page Design
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Website Development
                </motion.a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4 dark:text-white light:text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#services"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#projects"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#testimonials"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Testimonials
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact"
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 dark:border-white/10 light:border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 dark:text-white/50 light:text-gray-500 text-sm">
            © {currentYear} ORBIT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-white/50 dark:text-white/50 light:text-gray-500 text-sm hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#"
              variants={linkVariants}
              whileHover="hover"
              className="text-white/50 dark:text-white/50 light:text-gray-500 text-sm hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
