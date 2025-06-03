import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);


    const handleMouseEnter = () => {
      document.body.classList.add('hide-cursor');
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('hide-cursor');
      setIsVisible(false);
    };

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      document.body.classList.remove('hide-cursor');
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`cursor-dot bg-white w-1 h-1 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
        }}
      />
      <div
        className={`cursor-outline w-8 h-8 border border-white/30 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1}) ${isClicking ? 'scale(0.8)' : ''}`,
          transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
          width: isHovering ? '3rem' : '2rem',
          height: isHovering ? '3rem' : '2rem',
        }}
      />
    </>
  );
};

export default CustomCursor;
