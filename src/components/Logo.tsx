
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-start ${className}`}>
      <img 
        src="/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png" 
        alt="Opti-Mode Diagnostics" 
        className="h-50 md:h-56 lg:h-65" 
      />
    </div>
  );
};

export default Logo;
