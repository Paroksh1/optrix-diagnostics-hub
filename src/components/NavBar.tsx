
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
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
      
      // Set active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 200) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo className="z-20" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.substring(1);
            return (
              <motion.a
                key={link.text}
                href={link.href}
                className={`text-foreground transition-colors duration-200 font-medium text-base relative ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveLink(link.href.substring(1))}
              >
                {link.text}
                <span 
                  className={`absolute bottom-[-5px] left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  style={{ 
                    transformOrigin: isActive ? 'center' : 'left',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
                  }}
                />
              </motion.a>
            );
          })}
        </nav>
        
        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="bg-black text-white px-5 py-2 rounded-full font-medium text-sm"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <motion.button 
          className="md:hidden text-foreground z-20 p-2"
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
                {navLinks.map((link, i) => {
                  const isActive = activeLink === link.href.substring(1);
                  return (
                    <motion.div
                      key={link.text}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.a
                        href={link.href}
                        className={`text-foreground transition-colors duration-200 text-xl font-medium ${
                          isActive ? 'text-primary' : ''
                        }`}
                        onClick={() => {
                          setActiveLink(link.href.substring(1));
                          setIsMobileMenuOpen(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {link.text}
                      </motion.a>
                      <span 
                        className={`absolute bottom-[-5px] left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </motion.div>
                  );
                })}
                <a 
                  href="#contact" 
                  className="bg-black text-white px-5 py-2 rounded-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
