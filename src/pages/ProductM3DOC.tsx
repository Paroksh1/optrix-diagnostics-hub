
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
          
          <div className="glass-card rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                  M3DOC
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Multimodal Multispectral Microscope for Diagnosis of Oral Cancer
                </p>
                
                <div className="space-y-4 mb-8">
                  <p>
                    M3DOC represents a breakthrough in oral cancer detection technology, combining advanced optical techniques with AI-powered analytics to provide early, accurate diagnosis with unprecedented precision.
                  </p>
                  <p>
                    Our system enables healthcare providers to detect oral cancer at earlier stages than traditional methods, significantly improving treatment outcomes and patient prognosis.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
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
                
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full inline-flex items-center transition-all"
                >
                  Request a Demo
                </motion.a>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/78de9949-8937-4fc0-acb3-b0b07cf6a5c2.png" 
                  alt="M3DOC Device" 
                  className="max-w-full max-h-96 object-contain" 
                />
              </div>
            </div>
          </div>
          
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
