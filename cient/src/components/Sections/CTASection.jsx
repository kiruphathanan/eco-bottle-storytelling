// components/Sections/CTASection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapContext } from '../../hooks/useGsapContext';

const CTASection = () => {
  const sectionRef = useRef();
  const buttonRef = useRef();
  const textRef = useRef();
  const featuresRef = useRef([]);

  const features = [
    { icon: '🌿', text: 'Eco-Friendly' },
    { icon: '💧', text: 'Smart Hydration' },
    { icon: '🔄', text: 'Lifetime Warranty' },
    { icon: '🚚', text: 'Free Shipping' }
  ];

  const addToRefs = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  const scope = useGsapContext(() => {
    // Green background transition
    gsap.to(sectionRef.current, {
      background: 'linear-gradient(to bottom right, #10b981, #059669)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      }
    });

    // Text animation
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
        }
      }
    );

    // Features animation
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(feature,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: feature,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          }
        }
      );
    });

    // Button animation
    const buttonAnimation = gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    // Floating particles
    gsap.to('.floating-particle', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: 'sine.inOut'
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="section min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
    >
      <div ref={scope} className="text-center relative z-10">
        <div ref={textRef} className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Make the switch to sustainable hydration today and be part of the solution 
            to plastic pollution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="text-white font-semibold">{feature.text}</div>
            </div>
          ))}
        </div>

        {/* Price and Button */}
        <div className="mb-8">
          <div className="text-white/80 text-xl mb-2">Starting at just</div>
          <div className="text-6xl md:text-7xl font-bold text-white mb-4">
            $34.99
          </div>
          <div className="text-white/60 mb-8">+ Free Shipping Worldwide</div>
        </div>

        <button
          ref={buttonRef}
          className="bg-white text-emerald-700 text-2xl font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105"
          onClick={() => alert('Thank you for your interest in AquaPure!')}
        >
          🛒 Buy Now - Make a Difference
        </button>

        <div className="mt-6 text-white/70">
          🚀 30-day money-back guarantee • 🌍 1 bottle = 1kg ocean plastic removed
        </div>
      </div>

      {/* Floating Particles */}
      <div className="floating-particle absolute top-1/4 left-1/5 w-4 h-4 bg-white/30 rounded-full"></div>
      <div className="floating-particle absolute top-1/3 right-1/4 w-6 h-6 bg-white/40 rounded-full"></div>
      <div className="floating-particle absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
      <div className="floating-particle absolute bottom-1/3 right-1/5 w-5 h-5 bg-white/35 rounded-full"></div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
    </section>
  );
};

export default CTASection;