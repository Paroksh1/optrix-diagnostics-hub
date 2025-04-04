
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-50/80 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-600">
            Pioneering early detection technology for oral cancer diagnostics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Founder Video */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video bg-gray-900 relative">
              {/* Placeholder for video - replace with actual video component when available */}
              <video 
                className="w-full h-full object-cover"
                poster="/lovable-uploads/2fd0417e-d946-4644-812d-4998f15c7805.png"
                controls
              >
                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center group">
                <motion.button 
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 ml-1" />
                </motion.button>
              </div>
            </div>
            
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Dr. John Doe</h3>
              <p className="text-gray-600">Founder & Chief Scientific Officer</p>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our Mission
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg">
              We're dedicated to reducing oral cancer mortality through early detection. Our innovative technology 
              provides fast, accurate, and non-invasive screening for oral cancer, making diagnosis accessible 
              in low-resource settings.
            </p>
            
            <p className="text-gray-600 text-lg">
              Founded by leading oncologists and biomedical engineers, our company combines cutting-edge 
              imaging technology with AI-powered diagnostics to revolutionize how oral cancer is detected 
              and treated globally.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#services" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center"
              >
                Discover Our Product
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
                <p className="text-4xl font-bold text-gray-900">96.7%</p>
                <p className="text-gray-500 text-sm">Detection Accuracy</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">50%</p>
                <p className="text-gray-500 text-sm">5-Year Survival Rate</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-bold text-gray-900">100%</p>
                <p className="text-gray-500 text-sm">Non-Invasive</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
