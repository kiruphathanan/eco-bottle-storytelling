// components/Sections/SolutionSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapContext } from '../../hooks/useGsapContext';

const SolutionSection = () => {
  const sectionRef = useRef();
  const bottleRef = useRef();
  const textRef = useRef();
  const glowRef = useRef();

  const scope = useGsapContext(() => {
    // Bottle glow effect
    const glowAnimation = gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Bottle entrance animation
    gsap.fromTo(bottleRef.current,
      {
        opacity: 0,
        scale: 0.5,
        rotationY: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: bottleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      }
    );

    // Text slide-in
    gsap.fromTo(textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      }
    );

    // Background transition
    gsap.to(sectionRef.current, {
      background: 'linear-gradient(to bottom right, #ecfdf5, #ccfbf1)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      }
    });
  });

  const features = [
    '🌱 100% Biodegradable Materials',
    '💧 Self-Cleaning Technology',
    '♻️ Lifetime Recycling Program',
    '🌍 Carbon Neutral Production'
  ];

  return (
    <section 
      ref={sectionRef}
      className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      <div ref={scope} className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bottle with Glow Effect */}
          <div className="relative flex justify-center">
            <div 
              ref={glowRef}
              className="absolute inset-0 bg-emerald-400 rounded-full blur-3xl opacity-50"
            ></div>
            <div 
              ref={bottleRef}
              className="relative z-10 w-64 h-96 bg-gradient-to-b from-emerald-300 to-teal-500 rounded-3xl border-4 border-white shadow-2xl transform-style-preserve-3d"
            >
              {/* Enhanced Bottle Details */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-white/40 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-52 h-3 bg-white/50 rounded-full"></div>
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-white/25 rounded-full border-2 border-white/30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <div className="text-sm opacity-80">AquaPure</div>
                <div className="text-xs opacity-60">Eco Bottle</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="text-gray-800">
            <h2 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
              The Sustainable Solution
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AquaPure combines cutting-edge technology with eco-friendly materials 
              to deliver the perfect hydration experience without harming our planet.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center text-lg bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-emerald-200"
                >
                  <span className="mr-3">{feature.split(' ')[0]}</span>
                  <span>{feature.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-teal-300/15 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SolutionSection;