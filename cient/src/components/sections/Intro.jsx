// components/sections/Intro.jsx
import React from 'react';

const Intro = () => {
  return (
    <section
      className="story-section h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-green-50"
      data-bg-color="#f0f9ff"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-200 rounded-full opacity-40 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-emerald-200 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8 animate-fade-in">
          AquaPure
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-delayed">
          The Future of Hydration is Here
        </p>
        
        {/* Animated Bottle */}
        <div className="w-48 h-96 mx-auto animate-float">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-[60px] border-8 border-white shadow-2xl">
              <div className="w-32 h-12 bg-gray-100 rounded-full mx-auto mt-6 border-4 border-gray-200"></div>
              <div className="w-40 h-64 bg-white/90 rounded-[40px] mx-auto mt-8 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl mb-2">💧</div>
                  <div className="text-sm font-bold text-gray-700">Eco-Friendly</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg bg-green-500 px-4 py-1 rounded-full">
              100% Eco-Friendly
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <div className="text-gray-500 flex flex-col items-center">
          <span>Scroll to begin the journey</span>
          <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Intro;