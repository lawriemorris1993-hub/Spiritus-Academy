import React, { useState, useEffect } from "react";
import { Menu, X, BookOpen, Clock, PhoneCall } from "lucide-react";
import { IMAGES } from "../imageConfig";
import { ACADEMY_INFO, CONTACT_NUMBERS, getWhatsAppUrl } from "../constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programmes" },
    { name: "Student Life", href: "#student-life" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="academy-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-sm overflow-hidden border border-academy-navy/15 bg-white p-0.5 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <img
                src={IMAGES.schoolLogo}
                alt="Spiritus Academy Crest Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-academy-navy text-base sm:text-lg tracking-wider leading-none group-hover:text-academy-gold-dark transition-colors duration-200">
                SPIRITUS ACADEMY
              </span>
              <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-[0.15em] mt-1">
                SPICA ACADEMY • Bulawayo CBD
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans font-semibold text-xs text-academy-navy/85 hover:text-academy-gold-dark uppercase tracking-widest transition-colors duration-200 relative after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-academy-gold hover:after:w-4 after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href={getWhatsAppUrl(CONTACT_NUMBERS[0].value)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-academy-gold text-white hover:bg-academy-gold-light font-sans font-bold text-[10px] tracking-widest uppercase rounded-sm transition-all duration-300 shadow-sm focus:outline-none"
              id="header-cta-whatsapp"
            >
              <PhoneCall size={12} />
              Apply via WhatsApp
            </a>
          </div>

          {/* Responsive Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-academy-navy p-1 hover:text-academy-gold-dark transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[69px] z-45 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[380px] shadow-lg opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-navigation-drawer"
      >
        <div className="px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block font-sans font-semibold text-xs text-academy-navy/80 hover:text-academy-gold-dark uppercase tracking-widest hover:pl-2 transition-all duration-200 py-2 border-b border-gray-50"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl(CONTACT_NUMBERS[0].value)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-academy-gold hover:bg-academy-gold-light text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-200 block shadow-sm"
            >
              Apply via WhatsApp
            </a>
            <p className="text-[10px] text-gray-400 text-center mt-2 font-mono">
              ★ Bulawayo CBD, Zimbabwe
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
