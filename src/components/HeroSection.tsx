
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-4 relative bg-white"
    >
      {/* Badge at the top */}
      <div className="mb-16 inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
        <span className="text-blue-600 font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd" />
          </svg>
          Advanced Cancer Diagnostics
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      
      {/* Main Heading */}
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Revolutionizing Cancer Detection<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-purple-600">
            Through Advanced Optics
          </span>
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          Pioneering breakthrough optical technologies for early cancer detection and precise diagnostics
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="bg-black hover:bg-black/90 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
          >
            Explore Our Products
          </a>
          <a 
            href="#contact"
            className="bg-black hover:bg-black/90 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
