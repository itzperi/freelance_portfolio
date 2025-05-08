
import { useInView } from 'react-intersection-observer';
import { useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

export const fadeInUp: Variants = {
  hidden: { 
    y: 60, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardVariants: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

export function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}

export const useMagneticEffect = (strength = 30) => {
  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    
    const moveX = deltaX / (width / strength);
    const moveY = deltaY / (height / strength);
    
    currentTarget.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };
  
  const resetPosition = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
  };
  
  return {
    onMouseMove: handleMagneticMove,
    onMouseLeave: resetPosition
  };
};
