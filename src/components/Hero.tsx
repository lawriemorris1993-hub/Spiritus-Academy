import React from "react";
import { motion } from "motion/react";
import { MessageSquare, PhoneCall, ArrowDown, ChevronRight } from "lucide-react";
import { IMAGES } from "../imageConfig";
import { ACADEMY_INFO, CONTACT_NUMBERS, getWhatsAppUrl } from "../constants";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-academy-cream overflow-hidden pt-24 pb-16 md:py-28"
    >
      {/* Absolute Decorative Grid Pattern Watermark subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,31,77,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,31,77,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Presentation Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-academy-gold rounded-full" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-academy-gold">
                  Bulawayo CBD, Zimbabwe
                </span>
              </div>
              
              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-8 rounded bg-academy-navy flex items-center justify-center p-0.5 border border-academy-gold/35">
                  <img
                    src={IMAGES.schoolLogo}
                    alt="SPICA Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-sans font-extrabold text-[10px] tracking-[0.18em] text-academy-navy/60 uppercase">
                  SPICA Academics 2026/2027
                </span>
              </div>
            </motion.div>

            {/* School Main Headings */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 
                id="hero-academy-fullname"
                className="text-3xl sm:text-4xl md:text-5xl font-serif text-academy-navy font-black tracking-wider uppercase leading-tight"
              >
                SPIRITUS ACADEMY
              </h1>
              <h2 className="serif text-academy-navy text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
                Rooted in Faith.<br />
                <span className="italic text-academy-gold font-serif">Growing in Grace.</span>
              </h2>
            </motion.div>

            {/* Short Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm text-gray-600 max-w-xl leading-relaxed font-light"
            >
              Spiritus Academy is a Christian academic institution dedicated to providing quality education rooted in faith, discipline, academic excellence, and personal growth. Register today and empower your future study pathways.
            </motion.p>

            {/* Fast actions row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-academy-navy/70 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span className="tracking-wide">Admissions Ongoing</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="tracking-wide select-all">ZIMSEC Core Syllabus</span>
            </motion.div>

            {/* Layout Specific Buttons matching Clean Minimalism */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={getWhatsAppUrl(CONTACT_NUMBERS[0].value, "Hello Spiritus Academy, I would like information about admissions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-academy-gold hover:bg-academy-gold-light text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 shadow-sm hover:shadow"
                id="hero-btn-apply"
              >
                <MessageSquare size={14} className="group-hover:scale-105 transition-transform" />
                Apply via WhatsApp
                <ChevronRight size={12} className="opacity-60 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                onClick={() => handleScrollToSection("#contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-academy-navy text-academy-navy hover:bg-academy-navy hover:text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm transition-all duration-300"
                id="hero-btn-contact"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right Presentation Image Column (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden relative border-[6px] border-white shadow-xl relative z-10">
                <img
                  src={IMAGES.heroBanner}
                  alt="Spiritus Academy Campus Ground Block"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Thin gold decorative framing backing box behind the image to add dimension */}
              <div className="absolute inset-x-3 bottom-[-12px] h-full border border-academy-gold/40 rounded-sm pointer-events-none -z-0" />
            </motion.div>
          </div>

        </div>

        {/* Scroll helper indicator */}
        <div 
          onClick={() => handleScrollToSection("#about")}
          className="mt-16 text-center cursor-pointer flex flex-col items-center gap-1 select-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400">Discover More</span>
          <ArrowDown size={12} className="text-academy-gold animate-bounce" />
        </div>

      </div>
    </section>
  );
}
