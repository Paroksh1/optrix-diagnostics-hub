
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, BarChart, CheckCircle, Check, Minus, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useInterval } from '@/hooks/use-interval';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

// Caption data for stats
const statCaptions = {
  clinicalTrials: "Tested across major medical institutions for reliability",
  accuracy: "Enables early intervention and higher treatment success rate",
  aucScore: "Indicates excellent model prediction performance"
};

// CSS styles for gradient text
const gradientTextStyle = {
  background: 'linear-gradient(90deg, #A18CD1, #FBC2EB)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontWeight: 700,
  letterSpacing: '0.5px',
};

const ProductLumoraScan = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-advance carousel every 3 seconds
  useInterval(() => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  }, 3000);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF8F8]">
      <NavBar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <Button 
            variant="ghost"
            className="rounded-full hover:bg-[#9D8DF1]/10 text-[#1A1E2E] hover:text-[#1A1E2E] mb-8"
            asChild
          >
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          {/* 1. Hero Section with carousel */}
          <motion.section 
            className="hero-section mb-16 md:mb-24"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-6 sm:px-12">
              <motion.div 
                className="space-y-4 order-2 lg:order-1 text-center lg:text-left max-w-4xl mx-auto w-full"
                variants={fadeIn}
              >
                <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  Revolutionary Diagnostics
                </span>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-4 mb-2">
                  Introducing Lumora Scan
                </h1>
                
                <p className="text-base sm:text-lg font-medium text-purple-600 mb-2">
                  Non-Invasive, AI-Powered Early Detection for Oral Cancer
                </p>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A portable, AI-driven spectroscopy device that detects early-stage oral cancer quickly, without pain or invasive procedures.
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition"
                    asChild
                  >
                    <Link to="/contact">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex items-center justify-center order-1 lg:order-2"
              >
                <div className="rounded-2xl overflow-hidden border border-[#9D8DF1]/10 bg-[#F8F8FA] w-full max-w-md card-responsive">
                  <div className="relative">
                    {carouselItems.map((item, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-500 ${activeSlide === index ? 'opacity-100 block' : 'opacity-0 hidden'}`}
                      >
                        <div className="h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center p-4 bg-white">
                          <img 
                            src={item.image} 
                            alt={item.caption}
                            className="max-h-full max-w-full h-auto w-auto object-contain"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                        <div className="p-3 bg-white">
                          <p className="text-xs sm:text-sm text-center text-[#4A4A68]">{item.caption}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
                      {carouselItems.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all ${
                            activeSlide === index ? 'bg-[#9B5DE5]' : 'bg-[#9B5DE5]/30'
                          }`}
                          onClick={() => setActiveSlide(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 2. How It Works & Key Benefits */}
          <motion.section 
            className="mb-16 md:mb-24 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1A1E2E]">How It Works & Key Benefits</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* How It Works */}
              <motion.div variants={fadeIn}>
                <Card className="h-full bg-white rounded-xl md:rounded-2xl border-[#9D8DF1]/10 hover:border-[#9D8DF1]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-[#1A1E2E] text-center md:text-left">How It Works</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 md:space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Smartphone Imaging</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Advanced camera system connects with smartphones for high-quality oral imagery</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <Cpu className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Raman Spectroscopy</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Analyzes tissue at the molecular level to detect cancerous changes invisible to the eye</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <BarChart className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Real-time ML Predictions</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Processes data instantly through our proprietary AI algorithm</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Instant Results</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Delivers clear cancerous vs. non-cancerous determination within seconds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Key Benefits */}
              <motion.div variants={fadeIn}>
                <Card className="h-full bg-white rounded-xl md:rounded-2xl border-[#9D8DF1]/10 hover:border-[#9D8DF1]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-[#1A1E2E] text-center md:text-left">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 md:space-y-6">
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Non-invasive (non-contact)</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">No tissue removal or direct contact required, providing a pain-free experience</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Multi-modality</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Combines imaging and spectroscopy for comprehensive diagnosis</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">~97% Accuracy</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Extensively tested with industry-leading detection rates</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center md:mr-4 mx-auto md:mx-0 mb-3 md:mb-0 shrink-0">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Affordable (less than Rs.500/test)</h4>
                        <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">Significantly more cost-effective than competitor solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* 3. Progress & Validation */}
          <motion.section 
            className="mb-16 md:mb-24 px-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1A1E2E]">Progress & Validation</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </motion.div>
            
            <Card className="bg-white rounded-xl md:rounded-2xl border-[#9D8DF1]/10 shadow-sm">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <motion.div variants={fadeIn}>
                    <div className="space-y-6 md:space-y-8">
                      <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">500+</span>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-[#1A1E2E]">Clinical Trials</h4>
                          <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">{statCaptions.clinicalTrials}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">97%</span>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-[#1A1E2E]">Accuracy Rate</h4>
                          <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">{statCaptions.accuracy}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">0.97</span>
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-medium text-[#1A1E2E]">AUC Score</h4>
                          <p className="text-sm md:text-base text-[#4A4A68] leading-relaxed">{statCaptions.aucScore}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-center mt-6 md:mt-0"
                    variants={fadeIn}
                  >
                    <div className="rounded-xl overflow-hidden border border-[#9D8DF1]/10 w-full max-w-[320px] md:max-w-md p-4 md:p-6 bg-white">
                      <h4 className="text-center font-medium mb-4 text-[#1A1E2E]">ROC Curve Analysis</h4>
                      <div className="aspect-square bg-[#F8F7FD] relative rounded-lg overflow-hidden flex justify-center items-center">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 100 100"
                          className="p-4"
                        >
                          {/* Simple ROC curve visualization */}
                          <defs>
                            <linearGradient id="rocGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#9D8DF1" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#9D8DF1" />
                            </linearGradient>
                          </defs>
                          
                          {/* Grid lines */}
                          <line x1="10" y1="90" x2="90" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="10" y1="70" x2="90" y2="70" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="10" y1="50" x2="90" y2="50" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="10" y1="30" x2="90" y2="30" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="10" y1="10" x2="90" y2="10" stroke="#E5E7EB" strokeWidth="0.5" />
                          
                          <line x1="10" y1="10" x2="10" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="30" y1="10" x2="30" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="50" y1="10" x2="50" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="70" y1="10" x2="70" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          <line x1="90" y1="10" x2="90" y2="90" stroke="#E5E7EB" strokeWidth="0.5" />
                          
                          {/* Diagonal */}
                          <line x1="10" y1="90" x2="90" y2="10" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2,2" />
                          
                          {/* ROC curve (example) */}
                          <path 
                            d="M10,90 Q20,40 40,25 T90,10" 
                            fill="none" 
                            stroke="#9D8DF1" 
                            strokeWidth="2" 
                          />
                          
                          {/* Fill under curve */}
                          <path 
                            d="M10,90 Q20,40 40,25 T90,10 V90 Z" 
                            fill="url(#rocGradient)" 
                            opacity="0.3" 
                          />
                          
                
                        {/* Labels */}
                          <text x="50" y="98" textAnchor="middle" fontSize="6" fill="#4A4A68">False Positive Rate</text>
                          <text x="3" y="50" textAnchor="middle" fontSize="6" fill="#4A4A68" transform="rotate(-90, 3, 50)">True Positive Rate</text>
                          <text x="70" y="25" textAnchor="middle" fontSize="8" fill="#1A1E2E" fontWeight="bold">AUC = 0.97</text>

                        </svg>
                      </div>
                      <p className="text-xs text-center mt-4 text-[#4A4A68]">Receiver Operating Characteristic curve showing the diagnostic ability of Lumora Scan</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* 4. Competitor Comparison Table */}
          <motion.section 
            className="mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#1A1E2E]">Competitor Comparison</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full mb-4"></div>
              <p className="text-sm md:text-base text-[#4A4A68] px-4 mb-6 md:hidden">Scroll horizontally to see full comparison</p>
            </div>
            
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[800px]">
                <Table className="w-full bg-white rounded-xl md:rounded-2xl overflow-hidden">
                  <TableHeader className="bg-[#F8F7FD] sticky top-0">
                    <TableRow>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">Feature</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left bg-[#9D8DF1]/10 text-[#1A1E2E] font-bold">Lumora Scan</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">OralScan</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">Velscope</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">Identafi</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">Oral ID</TableHead>
                      <TableHead className="py-3 md:py-4 px-4 md:px-6 text-left text-[#1A1E2E] font-medium">Vizi Lite</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index} className={`hover:bg-[#F8F7FD] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 font-medium text-[#1A1E2E]">{row.feature}</TableCell>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 font-semibold text-[#9D8DF1] bg-[#9D8DF1]/5">
                          {row.feature === "Non-invasive" || row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Check className="mr-1 h-4 w-4 md:h-5 md:w-5 text-[#9D8DF1]" />
                              <span>Yes</span>
                            </div> : 
                            row.lumoraScan
                          }
                        </TableCell>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 text-[#4A4A68]">
                          {row.feature === "Non-invasive" ? 
                            <div className="flex items-center">
                              <Check className="mr-1 h-4 w-4 md:h-5 md:w-5 text-[#9D8DF1]/70" />
                              <span>Yes</span>
                            </div> : 
                            (row.feature === "Real-time Results" ? 
                              <div className="flex items-center">
                                <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span>No</span>
                              </div> : 
                              row.oralScan
                            )
                          }
                        </TableCell>
                        {/* Repeat the pattern for other columns */}
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 text-[#4A4A68]">
                          {row.feature === "Non-invasive" ? 
                            <div className="flex items-center">
                              <Check className="mr-1 h-4 w-4 md:h-5 md:w-5 text-[#9D8DF1]/70" />
                              <span>Yes</span>
                            </div> : 
                            (row.feature === "Real-time Results" ? 
                              <div className="flex items-center">
                                <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span>No</span>
                              </div> : 
                              row.velScope
                            )
                          }
                        </TableCell>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 text-[#4A4A68]">
                          {row.feature === "Non-invasive" ? 
                            <div className="flex items-center">
                              <Check className="mr-1 h-4 w-4 md:h-5 md:w-5 text-[#9D8DF1]/70" />
                              <span>Yes</span>
                            </div> : 
                            (row.feature === "Real-time Results" ? 
                              <div className="flex items-center">
                                <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span>No</span>
                              </div> : 
                              row.identafi
                            )
                          }
                        </TableCell>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 text-[#4A4A68]">
                          {row.feature === "Non-invasive" ? 
                            <div className="flex items-center">
                              <Check className="mr-1 h-4 w-4 md:h-5 md:w-5 text-[#9D8DF1]/70" />
                              <span>Yes</span>
                            </div> : 
                            (row.feature === "Real-time Results" ? 
                              <div className="flex items-center">
                                <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span>No</span>
                              </div> : 
                              row.oralId
                            )
                          }
                        </TableCell>
                        <TableCell className="py-3 md:py-4 px-4 md:px-6 text-[#4A4A68]">
                          {row.feature === "Non-invasive" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                              <span>No</span>
                            </div> : 
                            (row.feature === "Real-time Results" ? 
                              <div className="flex items-center">
                                <Minus className="mr-1 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                                <span>No</span>
                              </div> : 
                              row.viziLite
                            )
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </motion.section>


          
          {/* SEO Meta Content (Hidden) */}
          <div className="hidden">
            <h2>Oral cancer detection</h2>
            <h2>AI-powered diagnostics</h2>
            <h2>Non-invasive spectroscopy</h2>
            <h2>Lumora Scan</h2>
            <h2>AIIMS Delhi clinical trials</h2>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductLumoraScan;
