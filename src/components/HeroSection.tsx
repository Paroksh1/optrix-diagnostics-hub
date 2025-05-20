
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Microscope } from 'lucide-react';

import AnimatedContent from './AnimatedContent';
import { a } from '@react-spring/web';



const HeroSection = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const logo = [{
    imageSrc: "/lovable-uploads/OMD Primary Brandmark All Black (1).png",
    alt: "Opti-mode Diagnostics logo",}];
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-16 px-4 relative bg-[#ffffff] font-poppins overflow-x-hidden"
    >
      {/* Badge at the top with more spacing
      <motion.div 
        className="mb-24 inline-flex items-center px-4 py-2 rounded-full hover:bg-[#E8E3FE] transition-all cursor-pointer bg-[#F2F0FF]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.03, fontWeight: "600" }}
      >
        <span className="text-[#7F56D9] font-medium flex items-center">
          <Microscope className="w-4 h-4 mr-2 stroke-[#7F56D9]" />
          Advanced Cancer Diagnostics
        </span>
      </motion.div> */}

      
      {/* Main Heading with improved typography and gradient */}

      <div className="max-w-screen-sm mx-auto px-4 text-center">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          {logo.map((logo, index) => (
            <motion.div key={index}>
              <img 
                src={logo.imageSrc} 
                alt="Opti-mode Diagnostics logo" 
                className="h-auto w-full max-w-[400px] mx-auto object-contain mb-8"
              />
            </motion.div>
          ))}
        </AnimatedContent>

        <motion.div 
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug break-words whitespace-normal text-balance mb-6"
            variants={itemVariants}
          >
            <span className="block text-[#1E1E2F]">Opti-mode</span>
            <span className="block text-[#1E1E2F]">Diagnostics</span>
          </motion.h1> */}
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug break-words whitespace-normal text-balance mb-6"
            variants={itemVariants}
          >
            Revolutionizing Cancer Detection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9]">
              Through Advanced Photonics
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
            variants={itemVariants}
          >
            Pioneering breakthrough optical technologies for early cancer detection and precise diagnostics
          </motion.p>
        </motion.div>

        <motion.button
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          variants={itemVariants}
          onClick={(e) => {
            const section = document.getElementById('contact');
            if (section) {
              e.preventDefault();
              section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
              window.history.pushState(null, '', '#contact');
            }
          }}
        >
          <a href="#contact" className="inline-block w-full">Get Started</a>
        </motion.button>
      </div>

        

      

      {/* Scroll down indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[#A58EFF] text-sm font-medium mb-2">Scroll Down</span>
          <ChevronDown className="text-[#A58EFF] w-6 h-6" />
        </motion.div>
      </motion.div> */}
      
    </section>
  );
};

export default HeroSection;
