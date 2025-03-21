
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <Logo className="z-20" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              whileHover={{ y: -2, scale: 1.05 }}
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
            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white rounded-full group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-primary via-accent to-primary rounded-full group-hover:w-full group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:opacity-0"></span>
            <span className="relative bg-black group-hover:bg-transparent px-5 py-2 rounded-full transition-colors duration-200 font-medium text-sm">
              Get Started
            </span>
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
        <AnimatePresence>
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
                    className="text-foreground hover:text-primary transition-colors duration-200 text-xl font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-white rounded-full group mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-primary via-accent to-primary rounded-full group-hover:w-full group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:opacity-0"></span>
                  <span className="relative bg-black group-hover:bg-transparent px-5 py-2 rounded-full transition-colors duration-200 font-medium">
                    Get Started
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
