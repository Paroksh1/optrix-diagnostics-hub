
import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[rgba(250,245,255,0.9)] backdrop-blur-md border-t border-[#E4E2F0] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 max-w-[800px]">
              <Logo />
            </div>
            <p className="text-dark-secondary mb-6 max-w-xs">
              Transforming medical diagnostics with our innovative imaging and spectroscopic technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/opti_mode" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white hover:bg-[#9292D8] hover:text-white border-[#9292D8]">
                  <Twitter className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/company/opti-mode-diagnostics/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white hover:bg-[#9292D8] hover:text-white border-[#9292D8]">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">sidmehta927@gmail.com</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">IIT Delhi, India</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#9292D8] transition-colors duration-200">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#1B2A41]">© 2025 Opti-Mode Diagnostics. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8] rounded-full">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8] rounded-full">
              Terms of Service
            </Button>
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8] rounded-full">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
