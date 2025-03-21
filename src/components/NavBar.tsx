
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-sm shadow-sm font-poppins">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Logo className="z-20" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.text}
            </motion.a>
          ))}
        </nav>
        
        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <motion.a 
            href="#contact" 
            className="bg-black hover:bg-black/90 text-white px-5 py-2 rounded-full transition-colors duration-200 font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-foreground z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/98 backdrop-blur-sm z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 text-xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="bg-black hover:bg-black/90 text-white px-5 py-2 rounded-full transition-all duration-200 font-medium mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
