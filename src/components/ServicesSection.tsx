
import React, { useState } from 'react';
import { ArrowRight, Activity, Microscope, Dna, Brain, BarChart3, Beaker } from 'lucide-react';

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
      title: 'Advanced Laboratory Diagnostics',
      description: 'Cutting-edge laboratory tests with superior accuracy and rapid turnaround times for clinical decisions.',
    },
    {
      icon: Dna,
      title: 'Genetic Sequencing',
      description: 'Comprehensive DNA analysis for personalized medicine and early disease detection.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Machine learning algorithms that enhance diagnostic accuracy and provide predictive insights.',
    },
    {
      icon: Activity,
      title: 'Remote Patient Monitoring',
      description: 'Continuous health tracking solutions that enable proactive care and early intervention.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Platform',
      description: 'Robust data analytics tools that transform diagnostic data into actionable healthcare insights.',
    },
    {
      icon: Beaker,
      title: 'Research Partnerships',
      description: 'Collaborative research initiatives advancing the frontier of diagnostic medicine.',
    },
  ];

  return (
    <section id="services" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Diagnostic Excellence Through Innovation
          </h2>
          <p className="text-muted-foreground">
            Our comprehensive suite of diagnostic services combines cutting-edge technology with clinical expertise to deliver unmatched accuracy and efficiency.
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
              <h3 className="text-2xl font-bold mb-4">AI-Powered Diagnostic Capabilities</h3>
              <p className="text-muted-foreground mb-6">
                Our AI systems process millions of data points to identify patterns invisible to the human eye, enabling earlier detection and more precise diagnoses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">99.7% Accuracy Rate</p>
                    <p className="text-sm text-muted-foreground">Exceeding industry standards for diagnostic precision</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Real-time Analysis</p>
                    <p className="text-sm text-muted-foreground">Immediate processing of diagnostic data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-medium">Predictive Insights</p>
                    <p className="text-sm text-muted-foreground">Identifying potential health issues before they manifest</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="text-primary font-medium flex items-center hover:underline">
                  Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-accent relative overflow-hidden hidden md:block">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-white animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 rounded-full bg-white animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xl font-bold mb-2">Smart Diagnostics</p>
                <p className="text-sm opacity-80">Powered by proprietary machine learning algorithms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
