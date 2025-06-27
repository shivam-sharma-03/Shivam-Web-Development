// components/WhyChooseMeSection.tsx
"use client"; 

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLaptopCode, FaClock, FaCommentDots, FaDollarSign } from 'react-icons/fa';


const reasons = [
  {
    icon: FaLaptopCode,
    title: "Deep Tech Knowledge",
    description: "I bring extensive expertise in the latest web technologies, ensuring your project is built with robust, scalable, and modern solutions.",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    description: "Your deadlines are my priority. I am committed to delivering high-quality work promptly, without compromising on excellence.",
  },
  {
    icon: FaCommentDots,
    title: "Personalized Communication",
    description: "Enjoy direct, clear, and fast communication. Your vision is central, and I ensure you're always in the loop with quick replies.",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Excellence",
    description: "Receive top-tier web development services at competitive and transparent prices, offering great value without hidden costs.",
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

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const WhyChooseMeSection: React.FC = () => {
  return (
    <motion.section
      id="why-me"
      className="py-20 px-4 md:py-24 text-white relative overflow-hidden"
      style={{ backgroundColor: '#15002C' }}
      variants={sectionVariants} 
      initial="hidden"          
      whileInView="visible"     
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#15002C] via-[#3E065F]/20 to-transparent opacity-40 blur-3xl z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#f8f4fb]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-[#892CDC]">Me?</span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-12 font-light text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partner with a dedicated developer who values your success and delivers exceptional results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-xl shadow-xl flex flex-col items-center justify-start h-full"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div className="bg-[#892CDC] rounded-full p-5 mb-6 flex items-center justify-center shadow-lg">
                <reason.icon className="text-4xl text-white" /> 
              </div>

              <h3 className="text-2xl font-bold mb-3 text-[#f8f4fb]">{reason.title}</h3>

              <p className="text-gray-300 text-lg leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseMeSection;