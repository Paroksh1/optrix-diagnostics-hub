
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

  // Handle smooth scrolling for hash links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (isProductPage && href.startsWith('/#')) {
      // Don't prevent default here - let RouterLink handle navigation to home page with hash
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Only handle hash links within the same page
    if (href.includes('#') && !href.startsWith('/')) {
      e.preventDefault();
      
      // Extract the section id from the href
      const sectionId = href.substring(href.indexOf('#') + 1);
      const section = document.getElementById(sectionId);
      
      if (section) {
        // Use smooth scrolling
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update the URL without refreshing the page
        window.history.pushState(null, '', href);
        
        // Update active link
        setActiveLink(sectionId);
      }
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-[rgba(250,245,255,0.95)] backdrop-blur-lg shadow-md py-2 border-b border-[#E4E2F0]' 
          : 'bg-[rgba(250,245,255,0.9)] backdrop-blur-md py-3 border-b border-[#E4E2F0]'
      }`}
      style={{
        boxShadow: hasScrolled ? '0 4px 12px rgba(0, 0, 0, 0.06)' : '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          {isProductPage ? (
            <RouterLink to="/" className="z-20">
              <Logo />
            </RouterLink>
          ) : (
            <a href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="z-20">
              <Logo />
            </a>
          )}
        </div>
        
        <nav className="hidden md:flex space-x-8 ml-6">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1);
            
            // On product pages, use RouterLink to navigate to homepage sections
            if (isProductPage && link.href.startsWith('/')) {
              return (
                <motion.div
                  key={link.text}
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RouterLink
                    to={link.href}
                    className={`text-[#111827] transition-all duration-300 font-semibold text-base relative ${
                      isActive ? 'text-[#7C3AED]' : 'hover:text-[#7C3AED]'
                    }`}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                    )}
                  </RouterLink>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={link.text}
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={link.href}
                    className={`text-[#111827] transition-all duration-300 font-semibold text-base relative ${
                      isActive ? 'text-[#7C3AED]' : 'hover:text-[#7C3AED]'
                    }`}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                    )}
                  </a>
                </motion.div>
              );
            }
          })}
        </nav>
        
        <div className="hidden md:block">
          {isProductPage ? (
            <Button
              className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
              asChild
            >
              <RouterLink to="/#contact">
                Get Started
              </RouterLink>
            </Button>
          ) : (
            <Button
              className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full"
              onClick={(e) => {
                const section = document.getElementById('contact');
                if (section) {
                  e.preventDefault();
                  section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                  window.history.pushState(null, '', '#contact');
                  setActiveLink('contact');
                }
              }}
            >
              <a href="#contact">Get Started</a>
            </Button>
          )}
        </div>
        
        <motion.button 
          className="md:hidden text-foreground z-50 p-2 bg-[#EDE9FE] rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} className="text-[#7C3AED]" /> : <Menu size={24} className="text-[#7C3AED]" />}
        </motion.button>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop/Overlay with better opacity for contrast */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu - Improved styling */}
              <motion.div 
                className="fixed inset-0 bg-[rgba(250,245,255,0.95)] backdrop-blur-lg z-40 md:hidden overflow-y-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ overflowY: 'auto', minHeight: '100vh' }}
              >
                <div className="flex flex-col items-center min-h-screen py-8 px-6">
                  {/* Logo at the top with improved spacing */}
                  <div className="w-full flex justify-center mb-6 pt-4">
                    <div className="max-w-[160px] w-full">
                      {isProductPage ? (
                        <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                          <Logo className="h-auto w-full" />
                        </RouterLink>
                      ) : (
                        <a 
                          href="#home" 
                          onClick={(e) => {
                            handleNavLinkClick(e, "#home");
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <Logo className="h-auto w-full" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Navigation Links with improved spacing and typography */}
                  <div className="flex flex-col items-center justify-center space-y-6 w-full py-4 mb-6">
                    {navLinks.map((link, i) => {
                      const isActive = activeLink === link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1);
                      
                      // On product pages, use RouterLink for mobile menu items too
                      if (isProductPage && link.href.startsWith('/')) {
                        return (
                          <motion.div
                            key={link.text}
                            className="relative w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <RouterLink
                              to={link.href}
                              className={`transition-all duration-300 text-xl font-semibold block text-center py-3 ${
                                isActive ? 'text-[#7C3AED]' : 'text-[#111827] hover:text-[#7C3AED]'
                              }`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {isActive ? (
                                <span className="bg-[#EDE9FE] text-[#7C3AED] px-6 py-3 rounded-full inline-block w-full">
                                  {link.text}
                                </span>
                              ) : (
                                link.text
                              )}
                            </RouterLink>
                          </motion.div>
                        );
                      } else {
                        return (
                          <motion.div
                            key={link.text}
                            className="relative w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <a
                              href={link.href}
                              className={`transition-all duration-300 text-xl font-semibold block text-center py-3 ${
                                isActive ? 'text-[#7C3AED]' : 'text-[#111827] hover:text-[#7C3AED]'
                              }`}
                              onClick={(e) => {
                                handleNavLinkClick(e, link.href);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {isActive ? (
                                <span className="bg-[#EDE9FE] text-[#7C3AED] px-6 py-3 rounded-full inline-block w-full">
                                  {link.text}
                                </span>
                              ) : (
                                link.text
                              )}
                            </a>
                          </motion.div>
                        );
                      }
                    })}
                  </div>
                  
                  {/* CTA Button with proper spacing and full width */}
                  <div className="w-full px-4 mt-8">
                    <Button
                      className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full w-full py-6 font-semibold"
                    >
                      {isProductPage ? (
                        <RouterLink to="/#contact" className="w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                          Get Started
                        </RouterLink>
                      ) : (
                        <a 
                          href="#contact"
                          className="w-full text-center"
                          onClick={(e) => {
                            handleNavLinkClick(e, "#contact");
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          Get Started
                        </a>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
