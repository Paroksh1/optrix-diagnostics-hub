
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
          src="/lovable-uploads/61af4e2a-135a-4f61-8a83-9357e42fc668.png" 
          alt="Opti-Mode Diagnostics" 
          className={`${isMobile ? 'h-10' : 'h-12'} w-auto`}
        />
      </motion.a>
    </motion.div>
  );
};

export default Logo;
