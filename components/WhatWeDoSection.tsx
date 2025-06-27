// components/WhatWeDoSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const WhatWeDoSection: React.FC = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="what-we-do"
      className="py-20 px-4 md:py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: '#1A0033' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0033] via-[#3E065F]/30 to-transparent opacity-40 blur-3xl z-0"></div>


      <div
        className="container mx-auto max-w-6xl relative z-10 p-8 md:p-12 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-10"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Elevating Businesses with <span className="text-[#892CDC]">Impactful Websites.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              In today&apos;s digital landscape, a powerful online presence is non-negotiable. I help small businesses like yours {/* FIXED */}
              cut through the noise with stunning, highly functional websites designed to
              **attract, engage, and convert.**
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              As a solo web developer, I offer personalized attention, a streamlined process,
              and a dedication to crafting unique digital experiences that truly reflect your brand
              and drive your business goals forward.
            </p>
          </motion.div>

          <motion.div className="md:w-1/2 flex justify-center items-center relative p-6" variants={itemVariants}>
            <div className="absolute inset-0 rounded-lg overflow-hidden z-0">
              <div
                className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg"
                style={{ backgroundColor: 'rgba(137, 44, 220, 0.1)' }}
              ></div>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  boxShadow: '0 0 10px rgba(137, 44, 220, 0.5), 0 0 20px rgba(137, 44, 220, 0.3), inset 0 0 8px rgba(137, 44, 220, 0.2)',
                  border: '1px solid rgba(137, 44, 220, 0.4)',
                }}
              ></div>
            </div>

            <Image
              src="/images/placeholder-web-design.jpg"
              alt="Modern website design and development"
              width={600}
              height={400}
              className="rounded-lg shadow-xl relative z-10 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDoSection;