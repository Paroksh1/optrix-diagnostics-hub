
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

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
      imageSrc: '/lovable-uploads/b91f01cc-d20a-402a-9d11-d1ccfa890214.png',
      productLink: '/products/lumora-scan'
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerAnimation}
        >
          <motion.span 
            variants={itemAnimation}
            className="inline-block px-3 py-1 bg-[#9292D8]/10 text-[#9292D8] rounded-full text-sm font-medium mb-4"
          >
            Our Flagship Product
          </motion.span>
          
          <motion.h2 
            variants={itemAnimation}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1B2A41]"
          >
            Revolutionizing Early Cancer Detection
          </motion.h2>
          
          <motion.p 
            variants={itemAnimation}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover the future of healthcare with our cutting-edge diagnostic solutions designed for accuracy and accessibility.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerAnimation}
          className="max-w-6xl mx-auto"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              variants={itemAnimation}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="lg:w-1/2 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-[#F9F7FF] to-[#F0EBFF]">
                <div className="relative w-full max-w-md">
                  <img 
                    src={product.imageSrc} 
                    alt={product.title}
                    className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-[#9292D8]/10 text-[#9292D8] rounded-full text-sm font-medium">
                    Featured Product
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1B2A41]">
                  {product.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6">
                  {product.description}
                </p>
                
                <h4 className="font-semibold text-lg mb-3 text-[#1B2A41]">
                  Key Features:
                </h4>
                
                <ul className="space-y-2.5 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#9292D8] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button 
                    className="bg-[#9292D8] hover:bg-[#7B7BC8] text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 group"
                    asChild
                  >
                    <Link to={product.productLink} className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
