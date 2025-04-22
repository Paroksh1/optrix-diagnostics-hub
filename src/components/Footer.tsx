import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#FCF8F8] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 max-w-[800px]">
              <Logo />
            </div>
            <p className="text-dark-secondary mb-6 max-w-xs">
              Transforming medical diagnostics with our innovative imaging and spectroscopic technologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-white hover:bg-accent-light hover:text-light">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white hover:bg-accent-light hover:text-light">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white hover:bg-accent-light hover:text-light">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white hover:bg-accent-light hover:text-light">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Technology</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Multimodal Microscopy</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Autofluorescence Imaging</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Spectral Analysis</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Phase Imaging</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">sidmehta927@gmail.com</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">+91 9667206444</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">IIT Delhi, India</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#1B2A41]">© 2023 Opti-Mode Diagnostics. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8]">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8]">
              Terms of Service
            </Button>
            <Button variant="link" className="text-[#1B2A41] hover:text-[#9292D8]">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
