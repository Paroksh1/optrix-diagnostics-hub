
import React, { useState } from 'react';
import { Cube, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const ARViewer = ({ modelUrl = '/lovable-uploads/f32a5a75-b1a6-44b7-b92c-c67687a2d608.png' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRotate = () => {
    setRotation(rotation + 45);
  };

  return (
    <div className={`glass-card rounded-xl overflow-hidden relative transition-all duration-500 ${
      isExpanded ? 'fixed inset-4 z-50' : 'h-full'
    }`}>
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <button 
          onClick={handleRotate}
          className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button 
          onClick={toggleExpand}
          className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
      
      <div className="p-4 bg-primary/10">
        <h3 className="text-lg font-bold flex items-center">
          <Cube className="w-5 h-5 mr-2" /> AR Product Viewer
        </h3>
        <p className="text-sm text-muted-foreground">Interact with our diagnostic device in 3D</p>
      </div>
      
      <div className="aspect-square p-4 flex items-center justify-center bg-gradient-to-br from-background to-background/50 overflow-hidden">
        {isExpanded ? (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleExpand} />
        ) : null}
        
        <motion.div 
          className="relative z-10 max-w-full max-h-full"
          animate={{ 
            rotateY: rotation,
            scale: isExpanded ? 1.5 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={modelUrl} 
            alt="3D Model" 
            className="max-w-full max-h-full object-contain"
          />
          
          {/* Interactive hotspots */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-primary/80 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ boxShadow: ["0 0 0 0px rgba(0, 162, 255, 0.3)", "0 0 0 10px rgba(0, 162, 255, 0)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-accent/80 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ boxShadow: ["0 0 0 0px rgba(21, 196, 184, 0.3)", "0 0 0 10px rgba(21, 196, 184, 0)"] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </div>
      
      <div className="p-4 text-center">
        <p className="text-sm">Click and drag to rotate • Pinch to zoom</p>
        <div className="mt-2 flex justify-center space-x-1">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div 
              key={angle} 
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                rotation % 360 === angle ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setRotation(angle)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ARViewer;
