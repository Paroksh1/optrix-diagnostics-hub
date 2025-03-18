
import React, { useState } from 'react';
import { Calendar, Award, BarChart, Heart, Play } from 'lucide-react';

const TimelineEvent = ({ 
  year, 
  title, 
  description, 
  icon: Icon, 
  isActive, 
  onClick 
}: { 
  year: string; 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={`relative cursor-pointer group ${isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
      onClick={onClick}
    >
      <div className={`glass-card p-6 rounded-xl ${isActive ? 'border-primary/50 shadow-lg' : 'hover:border-primary/30'}`}>
        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-primary to-accent shadow-md">
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <div className="ml-6 mt-2">
          <span className="text-xs font-medium text-primary">{year}</span>
          <h3 className="text-lg font-bold mt-1">{title}</h3>
          <p className={`text-sm text-muted-foreground mt-2 transition-all duration-300 ${isActive ? 'max-h-24' : 'max-h-0 overflow-hidden md:max-h-24'}`}>
            {description}
          </p>
        </div>
      </div>
      
      {/* Connector line */}
      {!isActive && (
        <div className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-border hidden md:block"></div>
      )}
    </div>
  );
};

const AboutSection = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  
  const timelineEvents = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Opti-Mode Diagnostics was founded with a mission to revolutionize healthcare diagnostics through innovative technology.',
      icon: Calendar
    },
    {
      year: '2019',
      title: 'First Product',
      description: 'Launched our pioneering diagnostic platform, setting new standards for accuracy and efficiency in medical testing.',
      icon: Award
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to over 20 countries, providing cutting-edge diagnostic solutions to healthcare providers worldwide.',
      icon: BarChart
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Integrated advanced AI algorithms into our diagnostic systems, significantly enhancing accuracy and predictive capabilities.',
      icon: Heart
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Pioneers in Modern Diagnostics
          </h2>
          <p className="text-muted-foreground mb-16">
            From our humble beginnings to becoming industry leaders, we've remained committed to developing technologies that transform healthcare delivery and improve patient outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 md:gap-6 mb-16 animate-slide-in">
          {timelineEvents.map((event, index) => (
            <TimelineEvent 
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              icon={event.icon}
              isActive={activeEvent === index}
              onClick={() => setActiveEvent(index)}
            />
          ))}
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
