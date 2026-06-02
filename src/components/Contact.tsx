import React from "react";
import { MapPin, MessageSquare, Phone, Info, Clock, ExternalLink } from "lucide-react";
import { ACADEMY_INFO, CONTACT_NUMBERS, getWhatsAppUrl, WHATSAPP_PREFILLED_MESSAGE } from "../constants";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-24 bg-academy-navy text-white relative overflow-hidden"
    >
      {/* Dynamic diagonal gold light beams across section background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-academy-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-academy-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Info Details Column - 5 spans */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-academy-gold block mb-3">
                Connect With Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-wide leading-none">
                Get In Touch
              </h2>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-10 h-[1px] bg-white/20" />
                <div className="w-2 h-2 rotate-45 border-2 border-academy-gold bg-academy-navy" />
              </div>
            </div>

            <p className="font-sans text-xs text-gray-300 leading-relaxed font-light">
              For all registration queries, admissions forms, fee structures, and curriculum inquiries, our admissions coordinators are ready to support you instantly over WhatsApp.
            </p>

            {/* Address Bullet Card */}
            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-sm border border-white/10">
              <div className="p-3 bg-academy-gold/15 rounded-sm border border-academy-gold/25 text-academy-gold">
                <MapPin size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xs text-white tracking-wider uppercase">Location</h4>
                <p className="font-sans font-bold text-xs text-academy-gold">{ACADEMY_INFO.location}</p>
                <p className="font-sans text-[11px] text-gray-400 leading-normal">{ACADEMY_INFO.locationDetails}</p>
              </div>
            </div>

            {/* Fees Directive Warning Box (highly transparent) */}
            <div className="p-5 rounded-sm border border-academy-gold/20 bg-academy-gold/[0.03] space-y-2">
              <div className="flex items-center gap-2">
                <Info size={14} className="text-academy-gold" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-academy-gold">Admissions Notice</span>
              </div>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                To guarantee transparency, current school fees tables and grade-specific application packets are serviced exclusively through direct WhatsApp correspondence.
              </p>
            </div>
          </div>

          {/* Action Cards Column - 7 spans */}
          <div className="lg:col-span-7">
            <div className="bg-white text-academy-charcoal p-8 sm:p-10 rounded-sm shadow-md space-y-6 border border-gray-150 border-t-[5px] border-t-academy-gold relative">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-academy-navy text-white font-semibold text-[10px] tracking-wider uppercase px-4 py-1 rounded-sm shadow border border-white/10">
                Admissions Desk
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-academy-navy mb-1 uppercase tracking-wide">
                  Admissions Office & Information
                </h3>
                <p className="font-sans text-xs text-gray-500">
                  Select an option below to connect with us instantly.
                </p>
              </div>

              {/* Grid with 2 large interactive buttons matching exactly 'Apply Now' and 'Request Information' */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Apply Now WhatsApp Card */}
                <a
                  href={getWhatsAppUrl(CONTACT_NUMBERS[0].value, "Hello Spiritus Academy, I would like to submit an application for admission.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-academy-cream hover:bg-academy-navy hover:text-white rounded-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
                  id="contact-apply-now"
                >
                  <div className="w-8 h-8 rounded-sm bg-academy-navy/5 group-hover:bg-white/10 flex items-center justify-center text-academy-navy group-hover:text-white mb-4 border border-academy-gold/10">
                    <MessageSquare size={16} className="text-academy-navy group-hover:text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-xs tracking-wider mb-1 uppercase text-academy-navy group-hover:text-white">
                    Apply Now
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500 group-hover:text-white/85 mb-4 leading-normal">
                    Submit grade inquiry & join enrollment list directly online.
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[9px] uppercase tracking-wider text-academy-gold group-hover:text-academy-gold border-b border-dashed border-current pb-0.5">
                    Start via WhatsApp
                    <ExternalLink size={10} />
                  </span>
                </a>

                {/* Request Information WhatsApp Card */}
                <a
                  href={getWhatsAppUrl(CONTACT_NUMBERS[1].value, WHATSAPP_PREFILLED_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-academy-cream hover:bg-academy-navy hover:text-white rounded-sm border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
                  id="contact-request-info"
                >
                  <div className="w-8 h-8 rounded-sm bg-academy-navy/5 group-hover:bg-white/10 flex items-center justify-center text-academy-navy group-hover:text-white mb-4 border border-academy-gold/10">
                    <Info size={16} className="text-academy-navy group-hover:text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-xs tracking-wider mb-1 uppercase text-academy-navy group-hover:text-white">
                    Request Info
                  </h4>
                  <p className="font-sans text-[11px] text-gray-500 group-hover:text-white/85 mb-4 leading-normal">
                    Get detailed syllabus alignment details and location guides.
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[9px] uppercase tracking-wider text-academy-gold border-b border-dashed border-current pb-0.5">
                    Start via WhatsApp
                    <ExternalLink size={10} />
                  </span>
                </a>

              </div>

              {/* Direct Telephone Contacts List */}
              <div className="pt-6 border-t border-gray-100">
                <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-3">
                  Telephone admissions support
                </span>
                <div className="space-y-3">
                  {CONTACT_NUMBERS.map((contact, idx) => (
                    <div key={contact.value} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-academy-cream/50 rounded-sm border border-gray-100 hover:bg-academy-cream transition-colors">
                      <div className="flex items-center gap-3">
                        <Phone size={12} className="text-academy-gold-dark" />
                        <div>
                          <p className="font-sans font-bold text-xs text-academy-charcoal leading-none select-all">{contact.display}</p>
                          <p className="font-sans text-[10px] text-gray-400 mt-1">{contact.label}</p>
                        </div>
                      </div>
                      <a
                        href={`tel:${contact.value}`}
                        className="text-[10px] font-sans font-bold text-academy-navy hover:text-academy-gold-dark tracking-widest uppercase flex items-center gap-1 self-start sm:self-center"
                      >
                        Call Hotline
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
