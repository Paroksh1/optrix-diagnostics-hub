
import React from 'react';
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
    <section id="services" className="py-16 bg-dark-base relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">
            Key Technology Features
          </h2>
          <p className="text-light-secondary">
            Our system combines multiple technologies to provide comprehensive diagnostic capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-dark-secondary rounded-xl p-6 curved-box shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-light" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-light">{feature.title}</h3>
              <p className="text-light-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">Our Products</h2>
            <p className="text-light-secondary max-w-2xl mx-auto">
              Cutting-edge diagnostic solutions designed for healthcare professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {products.map((product, index) => (
              <div key={index} className="glass-card flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-dark-secondary border border-accent-light/20">
                <div className="md:w-2/5">
                  <img 
                    src={product.imageSrc} 
                    alt={product.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-3 text-light">{product.title}</h3>
                  <p className="text-light-secondary mb-4">{product.description}</p>
                  
                  <h4 className="font-semibold mb-2 text-light">Key Features:</h4>
                  <ul className="mb-6 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent-light mt-1">•</span>
                        <span className="text-light-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={product.productLink} 
                    className="inline-flex items-center bg-accent-dark hover:bg-accent-dark/90 text-light px-4 py-2 rounded-full transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-accent-dark hover:bg-accent-dark/90 text-light px-6 py-3 rounded-full font-medium inline-block shadow-lg hover:shadow-xl transition-all"
          >
            Request Product Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
