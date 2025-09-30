// components/EasterEgg.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const EasterEgg = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add to trail
      setTrail(prev => [
        ...prev.slice(-4), // Keep only last 5 positions
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor Element */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-10 h-10 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow"></div>
      </div>

      {/* Trail Elements */}
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="fixed pointer-events-none z-40 transition-all duration-300"
          style={{
            left: pos.x - 8,
            top: pos.y - 8,
            opacity: (index + 1) / trail.length * 0.3
          }}
        >
          <div className="w-4 h-4 bg-emerald-300 rounded-full"></div>
        </div>
      ))}
    </>
  );
};

export default EasterEgg;