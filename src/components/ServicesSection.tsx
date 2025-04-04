
import React, { useState } from 'react';
import { ArrowRight, Microscope, Dna, Activity, BarChart3, Scan, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Multimodal Device',
      description: 'Combines imaging with spectroscopy for comprehensive oral cancer screening and diagnosis.',
    },
    {
      icon: Activity,
      title: 'High Accuracy',
      description: 'Up to 96.7% accuracy in detecting OSCC cases and 96.43% in identifying high-risk precancerous conditions.',
    },
    {
      icon: TestTube,
      title: 'Non-Invasive Screening',
      description: 'Non-contact screening eliminates the need for painful biopsies in preliminary examinations.',
    },
    {
      icon: Scan,
      title: 'Smartphone Integration',
      description: 'Uses smartphone-based imaging and spectroscopy for portability and accessibility.',
    },
    {
      icon: Dna,
      title: 'AI/ML Powered',
      description: 'Advanced AI algorithms provide rapid and accurate analysis of oral tissues.',
    },
    {
      icon: BarChart3,
      title: 'Point of Care Solution',
      description: 'Specifically designed for low-resource settings where advanced medical facilities are limited.',
    },
  ];

  const products = [
    {
      title: 'In-vivo Fast Screening and Diagnosis of Oral Cancerous Epithelia',
      description: 'Real-time point of care device for low resource settings',
      features: [
        'Non-contact & non-invasive',
        'Based on imaging and spectroscopy',
        'Multi-modality scanning',
        'Easy to operate',
        'AI/ML powered',
        'Early stage cancer detection'
      ],
      imageSrc: '/lovable-uploads/2fd0417e-d946-4644-812d-4998f15c7805.png',
      productLink: '/products/diagnostic-microscope'
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Technology Features
          </h2>
          <p className="text-gray-600">
            Our system combines multiple technologies to provide comprehensive diagnostic capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 curved-box"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium inline-block"
          >
            Request Product Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
