import React from "react";
import { GraduationCap, MapPin, Phone, Heart } from "lucide-react";
import { ACADEMY_INFO, CONTACT_NUMBERS, CURRENT_YEAR } from "../constants";

export default function Footer() {
  const handleScrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-500 py-12 border-t border-gray-100 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          {/* Brand details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-serif font-black text-academy-navy text-sm sm:text-base tracking-widest leading-none">
              SPIRITUS ACADEMY
            </span>
            <span className="text-[9px] text-academy-gold font-bold uppercase tracking-[0.15em]">
              Rooted in Faith • Growing in Grace
            </span>
          </div>

          {/* Quick anchor links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#home" onClick={handleScrollToHome} className="hover:text-academy-gold-dark transition-colors text-academy-navy/80">Home</a>
            <span className="text-gray-200 hidden sm:inline">•</span>
            <a href="#about" className="hover:text-academy-gold-dark transition-colors text-academy-navy/80">About</a>
            <span className="text-gray-200 hidden sm:inline">•</span>
            <a href="#programmes" className="hover:text-academy-gold-dark transition-colors text-academy-navy/80">Programmes</a>
            <span className="text-gray-200 hidden sm:inline">•</span>
            <a href="#student-life" className="hover:text-academy-gold-dark transition-colors text-academy-navy/80">Student Life</a>
            <span className="text-gray-200 hidden sm:inline">•</span>
            <a href="#contact" className="hover:text-academy-gold-dark transition-colors text-academy-navy/80">Contact</a>
          </div>
        </div>

        {/* Dynamic Legal terms and accreditation footnotes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left text-[10px] text-gray-400 font-mono tracking-wider">
          <p className="order-2 sm:order-1">
            © {CURRENT_YEAR} {ACADEMY_INFO.name} ({ACADEMY_INFO.alias}). All rights reserved.
          </p>
          
          <p className="order-1 sm:order-2 flex items-center justify-center gap-1.5">
            <span>Bulawayo CBD, Zimbabwe</span>
            <span className="text-gray-200">•</span>
            <span className="text-academy-navy font-semibold">ZIMSEC Curriculum</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
