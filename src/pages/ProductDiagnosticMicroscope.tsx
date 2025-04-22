
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CloudCog, Shield, Zap, Scan, Microscope, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProductDiagnosticMicroscope = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark-base">
      <NavBar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-accent-light hover:text-accent-light/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-2 bg-dark-secondary rounded-full text-accent-light font-medium">
                  Point of Care Device
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-light leading-tight">
                  In-vivo Fast Screening and Diagnosis of Oral Cancerous Epithelia
                </h1>
                
                <p className="text-xl text-light-secondary">
                  A real-time point of care device for low resource settings
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-dark-secondary text-accent-light rounded-full text-sm">Non-contact</span>
                  <span className="px-3 py-1 bg-dark-secondary text-accent-light rounded-full text-sm">Non-invasive</span>
                  <span className="px-3 py-1 bg-dark-secondary text-accent-light rounded-full text-sm">AI/ML powered</span>
                  <span className="px-3 py-1 bg-dark-secondary text-accent-light rounded-full text-sm">Multi-modality</span>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-8">
                  <div>
                    <p className="text-3xl font-bold text-accent-light">96.7%</p>
                    <p className="text-sm text-light-secondary">OSCC Accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-light">96.4%</p>
                    <p className="text-sm text-light-secondary">High Risk Accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-light">92.8%</p>
                    <p className="text-sm text-light-secondary">Low Risk Accuracy</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-accent-light/20">
                  <img 
                    src="/lovable-uploads/2fd0417e-d946-4644-812d-4998f15c7805.png"
                    alt="Diagnostic Device"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-light">Technical Specifications</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Microscope,
                      title: "Imaging System",
                      description: "Endoscopic imaging using Wi-Fi camera with multimodal device for comprehensive analysis"
                    },
                    {
                      icon: CloudCog,
                      title: "Excitation Source",
                      description: "Laser pointer (405nm) with illumination fiber for precise tissue analysis"
                    },
                    {
                      icon: Zap,
                      title: "Spectrometer",
                      description: "Advanced spectral measurement capabilities for detailed tissue analysis"
                    }
                  ].map((spec, index) => (
                    <div key={index} className="bg-dark-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-accent-light/20 flex items-center justify-center mr-4">
                          <spec.icon className="w-5 h-5 text-accent-light" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 text-light">{spec.title}</h3>
                          <p className="text-sm text-light-secondary">{spec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-light">Key Benefits</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "Advanced Diagnostic Capability",
                      description: "Analysis of 52 OSCC, 38 high risk, 40 low risk and 130 normal cases with high accuracy"
                    },
                    {
                      icon: Scan,
                      title: "Multi-Modality Approach",
                      description: "Superior to other devices that rely only on imaging/multispectral imaging without spectral measurement"
                    },
                    {
                      icon: BarChart3,
                      title: "Point of Care Solution",
                      description: "Designed specifically for low resource settings where advanced medical facilities are limited"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-dark-secondary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-accent-light/20 flex items-center justify-center mr-4">
                          <benefit.icon className="w-5 h-5 text-accent-light" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 text-light">{benefit.title}</h3>
                          <p className="text-sm text-light-secondary">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center bg-accent-dark hover:bg-accent-dark/90 text-light px-6 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Request Product Demo
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDiagnosticMicroscope;
