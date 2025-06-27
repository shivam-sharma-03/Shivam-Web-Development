// components/CommonDoubtsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "Why do I need a website if I already have social media accounts?",
    answer: "While social media is great for engagement, a **professional website** gives you complete control over your brand, content, and customer data. It&apos;s your digital storefront, always open, and isn&apos;t subject to changing platform algorithms or policies. A website acts as your central hub, making your business appear more credible and allowing for advanced **SEO strategies** to attract organic traffic directly to your services.",
  },
  {
    question: "I have a traditional brick-and-mortar business. Do I really need a website?",
    answer: "Absolutely! Even traditional businesses benefit immensely. A website extends your reach beyond your physical location, allowing customers to find you online, view your services, check opening hours, or even book appointments 24/7. It builds trust, provides essential information, and is crucial for **local SEO**, ensuring you appear in &apos;near me&apos; searches and driving foot traffic to your physical store.",
  },
  {
    question: "How can a website help me generate more leads and sales?",
    answer: "A well-designed website acts as a powerful lead generation machine. Through strategic calls-to-action, contact forms, integrated e-commerce features, and compelling content, it guides visitors towards conversion. Paired with effective **digital marketing** and **search engine optimization (SEO)**, your website continuously attracts interested prospects, nurtures leads, and facilitates direct sales, expanding your customer base.",
  },
  {
    question: "Is investing in a website expensive, and what about maintenance?",
    answer: "Think of a website as an investment in your business&apos;s future, not just an expense. The initial cost varies based on complexity, but the long-term benefits in reach, credibility, and sales often far outweigh it. I focus on delivering **affordable, high-quality solutions** and can guide you through simple maintenance practices or offer ongoing support to ensure your site remains secure, fast, and up-to-date.",
  },
  {
    question: "My business is unique. Can a website truly capture my brand's essence?",
    answer: "Yes, a custom-designed website is specifically tailored to reflect your unique brand identity, values, and offerings. Unlike generic templates or social media profiles, it allows for complete creative freedom to tell your story, showcase your portfolio, and highlight what makes you stand out. My **personal communication** ensures that your vision is translated precisely into a distinct online experience.",
  },
  {
    question: "What's the difference between a website and digital marketing, and do I need both?",
    answer: "Your website is your digital storefront – the destination. **Digital marketing (including SEO, social media marketing, email campaigns)** is the engine that drives traffic to that storefront. While a great website provides the foundation, marketing is essential to get noticed. You need both working in synergy: a compelling website to convert visitors, and strategic marketing to bring those visitors in.",
  },
  {
    question: "How does a professional website build trust and credibility for my brand?",
    answer: "In today&apos;s digital age, consumers expect businesses to have a professional online presence. A well-designed website acts as your authoritative hub, showcasing your expertise, testimonials, portfolio, and contact information. This instantly elevates your brand&apos;s legitimacy, builds **consumer trust**, and positions you as a reliable and modern business, differentiating you from competitors who only rely on social media.",
  },
  {
    question: "Can a website really help me understand my customers better?",
    answer: "Absolutely. Websites integrate seamlessly with analytics tools (like Google Analytics) that provide invaluable data on visitor behavior. You can track popular pages, traffic sources, time spent on site, and conversion paths. This data empowers you to make informed business decisions, refine your marketing strategies, and tailor your offerings to better meet **customer needs**, driving sustained growth.",
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
      staggerChildren: 0.15
    },
  },
};

const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const answerVariants: Variants = {
  hidden: { opacity: 0, maxHeight: 0, y: -10 },
  visible: {
    opacity: 1,
    maxHeight: "500px",
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
  },
  exit: {
    opacity: 0,
    maxHeight: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    },
  }
};


const CommonDoubtsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="common-doubts"
      className="py-20 px-4 md:py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: '#0A001A' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#44188c] via-[#3E065F]/20 to-transparent opacity-40 blur-3xl z-0"></div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight text-[#f8f4fb]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Business: <br className="md:hidden"/> Common <span className="text-[#892CDC]">Doubts</span>
        </motion.h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={faqItemVariants}
              className="bg-gray-800 bg-opacity-40 rounded-lg shadow-lg overflow-hidden border border-[#892CDC]/30"
            >
              <button
                suppressHydrationWarning={true}
                className="flex justify-between items-center w-full p-5 text-left text-xl md:text-2xl font-semibold text-[#f8f4fb] hover:bg-gray-700/50 transition-colors duration-200 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                {openIndex === index ? (
                  <FaMinus className="text-[#892CDC] text-2xl md:text-3xl min-w-[24px]" />
                ) : (
                  <FaPlus className="text-[#892CDC] text-2xl md:text-3xl min-w-[24px]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-5 pb-5 text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-xl text-gray-200 mb-6">Still got doubts? I&apos;m here to help!</p> 
          <a
            href="#contact"
            className="inline-block bg-[#892CDC] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#700B97] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#892CDC]/50"
          >
            Ask Me Anything!
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default CommonDoubtsSection;