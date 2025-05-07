
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, Award } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const AboutSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, threshold: 0.5 });
  const statsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      statsControls.start("visible");
    }
  }, [isInView, statsControls]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const countUpVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#FCF8F8] to-[#F6F4F4] relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1B2A41] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Transforming Cancer Detection with Precision Optics & AI
          </motion.h2>
          <motion.p 
            className="text-black text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            At Opti-Mode Diagnostics, we are on a mission to revolutionize early cancer detection. With Lumora Scan, India's first advanced-optics system powered by AI, we offer accurate, non-invasive screening — tailored for accessibility in even the most resource-constrained settings.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-video bg-gray-900 relative">
              <video 
                className="w-full h-full object-cover"
                poster="/lovable-uploads/2fd0417e-d946-4644-812d-4998f15c7805.png"
                controls
              >
                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 flex items-center justify-center group">
                <motion.button 
                  className="w-16 h-16 bg-[#9292D8] rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-[#9292D8]/90 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 ml-1" />
                </motion.button>
              </div>
            </div>
            
            <div className="bg-white p-6 flex items-center space-x-4">
              <Logo className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg">Dr. Siddharth Mehta</h3>
                <p className="text-gray-600">Founder & Chief Scientific Officer</p>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <motion.div 
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9292D8]/10 rounded-full text-[#9292D8] font-medium mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Where innovation meets life-saving precision</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A41] leading-tight">
                Precision Meets Innovation
              </h2>
              
              <p className="text-black text-lg mt-4">
                Our flagship product, Lumora Scan, represents a breakthrough in medical diagnostics. By combining advanced optics with intelligent algorithms, we've created a system that can detect cancerous cells with remarkable accuracy and speed, significantly improving patient outcomes.
              </p>
            </motion.div>
            
            <motion.div 
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="pt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-[#9292D8] w-5 h-5" />
                <h3 className="text-xl font-semibold text-[#1B2A41]">Built With Experts</h3>
              </div>
              
              <p className="text-black text-lg">
                Our technology has been developed through collaborative efforts with renowned medical and engineering experts from institutions like AIIMS, IIT Delhi, and Max Healthcare, ensuring the highest standards of scientific rigor and clinical relevance.
              </p>
            </motion.div>
            
            <motion.div 
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="pt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-[#9292D8] w-5 h-5" />
                <h3 className="text-xl font-semibold text-[#1B2A41]">Endorsed by Visionaries</h3>
              </div>
              
              <p className="text-black text-lg">
                Our vision and technology have received backing from BIRAC and the Foundation for Innovation and Technology Transfer (FITT), validating our approach and enabling us to bring cutting-edge diagnostic solutions to communities that need them most.
              </p>
            </motion.div>
            
            <motion.div 
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="pt-3"
            >
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
                  asChild
                >
                  <a href="#services" className="flex items-center">
                    See Lumora Scan in Action
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full border-[#9292D8] text-[#1B2A41] hover:bg-[#9292D8] hover:text-white"
                  asChild
                >
                  <a href="#contact">
                    Talk to Our Team
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              ref={statsRef}
              className="pt-6"
              custom={4}
              initial="hidden"
              animate={statsControls}
              variants={fadeInVariants}
            >
              <Separator className="my-6 bg-gray-200" />
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <motion.p 
                    className="text-4xl font-bold text-[#9292D8]"
                    variants={countUpVariants}
                  >
                    96.7%
                  </motion.p>
                  <p className="text-[#1B2A41] text-sm font-medium mt-1">Detection Accuracy</p>
                </div>
                <div className="text-center md:text-left">
                  <motion.p 
                    className="text-4xl font-bold text-[#9292D8]"
                    variants={countUpVariants}
                  >
                    50%
                  </motion.p>
                  <p className="text-[#1B2A41] text-sm font-medium mt-1">5-Year Survival Rate</p>
                </div>
                <div className="text-center md:text-left">
                  <motion.p 
                    className="text-4xl font-bold text-[#9292D8]"
                    variants={countUpVariants}
                  >
                    100%
                  </motion.p>
                  <p className="text-[#1B2A41] text-sm font-medium mt-1">Non-Invasive</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
