import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HighlightsGrid from './components/HighlightsGrid';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Global smooth scroll behaviors or context-wide animations can go here
      // Note: We use useLayoutEffect and context for cleanup as requested
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsGrid />
        {/* Placeholder for future PreservationSection if needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
