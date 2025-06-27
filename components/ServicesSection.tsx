// components/ServicesSection.tsx
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLaptopCode, FaRedo, FaPalette, FaLightbulb, FaSearchDollar, FaPencilAlt } from 'react-icons/fa';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "services-creation",
    icon: FaLaptopCode,
    title: "Website Creation",
    description: "Crafting bespoke, high-performance websites from the ground up, tailored to your vision and business goals. We build digital foundations that impress."
  },
  {
    id: "services-redesign",
    icon: FaRedo,
    title: "Website Redesign",
    description: "Revitalize your online presence with a modern, responsive, and user-friendly website redesign. Improve user experience, boost conversion rates, and stand out."
  },
  {
    id: "services-logo",
    icon: FaPalette,
    title: "Logo Designing",
    description: "Developing unique and memorable logos that capture your brand's essence. A strong logo is the cornerstone of your brand identity, leaving a lasting impression."
  },
  {
    id: "services-brand",
    icon: FaLightbulb,
    title: "Brand Designing",
    description: "Comprehensive brand identity creation beyond just a logo. We help define your brand's voice, visual style, and overall presence to resonate with your target audience."
  },
  {
    id: "services-seo",
    icon: FaSearchDollar,
    title: "SEO Optimization",
    description: "Boosting your website's visibility on search engines. Our SEO strategies drive organic traffic, improve rankings, and ensure your business is easily found by potential clients."
  },
  {
    id: "services-content",
    icon: FaPencilAlt,
    title: "Content Writing",
    description: "Crafting engaging and SEO-friendly content for your website, blogs, and marketing materials to attract and retain your audience and boost engagement."
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    },
  },
};

const serviceBlockVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 0 20px rgba(137, 44, 220, 0.7)",
    transition: { duration: 0.3 }
  }
};

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      id="services"
      className="py-12 md:py-20 px-4 text-white relative overflow-hidden"
      style={{ backgroundColor: '#0A001A' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight text-[#f8f4fb]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          My Core <span className="text-[#892CDC]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="p-8 flex flex-col items-center text-center max-w-sm w-full rounded-lg relative
                         backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300" 
              variants={serviceBlockVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                className="text-[#892CDC] text-5xl mb-6 p-4 rounded-full bg-[#892CDC]/20 transition-colors duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <service.icon />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;