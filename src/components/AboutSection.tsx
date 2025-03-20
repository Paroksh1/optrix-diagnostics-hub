
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-50/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top badge */}
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-2">
              Revolutionary Oral Cancer Detection
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Precision Meets
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg">
              Pioneering the future of oral cancer diagnostics with our M3DOC 
              multimodal microscopic system for early, accurate, and non-
              invasive detection.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#services" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center"
              >
                Discover Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="text-gray-700 hover:text-gray-900 px-6 py-3 transition-all duration-300 font-medium"
              >
                Learn More
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">95%</p>
                <p className="text-gray-500 text-sm">Detection Accuracy</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">5min</p>
                <p className="text-gray-500 text-sm">Rapid Diagnosis</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">100%</p>
                <p className="text-gray-500 text-sm">Non-Invasive</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Image/Visualization */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Journey badge */}
            <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-medium">Our Diagnostic Journey</span>
            </div>
            
            {/* Result badge */}
            <div className="absolute top-16 right-16 text-right z-10">
              <p className="text-xs text-gray-500">Rapid Screening</p>
              <p className="font-medium">Precise Results</p>
            </div>
            
            {/* Main visualization - circular patterns */}
            <div className="aspect-square bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden relative">
              {/* Circular patterns */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-48 h-48 border-2 border-dashed border-blue-300 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-32 h-32 border-2 border-dashed border-blue-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Small floating dots */}
              <motion.div 
                className="absolute w-3 h-3 bg-blue-300 rounded-full"
                animate={{ 
                  x: [0, 20, 10, -20, 0], 
                  y: [0, -30, -20, -10, 0],
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                style={{ top: "30%", left: "60%" }}
              />
              <motion.div 
                className="absolute w-4 h-4 bg-blue-400 rounded-full"
                animate={{ 
                  x: [0, -30, -15, 30, 0], 
                  y: [0, 20, 10, -20, 0],
                }}
                transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                style={{ top: "70%", left: "40%" }}
              />
              <motion.div 
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                animate={{ 
                  x: [0, 10, 20, 10, 0], 
                  y: [0, 10, 0, -10, 0],
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                style={{ bottom: "20%", right: "30%" }}
              />
            </div>
            
            {/* Bottom floating elements */}
            <div className="absolute -bottom-12 -left-8">
              <motion.div 
                className="w-16 h-16 bg-blue-100 rounded-full opacity-70"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </div>
            <div className="absolute -bottom-8 left-10">
              <motion.div 
                className="w-10 h-10 bg-blue-200 rounded-full opacity-70"
                animate={{ y: [0, -5, 0], x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
            <div className="absolute -bottom-4 left-24">
              <motion.div 
                className="w-8 h-8 bg-blue-300 rounded-full opacity-70"
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
