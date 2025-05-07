
import React, { useState, useEffect } from 'react';
import { Box, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const placeholderImages = [
  '/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png',
  '/lovable-uploads/19cdaa2e-ff55-43cb-a0f2-f4dbdfd0f645.png',
  '/lovable-uploads/f32a5a75-b1a6-44b7-b92c-c67687a2d608.png',
  '/lovable-uploads/7a707abe-606d-4656-8096-960a1ac2e6c1.png',
  '/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png',
];

const ARViewer = ({ modelUrl = placeholderImages[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState(null);

  // Effect for auto-rotating the carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Handle when the carousel scrolls
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRotate = () => {
    setRotation(rotation + 45);
  };

  return (
    <div className={`glass-card rounded-xl overflow-hidden relative transition-all duration-500 ${
      isExpanded ? 'fixed inset-4 z-50' : ''
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
          <Box className="w-5 h-5 mr-2" /> AR Product Viewer
        </h3>
        <p className="text-sm text-muted-foreground">Interact with our diagnostic device in 3D</p>
      </div>
      
      <div className={`p-4 flex items-center justify-center bg-gradient-to-br from-background to-background/50 overflow-hidden ${
        isExpanded ? 'aspect-auto' : 'aspect-[4/3]'
      }`}>
        {isExpanded ? (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleExpand} />
        ) : null}
        
        <Carousel className="w-full max-w-xs md:max-w-sm" setApi={setApi}>
          <CarouselContent>
            {placeholderImages.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={1} className="bg-transparent">
                  <motion.div 
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    animate={{ 
                      rotateY: rotation,
                      scale: isExpanded ? 1.5 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={image} 
                      alt={`Product view ${index + 1}`} 
                      className="max-w-full max-h-full object-contain"
                    />
                    
                    {/* Interactive hotspots (only show on first image) */}
                    {index === 0 && (
                      <>
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
                      </>
                    )}
                  </motion.div>
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-4 left-0 right-0">
            <div className="flex justify-center gap-1 py-2">
              {placeholderImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </Carousel>
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
