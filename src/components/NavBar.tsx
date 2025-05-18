import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Button } from './ui/button';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = React.createRef<HTMLDivElement>();
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isProductPage = location.pathname.includes('/products/');

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: 'about' },
    { text: 'Products', href: '#products', dropdown: true },
    { text: 'Testimonials', href: '#testimonials' },
    { text: 'Contact', href: '#contact' },
  ];

  const productDropdownItems = [
    { text: 'Lumora Scan', href: '/products/lumora-scan' }
  ];

  // Close dropdown when pressing Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isProductsDropdownOpen) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProductsDropdownOpen]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isProductsDropdownOpen) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProductsDropdownOpen]);

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

  // Handle navigation
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    setIsMobileMenuOpen(false);
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
          ? 'bg-[#F8F9FB] backdrop-blur-lg shadow-md py-2 border-b border-[#E4E2F0]' 
          : 'bg-[#F8F9FB] backdrop-blur-md py-3 border-b border-[#E4E2F0]'
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
            
            // Handle dropdown menu for Products
            if (link.text === 'Products') {
              return (
                <motion.div
                  key={link.text}
                  className="relative group"
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setIsProductsDropdownOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) {
                      setIsProductsDropdownOpen(false);
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isMobile) {
                      setIsProductsDropdownOpen(!isProductsDropdownOpen);
                    }
                  }}
                  ref={dropdownRef}
                >
                  <a
                    href={link.href}
                    className={`text-[#111827] transition-all duration-300 font-semibold text-base relative ${
                      isActive ? 'text-[#7C3AED]' : 'hover:text-[#7C3AED]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href.startsWith('#')) {
                        const targetId = link.href.replace('#', '');
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      } else {
                        window.location.href = link.href;
                      }
                      handleNavLinkClick(e, link.href);
                    }}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                    )}
                  </a>
                  
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E4E2F0] py-2"
                        role="menu"
                        aria-expanded={isProductsDropdownOpen}
                      >
                        {productDropdownItems.map((item) => (
                          <RouterLink
                            key={item.text}
                            to={item.href}
                            className="block px-4 py-2 text-[#111827] hover:bg-[#F8F9FB] transition-all duration-200"
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setIsProductsDropdownOpen(false)}
                          >
                            {item.text}
                          </RouterLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }
            
            // Handle other links
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
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href.startsWith('#')) {
                      const targetId = link.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    } else {
                      window.location.href = link.href;
                    }
                    handleNavLinkClick(e, link.href);
                  }}
                >
                  {link.text}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full" />
                  )}
                </a>
              </motion.div>
            );
          })}
        </nav>
        
        <div className="hidden md:block">
          {isProductPage ? (
            <Button
              className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9]text-white rounded-full"
              asChild
            >
              <RouterLink to="/#contact">
                Get Started
              </RouterLink>
            </Button>
          ) : (
            <Button
              className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] text-white rounded-full"
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
                className="fixed inset-0 bg-[#ffffff] backdrop-blur-lg z-40 md:hidden overflow-y-auto"
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
                      
                      if (link.text === 'Products') {
                        return (
                          <motion.div
                            key={link.text}
                            className="relative w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setIsProductsDropdownOpen(!isProductsDropdownOpen);
                              }}
                              className={`transition-all duration-300 text-xl font-semibold block text-center py-3 w-full ${
                                isActive ? 'text-[#7C3AED]' : 'text-[#111827] hover:text-[#7C3AED]'
                              } flex items-center justify-center gap-2`}
                            >
                              {link.text}
                              <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  isProductsDropdownOpen ? 'rotate-180' : ''
                                }`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            <AnimatePresence>
                              {isProductsDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="mt-2 space-y-2"
                                >
                                  {productDropdownItems.map((item) => (
                                    <RouterLink
                                      key={item.text}
                                      to={item.href}
                                      className="block px-8 py-3 text-[#111827] hover:bg-[#F8F9FB] transition-all duration-200 rounded-lg text-lg"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsProductsDropdownOpen(false);
                                      }}
                                    >
                                      {item.text}
                                    </RouterLink>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      }

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
                      className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] text-white rounded-full w-full py-6 font-semibold"
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
