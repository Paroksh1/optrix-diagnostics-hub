
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
      className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 relative bg-[#FAFAFA] font-poppins"
      style={{ padding: '80px 0' }}
    >
      {/* Badge at the top with more spacing */}
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] font-extrabold">
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
