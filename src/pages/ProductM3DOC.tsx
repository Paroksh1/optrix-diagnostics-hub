
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Microscope, Activity, TestTube, Scan, Dna, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ARViewer from '../components/ARViewer';

const ProductM3DOC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          {/* Product intro section styled like the second section (AboutSection) of homepage */}
          <section className="py-10">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  M3DOC
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Multimodal Multispectral Microscope for Diagnosis of Oral Cancer
                </p>
                
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-600">
                    M3DOC represents a breakthrough in oral cancer detection technology, combining advanced optical techniques with AI-powered analytics to provide early, accurate diagnosis with unprecedented precision.
                  </p>
                  <p className="text-gray-600">
                    Our system enables healthcare providers to detect oral cancer at earlier stages than traditional methods, significantly improving treatment outcomes and patient prognosis.
                  </p>
                </div>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-3 my-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Real-time imaging
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    AI-powered analysis
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Non-invasive scanning
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Early cancer detection
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    95% detection accuracy
                  </span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-4">
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
                
                {/* Button */}
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center transition-all"
                >
                  Request a Demo
                </motion.a>
              </motion.div>
              
              {/* Right Column - Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-square bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png" 
                    alt="M3DOC Device" 
                    className="max-w-full max-h-full object-contain p-8" 
                  />
                  
                  {/* Circular patterns */}
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="w-64 h-64 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-48 h-48 border-2 border-dashed border-blue-300 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute w-32 h-32 border-2 border-dashed border-blue-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
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
          </section>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Microscope className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Imaging System</h3>
                      <p className="text-sm text-muted-foreground">High-resolution camera with specialized optical filters and LED light sources for multimodal imaging</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Processing Unit</h3>
                      <p className="text-sm text-muted-foreground">Integrated computer with AI algorithms for real-time analysis and diagnosis</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <TestTube className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Spectral Range</h3>
                      <p className="text-sm text-muted-foreground">400-700nm for visible light imaging, with additional UV and NIR capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Scan className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Early Detection</h3>
                      <p className="text-sm text-muted-foreground">Identifies pre-cancerous and cancerous lesions at earlier stages than traditional visual examination</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Dna className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Non-invasive</h3>
                      <p className="text-sm text-muted-foreground">Provides accurate diagnosis without the need for painful tissue biopsies</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Improved Outcomes</h3>
                      <p className="text-sm text-muted-foreground">Earlier detection leads to better treatment outcomes and higher survival rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore the Device in 3D</h2>
            <div className="max-w-lg mx-auto h-96">
              <ARViewer modelUrl="/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductM3DOC;
