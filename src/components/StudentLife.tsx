import React from "react";
import { motion } from "motion/react";
import { Quote, GraduationCap, Users, ShieldAlert } from "lucide-react";
import { IMAGES } from "../imageConfig";
import { ACADEMY_INFO } from "../constants";

export default function StudentLife() {
  return (
    <section 
      id="student-life" 
      className="py-24 sm:py-32 bg-academy-cream relative overflow-hidden"
    >
      {/* Absolute background accent line */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-academy-navy/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row grid matching picture with quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content details column */}
          <div className="col-span-1 lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-academy-gold block mb-3">
                Academy Environment
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academy-navy leading-none">
                Student Life
              </h2>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-10 h-[1px] bg-academy-navy/20" />
                <div className="w-2 h-2 rotate-45 border border-academy-gold bg-academy-cream" />
              </div>
            </div>

            {/* Premium Blockquote with quotes */}
            <div className="relative bg-white p-8 sm:p-10 rounded-sm border border-gray-100 shadow-sm">
              <Quote className="absolute top-4 left-4 text-academy-gold/15" size={40} />
              
              <p className="font-serif text-lg sm:text-xl text-academy-navy tracking-wide italic leading-relaxed relative z-10 pl-2">
                "{ACADEMY_INFO.quote}"
              </p>
              
              <div className="h-[2px] w-12 bg-academy-gold mt-6 mb-4" />
              <p className="font-sans text-[10px] uppercase font-bold tracking-[0.15em] text-gray-400">
                SPIRITUS ACADEMY • Core Promise
              </p>
            </div>

            <p className="font-sans text-xs text-gray-600 leading-relaxed font-light">
              At Spiritus Academy, student life centers on balanced holistic education. Our learners discover character-defining values and core skills through rigorous self-respect, active social service, and academic focus.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-sm border border-gray-100 shadow-xs">
                <span className="font-serif font-black text-2xl text-academy-navy block text-academy-gold">
                  100%
                </span>
                <span className="font-sans text-[10px] text-gray-500 uppercase font-semibold">
                  Discipline Standard
                </span>
              </div>
              <div className="p-4 bg-white rounded-sm border border-gray-100 shadow-xs">
                <span className="font-serif font-black text-2xl text-academy-navy block text-academy-gold">
                  ZIMSEC
                </span>
                <span className="font-sans text-[10px] text-gray-500 uppercase font-semibold">
                  Syllabus Focused
                </span>
              </div>
            </div>
          </div>

          {/* Large image column with neat custom frame */}
          <div className="col-span-1 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Backing golden offset card shape */}
              <div className="absolute top-4 left-4 right-[-12px] bottom-[-12px] bg-academy-gold rounded-sm z-0 opacity-90 shadow-sm" />

              {/* Main picture container */}
              <div className="relative z-10 w-full overflow-hidden rounded-sm shadow-md border border-gray-100 aspect-video md:aspect-[4/3] bg-academy-navy">
                <img
                  src={IMAGES.studentsGroup}
                  alt="Spiritus Academy students laughing and studying in elegant uniforms"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float sticker overlay */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-sm shadow-lg border-l-2 border-academy-gold max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="text-academy-navy" size={14} />
                  <span className="font-serif text-[11px] font-bold text-academy-navy uppercase tracking-wider">Our Community</span>
                </div>
                <p className="font-sans text-[9px] text-gray-500 leading-normal">
                  Fostering strong Christian brotherhood, cooperation, peer support, and academic excellence.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
