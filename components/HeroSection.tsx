// components/HeroSection.tsx
"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSectionContent from './HeroSectionContent';

const DynamicHeroSplineBackground = dynamic(
  () => import('./HeroSplineBackground'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[#0A001A] flex items-center justify-center text-white z-0">
        <p>...</p>
      </div>
    ),
  }
);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.05
      }
    );

    if (currentRef) { 
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { 
        observer.unobserve(currentRef);
      }
    };
  }, []); 

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden p-4"
    >
      {isInView && <DynamicHeroSplineBackground />}

      <HeroSectionContent />
    </section>
  );
};

export default HeroSection;