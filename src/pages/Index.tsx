
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

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

// Simplified Interactive Storytelling Component
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
    <div className="min-h-screen">
      <NavBar />
      
      {/* Dynamic background that changes with scroll */}
      <ScrollProgress />
      
      {/* Interactive storytelling overlay */}
      <StorytellingOverlay />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
