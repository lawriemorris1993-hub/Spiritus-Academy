import React from "react";
import { motion } from "motion/react";
import { Award, Briefcase, FlaskConical, Palette, CheckCircle2 } from "lucide-react";
import { PROGRAMMES, ACADEMY_INFO } from "../constants";

export default function Programmes() {
  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes("commercial")) return <Briefcase className="text-academy-gold" size={24} />;
    if (title.toLowerCase().includes("science")) return <FlaskConical className="text-academy-gold" size={24} />;
    return <Palette className="text-academy-gold" size={24} />;
  };

  return (
    <section 
      id="programmes" 
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative vertical lines on left and right for academic vibe */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-academy-navy/5 hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-academy-navy/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-academy-gold block mb-3">
            Academic Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academy-navy leading-none">
            Programmes Offered
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-[1px] bg-academy-navy/20" />
            <div className="w-2 h-2 rotate-45 border-2 border-academy-gold bg-white" />
            <div className="w-10 h-[1px] bg-academy-navy/20" />
          </div>
          <p className="mt-4 font-sans text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Comprehensive curriculum designs built around rigorous critical thinking, moral development, and practical knowledge.
          </p>
        </div>

        {/* Three Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMMES.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="minimal-card p-8 sm:p-10 flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <div className="w-10 h-10 rounded-sm bg-academy-navy/5 flex items-center justify-center mb-6 border border-academy-navy/10">
                  {getCategoryIcon(prog.title)}
                </div>

                <h3 className="font-serif font-bold text-lg text-academy-navy mb-2 tracking-wide uppercase">
                  {prog.title}
                </h3>
                
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                  {prog.description}
                </p>

                <div className="h-[1px] w-full bg-gray-100 mb-6" />

                {/* Subjects Bullet Pointers */}
                <ul className="space-y-3.5">
                  {prog.subjects.map((sub) => (
                    <li key={sub} className="flex items-center gap-3 font-sans text-xs text-academy-charcoal font-medium">
                      <CheckCircle2 className="text-academy-gold flex-shrink-0" size={15} />
                      <span className="tracking-wide select-all">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Curriculum Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-academy-navy to-academy-navy-light text-white p-6 sm:p-8 rounded-lg border-2 border-academy-gold/30 text-center relative overflow-hidden"
          id="zimsec-national-accreditation"
        >
          {/* Subtle logo vector watermark in background */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 text-white/5 pointer-events-none font-serif text-8xl select-none font-bold">
            ZIMSEC
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-academy-gold/20 flex items-center justify-center border border-academy-gold animate-pulse">
              <Award className="text-academy-gold" size={20} />
            </div>
            <p className="font-serif font-bold text-base sm:text-lg tracking-wider text-white">
              Official Academic Standard: <span className="text-academy-gold uppercase block sm:inline font-black ml-1 select-all">{ACADEMY_INFO.curriculumNote}</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
