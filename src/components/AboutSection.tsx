
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Beaker, Users, Award } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useInterval } from '@/hooks/use-interval';

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Sequence variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="about" className="py-12 md:py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          {/* Video section - Left side */}
          <div className="md:w-2/5 w-full">
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/gIHT0BE83bM" 
                title="Product Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
            
            <div className="mt-6 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-accent-light/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Siddharth Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Siddharth Mehta</h4>
                  <p className="text-sm text-gray-600">Co Founder & Director</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm italic text-gray-700 leading-relaxed">
                  "Our mission is to democratize cancer diagnostics and bring early detection capabilities to every corner of the world."
                </p>
              </div>
            </div>
          </div>
          
          {/* Content section - Right side */}
          <motion.div 
            ref={ref} 
            className="md:w-3/5 w-full space-y-5 bg-gradient-to-br from-blue-50/70 to-purple-50/70 p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={item}>
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-[#1B2A41]">
                Transforming Cancer Detection with Precision Optics & AI
              </h2>
              
              <p className="mb-5 text-gray-700 leading-relaxed">
                At Opti-Mode Diagnostics, we are on a mission to revolutionize early cancer detection. With Lumora Scan, India's first advanced-optics system powered by AI, we offer accurate, non-invasive screening — tailored for accessibility in even the most resource-constrained settings.
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start gap-3">
              <div className="mt-1">
                <Beaker className="text-blue-600 h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41] font-weight-700">Precision Meets Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our breakthrough technology is developed in collaboration with leading experts from institutions like AIIMS, IIT Delhi, and Max Healthcare.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start gap-3">
              <div className="mt-1">
                <Users className="text-blue-600 h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41] font-weight-700">Built With Experts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our vision is backed by BIRAC and Foundation for Innovation and Technology Transfer (FITT), empowering us to bring cutting-edge diagnostics to underserved regions.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start gap-3">
              <div className="mt-1">
                <Award className="text-blue-600 h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1B2A41] font-weight-700">Endorsed by Visionaries</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our vision is backed by BIRAC and Foundation for Innovation and Technology Transfer (FITT), empowering us to bring cutting-edge diagnostics to underserved regions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 mt-8 pt-4 bg-blue-50/50 p-4 rounded-lg"
            >
              <Button asChild className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white">
                <Link to="/products/lumora-scan">See Lumora Scan in Action</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-[#9292D8] text-[#9292D8]">
                <a href="#contact">Talk to Our Team</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
