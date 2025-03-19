
import React, { useEffect, useState } from 'react';
import { ChevronRight, Microscope, Shield, Zap } from 'lucide-react';

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

// Particle animation component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute rounded-full bg-primary/20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${Math.random() * 10 + 15}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

const DiagnosticAnimation = () => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-64 md:h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
      
      <ParticleBackground />
      
      {/* Orbiting Elements */}
      <div className={`absolute top-1/4 right-1/4 transition-all duration-700 ${active === 0 ? 'scale-125 opacity-100' : 'scale-90 opacity-40'}`}>
        <div className="glass-card p-3 rounded-full shadow-lg">
          <Microscope className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className={`absolute bottom-1/4 left-1/4 transition-all duration-700 ${active === 1 ? 'scale-125 opacity-100' : 'scale-90 opacity-40'}`}>
        <div className="glass-card p-3 rounded-full shadow-lg">
          <Shield className="w-5 h-5 text-accent" />
        </div>
      </div>
      
      <div className={`absolute bottom-1/3 right-1/4 transition-all duration-700 ${active === 2 ? 'scale-125 opacity-100' : 'scale-90 opacity-40'}`}>
        <div className="glass-card p-3 rounded-full shadow-lg">
          <Zap className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-dashed border-accent/40 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-dashed border-primary/50 rounded-full animate-spin" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full"></div>
      </div>
      
      {/* Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-primary/30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-accent/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 max-w-xl animate-fade-in">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Revolutionary Oral Cancer Detection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-foreground">
              Early Detection, <TypeWriter text="Saving Lives" />
            </h1>
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
        </div>
        
        <div className="animate-slide-in">
          <DiagnosticAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
