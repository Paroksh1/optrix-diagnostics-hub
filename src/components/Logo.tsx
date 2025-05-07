
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
          src="/lovable-uploads/95eb5a1a-2cd1-43bb-a0d8-7347cfb03165.png" 
          alt="Opti-mode Diagnostics logo" 
          className={`h-12 ${isMobile ? 'w-auto max-w-[140px]' : 'w-auto max-w-[200px]'} object-contain`}
          style={{ background: 'transparent' }}
          loading="eager"
          width={isMobile ? 140 : 200}
          height={48}
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
