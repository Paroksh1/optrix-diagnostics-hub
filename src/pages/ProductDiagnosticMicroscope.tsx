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
    '/lovable-uploads/19cdaa2e-ff55-43cb-a0f2-f4dbdfd0f645.png',
    '/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png',
    '/lovable-uploads/f32a5a75-b1a6-44b7-b92c-c67687a2d608.png',
    '/lovable-uploads/7a707abe-606d-4656-8096-960a1ac2e6c1.png',
    '/lovable-uploads/929ca821-1038-477e-a778-f88afc3c5519.png',
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
      
      <main className="pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4 md:mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <section className="py-4 md:py-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-20">
              <motion.div 
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-2 text-sm">
                  Comprehensive Diagnostic System
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Advanced Diagnostic Microscope
                </h1>
                
                <p className="text-base md:text-xl text-muted-foreground mb-3 md:mb-6">
                  Comprehensive diagnostic system with integrated software platform
                </p>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-gray-600 text-sm md:text-base">
                    Our Advanced Diagnostic Microscope combines cutting-edge hardware with powerful cloud-based software to provide a complete diagnostic solution for healthcare providers.
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    The system offers multi-modal analysis capabilities, instant results, and seamless data integration with existing healthcare systems.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 my-3 md:my-6">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                    Cloud-based platform
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                    Instant results
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                    Multi-modal analysis
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                    Data integration
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm">
                    Portable design
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 md:gap-8 pt-2 md:pt-4">
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-4xl font-bold text-gray-900">98%</p>
                    <p className="text-gray-500 text-xs md:text-sm">Integration Rate</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-4xl font-bold text-gray-900">10TB</p>
                    <p className="text-gray-500 text-xs md:text-sm">Cloud Storage</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-2xl md:text-4xl font-bold text-gray-900">3kg</p>
                    <p className="text-gray-500 text-xs md:text-sm">Lightweight</p>
                  </div>
                </div>
                
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full inline-flex items-center transition-all text-sm md:text-base"
                >
                  Request a Demo
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="relative max-w-sm mx-auto md:max-w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-square bg-blue-50 rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden relative">
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
                          alt={`Advanced Diagnostic Microscope View ${index + 1}`}
                          className="max-w-full max-h-full object-contain p-4 md:p-8"
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
                      />
                    ))}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="w-40 h-40 md:w-64 md:h-64 border-2 border-dashed border-blue-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute w-32 h-32 md:w-48 md:h-48 border-2 border-dashed border-blue-300 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute w-24 h-24 md:w-32 md:h-32 border-2 border-dashed border-blue-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Technical Specifications</h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Microscope className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Optical System</h3>
                      <p className="text-sm text-muted-foreground">High-resolution digital microscope with multiple magnification levels and automated focus</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CloudCog className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Cloud Platform</h3>
                      <p className="text-sm text-muted-foreground">Secure, HIPAA-compliant cloud software for image storage, analysis, and integration with EHR systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Processing Power</h3>
                      <p className="text-sm text-muted-foreground">Edge computing with AI acceleration for real-time analysis and instant diagnostic feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Key Benefits</h2>
              
              <div className="space-y-3 md:space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Data Security</h3>
                      <p className="text-sm text-muted-foreground">Enterprise-grade security with end-to-end encryption and compliance with healthcare data regulations</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Scan className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Versatile Analysis</h3>
                      <p className="text-sm text-muted-foreground">Multiple imaging modes for comprehensive tissue analysis across different medical applications</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Analytics Dashboard</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive reporting tools with historical data tracking and outcome analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10 md:mb-20">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Explore the Device in 3D</h2>
            <div className="max-w-xs mx-auto">
              <ARViewer modelUrl="/lovable-uploads/19cdaa2e-ff55-43cb-a0f2-f4dbdfd0f645.png" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDiagnosticMicroscope;
