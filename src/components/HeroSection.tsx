
import React, { useEffect, useState } from 'react';
import { ChevronRight, Activity, Shield, Zap } from 'lucide-react';

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
      
      {/* Animation Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      
      {/* Orbiting Elements */}
      <div className={`absolute top-1/4 right-1/4 transition-all duration-700 ${active === 0 ? 'scale-125 opacity-100' : 'scale-90 opacity-40'}`}>
        <div className="glass-card p-3 rounded-full shadow-lg">
          <Activity className="w-5 h-5 text-primary" />
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
      
      {/* Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-primary/30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-accent/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 max-w-xl animate-fade-in">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Next-Gen Diagnostics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-foreground">
              Optimizing Diagnostics, <span className="text-primary">Transforming</span> Healthcare
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Pioneering the future of medical diagnostics with precision technology and innovative solutions for healthcare providers worldwide.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#services" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium flex items-center justify-center"
            >
              Explore Solutions
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
            <a 
              href="#about" 
              className="bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full transition-all duration-200 font-medium flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
          
          <div className="pt-8 border-t border-border mt-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Diagnostic Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">24hr</p>
                <p className="text-sm text-muted-foreground">Rapid Results</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Healthcare Partners</p>
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
