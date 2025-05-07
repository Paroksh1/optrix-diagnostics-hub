import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Smartphone, Cpu, BarChart, CheckCircle, Check, Minus } from 'lucide-react';
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
          
          {/* 1. Hero Section */}
          <motion.section 
            className="mb-24"
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                variants={fadeIn}
              >
                <div className="inline-block px-4 py-2 bg-[#F2F0FF] rounded-full text-[#9D8DF1] font-medium">
                  Revolutionary Diagnostics
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-[#1A1E2E]">Introducing Lumora Scan</span>
                </h1>
                
                <p className="text-xl lg:text-2xl font-medium" style={gradientTextStyle}>
                  Non-Invasive, AI-Powered Early Detection for Oral Cancer
                </p>
                
                <p className="text-lg text-[#4A4A68] leading-relaxed">
                  A portable, AI-driven spectroscopy device that detects early-stage oral cancer quickly, without pain or invasive procedures.
                </p>
                
                <Button 
                  className="bg-[#9D8DF1] hover:bg-[#9D8DF1]/90 text-white rounded-full"
                  asChild
                >
                  <Link to="/contact">
                    Learn More
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex items-center justify-center"
              >
                <div className="rounded-2xl overflow-hidden border border-[#9D8DF1]/10 bg-[#F8F8FA] w-full max-w-md">
                  <div className="flex items-center justify-center p-6">
                    <img 
                      src={carouselItems[0].image}
                      alt="AI-powered oral cancer detection device - Lumora Scan"
                      className="max-h-[400px] w-auto object-contain"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <p className="text-sm text-[#4A4A68]">Front view of the Lumora Scan device</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 2. How It Works & Key Benefits */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3 text-[#1A1E2E]">How It Works & Key Benefits</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* How It Works */}
              <motion.div variants={fadeIn}>
                <Card className="h-full bg-white rounded-2xl border-[#9D8DF1]/10 hover:border-[#9D8DF1]/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#1A1E2E]">How It Works</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <Smartphone className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Smartphone Imaging</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Advanced camera system connects with smartphones for high-quality oral imagery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <Cpu className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Raman Spectroscopy</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Analyzes tissue at the molecular level to detect cancerous changes invisible to the eye</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <BarChart className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Real-time ML Predictions</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Processes data instantly through our proprietary AI algorithm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Instant Results</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Delivers clear cancerous vs. non-cancerous determination within seconds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Key Benefits */}
              <motion.div variants={fadeIn}>
                <Card className="h-full bg-white rounded-2xl border-[#9D8DF1]/10 hover:border-[#9D8DF1]/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#1A1E2E]">Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Non-invasive (non-contact)</h4>
                        <p className="text-[#4A4A68] leading-relaxed">No tissue removal or direct contact required, providing a pain-free experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Multi-modality</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Combines imaging and spectroscopy for comprehensive diagnosis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">~97% Accuracy</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Extensively tested with industry-leading detection rates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-4 shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#9D8DF1]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1 text-[#1A1E2E]">Affordable (less than Rs.500/test)</h4>
                        <p className="text-[#4A4A68] leading-relaxed">Significantly more cost-effective than competitor solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>

          {/* 3. Progress & Validation */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3 text-[#1A1E2E]">Progress & Validation</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </motion.div>
            
            <Card className="bg-white rounded-2xl border-[#9D8DF1]/10">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div variants={fadeIn}>
                    <div className="mb-8 space-y-8">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">500+</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#1A1E2E]">Clinical Trials</h4>
                          <p className="text-[#4A4A68] leading-relaxed">{statCaptions.clinicalTrials}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">97%</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#1A1E2E]">Accuracy Rate</h4>
                          <p className="text-[#4A4A68] leading-relaxed">{statCaptions.accuracy}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-[#9D8DF1]/10 flex items-center justify-center mr-6">
                          <span className="text-2xl font-bold text-[#9D8DF1]">0.97</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#1A1E2E]">AUC Score</h4>
                          <p className="text-[#4A4A68] leading-relaxed">{statCaptions.aucScore}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-center"
                    variants={fadeIn}
                  >
                    <div className="rounded-xl overflow-hidden border border-[#9D8DF1]/10 w-full max-w-md p-6 bg-white">
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
                          <text x="50" y="98" textAnchor="middle" fontSize="8" fill="#4A4A68">False Positive Rate</text>
                          <text x="5" y="50" textAnchor="middle" fontSize="8" fill="#4A4A68" transform="rotate(-90, 5, 50)">True Positive Rate</text>
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
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-[#1A1E2E]">Competitor Comparison</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </div>
            
            <div className="overflow-x-auto">
              <Table className="w-full bg-white rounded-2xl overflow-hidden">
                <TableHeader className="bg-[#F8F7FD] sticky top-0">
                  <TableRow>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">Feature</TableHead>
                    <TableHead className="py-4 px-6 text-left bg-[#9D8DF1]/10 text-[#1A1E2E] font-bold">Lumora Scan</TableHead>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">OralScan</TableHead>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">Velscope</TableHead>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">Identafi</TableHead>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">Oral ID</TableHead>
                    <TableHead className="py-4 px-6 text-left text-[#1A1E2E] font-medium">Vizi Lite</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index} className={`hover:bg-[#F8F7FD] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <TableCell className="py-4 px-6 font-medium text-[#1A1E2E]">{row.feature}</TableCell>
                      <TableCell className="py-4 px-6 font-semibold text-[#9D8DF1] bg-[#9D8DF1]/5">
                        {row.feature === "Non-invasive" || row.feature === "Real-time Results" ? 
                          <div className="flex items-center">
                            <Check className="mr-1 h-5 w-5 text-[#9D8DF1]" />
                            <span>Yes</span>
                          </div> : 
                          row.lumoraScan
                        }
                      </TableCell>
                      <TableCell className="py-4 px-6 text-[#4A4A68]">
                        {row.feature === "Non-invasive" ? 
                          <div className="flex items-center">
                            <Check className="mr-1 h-5 w-5 text-[#9D8DF1]/70" />
                            <span>Yes</span>
                          </div> : 
                          (row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-5 w-5 text-gray-400" />
                              <span>No</span>
                            </div> : 
                            row.oralScan
                          )
                        }
                      </TableCell>
                      {/* Repeat the pattern for other columns */}
                      <TableCell className="py-4 px-6 text-[#4A4A68]">
                        {row.feature === "Non-invasive" ? 
                          <div className="flex items-center">
                            <Check className="mr-1 h-5 w-5 text-[#9D8DF1]/70" />
                            <span>Yes</span>
                          </div> : 
                          (row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-5 w-5 text-gray-400" />
                              <span>No</span>
                            </div> : 
                            row.velScope
                          )
                        }
                      </TableCell>
                      <TableCell className="py-4 px-6 text-[#4A4A68]">
                        {row.feature === "Non-invasive" ? 
                          <div className="flex items-center">
                            <Check className="mr-1 h-5 w-5 text-[#9D8DF1]/70" />
                            <span>Yes</span>
                          </div> : 
                          (row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-5 w-5 text-gray-400" />
                              <span>No</span>
                            </div> : 
                            row.identafi
                          )
                        }
                      </TableCell>
                      <TableCell className="py-4 px-6 text-[#4A4A68]">
                        {row.feature === "Non-invasive" ? 
                          <div className="flex items-center">
                            <Check className="mr-1 h-5 w-5 text-[#9D8DF1]/70" />
                            <span>Yes</span>
                          </div> : 
                          (row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-5 w-5 text-gray-400" />
                              <span>No</span>
                            </div> : 
                            row.oralId
                          )
                        }
                      </TableCell>
                      <TableCell className="py-4 px-6 text-[#4A4A68]">
                        {row.feature === "Non-invasive" ? 
                          <div className="flex items-center">
                            <Minus className="mr-1 h-5 w-5 text-gray-400" />
                            <span>No</span>
                          </div> : 
                          (row.feature === "Real-time Results" ? 
                            <div className="flex items-center">
                              <Minus className="mr-1 h-5 w-5 text-gray-400" />
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
          </motion.section>

          {/* 5. Product Image Gallery */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-[#1A1E2E]">See Lumora Scan in Action</h2>
              <div className="w-24 h-1 bg-[#9D8DF1] mx-auto rounded-full"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="rounded-2xl overflow-hidden border border-[#9D8DF1]/10">
                          <div className="h-[350px] bg-white flex items-center justify-center">
                            <img 
                              src={item.image} 
                              alt={item.caption}
                              className="max-h-full max-w-full h-auto w-auto object-contain"
                            />
                          </div>
                          <div className="p-4 bg-white">
                            <p className="text-center font-medium text-[#1A1E2E]">{item.caption}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="md:-left-12 lg:-left-16 bg-white text-[#9D8DF1] border-[#9D8DF1]/20 hover:bg-[#9D8DF1] hover:text-white" />
                <CarouselNext className="md:-right-12 lg:-right-16 bg-white text-[#9D8DF1] border-[#9D8DF1]/20 hover:bg-[#9D8DF1] hover:text-white" />
              </Carousel>

              <div className="mt-6 flex justify-center space-x-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeSlide === index ? 'bg-[#9D8DF1] w-6' : 'bg-[#9D8DF1]/30'
                    }`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* 6. Final CTA Section */}
          

          
          {/* Fixed CTA button */}
          <div className="fixed bottom-8 right-8 z-10 md:block hidden">
            <Button
              className="bg-[#9D8DF1] hover:bg-[#9D8DF1]/90 text-white rounded-full shadow-lg px-6"
              asChild
            >
              <Link to="/contact">
                Book a Demo
              </Link>
            </Button>
          </div>
          
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
