
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium">
                  Point of Care Device
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  In-vivo Fast Screening and Diagnosis of Oral Cancerous Epithelia
                </h1>
                
                <p className="text-xl text-gray-600">
                  A real-time point of care device for low resource settings
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Non-contact</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Non-invasive</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">AI/ML powered</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Multi-modality</span>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">96.7%</p>
                    <p className="text-sm text-gray-600">OSCC Accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">96.4%</p>
                    <p className="text-sm text-gray-600">High Risk Accuracy</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">92.8%</p>
                    <p className="text-sm text-gray-600">Low Risk Accuracy</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
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
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
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
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                          <spec.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{spec.title}</h3>
                          <p className="text-sm text-gray-600">{spec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
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
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                          <benefit.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{benefit.title}</h3>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
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
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
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
