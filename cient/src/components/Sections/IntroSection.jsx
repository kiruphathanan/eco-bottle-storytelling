// components/Sections/IntroSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGsapContext } from '../../hooks/useGsapContext';

const IntroSection = () => {
  const sectionRef = useRef();
  const bottleRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  const scope = useGsapContext(() => {
    // Initial animations
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(bottleRef.current,
      { opacity: 0, scale: 0.8, rotationX: -30 },
      { 
        opacity: 1, 
        scale: 1, 
        rotationX: 0, 
        duration: 2, 
        delay: 0.8, 
        ease: 'back.out(1.7)' 
      }
    );

    // Scroll-triggered bottle tilt
    gsap.to(bottleRef.current, {
      rotationY: 15,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="section h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div ref={scope} className="text-center z-10">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-emerald-800 mb-6"
        >
          AquaPure
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-emerald-600 mb-12"
        >
          The Future of Hydration
        </p>
        
        {/* Bottle Container */}
        <div className="relative">
          <div 
            ref={bottleRef}
            className="w-48 h-80 mx-auto bg-gradient-to-b from-emerald-400 to-teal-600 rounded-3xl border-4 border-white shadow-2xl transform-style-preserve-3d"
          >
            {/* Bottle Details */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-white/40 rounded-full"></div>
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-white/20 rounded-full"></div>
          </div>
          
          {/* Reflection Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-3xl"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default IntroSection;