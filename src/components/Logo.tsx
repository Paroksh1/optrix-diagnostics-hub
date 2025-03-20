
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png" 
        alt="Opti-Mode Diagnostics" 
        className="h-32 md:h-40 lg:h-48"
      />
    </div>
  );
};

export default Logo;
