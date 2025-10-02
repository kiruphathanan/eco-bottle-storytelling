// components/Sections/BenefitsSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapContext } from '../../hooks/useGsapContext';

const BenefitsSection = () => {
  const sectionRef = useRef();
  const benefitsRef = useRef([]);

  const benefits = [
    {
      scene: '🏋️ Gym',
      title: 'Perfect Workout Companion',
      description: 'Lightweight, durable, and keeps your water cold for hours during intense workouts.',
      image: 'bg-gradient-to-br from-orange-100 to-red-100',
      icon: '💪'
    },
    {
      scene: '💼 Office',
      title: 'Professional & Stylish',
      description: 'Elegant design that fits perfectly in any professional environment.',
      image: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      icon: '👔'
    },
    {
      scene: '✈️ Travel',
      title: 'Adventure Ready',
      description: 'Leak-proof and rugged for all your travel adventures around the world.',
      image: 'bg-gradient-to-br from-green-100 to-emerald-100',
      icon: '🌎'
    },
    {
      scene: '🏠 Home',
      title: 'Everyday Essential',
      description: 'The perfect bottle for your daily hydration needs at home.',
      image: 'bg-gradient-to-br from-purple-100 to-pink-100',
      icon: '🏡'
    }
  ];

  const addToRefs = (el) => {
    if (el && !benefitsRef.current.includes(el)) {
      benefitsRef.current.push(el);
    }
  };

  const scope = useGsapContext(() => {
    // Staggered cards animation
    benefitsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          }
        }
      );
    });

    // Parallax background elements
    gsap.to('.parallax-bg-1', {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to('.parallax-bg-2', {
      y: 100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="section min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20 relative overflow-hidden"
    >
      <div ref={scope} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Live Better with AquaPure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed for every aspect of your modern lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`${benefit.image} rounded-3xl p-8 border border-white/50 backdrop-blur-sm shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.scene}
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Mini bottle in scene */}
              <div className="mt-6 flex justify-center">
                <div className="w-12 h-20 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-xl border-2 border-white shadow-lg relative">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <div className="text-4xl mb-4">🌟</div>
            <p className="text-2xl text-gray-800 italic mb-4">
              "AquaPure has completely changed how I stay hydrated. It's not just a bottle, 
              it's a statement about caring for our planet."
            </p>
            <div className="text-gray-600 font-semibold">
              - Sarah Chen, Environmental Activist
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Background Elements */}
      <div className="parallax-bg-1 absolute top-20 left-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl"></div>
      <div className="parallax-bg-2 absolute bottom-20 right-16 w-40 h-40 bg-blue-300/15 rounded-full blur-2xl"></div>
      <div className="parallax-bg-1 absolute top-1/2 left-20 w-24 h-24 bg-teal-300/25 rounded-full blur-xl"></div>
    </section>
  );
};

export default BenefitsSection;