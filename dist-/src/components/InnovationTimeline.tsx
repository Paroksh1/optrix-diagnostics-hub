
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  color?: string;
}

const TimelineEvent = ({ event, isActive, onClick }: { 
  event: TimelineEvent; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div 
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
      }`}
      onClick={onClick}
      whileHover={{ scale: isActive ? 1 : 0.98 }}
    >
      <div className={`glass-card p-5 border ${
        isActive ? 'border-primary shadow-lg' : 'border-transparent'
      }`}>
        <div className="flex items-start">
          <div className={`w-12 h-12 rounded-lg mr-4 flex items-center justify-center ${
            isActive ? 'bg-primary/20' : 'bg-muted/30'
          }`}>
            {event.icon ? (
              <event.icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
            ) : (
              <Clock className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
            )}
          </div>
          <div>
            <div className="text-sm font-medium text-primary">{event.year}</div>
            <h3 className="text-lg font-bold mb-2">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>
          </div>
        </div>
      </div>
      
      {isActive && (
        <motion.div 
          className="absolute h-1 bg-primary bottom-0 left-0 right-0"
          layoutId="activeIndicator"
        />
      )}
    </motion.div>
  );
};

const InnovationTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.3 });
  
  const timeline: TimelineEvent[] = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Company founded with a mission to revolutionize oral cancer detection through advanced technology.',
      icon: Clock
    },
    {
      year: '2019',
      title: 'Research & Development',
      description: 'Initial prototype developed with multispectral imaging capabilities for tissue analysis.',
      icon: Clock
    },
    {
      year: '2020',
      title: 'Clinical Trials',
      description: 'First clinical trials conducted showing 92% accuracy in early detection of malignant tissues.',
      icon: Clock
    },
    {
      year: '2021',
      title: 'Patent Secured',
      description: 'Secured patents for our multimodal multispectral microscopy technology for cancer detection.',
      icon: Clock
    },
    {
      year: '2022',
      title: 'Product Launch',
      description: 'Official launch of M3DOC, our flagship product for oral cancer screening in clinical settings.',
      icon: Clock
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to 15 countries, partnering with leading healthcare institutions worldwide.',
      icon: Clock
    },
    {
      year: '2024',
      title: 'Next Generation',
      description: 'Launched Advanced Diagnostic Microscope with improved AI capabilities and cloud integration.',
      icon: Clock
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % timeline.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + timeline.length) % timeline.length);
  };
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);
  
  // Scroll to active item
  useEffect(() => {
    if (timelineRef.current) {
      const containerWidth = timelineRef.current.offsetWidth;
      const scrollPosition = (activeIndex * (containerWidth / 3)) - (containerWidth / 3);
      
      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="relative py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Our Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
          Innovation Timeline
        </h2>
        <p className="text-muted-foreground">
          Explore our journey from inception to becoming a leader in cancer diagnostics
        </p>
      </div>
      
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div 
          ref={timelineRef}
          className="overflow-x-auto hide-scrollbar py-8"
        >
          <motion.div 
            className="flex space-x-6 min-w-max px-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timeline.map((event, index) => (
              <motion.div 
                key={index}
                className="w-80"
                variants={itemVariants}
              >
                <TimelineEvent 
                  event={event} 
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {timeline.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === index ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InnovationTimeline;
