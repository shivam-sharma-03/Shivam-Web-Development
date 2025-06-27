// app/page.tsx
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ServicesSection from '@/components/ServicesSection';
import IndustriesWeServeSection from "@/components/IndustriesWeServeSection";
import WhyChooseMeSection from "@/components/WhyChooseMeSection";
import CommonDoubtsSection from "@/components/CommonDoubtsSection";
import MiniCtaSection from "@/components/MiniCtaSection"; 
import ContactSection from "@/components/ContactSection";   

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <IndustriesWeServeSection />
      <WhyChooseMeSection />
      <MiniCtaSection />    
      <CommonDoubtsSection />
      <ContactSection />        
    </main>
  );
}