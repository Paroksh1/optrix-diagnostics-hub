import React from 'react';
import { Target, TestTube, Hospital, Lightbulb, Building2, Building } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2016",
    title: "DST Project Grant",
    description: "Funding awarded for AI-assisted breast cancer detection research",
    icon: <Target className="w-6 h-6" />
  },
  {
    year: "2020",
    title: "Research Milestones",
    description: "Achieved significant breakthroughs in breast cancer detection system",
    icon: <TestTube className="w-6 h-6" />
  },
  {
    year: "2021",
    title: "Oral Cancer Research",
    description: "Initiated oral cancer detection research based on breast cancer system",
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    year: "2022",
    title: "BIRAC Grant",
    description: "Awarded BIRAC grant; first prototype developed and tested at AIIMS & Max Institute",
    icon: <Hospital className="w-6 h-6" />
  },
  {
    year: "2024",
    title: "Clinical Validation",
    description: "Completed 500+ true positive test cases verified",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    year: "Sep 2024",
    title: "Company Formation",
    description: "Opti-mode Diagnostics Pvt. Ltd. incorporated to scale operations",
    icon: <Building className="w-6 h-6" />
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0A0E2A] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8]">
          Our Journey
        </h2>
        <p className="text-lg text-gray-600">From research labs to real-world impact</p>
      </div>

      <div className="relative">
        {/* Vertical timeline line - only visible on desktop */}
        <div className="hidden md:block absolute left-1/2 w-px h-full bg-[#B69DF8]/20"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
            >
              {/* Year badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B69DF8]/10 mb-4">
                <span className="text-2xl font-bold text-[#B69DF8]">{item.year}</span>
              </div>

              {/* Timeline item content */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B69DF8]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0E2A] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
