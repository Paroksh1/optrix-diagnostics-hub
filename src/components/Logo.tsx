
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a 
        href="#home"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/a83643e0-9064-401c-bc30-5f3190c88dcf.png" 
          alt="Opti-Mode Diagnostics" 
          className={`${isMobile ? 'h-8' : 'h-10'} w-auto`}
        />
      </motion.a>
    </motion.div>
  );
};

export default Logo;
