import React from "react";
import { motion } from "motion/react";
import { Heart, Compass, ShieldCheck } from "lucide-react";
import { ACADEMY_INFO } from "../constants";

export default function About() {
  const values = [
    {
      icon: <Compass className="text-academy-gold" size={24} />,
      title: "Rooted Faith",
      description: "Nurturing spiritual depth based on Christian values and principles."
    },
    {
      icon: <ShieldCheck className="text-academy-gold" size={24} />,
      title: "Strong Discipline",
      description: "Developing self-regulation, respect, and character with guidance."
    },
    {
      icon: <Heart className="text-academy-gold" size={24} />,
      title: "Holistic Growth",
      description: "Encouraging learners to excel academically, physically, and socially."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-academy-cream relative overflow-hidden text-center"
    >
      {/* Absolute decorative soft gold blurred sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-academy-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial-style typography subheading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-academy-gold">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-academy-navy leading-none">
            About Our Academy
          </h2>
          {/* Custom golden line divider */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-[1px] bg-academy-navy/20" />
            <div className="w-2 h-2 rotate-45 border-2 border-academy-gold bg-academy-cream" />
            <div className="w-10 h-[1px] bg-academy-navy/20" />
          </div>
        </motion.div>

        {/* Short, elegant, high-impact intro block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-academy-charcoal/80 font-sans leading-relaxed tracking-wide font-light max-w-3xl mx-auto italic"
        >
          “ {ACADEMY_INFO.aboutText} ”
        </motion.div>

        {/* Academy Core Pillars Showcase */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left"
        >
          {values.map((val, idx) => (
            <div 
              key={val.title}
              className="minimal-card p-8"
            >
              <div className="w-10 h-10 rounded-sm bg-academy-navy/5 flex items-center justify-center mb-5 border border-academy-navy/10">
                {val.icon}
              </div>
              <h3 className="font-serif font-bold text-base text-academy-navy uppercase tracking-wide mb-2">
                {val.title}
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
