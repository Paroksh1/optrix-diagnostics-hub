
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const ServicesSection = () => {
  const products = [
    {
      title: 'Lumora-Scan',
      description: 'Real-time point of care device for low resource settings',
      features: [
        'Non-contact & non-invasive',
        'AI & spectroscopy powered',
        'Multi-modality scanning',
        '~97% accuracy rate',
        'Affordable (less than Rs.500/test)',
        'Early stage cancer detection'
      ],
      imageSrc: '/lovable-uploads/f619c155-86d5-4460-bbd2-442a2821c4e0.png',
      productLink: '/products/lumora-scan'
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#FCF8F8] relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B2A41]">
            Our Products
          </h2>
          <p className="text-black">
            Cutting-edge diagnostic solutions designed for healthcare professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-gray-200">
              <div className="md:w-2/5">
                <img 
                  src={product.imageSrc} 
                  alt={product.title}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold mb-3 text-dark-base">{product.title}</h3>
                <p className="text-dark-secondary mb-4">{product.description}</p>
                
                <h4 className="font-semibold mb-2 text-dark-base">Key Features:</h4>
                <ul className="mb-6 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-light mt-1">•</span>
                      <span className="text-dark-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
                  asChild
                >
                  <Link to={product.productLink} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
            asChild
          >
            <a href="#contact">
              Request Product Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
