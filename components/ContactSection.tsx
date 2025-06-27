// components/ContactSection.tsx
"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import ContactForm from './ContactForm';

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

const ContactSection: React.FC = () => {


  return (
    <motion.section
      id="contact"
      className="py-12 md:py-16 px-4 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]"
      style={{ backgroundColor: '#0A001A' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#44188c] via-[#3E065F]/20 to-transparent opacity-40 blur-3xl z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="flex-1 text-center md:text-left md:pr-8">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-[#f8f4fb]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Build <span className="text-[#892CDC]">Together.</span> {/* FIXED */}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl font-light text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or just want to chat? Fill out the form below and let&apos;s connect! {/* FIXED */}
          </motion.p>
        </div>

        <motion.div
          className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;