import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { CONTACT_NUMBERS, getWhatsAppUrl } from "../constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful chat tooltip 3 seconds after the website loads
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 select-none"
      id="floating-whatsapp-container"
    >
      {/* Dynamic Pop-up Greeting Tooltip */}
      {showTooltip && (
        <div className="relative bg-white text-academy-charcoal p-4 rounded-sm shadow-lg border border-gray-100 max-w-[260px] animate-fade-in-up flex flex-col gap-1.5 border-t-[3px] border-t-academy-gold">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-300 hover:text-academy-navy"
            aria-label="Close message"
          >
            <X size={12} />
          </button>
          
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span className="font-serif font-bold text-[10px] uppercase tracking-wider text-academy-navy">Admissions Desk</span>
          </div>
          
          <p className="font-sans text-[10px] text-gray-500 leading-normal">
            "Hello! Need information about fees or admission details? Start a chat with us now!"
          </p>

          <a
            href={getWhatsAppUrl(CONTACT_NUMBERS[0].value)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowTooltip(false)}
            className="text-center py-1.5 bg-academy-gold hover:bg-academy-gold-light text-white text-[10px] font-sans font-bold tracking-wider uppercase rounded-sm transition-colors duration-200"
          >
            Chat with Admissions
          </a>
        </div>
      )}

      {/* Main Pulse Circle Trigger Button */}
      <a
        href={getWhatsAppUrl(CONTACT_NUMBERS[0].value)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Contact SPICA Academy via WhatsApp"
        id="floating-whatsapp-button"
      >
        {/* Pulsing ring underneath */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle size={28} className="transition-transform group-hover:rotate-12" />

        {/* Small floating counter badge of pending messages to entice click */}
        <span className="absolute top-0 right-0 w-4.5 h-4.5 rounded-full bg-academy-gold border-2 border-white text-academy-navy text-[9px] font-bold flex items-center justify-center animate-bounce shadow">
          1
        </span>
      </a>
    </div>
  );
}
