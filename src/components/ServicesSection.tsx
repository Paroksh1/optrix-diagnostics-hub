
import React from 'react';
import { ArrowRight, Microscope } from 'lucide-react';
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
    <section id="services" className="py-16 bg-[#F6F3FF] relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation} className="inline-flex items-center justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center">
              <Microscope className="w-5 h-5 text-[#9D8DF1]" />
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemAnimation}
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1B2A41]"
          >
            Our Products
          </motion.h2>
          
          <motion.div 
            variants={itemAnimation}
            className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full shadow-sm shadow-[#9D8DF1]/30"
          ></motion.div>
          
          <motion.p 
            variants={itemAnimation}
            className="text-black mt-4"
          >
            Cutting-edge diagnostic solutions designed for healthcare professionals
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerAnimation}
          className="grid md:grid-cols-1 lg:grid-cols-1 gap-12"
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              variants={itemAnimation}
              className="bg-gradient-to-br from-white to-[#f7f4ff] flex flex-col md:flex-row gap-6 p-8 rounded-[1.5rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-all duration-300"
            >
              <div className="md:w-2/5 flex items-center justify-center">
                <img 
                  src={product.imageSrc} 
                  alt={product.title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold mb-3 text-dark-base">{product.title}</h3>
                <p className="text-dark-secondary mb-4">{product.description}</p>
                
                <h4 className="font-semibold mb-2 text-dark-base">Key Features:</h4>
                <ul className="mb-6 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#9D8DF1] mt-1">•</span>
                      <span className="text-dark-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="bg-[#9D8DF1] hover:bg-[#9D8DF1]/90 text-white rounded-full shadow-sm shadow-[#9D8DF1]/30"
                  asChild
                >
                  <Link to={product.productLink} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
