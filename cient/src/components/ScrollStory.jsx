// components/ScrollStory.jsx
import React, { useRef, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Intro from './sections/Intro';
import Problem from './sections/Problem';
import Solution from './sections/Solution';
import Benefits from './sections/Benefits';
import CTA from './sections/CTA';

const ScrollStory = () => {
  return (
    <div className="relative">
      <ProgressBar />
      
      <div className="sections-container">
        <Intro />
        <Problem />
        <Solution />
        <Benefits />
        <CTA />
      </div>
    </div>
  );
};

export default ScrollStory;