// components/ContactForm.tsx
"use client";

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

const formVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "6f931491-dfb8-4d8d-b697-9b7de9f20d76");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error("Web3Forms Error:", result.message);
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="text-center p-8 bg-green-500/20 rounded-lg text-green-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
        <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-6 p-8 rounded-xl border border-[#892CDC]/40 shadow-lg bg-gradient-to-br from-[#15002C] to-[#0A001A]"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div>
        <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="shadow appearance-none border border-[#892CDC]/30 rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#892CDC] bg-gray-900/50 text-white placeholder-gray-500"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="shadow appearance-none border border-[#892CDC]/30 rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#892CDC] bg-gray-900/50 text-white placeholder-gray-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="shadow appearance-none border border-[#892CDC]/30 rounded-md w-full py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-[#892CDC] bg-gray-900/50 text-white placeholder-gray-500 resize-y"
          placeholder="Tell me about your project or inquiry..."
          required
        ></textarea>
      </div>
      {error && (
        <div className="text-red-500 text-sm text-center mt-4">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#892CDC] hover:bg-[#700B97] text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#892CDC]/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  );
};

export default ContactForm;