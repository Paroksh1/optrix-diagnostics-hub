import React, { useState } from 'react';
import { ArrowRight, Microscope, Dna, Activity, BarChart3, Scan, TestTube, CloudCog, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ 
  title,
  description,
  features,
  imageSrc,
  isActive,
  onClick,
  productLink
}: { 
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  isActive: boolean;
  onClick: () => void;
  productLink: string;
}) => {
  return (
    <Link
      to={productLink}
      className={`group cursor-pointer transition-all duration-500 block ${isActive ? 'md:-translate-y-2' : ''}`}
      onClick={onClick}
    >
      <div className={`glass-card rounded-xl overflow-hidden h-full transition-all duration-300 border ${
        isActive ? 'border-primary/50 shadow-lg' : 'border-transparent hover:border-primary/20'
      }`}>
        <div className="p-4 pb-6">
          <h3 className="text-xl font-bold mb-2 transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          
          <div className="space-y-2 mb-4">
            {features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <p className="text-xs">{feature}</p>
              </div>
            ))}
          </div>
          
          <div
            className={`flex items-center text-xs font-medium ${isActive ? 'text-primary' : 'text-foreground'} transition-colors duration-300`}
          >
            Learn more <ArrowRight className="ml-1 w-3 h-3" />
          </div>
        </div>
        
        <div className="h-36 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-contain p-4" 
          />
        </div>
      </div>
    </Link>
  );
};

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const products = [
    {
      title: 'M3DOC',
      description: 'Multimodal Multispectral Microscope for Diagnosis of Oral Cancer',
      features: [
        'Real-time imaging',
        'AI-powered analysis',
        'Non-invasive scanning',
        'Early cancer detection',
        '95% detection accuracy',
        'Rapid diagnosis in minutes'
      ],
      imageSrc: '/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png',
      productLink: '/products/m3doc'
    },
    {
      title: 'Advanced Diagnostic Microscope',
      description: 'Comprehensive diagnostic system with integrated software platform',
      features: [
        'Cloud-based platform',
        'Instant results',
        'Multi-modal analysis',
        'Data integration',
        'Portable design',
        'User-friendly interface'
      ],
      imageSrc: '/lovable-uploads/cea21519-6fd1-4ba0-8cdb-284f51489037.png',
      productLink: '/products/diagnostic-microscope'
    }
  ];

  const features = [
    {
      icon: Microscope,
      title: 'Multimodal Microscopy',
      description: 'Advanced microscopy system with excitation light sources, spectral filters, and high-resolution camera.',
    },
    {
      icon: Activity,
      title: 'Autofluorescence Imaging',
      description: 'Reveals distinct molecular patterns to differentiate between healthy and malignant tissues.',
    },
    {
      icon: TestTube,
      title: 'Spectral Analysis',
      description: 'Identifies variations in fluorescence peaks of key endogenous fluorophores in cancer cells.',
    },
    {
      icon: Scan,
      title: 'Phase Imaging',
      description: 'Highlights morphological irregularities indicative of malignancy in cellular structure.',
    },
    {
      icon: Dna,
      title: 'Non-Invasive Detection',
      description: 'Provides rapid and non-invasive cancer diagnostic capabilities without painful biopsies.',
    },
    {
      icon: BarChart3,
      title: 'Comparative Analysis',
      description: 'Integrates molecular and morphological data for enhanced diagnostic accuracy.',
    },
  ];

  return (
    <section id="services" className="section-padding py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Innovative Solutions for Cancer Detection
          </h2>
          <p className="text-muted-foreground">
            Our revolutionary diagnostic systems combine cutting-edge optical technology with advanced analytics to provide early, accurate detection of cancer with unprecedented precision.
          </p>
        </div>
        
        {/* Products container - fixed alignment with flex */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16 animate-slide-in">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <ProductCard
                title={product.title}
                description={product.description}
                features={product.features}
                imageSrc={product.imageSrc}
                isActive={activeCard === index}
                onClick={() => setActiveCard(index)}
                productLink={product.productLink}
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-10 mt-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Key Technology Features
          </h2>
          <p className="text-muted-foreground">
            Our M3DOC system combines multiple technologies to provide comprehensive diagnostic capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-in">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <div className="w-10 h-10 rounded-lg mb-4 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-200 font-medium inline-block"
          >
            Request Product Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
