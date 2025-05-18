import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Timeline from '@/components/Timeline';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Dalip Singh Mehta",
      role: "Co-Founder & Director",
      description: "Leading the charge in AI-powered diagnostics with a focus on global health equity.",
      image: "/assets/images/team/dalip-singh.jpg"
    },
    {
      name: "Siddharth Mehta",
      role: "Co-Founder and Director",
      description: "Building the technology that powers our mission to make healthcare accessible to all.",
      image: "/assets/images/team/siddharth-mehta.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E2A]/5 to-[#B69DF8]/5 z-0">
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#0A0E2A" opacity="0.02" />
              </svg>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A0E2A] mb-6">
                Reimagining Diagnostics — Where Empathy Meets Innovation
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
                We're building diagnostic tools that are smart, affordable, and designed for real-world healthcare settings — powered by AI and a deep commitment to early detection.
              </p>
              <Button 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4"
                asChild
              >
                <Link to="/products/lumora-scan" className="flex items-center">
                  Explore Our Solutions...
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Vision & Mission Sections */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="space-y-12">
                  {/* Vision Section */}
                  <div className="pl-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#B69DF8]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#B69DF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h2 className="text-4xl font-bold text-[#0A0E2A] border-l-4 border-[#B69DF8] pl-4 mb-4">
                        Our Vision
                      </h2>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To ensure every community — rural or urban — has access to early and accurate disease detection. We envision a world where no life is lost due to late diagnosis.
                    </p>
                  </div>

                  {/* Mission Section */}
                  <div className="pl-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-[#B69DF8]/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-[#B69DF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <h2 className="text-4xl font-bold text-[#0A0E2A] border-l-4 border-[#B69DF8] pl-4 mb-4">
                        Our Mission
                      </h2>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To build AI-powered diagnostic tools that are portable, non-invasive, and affordable — enabling frontline healthcare workers to screen faster and smarter, even in the most underserved regions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/assets/team-collaboration.png" 
                  alt="Team of healthcare professionals collaborating using technology" 
                  className="w-full max-w-[450px] mx-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-gradient-to-br from-[#F8F9FB] to-[#E8F0FE] relative overflow-hidden">
          {/* Wave Divider Top */}
          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="h-full w-full text-gray-100" viewBox="0 0 1440 320">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,133.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0E2A] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8]">
                Transforming Healthcare with Innovation, Compassion, and Precision
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                At Opti-Mode Diagnostics, we harness cutting-edge photonics and AI to redefine how medical diagnostics are delivered—faster, smarter, and more accessible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Who We Are */}
              <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#B69DF8]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B69DF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0E2A] mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-700">
                  Founded at the intersection of cutting-edge research and compassionate healthcare, Opti-Mode Diagnostics is a medtech innovation hub committed to delivering next-generation solutions. By leveraging advanced photonics-based technologies and AI-driven machine learning models, we offer non-invasive diagnostic tools that set a new benchmark in precision and efficiency.
                </p>
              </div>

              {/* What We Do */}
              <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#9B5DE5]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#9B5DE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0E2A] mb-4">
                  What We Do
                </h3>
                <p className="text-gray-700">
                  Our flagship product is a point-of-care device designed for the in-vivo fast screening and diagnosis of oral cancerous epithelia using multi-modal optical spectroscopy and smartphone-based imaging. This solution has achieved an exceptional ~97% diagnostic accuracy and is particularly suited for low-resource clinical settings—ensuring early detection where it matters most.
                </p>
              </div>

              {/* Why It Matters */}
              <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#B69DF8]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B69DF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0A0E2A] mb-4">
                  Why It Matters
                </h3>
                <p className="text-gray-700">
                  Early detection saves lives—and we're committed to making it the standard, not the exception. Our technology is built not just for innovation's sake, but to make a tangible, positive impact in the lives of millions. Recognized with a patent certificate, our work stands as a testament to what happens when science, purpose, and empathy come together.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 hover:scale-105"
                asChild
              >
                <Link to="/products" className="flex items-center">
                  Explore Our Journey
                </Link>
              </Button>
            </div>
          </div>

          {/* Wave Divider Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="h-full w-full text-gray-100 transform rotate-180" viewBox="0 0 1440 320">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,133.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#0A0E2A] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8]">
                Meet the Team Behind Opti-mode
              </h2>
              <p className="text-xl text-gray-600">
                The people shaping the future of diagnostics
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-[350px] mx-auto"
                >
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/lovable-uploads/95eb5a1a-2cd1-43bb-a0d8-7347cfb03165.png';
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0E2A] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Our Journey */}
        <section className="py-24 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Timeline />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0A0E2A] mb-4">
                Want to Bring Opti-mode to Your Community?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We'd love to partner with hospitals, clinics, and researchers working to improve early detection.
              </p>
              <Button 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#B69DF8] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4"
                asChild
              >
                <Link to="/contact-form" className="flex items-center">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;