// components/Footer.tsx
"use client";

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { stiffness: 200, damping: 10, type: "spring" as const } },
    hover: { scale: 1.2, color: '#892CDC', transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      className="bg-[#1A0033] text-gray-300 py-12 px-4 border-t border-[#892CDC]/20"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <motion.p
            className="text-lg font-semibold text-white mb-2"
            variants={footerVariants}
          >
            Shivam Web Development
          </motion.p>
          <motion.p
            className="text-sm text-gray-400"
            variants={footerVariants}
          >
            &copy; {currentYear} Shivam Web Development. All rights reserved.
          </motion.p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <motion.h3
            className="text-xl font-bold text-white mb-4"
            variants={footerVariants}
          >
            About Me
          </motion.h3>
          <ul className="space-y-2 w-full text-left">
            <motion.li variants={footerVariants}>
              <Link href="/#what-we-do" className="hover:text-[#892CDC] transition-colors">
                About
              </Link>
            </motion.li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <motion.h3
            className="text-xl font-bold text-white mb-4"
            variants={footerVariants}
          >
            Services
          </motion.h3>
          <ul className="space-y-2 w-full text-left">
            <motion.li variants={footerVariants}>
              <Link href="/#services-redesign" className="hover:text-[#892CDC] transition-colors">
                Website Redesign
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/#services-creation" className="hover:text-[#892CDC] transition-colors">
                Website Creation
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/#services-logo" className="hover:text-[#892CDC] transition-colors">
                Logo Designing
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/#services-brand" className="hover:text-[#892CDC] transition-colors">
                Brand Designing
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/#services-seo" className="hover:text-[#892CDC] transition-colors">
                SEO Optimization
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/#services-content" className="hover:text-[#892CDC] transition-colors">
                Content Writing
              </Link>
            </motion.li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <motion.h3
            className="text-xl font-bold text-white mb-4"
            variants={footerVariants}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-2 w-full text-left">
            <motion.li variants={footerVariants}>
              <Link href="/privacy-policy" className="hover:text-[#892CDC] transition-colors">
                Privacy Policy
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/refund-policy" className="hover:text-[#892CDC] transition-colors">
                Refund Policy
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/terms-of-use" className="hover:text-[#892CDC] transition-colors">
                Terms of Use
              </Link>
            </motion.li>
            <motion.li variants={footerVariants}>
              <Link href="/copyright" className="hover:text-[#892CDC] transition-colors">
                Copyright
              </Link>
            </motion.li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <motion.h3
            className="text-xl font-bold text-white mb-4"
            variants={footerVariants}
          >
            Contact Me
          </motion.h3>
          <ul className="space-y-2 w-full text-left">
            <motion.li variants={footerVariants}>
              <Link href="/#contact" className="hover:text-[#892CDC] transition-colors">
                Get in Touch
              </Link>
            </motion.li>
          </ul>
          <div className="flex space-x-6 mt-4 w-full justify-center md:justify-start">
            <motion.a
              href="https://www.linkedin.com/in/shivam-sharma-8a7618259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#892CDC] transition-colors"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaLinkedinIn className="text-2xl" />
            </motion.a>
            <motion.a
              href="https://github.com/shivam-sharma-03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#892CDC] transition-colors"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href="mailto:shivamwebdevelopment1@gmail.com"
              className="text-gray-300 hover:text-[#892CDC] transition-colors"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaEnvelope className="text-2xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;