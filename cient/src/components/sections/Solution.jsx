// components/sections/Solution.jsx
import React from 'react';

const Solution = () => {
  return (
    <section className="story-section h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-cyan-50">
      <div className="text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text">
            The Solution
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in">
          Our 100% biodegradable, reusable water bottle made from natural plant-based materials.
        </p>
      </div>
    </section>
  );
};

export default Solution;