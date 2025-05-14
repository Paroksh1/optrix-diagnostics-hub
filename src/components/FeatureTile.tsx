import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureTileProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'lavender' | 'teal';
}

const FeatureTile: React.FC<FeatureTileProps> = ({ 
  title, 
  description, 
  className, 
  children,
  variant = 'lavender'
}) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl p-8 flex flex-col shadow-xl border-solid border-2 border-[#d9c7ff] bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl",
      variant === 'lavender' 
        ? "bg-gradient-to-l from-[#fffff9] to-[#d9c7ff] text-black" 
        : "bg-gradient-to-l from-[#fffff9] to-[#d9c7ff] text-black",
      className
    )}>
      <h3 className={cn(
        "text-2xl font-bold mb-4 text-black",
        
      )}>
        {title}
      </h3>
      
      {description && (
        <p className={cn(
          "mb-6 text-lg text-black font-mono",
        )}>
          {description}
        </p>
      )}
      
      <div className="mt-auto">
        {children}
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 bg-white rounded-full"></div>
      <div className="absolute top-4 right-4 w-12 h-12 opacity-10 bg-white rounded-full"></div>
    </div>
  );
};

export default FeatureTile;
