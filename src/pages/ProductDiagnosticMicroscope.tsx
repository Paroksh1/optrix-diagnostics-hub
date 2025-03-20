
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CloudCog, Shield, Zap, Scan, Microscope, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ARViewer from '../components/ARViewer';

const ProductDiagnosticMicroscope = () => {
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
                  Advanced Diagnostic Microscope
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Comprehensive diagnostic system with integrated software platform
                </p>
                
                <div className="space-y-4 mb-8">
                  <p>
                    Our Advanced Diagnostic Microscope combines cutting-edge hardware with powerful cloud-based software to provide a complete diagnostic solution for healthcare providers.
                  </p>
                  <p>
                    The system offers multi-modal analysis capabilities, instant results, and seamless data integration with existing healthcare systems.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Cloud-based platform
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Instant results
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Multi-modal analysis
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Data integration
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Portable design
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
                  src="/lovable-uploads/19cdaa2e-ff55-43cb-a0f2-f4dbdfd0f645.png" 
                  alt="Advanced Diagnostic Microscope" 
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
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              
              <div className="space-y-4">
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
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore the Device in 3D</h2>
            <div className="max-w-lg mx-auto h-96">
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
