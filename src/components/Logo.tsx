
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
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img 
          src="/lovable-uploads/OMD Primary Brandmark All Black (1).png" 
          alt="Opti-mode Diagnostics logo" 
          className={`${className} ${isMobile ? 'max-h-10' : 'h-12'} w-auto max-w-[160px] object-contain`}
          loading="eager"
          width={isMobile ? 140 : 200}
          height={48}
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
