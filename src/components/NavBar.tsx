import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Button } from "./ui/button";
import { text } from "stream/consumers";


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = React.createRef<HTMLDivElement>();
  const isMobile = useIsMobile();
  const location = useLocation();

  const isProductPage = location.pathname.includes("/products/");

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Products", href: "#products", dropdown: true },
    { text: "Contact", href: "#contact" },
  ];

  const productDropdownItems = [
    { text: "Lumora Scan", href: "/products/lumora-scan" },
  ];

  // Close dropdown when pressing Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isProductsDropdownOpen) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isProductsDropdownOpen]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isProductsDropdownOpen) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProductsDropdownOpen]);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
    }
    setActiveLink(href.replace("#", "") || "home");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(e.target as HTMLElement).closest(".mobile-menu-container")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        hasScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2 border-b border-[#E4E2F0] dark:border-gray-800"
          : "bg-transparent dark:bg-transparent py-3"
      }`}
      style={{
        boxShadow: hasScrolled ? "0 4px 12px rgba(0, 0, 0, 0.06)" : "none",
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          {isProductPage ? (
            <RouterLink to="/" className="z-20">
              <Logo />
            </RouterLink>
          ) : (
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="z-20"
            >
              <Logo />
            </a>
          )}
        </div>

        <nav className="hidden md:flex space-x-8 ml-6">
          {navLinks.map((link) => {
            const isActive =
              activeLink ===
              link.href.substring(
                link.href.includes("#") ? link.href.lastIndexOf("#") + 1 : 1
              );

            // Handle dropdown menu for Products
            if (link.text === "Products") {
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
                      isActive ? "text-[#7C3AED]" : "hover:text-[#7C3AED]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href.startsWith("#")) {
                        const targetId = link.href.replace("#", "");
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
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
                    isActive ? "text-[#7C3AED]" : "hover:text-[#7C3AED]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href.startsWith("#")) {
                      const targetId = link.href.replace("#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
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

        <div className="hidden md:flex items-center space-x-4">

          {isProductPage ? (
            <Button
              className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] text-white rounded-full"
              asChild
            >
              <RouterLink to="/#contact">Get Started</RouterLink>
            </Button>
          ) : (
            <Button
              className="bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] text-white rounded-full"
              onClick={(e) => {
                const section = document.getElementById("contact");
                if (section) {
                  e.preventDefault();
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  window.history.pushState(null, "", "#contact");
                  setActiveLink("contact");
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
          {isMobileMenuOpen ? (
            <X size={24} className="text-[#7C3AED]" />
          ) : (
            <Menu size={24} className="text-[#7C3AED]" />
          )}
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
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-8">
                  <Logo />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link) => {
                    const isActive =
                      activeLink ===
                      link.href.substring(
                        link.href.includes("#")
                          ? link.href.lastIndexOf("#") + 1
                          : 1
                      );

                    if (link.text === "Products") {
                      return (
                        <div key={link.text} className="space-y-2">
                          <button
                            onClick={() =>
                              setIsProductsDropdownOpen(!isProductsDropdownOpen)
                            }
                            className={`w-full flex items-center justify-between text-left py-2 px-3 rounded-lg transition-colors ${
                              isActive
                                ? "bg-[#F5F3FF] text-[#7C3AED]"
                                : "text-[#111827] hover:bg-gray-100"
                            }`}
                          >
                            <span className="font-medium">{link.text}</span>
                            <svg
                              className={`w-5 h-5 transition-transform ${
                                isProductsDropdownOpen
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {isProductsDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                {productDropdownItems.map((item) => (
                                  <RouterLink
                                    key={item.text}
                                    to={item.href}
                                    className="block py-2 px-3 rounded-lg text-[#4B5563] hover:bg-gray-100 transition-colors"
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
                        </div>
                      );
                    }

                    return (
                      <a
                        key={link.text}
                        href={link.href}
                        className={`block py-2 px-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-[#F5F3FF] text-[#7C3AED]"
                            : "text-[#111827] hover:bg-gray-100"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.href.startsWith("#")) {
                            const targetId = link.href.replace("#", "");
                            const element = document.getElementById(targetId);
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          } else {
                            window.location.href = link.href;
                          }
                          handleNavLinkClick(e, link.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="font-medium">{link.text}</span>
                      </a>
                    );
                  })}

                  <div className="pt-4 mt-4 bg-gradient-to-r from-[#9F7AEA] to-[#7F56D9] rounded-lg p-4 text-center">
                    <p className="text-white text-sm font-medium mb-2">Ready to get started?</p>
                    <Button 
                      className="bg-white text-[#7F56D9] hover:bg-gray-100 rounded-full font-semibold shadow-md"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Contact Us
                    </Button>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default NavBar;
