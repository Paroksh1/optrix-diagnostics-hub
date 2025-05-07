
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Microscope } from 'lucide-react';

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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 relative bg-[#FCF8F8] font-poppins"
      style={{ padding: '80px 0' }}
    >
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract blob SVG */}
        <svg
          className="absolute top-0 right-0 w-2/3 h-2/3 text-[#F4F0FA]/30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M45.4,-51.2C58.1,-39.2,67.3,-24.6,70.1,-8.5C73,7.6,69.5,25.1,59.9,38.3C50.3,51.5,34.6,60.3,16.9,66.4C-0.8,72.4,-20.5,75.6,-36.3,69.3C-52.1,63,-64,47.1,-68.1,30.1C-72.1,13.1,-68.3,-5,-60.8,-20.2C-53.2,-35.4,-41.9,-47.8,-28.6,-59.6C-15.3,-71.4,0.1,-82.5,13.2,-79.3C26.3,-76.1,37.1,-58.5,45.4,-51.2Z"
            transform="translate(100 100) scale(1.1)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-2/3 h-2/3 text-[#E5DEFF]/20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M39.2,-48.7C52.4,-39.8,66,-29.4,71.2,-15.3C76.4,-1.1,73.3,17,64.4,31C55.5,45,40.8,55,24.8,61.9C8.8,68.7,-8.5,72.5,-24.5,68.7C-40.4,65,-55,53.6,-64.4,38.8C-73.7,24,-77.9,5.8,-73.1,-9.7C-68.4,-25.1,-54.8,-37.8,-40.8,-46.8C-26.8,-55.8,-12.4,-61.1,1,-62.3C14.5,-63.6,28.9,-62.8,39.2,-48.7Z"
            transform="translate(100 100) scale(1.1)"
          />
        </svg>
      </div>

      {/* Badge at the top with more spacing */}
      <motion.div 
        className="mb-24 inline-flex items-center px-4 py-2 rounded-full hover:bg-[#E8E3FE] transition-all cursor-pointer bg-[#F2F0FF]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(108, 99, 255, 0.15)" }}
      >
        <span className="text-[#6C63FF] font-medium flex items-center">
          <Microscope className="w-4 h-4 mr-2 stroke-[#6C63FF]" />
          Advanced Cancer Diagnostics
        </span>
      </motion.div>
      
      {/* Main Heading with improved typography and gradient */}
      <motion.div 
        className="text-center max-w-4xl mx-auto pb-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 text-center tracking-tight leading-tight"
          variants={itemVariants}
        >
          <span className="text-[#1E1E2F]">Revolutionizing Cancer Detection</span><br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#9D7BFF] font-extrabold">
            Through Advanced Optics
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-[#5F5F7A] text-lg md:text-xl mb-16 mx-auto leading-relaxed max-w-[700px]"
          variants={itemVariants}
        >
          Pioneering breakthrough optical technologies for early cancer detection and precise diagnostics
        </motion.p>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div 
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
