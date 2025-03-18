
import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-xs">
              Transforming healthcare with innovative diagnostic solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">Laboratory Diagnostics</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">Genetic Sequencing</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">AI Diagnostics</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">Remote Monitoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Case Studies</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 Opti-Mode Diagnostics. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
