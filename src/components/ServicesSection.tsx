
import React, { useState } from 'react';
import { ArrowRight, Microscope, Dna, Activity, BarChart3, Scan, TestTube } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  onClick 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`group cursor-pointer transition-all duration-500 ${isActive ? 'md:-translate-y-2' : ''}`}
      onClick={onClick}
    >
      <div className={`glass-card rounded-xl p-6 h-full transition-all duration-300 border ${
        isActive ? 'border-primary/50 shadow-lg' : 'border-transparent hover:border-primary/20'
      }`}>
        <div className="w-12 h-12 rounded-lg mb-6 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
          <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'} transition-colors duration-300`} />
        </div>
        
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className={`flex items-center text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground'} transition-colors duration-300`}>
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const services = [
    {
      icon: Microscope,
      title: 'Multimodal Microscopy',
      description: 'Advanced microscopy system with excitation light sources, spectral filters, and high-resolution camera for detailed oral tissue analysis.',
    },
    {
      icon: Activity,
      title: 'Autofluorescence Imaging',
      description: 'Reveals distinct molecular distribution patterns to differentiate between healthy and malignant tissues with high precision.',
    },
    {
      icon: TestTube,
      title: 'Spectral Analysis',
      description: 'Identifies variations in fluorescence peaks of key endogenous fluorophores, correlating with metabolic changes in cancer cells.',
    },
    {
      icon: Scan,
      title: 'Phase Imaging',
      description: 'Highlights morphological irregularities, such as altered cellular structure and density, which are indicative of malignancy.',
    },
    {
      icon: Dna,
      title: 'Non-Invasive Detection',
      description: 'Provides rapid and non-invasive oral cancer diagnostic capabilities without the need for painful biopsies.',
    },
    {
      icon: BarChart3,
      title: 'Comparative Analysis',
      description: 'Integrates molecular and morphological data for enhanced diagnostic accuracy compared to traditional histopathology.',
    },
  ];

  return (
    <section id="services" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            M3DOC: Multimodal Microscopic Diagnostic for Oral Cancer
          </h2>
          <p className="text-muted-foreground">
            Our revolutionary M3DOC system combines cutting-edge optical technology with advanced analytics to provide early, accurate detection of oral cancer with unprecedented precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl overflow-hidden animate-slide-in" style={{animationDelay: '0.4s'}}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">M3DOC Technology</h3>
              <p className="text-muted-foreground mb-6">
                The M3DOC system has been tested on a range of oral tissue samples, both healthy and cancerous, revealing significant diagnostic capabilities through our proprietary imaging technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">High Diagnostic Accuracy</p>
                    <p className="text-sm text-muted-foreground">Comparative studies with traditional histopathology demonstrated the potential of M3DOC as a rapid diagnostic tool</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Real-time Analysis</p>
                    <p className="text-sm text-muted-foreground">Immediate processing of tissue imaging data for quick clinical decisions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Non-invasive Detection</p>
                    <p className="text-sm text-muted-foreground">Comfortable experience for patients while providing crucial diagnostic information</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="text-primary font-medium flex items-center hover:underline">
                  Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative overflow-hidden hidden md:flex items-center justify-center bg-gradient-to-br from-primary to-accent">
              <img 
                src="/lovable-uploads/f32a5a75-b1a6-44b7-b92c-c67687a2d608.png" 
                alt="M3DOC Diagnostic System" 
                className="w-full h-full object-contain p-8 mix-blend-luminosity opacity-90"
              />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xl font-bold mb-2">M3DOC System</p>
                <p className="text-sm opacity-80">Advanced optical setup for oral cancer detection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
