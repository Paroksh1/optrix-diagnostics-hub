
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const HeroSection = () => {
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
      className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 relative bg-white font-poppins"
    >
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Badge at the top with more spacing */}
      <motion.div 
        className="mb-24 inline-flex items-center bg-blue-50 px-4 py-2 rounded-full hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span className="text-blue-600 font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd" />
          </svg>
          Advanced Cancer Diagnostics
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
      </motion.div>
      
      {/* Main Heading with improved typography and spacing */}
      <motion.div 
        className="text-center max-w-4xl mx-auto pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center tracking-tight leading-tight"
          variants={itemVariants}
        >
          <span className="font-extrabold">Revolutionizing</span> Cancer Detection<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 font-extrabold">
            Through Advanced Optics
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Pioneering breakthrough optical technologies for early cancer detection and precise diagnostics
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-8 justify-center"
          variants={itemVariants}
        >
          <Button
            asChild
            size="lg"
            className="relative inline-flex items-center justify-center px-8 py-6 overflow-hidden font-medium text-white rounded-full group"
          >
            <motion.a 
              href="#services"
              className="bg-black hover:bg-transparent transition-colors duration-500"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-black via-primary to-black rounded-full group-hover:w-full group-hover:h-56"></span>
              <span className="relative z-10 font-medium text-base">Explore Our Products</span>
            </motion.a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border border-gray-200 px-8 py-6 rounded-full font-medium text-base overflow-hidden"
          >
            <motion.a 
              href="#contact"
              className="relative"
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 162, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Interactive geometric elements */}
      <div className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 hidden md:block">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-6 h-6 mb-4 rounded-md bg-primary/10 cursor-pointer"
            whileHover={{ 
              scale: 1.3, 
              rotate: 45, 
              backgroundColor: "rgba(0, 162, 255, 0.3)",
              boxShadow: "0 0 10px rgba(0, 162, 255, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
