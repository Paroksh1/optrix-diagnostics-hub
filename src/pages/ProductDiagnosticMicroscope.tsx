
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CloudCog, Shield, Zap, Scan, Microscope, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ARViewer from '../components/ARViewer';
import { useIsMobile } from '../hooks/use-mobile';

const ProductDiagnosticMicroscope = () => {
  const isMobile = useIsMobile();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    '/lovable-uploads/2fd0417e-d946-4644-812d-4998f15c7805.png',  // Carrying case image
    '/lovable-uploads/5826e0ae-8728-4780-8fc6-4282e133b914.png',  // Side view of handheld device
    '/lovable-uploads/cd1dc654-cafe-413e-af35-d0a000f42960.png',  // Front view of screen device
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
          
          {/* Product intro section */}
          <section className="py-10">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Column - Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Top badge */}
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-2">
                  Point of Care Device
                </div>
                
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  In-vivo Fast Screening and Diagnosis of Oral Cancerous Epithelia
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  A real-time point of care device for low resource settings
                </p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-3 my-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Non-contact
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Non-invasive
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Imaging & spectroscopy
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    AI/ML powered
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Multi-modality
                  </span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">96.7%</p>
                    <p className="text-gray-500 text-sm">OSCC Accuracy</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">96.4%</p>
                    <p className="text-gray-500 text-sm">High Risk Accuracy</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">92.8%</p>
                    <p className="text-gray-500 text-sm">Low Risk Accuracy</p>
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
              
              {/* Right Column - Image Carousel */}
              {!isMobile && (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="aspect-square bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden relative">
                    <div className="relative w-full h-full">
                      {productImages.map((image, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: currentImageIndex === index ? 1 : 0,
                            x: currentImageIndex === index ? 0 : (currentImageIndex > index ? -20 : 20)
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <img 
                            src={image}
                            alt={`Device View ${index + 1}`}
                            className="max-w-full max-h-full object-contain p-8"
                          />
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentImageIndex === index ? 'bg-blue-500' : 'bg-blue-200'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
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
                      <p className="text-sm text-muted-foreground">Endoscopic imaging using Wi-Fi camera with multimodal device for comprehensive analysis</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CloudCog className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Excitation Source</h3>
                      <p className="text-sm text-muted-foreground">Laser pointer (405nm) with illumination fiber for precise tissue analysis</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Spectrometer</h3>
                      <p className="text-sm text-muted-foreground">Advanced spectral measurement capabilities for detailed tissue analysis</p>
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
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Advanced Diagnostic Capability</h3>
                      <p className="text-sm text-muted-foreground">Analysis of 52 OSCC, 38 high risk, 40 low risk and 130 normal cases with high accuracy</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Scan className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Multi-Modality Approach</h3>
                      <p className="text-sm text-muted-foreground">Superior to other devices that rely only on imaging/multispectral imaging without spectral measurement</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Point of Care Solution</h3>
                      <p className="text-sm text-muted-foreground">Designed specifically for low resource settings where advanced medical facilities are limited</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore the Device in 3D</h2>
            <div className="max-w-sm mx-auto">
              <ARViewer modelUrl="/lovable-uploads/cd1dc654-cafe-413e-af35-d0a000f42960.png" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDiagnosticMicroscope;
