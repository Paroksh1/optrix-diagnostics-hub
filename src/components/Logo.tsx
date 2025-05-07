
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
        href="/"
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/c0decfb7-e17f-4692-96ce-1247626097d6.png" 
          alt="Opti-mode Diagnostics logo" 
          className="h-10 w-auto max-w-[140px] object-contain"
        />
        <span className="font-semibold text-lg text-gray-800">Opti-mode Diagnostics</span>
      </motion.a>
    </motion.div>
  );
};

export default Logo;
