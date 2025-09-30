// components/sections/CTA.jsx
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const CTA = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const bottleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Final animation sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo('.cta-element',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
      );

      // Button pulse animation
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Bottle cap animation on hover
      if (isHovering) {
        gsap.to('.bottle-cap', {
          y: -20,
          rotation: -10,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
        gsap.to('.water-sparkle', {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1
        });
      } else {
        gsap.to('.bottle-cap', {
          y: 0,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
        gsap.to('.water-sparkle', {
          scale: 0,
          opacity: 0,
          duration: 0.3
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      className="story-section h-screen flex items-center justify-center relative bg-gradient-to-br from-emerald-400 to-green-600"
      data-bg-color="#10b981"
    >
      <div className="container mx-auto px-8 text-center">
        {/* Animated Bottle */}
        <div
          ref={bottleRef}
          className="cta-element w-32 h-48 mx-auto mb-12 relative cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Bottle */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-100 rounded-[40px] border-4 border-white shadow-2xl">
            <div className="bottle-cap absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-emerald-300 rounded-full border-2 border-white transition-all duration-500"></div>
            <div className="w-24 h-32 bg-white/50 rounded-[25px] mx-auto mt-8"></div>
          </div>

          {/* Water Sparkles */}
          {[1, 2, 3].map((sparkle) => (
            <div
              key={sparkle}
              className={`water-sparkle absolute top-${sparkle * 4} left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-0 scale-0`}
              style={{ top: `${sparkle * 16}px` }}
            ></div>
          ))}
        </div>

        <h2 className="cta-element text-5xl md:text-7xl font-bold text-white mb-6 opacity-0">
          Join the Movement
        </h2>
        
        <p className="cta-element text-xl md:text-2xl text-emerald-100 mb-12 max-w-2xl mx-auto opacity-0">
          Be part of the solution. Choose sustainable hydration and make a difference for our planet.
        </p>

        <button
          ref={buttonRef}
          className="cta-element bg-white text-emerald-600 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300 opacity-0"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          💧 Buy Now - Save the Planet 🌍
        </button>

        <div className="cta-element mt-8 text-emerald-100 opacity-0">
          <p>Free shipping • 30-day money back • Plant a tree with every purchase</p>
        </div>
      </div>

      {/* Floating leaves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3, 4, 5].map((leaf) => (
          <div
            key={leaf}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${leaf * 15}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + leaf * 5}s infinite ease-in-out`
            }}
          >
            🍃
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;