// components/IndustriesWeServeSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const industriesData = [
  {
    id: 'local-services',
    image: '/images/p1.jpg',
    name: 'Local Services',
    description: 'From plumbers to landscapers, electricians to car washes, I build websites that connect local businesses directly with their community, driving walk-ins and inquiries.',
  },
  {
    id: 'health-wellness',
    image: '/images/p2.jpg',
    name: 'Health & Wellness',
    description: 'Empowering fitness trainers, nutritionists, yoga studios, and therapists with serene, inviting online spaces that inspire healthy lifestyles and client bookings.',
  },
  {
    id: 'creative-professional',
    image: '/images/p3.jpg',
    name: 'Creative & Professional Services',
    description: 'Showcasing the unique talents of photographers, artists, consultants, and coaches with elegant, portfolio-driven websites that highlight their expertise and attract ideal clients.',
  },
  {
    id: 'e-commerce-retail',
    image: '/images/p4.jpg',
    name: 'E-commerce & Retail',
    description: 'Developing engaging online stores and retail platforms that offer seamless shopping experiences, secure transactions, and powerful product showcases to boost sales.',
  },
  {
    id: 'non-profits',
    image: '/images/p5.jpg',
    name: 'Non-Profits & Community Organizations (NGOs)',
    description: 'Crafting compelling websites for NGOs and community groups to share their mission, engage supporters, facilitate donations, and amplify their positive impact.',
  },
  {
    id: 'tech-innovation',
    image: '/images/p6.jpg',
    name: 'Tech & Innovation',
    description: 'Providing sleek, performant websites for startups, tech businesses, and innovators to effectively present their cutting-edge solutions and attract investment or early adopters.',
  },
  {
    id: 'other-industries',
    image: '/images/p7.jpg',
    name: 'And Many More...',
    description: 'My expertise extends to a diverse range of sectors, including jewelry, real estate, event management, and more. Let&apos;s discuss your unique industry needs!', 
  },
];

const IndustriesWeServeSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

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

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % industriesData.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + industriesData.length) % industriesData.length);
  };

  return (
    <motion.section
      id="industries"
      className="py-12 px-4 md:py-20 text-white relative overflow-hidden flex flex-col items-center min-h-[700px]"
      style={{ backgroundColor: '#0A001A' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#44188c] via-[#3E065F]/30 to-transparent opacity-40 blur-3xl z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight"
          variants={itemVariants}
        >
          Who All I <span className="text-[#892CDC]">Cater To.</span>
        </motion.h2>

        <motion.div
          className="w-full relative h-[450px] md:h-[550px] flex justify-center overflow-hidden"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 30 }}
          variants={itemVariants}
        >
          {windowWidth > 0 && industriesData.map((industry, index) => {
            let offset = index - activeIndex;
            if (offset > industriesData.length / 2) offset -= industriesData.length;
            if (offset < -industriesData.length / 2) offset += industriesData.length;

            const scaleFactor = 1 - Math.abs(offset) * 0.15;
            const translateX = offset * (windowWidth < 768 ? 100 : 200);
            const zIndex = industriesData.length - Math.abs(offset);
            const opacity = 1 - Math.abs(offset) * 0.3;

            return (
              <div
                key={industry.id}
                className="absolute w-[220px] h-[400px] md:w-[280px] md:h-[500px] rounded-xl shadow-xl flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out transform-gpu group"
                style={{
                  transform: `translateX(${translateX}px) scale(${scaleFactor})`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: index === activeIndex ? 'auto' : 'none',
                }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  width={280}
                  height={500}
                  className="rounded-xl object-cover w-full h-full"
                />

                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 rounded-xl text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 backdrop-filter backdrop-blur-sm z-0"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="font-bold text-xl md:text-2xl mb-2 underline underline-offset-4 decoration-[#892CDC]">
                      {industry.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        <button
          onClick={goToPrev}
          className="absolute left-0 lg:left-[5%] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl z-20 focus:outline-none transition-colors"
          aria-label="Previous Industry"
          suppressHydrationWarning={true}
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl z-20 focus:outline-none transition-colors"
          aria-label="Next Industry"
          suppressHydrationWarning={true}
        >
          &#10095;
        </button>
      </div>
    </motion.section>
  );
};

export default IndustriesWeServeSection;