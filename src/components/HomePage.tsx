import React from 'react';
import { useInView } from 'react-intersection-observer';
import { DotPattern } from './DotPattern';
import { HeroSection } from './home/HeroSection';

interface HomePageProps {
  isDark: boolean;
  onGetStarted: () => void;
}

export function HomePage({ isDark, onGetStarted }: HomePageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white overflow-y-auto">
      <DotPattern />

      {/* Hero Section */}
      <div 
        className="relative min-h-[calc(100vh-env(safe-area-inset-bottom,0px))] lg:min-h-[calc(100vh-5rem)] max-w-[1800px] mx-auto pb-safe" 
        ref={ref}
      >
        <HeroSection inView={inView} onGetStarted={onGetStarted} />
      </div>
    </div>
  );
}