// components/NavBar.tsx
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar: React.FC = () => {

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Why Me?', href: '/#why-me' }, // FIXED: The original 'Why Me?' was fine, but in case any other unescaped chars arise, this is the format
    { name: 'Contact me', href: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isScrolled ? 'backdrop-filter backdrop-blur-lg bg-opacity-70 border-b border-purple-500/20 shadow-lg' : 'bg-opacity-30 border-b border-purple-500/20'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-[#f8f4fb] hover:text-[#892CDC] transition-colors duration-200">
        <div className="flex items-center space-x-2">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        <span>Shivam Web Development</span> {/* Confirmed: Already correct, no Shiv's Portfolio */}
        </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#892CDC] transition-colors duration-200 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavLinkClick}
                className="text-white hover:text-[#892CDC] transition-colors duration-200 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;