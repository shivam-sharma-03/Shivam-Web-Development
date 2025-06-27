// components/HeroSectionContent.tsx
import React from 'react';
import Link from 'next/link';

const HeroSectionContent: React.FC = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg"
        style={{ textShadow: '0 0 10px rgba(137, 44, 220, 0.5)' }}
      >
        <span>Crafting Digital Experiences,</span>
        <br />
        <span className="text-[#892CDC]">One Website at a Time.</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
        Your solo partner for stunning website redesigns and new builds that convert.
      </p>
      <Link
        href="contact"
        className="inline-block bg-[#892CDC] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#700B97] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#892CDC]/50"
      >
        Get a quotation
      </Link>
    </div>
  );
};

export default HeroSectionContent;