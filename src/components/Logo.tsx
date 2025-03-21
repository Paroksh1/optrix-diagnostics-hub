
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
      <motion.img 
        src="/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png" 
        alt="Opti-Mode Diagnostics" 
        className={`${isMobile ? 'h-9' : 'h-11'} w-auto`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
    </motion.div>
  );
};

export default Logo;
