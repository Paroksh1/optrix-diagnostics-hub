import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Smartphone, Cpu, BarChart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInterval } from '@/hooks/use-interval';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Image carousel items
const carouselItems = [
  {
    image: "/lovable-uploads/f619c155-86d5-4460-bbd2-442a2821c4e0.png",
    caption: "Front view of Lumora Scan device"
  },
  {
    image: "/lovable-uploads/e0a09776-145a-4754-a74b-ed76afc4dc21.png",
    caption: "Portable screening kit demonstration"
  }
];

// Comparison table data
const comparisonData = [
  {
    feature: "Technology",
    lumoraScan: "AI + Spectroscopy + SVM",
    oralScan: "Visual Only",
    velScope: "Fluorescence",
    identafi: "Multi-spectral",
    oralId: "Fluorescence",
    viziLite: "Chemiluminescence"
  },
  {
    feature: "Accuracy",
    lumoraScan: "~97%",
    oralScan: "~85%",
    velScope: "~83%",
    identafi: "~82%",
    oralId: "~80%",
    viziLite: "~77%"
  },
  {
    feature: "Non-invasive",
    lumoraScan: "Yes",
    oralScan: "Yes",
    velScope: "Yes",
    identafi: "Yes",
    oralId: "Yes",
    viziLite: "No"
  },
  {
    feature: "Real-time Results",
    lumoraScan: "Yes",
    oralScan: "No",
    velScope: "No",
    identafi: "No",
    oralId: "No",
    viziLite: "No"
  },
  {
    feature: "Cost Per Test",
    lumoraScan: "less than Rs.500",
    oralScan: "Rs.1000+",
    velScope: "Rs.1500+",
    identafi: "Rs.1200+",
    oralId: "Rs.1000+",
    viziLite: "Rs.2000+"
  }
];

const ProductLumoraScan = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-advance carousel every 3 seconds
  useInterval(() => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  }, 3000);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF8F8]">
      <NavBar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost"
            className="rounded-full hover:bg-[#9292D8]/10 text-[#1B2A41] hover:text-[#1B2A41] mb-8"
            asChild
          >
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          {/* 1. Hero Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-2 bg-accent-light/10 rounded-full text-[#1B2A41] font-medium">
                  Revolutionary Diagnostics
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1B2A41] leading-tight">
                  Introducing Lumora Scan
                </h1>
                
                <p className="text-xl lg:text-2xl text-black font-medium">
                  Non-Invasive, AI-Powered Early Detection for Oral Cancer
                </p>
                
                <p className="text-lg text-black">
                  A portable, AI-driven spectroscopy device that detects early-stage oral cancer quickly, without pain or invasive procedures.
                </p>
                
                <Button 
                  className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
                  asChild
                >
                  <Link to="/contact">
                    Learn More
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border border-accent-light/20">
                  <img 
                    src={carouselItems[0].image}
                    alt="Lumora Scan Device"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. How It Works vs Key Benefits */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#1B2A41]">How It Works & Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* How It Works */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#1B2A41]">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <Smartphone className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Smartphone Imaging</h4>
                      <p className="text-black">Advanced camera system connects with smartphones for high-quality oral imagery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <Cpu className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Raman Spectroscopy</h4>
                      <p className="text-black">Analyzes tissue at the molecular level to detect cancerous changes invisible to the eye</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <BarChart className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Real-time ML Predictions</h4>
                      <p className="text-black">Processes data instantly through our proprietary AI algorithm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Instant Results</h4>
                      <p className="text-black">Delivers clear cancerous vs. non-cancerous determination within seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#1B2A41]">Key Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Non-invasive (non-contact)</h4>
                      <p className="text-black">No tissue removal or direct contact required, providing a pain-free experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Multi-modality</h4>
                      <p className="text-black">Combines imaging and spectroscopy for comprehensive diagnosis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">~97% Accuracy</h4>
                      <p className="text-black">Extensively tested with industry-leading detection rates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#1B2A41]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Affordable (less than Rs.500/test)</h4>
                      <p className="text-black">Significantly more cost-effective than competitor solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Progress & Validation */}
          <section className="mb-20">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-10 text-center text-[#1B2A41]">Progress & Validation</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8 space-y-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-accent-light/20 flex items-center justify-center mr-6">
                        <span className="text-2xl font-bold text-[#1B2A41]">500+</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">Clinical Trials</h4>
                        <p className="text-black">Conducted at AIIMS Delhi and Max Institute</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-accent-light/20 flex items-center justify-center mr-6">
                        <span className="text-2xl font-bold text-[#1B2A41]">97%</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">Accuracy Rate</h4>
                        <p className="text-black">In detecting early-stage oral cancer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-accent-light/20 flex items-center justify-center mr-6">
                        <span className="text-2xl font-bold text-[#1B2A41]">0.97</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium">AUC Score</h4>
                        <p className="text-black">Area Under Curve in ROC analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  {/* Placeholder for ROC Curve - normally would be an actual chart */}
                  <div className="rounded-xl overflow-hidden border border-accent-light/20 w-full max-w-md p-6 bg-white">
                    <h4 className="text-center font-medium mb-2">ROC Curve Analysis</h4>
                    <div className="aspect-square bg-slate-100 relative rounded-lg overflow-hidden flex justify-center items-center">
                      <p className="text-black text-center p-8">
                        AUC = 0.97<br/>
                        (Chart showing superior detection capabilities compared to traditional methods)
                      </p>
                    </div>
                    <p className="text-xs text-center mt-2 text-black">Receiver Operating Characteristic curve showing the diagnostic ability of Lumora Scan</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Competitor Comparison Table */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#1B2A41]">Competitor Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-accent-light/20 text-[#1B2A41]">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-left font-bold">Lumora Scan</th>
                    <th className="py-4 px-6 text-left">OralScan</th>
                    <th className="py-4 px-6 text-left">Velscope</th>
                    <th className="py-4 px-6 text-left">Identafi</th>
                    <th className="py-4 px-6 text-left">Oral ID</th>
                    <th className="py-4 px-6 text-left">Vizi Lite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 font-bold text-[#9292D8]">{row.lumoraScan}</td>
                      <td className="py-4 px-6">{row.oralScan}</td>
                      <td className="py-4 px-6">{row.velScope}</td>
                      <td className="py-4 px-6">{row.identafi}</td>
                      <td className="py-4 px-6">{row.oralId}</td>
                      <td className="py-4 px-6">{row.viziLite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Product Image Gallery */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#1B2A41]">See Lumora Scan in Action</h2>
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-accent-light/20">
                          <div className="h-[400px] bg-white flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.caption}
                              className="max-h-full max-w-full h-auto w-auto object-contain"
                            />
                          </div>
                          <div className="p-4 bg-white">
                            <p className="text-center font-medium text-[#1B2A41]">{item.caption}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="md:-left-12 lg:-left-16" />
                <CarouselNext className="md:-right-12 lg:-right-16" />
              </Carousel>

              <div className="mt-4 flex justify-center space-x-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSlide === index ? 'bg-[#9292D8] w-6' : 'bg-slate-300'
                    }`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 6. Final CTA Section */}
          <section className="bg-accent-light/10 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1B2A41]">Want to enable early detection and save lives?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to learn how Lumora Scan can fit into your workflow.
            </p>
            <Button
              className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductLumoraScan;
