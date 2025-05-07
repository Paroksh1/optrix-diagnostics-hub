import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Button } from './ui/button';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isProductPage = location.pathname.includes('/products/');

  const navLinks = [
    { text: 'Home', href: isProductPage ? '/' : '#home' },
    { text: 'About', href: isProductPage ? '/#about' : '#about' },
    { text: 'Services', href: isProductPage ? '/#services' : '#services' },
    { text: 'Testimonials', href: isProductPage ? '/#testimonials' : '#testimonials' },
    { text: 'Contact', href: isProductPage ? '/#contact' : '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
      
      if (!isProductPage) {
        const sections = navLinks.map(link => link.href.substring(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && scrollPosition >= element.offsetTop - 200) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, isProductPage]);

  return (
    <header 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {isProductPage ? (
          <RouterLink to="/" className="z-20">
            <Logo />
          </RouterLink>
        ) : (
          <Logo className="z-20" />
        )}
        
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1);
            return (
              <motion.a
                key={link.text}
                href={link.href}
                className={`text-foreground transition-colors duration-200 font-medium text-base relative group ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveLink(link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1))}
              >
                {link.text}
                <span 
                  className={`absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500 rounded-full transition-transform duration-300 ${
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
        
        <div className="hidden md:block">
          <Button
            className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
            asChild
          >
            <a href={isProductPage ? "/#contact" : "#contact"}>
              Get Started
            </a>
          </Button>
        </div>
        
        <motion.button 
          className="md:hidden text-foreground z-20 p-2 bg-blue-50 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} className="text-blue-600" /> : <Menu size={24} className="text-blue-600" />}
        </motion.button>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-white/98 backdrop-blur-lg z-10 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, i) => {
                  const isActive = activeLink === link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1);
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
                        className={`text-foreground transition-colors duration-200 text-2xl font-medium ${
                          isActive ? 'text-blue-500' : ''
                        }`}
                        onClick={() => {
                          setActiveLink(link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1));
                          setIsMobileMenuOpen(false);
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {link.text}
                      </motion.a>
                      <span 
                        className={`absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-500 rounded-full transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </motion.div>
                  );
                })}
                <Button
                  className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={isProductPage ? "/#contact" : "#contact"}>
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
