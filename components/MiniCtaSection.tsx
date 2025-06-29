// components/MiniCtaSection.tsx
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const sectionVariants: Variants = {

  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MiniCtaSection: React.FC = () => {
  return (
    <motion.section
      id="mini-cta"
      className="py-16 md:py-24 px-4 text-white flex items-center justify-center min-h-[50vh] relative overflow-hidden" 
      style={{ backgroundColor: '#1A0033' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#44188c] via-[#3E065F]/30 to-transparent opacity-40 blur-3xl z-0"></div>

      <div className="container mx-auto max-w-3xl relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-[#f8f4fb]"
          variants={textVariants}
        >
          Let&apos;s Create a Great Website for Your <span className="text-[#892CDC]">Business.</span> {/* FIXED */}
        </motion.h2>

        <motion.div
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="contact"
            className="inline-block bg-[#892CDC] text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-[#700B97] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#892CDC]/50 text-lg md:text-xl"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MiniCtaSection;