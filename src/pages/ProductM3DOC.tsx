
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, Scan, Microscope, BarChart3, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ARViewer from '../components/ARViewer';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductM3DOC = () => {
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
                  Medical 3D Printing Technology
                </div>
                
                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  M3DOC Printing System
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  Revolutionary 3D printing system for medical applications
                </p>
                
                {/* Description */}
                <div className="space-y-4">
                  <p className="text-gray-600">
                    The M3DOC system represents a breakthrough in medical 3D printing technology, enabling healthcare providers to create patient-specific anatomical models, surgical guides, and implants with unprecedented precision.
                  </p>
                  <p className="text-gray-600">
                    Our proprietary biocompatible materials and advanced software platform work seamlessly together to transform medical imaging data into functional medical devices at the point of care.
                  </p>
                </div>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-3 my-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Biocompatible materials
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Patient-specific
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    High precision
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Rapid production
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    FDA-cleared
                  </span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">50μm</p>
                    <p className="text-gray-500 text-sm">Resolution</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">6hr</p>
                    <p className="text-gray-500 text-sm">Average Print Time</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-4xl font-bold text-gray-900">99%</p>
                    <p className="text-gray-500 text-sm">Accuracy</p>
                  </div>
                </div>
                
                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => window.location.href = '#contact'}
                  className="mt-6 px-8 py-4 bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request a Demo
                </motion.button>
              </motion.div>
              
              {/* Right Column - Image, conditionally rendered based on screen size */}
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
                            alt={`M3DOC Printing System View ${index + 1}`}
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
                            currentImageIndex === index ? 'bg-[#9B5DE5]' : 'bg-[#9B5DE5]/20'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                    
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
                      <h3 className="font-medium mb-1">Printing Technology</h3>
                      <p className="text-sm text-muted-foreground">Stereolithography (SLA) with biocompatible resin</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CloudCog className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Software Platform</h3>
                      <p className="text-sm text-muted-foreground">Cloud-based platform for treatment planning, model design, and print management</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Build Volume</h3>
                      <p className="text-sm text-muted-foreground">Up to 200 x 200 x 300 mm for large-scale medical models</p>
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
                      <h3 className="font-medium mb-1">Patient-Specific Solutions</h3>
                      <p className="text-sm text-muted-foreground">Create custom implants, surgical guides, and anatomical models tailored to individual patient needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Scan className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Enhanced Surgical Planning</h3>
                      <p className="text-sm text-muted-foreground">Improve surgical outcomes with detailed pre-operative planning and accurate visualization</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Cost-Effective Production</h3>
                      <p className="text-sm text-muted-foreground">Reduce manufacturing costs and lead times compared to traditional methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore the Device in 3D</h2>
            <div className="max-w-sm mx-auto">
              <ARViewer modelUrl="/lovable-uploads/19cdaa2e-ff55-43cb-a0f2-f4dbdfd0f645.png" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductM3DOC;
