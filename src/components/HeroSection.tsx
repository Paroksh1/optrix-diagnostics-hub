
import React, { useEffect, useState, useRef } from 'react';
import { ChevronRight, Microscope, Shield, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// TypeWriter effect component
const TypeWriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="text-primary">{displayText}</span>
  );
};

// Kinetic Typography component
const KineticTypography = () => {
  const phrases = [
    "Early Detection, Saving Lives",
    "From Detection to Diagnosis",
    "Precision Meets Innovation",
    "Empowering Precision Care",
    "Revolutionary Cancer Diagnostics"
  ];
  
  const [activePhrase, setActivePhrase] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-12 relative overflow-hidden">
      {phrases.map((phrase, index) => (
        <div 
          key={index}
          className={`absolute transition-all duration-1000 w-full ${
            index === activePhrase 
              ? "transform-none opacity-100" 
              : "transform translate-y-16 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-foreground">
            {phrase}
          </h1>
        </div>
      ))}
    </div>
  );
};

// Morphing background component
const MorphingBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      backgroundRef.current.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%, 
          rgba(0, 162, 255, 0.15) 0%, 
          rgba(21, 196, 184, 0.08) 25%, 
          rgba(7, 50, 122, 0.02) 50%
        )
      `;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={backgroundRef} 
      className="absolute inset-0 transition-all duration-500 ease-out"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 162, 255, 0.15) 0%, rgba(21, 196, 184, 0.08) 25%, rgba(7, 50, 122, 0.02) 50%)'
      }}
    />
  );
};

// Particle animation component with enhanced molecular structures
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 12 + 4;
        const duration = Math.random() * 10 + 15;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.2;
        
        // Create molecular structure (simple circles with connecting lines)
        if (i % 5 === 0) {
          return (
            <div key={i} className="absolute" style={{ top: `${posY}%`, left: `${posX}%` }}>
              <div 
                className="absolute rounded-full bg-primary/30"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animation: `float ${duration}s linear infinite`,
                  animationDelay: `${delay}s`
                }}
              />
              <div 
                className="absolute h-px bg-primary/20"
                style={{
                  width: `${size * 3}px`,
                  top: `${size/2}px`,
                  left: `${size/2}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  transformOrigin: 'left center',
                  opacity: opacity * 0.8
                }}
              />
            </div>
          );
        }
        
        // Regular particles
        return (
          <div 
            key={i} 
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${posY}%`,
              left: `${posX}%`,
              opacity,
              animation: `float ${duration}s linear infinite`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}
    </div>
  );
};

// Enhanced diagnostic animation with storytelling elements
const DiagnosticAnimation = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Use scroll progress to control rotation
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Diagnostic journey steps
  const steps = [
    { icon: Microscope, label: "Rapid Scanning", color: "text-primary" },
    { icon: Shield, label: "AI Analysis", color: "text-accent" },
    { icon: Zap, label: "Precise Results", color: "text-primary" }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-sm mx-auto h-64 md:h-96"
    >
      {/* Background glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
      
      <ParticleBackground />
      
      {/* Journey storytelling elements */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="glass-card px-3 py-1 rounded-full text-xs md:text-sm">
          Our Diagnostic Journey
        </div>
      </div>
      
      {/* Orbiting Elements */}
      {steps.map((step, index) => (
        <motion.div 
          key={index}
          style={{ scale: active === index ? 1.25 : 0.9 }}
          className={`absolute transition-all duration-700 ${
            active === index ? 'opacity-100' : 'opacity-40'
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: active === index ? 1 : 0.4, scale: active === index ? 1.25 : 0.9 }}
          transition={{ duration: 0.5 }}
          {...getPositionStyle(index)}
        >
          <div className="glass-card p-3 rounded-full shadow-lg relative">
            <step.icon className={`w-5 h-5 ${step.color}`} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium">
              {step.label}
            </span>
          </div>
        </motion.div>
      ))}
      
      {/* Animated rings */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ rotate: rotation }}
      >
        <div className="w-40 h-40 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-dashed border-accent/40 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-dashed border-primary/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>
      
      {/* Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-primary/30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-accent/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Journey timeline indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {[0, 1, 2].map((step) => (
          <div 
            key={step} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === step ? 'bg-primary w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to position elements around the center
function getPositionStyle(index: number) {
  const positions = [
    { top: '25%', right: '25%' },
    { bottom: '25%', left: '25%' },
    { bottom: '33%', right: '25%' }
  ];
  
  return positions[index];
}

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const yMove = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Dynamic morphing background */}
      <MorphingBackground />
      
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="flex flex-col space-y-6 max-w-xl"
          style={{ opacity, y: yMove, scale }}
        >
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Revolutionary Oral Cancer Detection
            </span>
            
            <KineticTypography />
            
            <p className="mt-6 text-lg text-muted-foreground">
              Pioneering the future of oral cancer diagnostics with our M3DOC multimodal microscopic system for early, accurate, and non-invasive detection.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#services" 
              className="group bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center justify-center"
            >
              Discover Our Products
              <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#about" 
              className="relative bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center justify-center overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border mt-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="group hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">95%</p>
                <p className="text-sm text-muted-foreground">Detection Accuracy</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">5min</p>
                <p className="text-sm text-muted-foreground">Rapid Diagnosis</p>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">100%</p>
                <p className="text-sm text-muted-foreground">Non-Invasive</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DiagnosticAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
