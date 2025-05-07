import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Flask, Users, Award } from 'lucide-react';
import { useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Video section - Left side */}
          <div className="md:w-2/5">
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Product Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Dr. Siddharth Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dr. Siddharth Mehta</h4>
                  <p className="text-sm text-gray-600">Founder & Chief Medical Officer</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm italic text-gray-700">
                  "Our mission is to democratize cancer diagnostics and bring early detection capabilities to every corner of the world."
                </p>
              </div>
            </div>
          </div>
          
          {/* Content section - Right side */}
          <div ref={ref} className="md:w-3/5 space-y-6 bg-gradient-to-br from-blue-50/70 to-purple-50/70 p-8 rounded-xl shadow-sm">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#1B2A41]">
                Transforming Cancer Detection with Precision Optics & AI
              </h2>
              
              <p className="mb-6 text-gray-700">
                At Opti-Mode Diagnostics, we are on a mission to revolutionize early cancer detection. With Lumora Scan, India's first advanced-optics system powered by AI, we offer accurate, non-invasive screening — tailored for accessibility in even the most resource-constrained settings.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{...fadeInUp, transition: { delay: 0.2, duration: 0.6 }}}
              className="flex items-start gap-3"
            >
              <Flask className="text-blue-600 mt-1 h-5 w-5" />
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41]">Precision Meets Innovation</h3>
                <p className="text-gray-700">
                  Our breakthrough technology is developed in collaboration with leading experts from institutions like AIIMS, IIT Delhi, and Max Healthcare.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{...fadeInUp, transition: { delay: 0.3, duration: 0.6 }}}
              className="flex items-start gap-3"
            >
              <Users className="text-blue-600 mt-1 h-5 w-5" />
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41]">Built With Experts</h3>
                <p className="text-gray-700">
                  Our vision is backed by BIRAC and Foundation for Innovation and Technology Transfer (FITT), empowering us to bring cutting-edge diagnostics to underserved regions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{...fadeInUp, transition: { delay: 0.4, duration: 0.6 }}}
              className="flex items-start gap-3"
            >
              <Award className="text-blue-600 mt-1 h-5 w-5" />
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41]">Endorsed by Visionaries</h3>
                <p className="text-gray-700">
                  Our vision is backed by BIRAC and Foundation for Innovation and Technology Transfer (FITT), empowering us to bring cutting-edge diagnostics to underserved regions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{...fadeInUp, transition: { delay: 0.5, duration: 0.6 }}}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button asChild className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white">
                <Link to="/products/lumora-scan">See Lumora Scan in Action</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-[#9292D8] text-[#9292D8]">
                <a href="#contact">Talk to Our Team</a>
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.hr 
          className="my-16 border-gray-200"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        />
        
        {/* Key Metrics Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{...fadeInUp, transition: { delay: 0.7, duration: 0.6 }}}
        >
          <div className="p-6 rounded-xl bg-blue-50/50">
            <h3 className="text-4xl font-bold text-[#1B2A41]">97%</h3>
            <p className="mt-2 text-gray-700">Detection Accuracy</p>
          </div>
          
          <div className="p-6 rounded-xl bg-blue-50/50">
            <h3 className="text-4xl font-bold text-[#1B2A41]">80%</h3>
            <p className="mt-2 text-gray-700">Survival Rate Improvement</p>
          </div>
          
          <div className="p-6 rounded-xl bg-blue-50/50">
            <h3 className="text-4xl font-bold text-[#1B2A41]">100%</h3>
            <p className="mt-2 text-gray-700">Non-Invasive</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
