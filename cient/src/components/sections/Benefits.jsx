// components/sections/Benefits.jsx
import React, { useRef, useEffect, useState } from 'react';

// Safe GSAP import with fallback
let gsap;
let ScrollTrigger;

try {
  gsap = (await import('gsap')).default;
  ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  gsap.registerPlugin(ScrollTrigger);
} catch (error) {
  console.warn('GSAP not available, animations will be disabled');
}

const Benefits = () => {
  const sectionRef = useRef(null);
  const [activeBenefit, setActiveBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      title: 'Active Lifestyle',
      description: 'Perfect for gym sessions and workouts',
      icon: '💪',
      bg: 'from-purple-500 to-pink-500',
      scene: '🏋️'
    },
    {
      id: 2,
      title: 'Professional',
      description: 'Elegant design for office environment',
      icon: '💼',
      bg: 'from-blue-500 to-cyan-500',
      scene: '🏢'
    },
    {
      id: 3,
      title: 'Adventure',
      description: 'Durable and reliable for outdoor activities',
      icon: '🏔️',
      bg: 'from-green-500 to-emerald-500',
      scene: '✈️'
    }
  ];

  useEffect(() => {
    if (!gsap || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered animation for benefit cards
      gsap.fromTo('.benefit-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="story-section min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 to-blue-50"
      data-bg-color="#faf5ff"
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
            Designed for <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">Your Life</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect companion for every aspect of your daily routine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="benefit-card opacity-0"
              onMouseEnter={() => setActiveBenefit(benefit.id)}
              onMouseLeave={() => setActiveBenefit(null)}
            >
              <div className={`
                relative h-96 rounded-3xl p-8 text-white transform transition-all duration-500
                ${activeBenefit === benefit.id ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}
                bg-gradient-to-br ${benefit.bg} shadow-2xl overflow-hidden
              `}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 text-6xl">{benefit.scene}</div>
                  <div className="absolute bottom-4 left-4 text-4xl">💧</div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-xl opacity-90">{benefit.description}</p>
                  </div>

                  {/* Interactive Water Drop */}
                  <div className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2
                    transition-all duration-500
                    ${activeBenefit === benefit.id ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
                  `}>
                    <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;