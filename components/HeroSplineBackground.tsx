// components/HeroSplineBackground.tsx
"use client"; 

import React from 'react';
import Spline from '@splinetool/react-spline'; 

const HeroSplineBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <React.Suspense fallback={null}> 
        <Spline
          scene="https://prod.spline.design/XPa0jxNjZCYQSTj2/scene.splinecode"
          className="w-full h-full" 
        />
      </React.Suspense>
    </div>
  );
};

export default HeroSplineBackground;