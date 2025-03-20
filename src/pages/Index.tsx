import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import InnovationTimeline from '../components/InnovationTimeline';
import ARViewer from '../components/ARViewer';

// ScrollProgress component that changes background gradient based on scroll position
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.05, 0.1, 0.15, 0.1, 0.05]);
  const gradientPosition = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          linear-gradient(
            to bottom, 
            rgba(0, 162, 255, ${gradientOpacity.get()}) ${gradientPosition.get()}%, 
            rgba(21, 196, 184, ${gradientOpacity.get() * 0.8}) ${gradientPosition.get() + 30}%, 
            rgba(0, 0, 0, 0) 100%
          )
        `,
        opacity: 0.6
      }}
    />
  );
};

// Interactive Storytelling Component
const StorytellingOverlay = () => {
  const { scrollYProgress } = useScroll();
  
  // Journey milestones
  const milestones = [
    { point: 0.1, title: "The Vision", description: "A world where early detection saves lives" },
    { point: 0.3, title: "The Innovation", description: "Developing breakthrough technology" },
    { point: 0.5, title: "The Research", description: "Clinical studies proving accuracy" },
    { point: 0.7, title: "The Impact", description: "Changing healthcare outcomes" },
    { point: 0.9, title: "The Future", description: "Expanding global access" }
  ];
  
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
      <div className="h-64 w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 relative">
        {milestones.map((milestone, index) => {
          const isActive = useTransform(
            scrollYProgress, 
            [milestone.point - 0.1, milestone.point, milestone.point + 0.1], 
            [0, 1, 0]
          );
          
          return (
            <motion.div 
              key={index}
              className="absolute -left-2"
              style={{ 
                top: `${milestone.point * 100}%`,
                opacity: isActive
              }}
            >
              <motion.div 
                className="w-4 h-4 rounded-full bg-primary relative"
                style={{ scale: isActive }}
              />
              <motion.div 
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-md w-40"
                style={{ opacity: isActive }}
              >
                <p className="font-medium text-sm">{milestone.title}</p>
                <p className="text-xs text-muted-foreground">{milestone.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
        
        <motion.div 
          className="absolute left-0 top-0 w-full bg-primary"
          style={{ 
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            opacity: 0.7
          }}
        />
      </div>
    </div>
  );
};

// Interactive molecular animation component
const MolecularAnimation = () => {
  return (
    <motion.div
      className="fixed bottom-10 left-10 z-10 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="relative w-32 h-32">
        <motion.div 
          className="absolute w-4 h-4 rounded-full bg-primary/50"
          animate={{ 
            x: [0, 20, 0, -20, 0], 
            y: [0, -20, -40, -20, 0],
            scale: [1, 1.2, 1, 0.8, 1] 
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div 
          className="absolute w-6 h-6 rounded-full bg-accent/40 left-12 top-10"
          animate={{ 
            x: [0, -30, 0, 30, 0], 
            y: [0, 20, 40, 20, 0],
            scale: [1, 0.8, 1, 1.2, 1] 
          }}
          transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
        />
        <motion.div 
          className="absolute w-5 h-5 rounded-full bg-primary/30 left-16 top-4"
          animate={{ 
            x: [0, -10, -20, -10, 0], 
            y: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 0.9, 1] 
          }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        />
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" opacity="0.3">
          <motion.line 
            x1="20" y1="20" x2="65" y2="65" 
            stroke="currentColor" 
            className="text-primary"
            animate={{ x1: [20, 40, 20, 0, 20], y1: [20, 0, -20, 0, 20] }}
            transition={{ repeat: Infinity, duration: 8 }}
          />
          <motion.line 
            x1="65" y1="65" x2="80" y2="20" 
            stroke="currentColor" 
            className="text-accent"
            animate={{ x2: [80, 70, 60, 70, 80], y2: [20, 30, 20, 10, 20] }}
            transition={{ repeat: Infinity, duration: 6, delay: 1 }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

// AR Showcase Section
const ARShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  return (
    <motion.div 
      ref={ref}
      className="py-24 bg-gradient-to-br from-primary/5 to-background"
      style={{ opacity, y }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Explore Our Technology in 3D
          </h2>
          <p className="text-muted-foreground">
            Get a closer look at our diagnostic devices with our interactive 3D visualization
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <ARViewer />
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  useEffect(() => {
    // Apply the custom cursor to the body on mount
    document.body.classList.add('custom-cursor');
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <NavBar />
      
      {/* Dynamic background that changes with scroll */}
      <ScrollProgress />
      
      {/* Interactive storytelling overlay */}
      <StorytellingOverlay />
      
      {/* Floating molecular animation */}
      <MolecularAnimation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        {/* AR Viewer showcase */}
        <ARShowcase />
        {/* Innovation Timeline */}
        <InnovationTimeline />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
