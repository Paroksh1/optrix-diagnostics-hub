
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse absolute"></div>
        </div>
      </div>
      <div className="font-display font-bold tracking-tight text-xl">
        <span className="text-primary">Opti</span>
        <span className="text-foreground">-Mode</span>
      </div>
    </div>
  );
};

export default Logo;
