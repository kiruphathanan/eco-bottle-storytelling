// components/Sections/ProblemSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapContext } from '../../hooks/useGsapContext';

const ProblemSection = () => {
  const sectionRef = useRef();
  const pollutionStatsRef = useRef([]);
  const darkBgRef = useRef();

  const addToRefs = (el) => {
    if (el && !pollutionStatsRef.current.includes(el)) {
      pollutionStatsRef.current.push(el);
    }
  };

  const scope = useGsapContext(() => {
    // Dark background transition
    gsap.fromTo(darkBgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        }
      }
    );

    // Pollution stats animation
    pollutionStatsRef.current.forEach((stat, index) => {
      gsap.fromTo(stat,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          }
        }
      );
    });

    // Floating plastic items
    gsap.to('.plastic-item', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });
  });

  const pollutionStats = [
    { number: '8 Million', text: 'tons of plastic enter oceans each year' },
    { number: '500 Years', text: 'for plastic to decompose' },
    { number: '1 Million', text: 'plastic bottles sold every minute' },
    { number: '91%', text: 'of plastic isn\'t recycled' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Dark Background Overlay */}
      <div 
        ref={darkBgRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 opacity-0"
      ></div>
      
      <div ref={scope} className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">
            The Plastic Problem
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {pollutionStats.map((stat, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-lg">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our planet is drowning in plastic waste. Single-use bottles are a major contributor 
              to this environmental crisis, polluting our oceans and harming marine life.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Plastic Items */}
      <div className="plastic-item absolute top-1/4 left-1/6 w-8 h-16 bg-blue-500/30 rounded-lg rotate-45"></div>
      <div className="plastic-item absolute top-1/3 right-1/5 w-12 h-8 bg-red-500/30 rounded-full"></div>
      <div className="plastic-item absolute bottom-1/4 left-1/3 w-10 h-10 bg-green-500/30 rotate-12"></div>
      <div className="plastic-item absolute bottom-1/3 right-1/4 w-6 h-14 bg-yellow-500/30 rounded-lg"></div>
    </section>
  );
};

export default ProblemSection;