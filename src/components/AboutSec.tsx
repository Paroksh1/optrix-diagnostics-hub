import React from 'react';
import FeatureTile from '@/components/FeatureTile';
import { FileBox, FileText, BarChart, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useInterval } from '@/hooks/use-interval';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Beaker, Users, Award } from 'lucide-react';



const AboutSec = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
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

        <section id="features" className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="bg-clip-text text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] mb-4">Transforming Cancer Detection with Photonics & AI</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              At Opti-Mode Diagnostics, we are on a mission to revolutionize early cancer detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <FeatureTile 
                title="Precise Diagnostics"
                description="Utilize advanced optics and AI for accurate, non-invasive cancer screening." 
                className="min-h-[100px]"
              >
              </FeatureTile>
              

              <FeatureTile 
                title="Built with experts"
                description="Collaboration with leading experts in optics, healthcare, and AI for cutting-edge solutions." 
                className="min-h-[100px] animate-fade-in"
              >
              </FeatureTile>

              <FeatureTile 
                title="Deep Tech Products"
                description="Leverage advanced photonics and AI for unparalleled cancer diagnostic accuracy." 
                className="min-h-[100px] animate-fade-in"
              >
              </FeatureTile>
              

              <FeatureTile 
                title="Funded by the best"
                description="Backed by top-tier institutions like BIRAC and FITT to ensure the highest quality and reliability."  
                className="min-h-[100px] animate-fade-in"
              >
              </FeatureTile>
              
              
              

            </div>

            <motion.div
              variants={item}
              className="items-center justify-center flex gap-4 pt-8"
              >
                <Button asChild className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] text-white rounded-xl">
                  <Link to="/products/lumora-scan">See Lumora Scan in Action</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#7F56D9] hover:bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] rounded-xl text-black">
                    <a href="#contact">Talk to Our Team</a>
                    </Button>
              </motion.div>
          </div>
        </section>
    );
}

export default AboutSec;
