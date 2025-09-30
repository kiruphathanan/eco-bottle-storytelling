// components/sections/Problem.jsx
import React from 'react';

const Problem = () => {
  return (
    <section className="story-section h-screen flex items-center justify-center bg-gray-800 text-white">
      <div className="text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">Plastic Pollution</h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
          Every year, millions of plastic bottles end up in our oceans, 
          harming marine life and polluting our planet for centuries to come.
        </p>
      </div>
    </section>
  );
};

export default Problem;