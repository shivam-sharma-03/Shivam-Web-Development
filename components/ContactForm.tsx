// components/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle'); // Use explicit statuses

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // In a real application, you would send this data to your backend API.
    // For now, we'll simulate a successful submission.
    console.log('Form data submitted:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (

    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-800 bg-opacity-40 p-6 md:p-8 rounded-lg shadow-lg border border-[#892CDC]/30 space-y-5 md:space-y-6 flex-shrink-0"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={formItemVariants}>
        <label htmlFor="name" className="block text-left text-gray-200 text-base md:text-lg mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          suppressHydrationWarning={true}
          className="w-full p-2 md:p-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#892CDC] focus:ring-1 focus:ring-[#892CDC] outline-none transition-colors"
        />
      </motion.div>

      <motion.div variants={formItemVariants}>
        <label htmlFor="email" className="block text-left text-gray-200 text-base md:text-lg mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          suppressHydrationWarning={true}
          className="w-full p-2 md:p-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#892CDC] focus:ring-1 focus:ring-[#892CDC] outline-none transition-colors"
        />
      </motion.div>

      <motion.div variants={formItemVariants}>
        <label htmlFor="message" className="block text-left text-gray-200 text-base md:text-lg mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          suppressHydrationWarning={true}
          className="w-full p-2 md:p-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#892CDC] focus:ring-1 focus:ring-[#892CDC] outline-none transition-colors resize-y"
        ></textarea>
      </motion.div>

      <motion.button
        type="submit"
        variants={formItemVariants}
        disabled={status === 'submitting'}
        suppressHydrationWarning={true}
        className="w-full bg-[#892CDC] text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-[#700B97] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#892CDC]/50 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 mt-4"
        >
          Message sent successfully! I&apos;ll get back to you soon. {/* FIXED */}
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 mt-4"
        >
          Failed to send message. Please try again later.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;