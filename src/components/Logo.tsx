
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Logo = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png" 
        alt="Opti-Mode Diagnostics" 
        className={`${isMobile ? 'h-10' : 'h-12'} w-auto`}
      />
    </div>
  );
};

export default Logo;
