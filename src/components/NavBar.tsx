
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
    // Only handle hash links
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
            return (
              <motion.div
                key={link.text}
                className="relative"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isProductPage && link.href.startsWith('/#') ? (
                  <RouterLink
                    to={link.href.substring(1)}
                    className={`text-[#111827] transition-all duration-300 font-semibold text-base relative ${
                      isActive ? 'text-[#7C3AED]' : 'hover:text-[#7C3AED]'
                    }`}
                    onClick={() => setActiveLink(link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1))}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                    )}
                  </RouterLink>
                ) : (
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
                )}
              </motion.div>
            );
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
          className="md:hidden text-foreground z-20 p-2 bg-[#EDE9FE] rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} className="text-[#7C3AED]" /> : <Menu size={24} className="text-[#7C3AED]" />}
        </motion.button>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-[rgba(250,245,255,0.98)] backdrop-blur-lg z-10 md:hidden"
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
                      {isProductPage && link.href.startsWith('/#') ? (
                        <RouterLink
                          to={link.href.substring(1)}
                          className={`transition-all duration-300 text-2xl font-semibold ${
                            isActive ? 'text-[#7C3AED]' : 'text-[#111827] hover:text-[#7C3AED]'
                          }`}
                          onClick={() => {
                            setActiveLink(link.href.substring(link.href.includes('#') ? link.href.lastIndexOf('#') + 1 : 1));
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {isActive ? (
                            <span className="bg-[#EDE9FE] text-[#7C3AED] px-5 py-2 rounded-full">
                              {link.text}
                            </span>
                          ) : (
                            link.text
                          )}
                        </RouterLink>
                      ) : (
                        <a
                          href={link.href}
                          className={`transition-all duration-300 text-2xl font-semibold ${
                            isActive ? 'text-[#7C3AED]' : 'text-[#111827] hover:text-[#7C3AED]'
                          }`}
                          onClick={(e) => {
                            handleNavLinkClick(e, link.href);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {isActive ? (
                            <span className="bg-[#EDE9FE] text-[#7C3AED] px-5 py-2 rounded-full">
                              {link.text}
                            </span>
                          ) : (
                            link.text
                          )}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
                <Button
                  className="bg-[#9292D8] hover:bg-[#9292D8]/90 text-white rounded-full mt-4"
                  asChild
                >
                  {isProductPage ? (
                    <RouterLink to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </RouterLink>
                  ) : (
                    <a 
                      href="#contact"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
