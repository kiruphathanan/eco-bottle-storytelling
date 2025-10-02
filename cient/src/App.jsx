// App.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroSection from './components/Sections/IntroSection';
import ProblemSection from './components/Sections/ProblemSection';
import SolutionSection from './components/Sections/SolutionSection';
import BenefitsSection from './components/Sections/BenefitsSection';
import CTASection from './components/Sections/CTASection';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global scroll animations setup
      gsap.set('.section', { opacity: 0, y: 50 });
      
      ScrollTrigger.batch('.section', {
        onEnter: batch => gsap.to(batch, {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2
        }),
        start: 'top 80%',
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="relative">
      <IntroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}

export default App;