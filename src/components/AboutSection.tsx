
import React from 'react';
import { Play } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Pioneers in Modern Diagnostics
          </h2>
          <p className="text-muted-foreground mb-16">
            From our inception at IIT Delhi, we've been committed to developing technologies that transform healthcare delivery and improve patient outcomes through early cancer detection.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/30 to-transparent">
                  <p className="text-white font-medium">Watch our story</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in" style={{animationDelay: '0.4s'}}>
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower healthcare providers with innovative diagnostic solutions that enhance precision, efficiency, and patient care outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To lead the transformation of global healthcare diagnostics through continuous innovation, ensuring accessible and accurate medical testing for all.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium inline-block"
              >
                Join Our Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
