// src/App.js

// NEW: Import useRef and useLayoutEffect from React, and gsap
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import assets
import bottleImg from './assets/bottle.png';
import pollutionImg from './assets/pollution.jpg';
import gymImg from './assets/gym.jpg';
import officeImg from './assets/office.jpg';
import travelImg from './assets/travel.jpg';

// NEW: Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  // NEW: Create a ref for the main component and the intro elements
  const component = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);

  // NEW: Create the animation timeline inside useLayoutEffect
  useLayoutEffect(() => {
    // A gsap.context() lets us scope the animations to this component
    let ctx = gsap.context(() => {
      const tl = gsap.timeline(); // Create a timeline

      // Animate the title
      tl.from(titleRef.current, {
        opacity: 0,
        y: '20px', // Start 20px below its final position
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate the subtitle, starting slightly after the title
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: '20px',
        duration: 0.8,
        ease: 'power3.out',
      }, "-=0.6"); // The "-=0.6" makes it overlap with the previous animation

      // Animate the bottle image
      tl.from(bottleRef.current, {
        opacity: 0,
        y: '20px',
        scale: 0.9, // Start slightly smaller
        duration: 1,
        ease: 'power3.out',
      }, "-=0.6");

    }, component); // Scope the context to our main component

    return () => ctx.revert(); // Cleanup function to remove animations when the component unmounts
  }, []);


  return (
    // NEW: Attach the main component ref
    <div className="App" ref={component}>
      {/* Section 1: Intro */}
      <section className="section intro">
        <div className="content">
          {/* NEW: Attach refs to the elements we want to animate */}
          <h1 ref={titleRef}>AquaPure</h1>
          <p ref={subtitleRef}>The Last Bottle You'll Ever Need.</p>
          <img src={bottleImg} alt="Eco-friendly bottle" className="bottle-img" ref={bottleRef}/>
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="section problem">
        <div className="content">
          <h2>The Plastic Problem is Drowning Us.</h2>
          <p>Every year, millions of tons of plastic bottles end up in our oceans, harming wildlife and our planet.</p>
        </div>
      </section>

      {/* Section 3: Solution */}
      <section className="section solution">
         <div className="content">
          <h2>A Better, Sustainable Solution.</h2>
          <p>Our bottles are made from 100% recycled steel, copper, and wood. A conscious choice for a cleaner world.</p>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="section benefits">
         <div className="content">
          <h2>For Every Part of Your Day.</h2>
          <div className="lifestyle-images">
            <img src={gymImg} alt="Person at the gym" />
            <img src={officeImg} alt="Person at the office" />
            <img src={travelImg} alt="Person traveling" />
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="section cta">
         <div className="content">
          <h2>Join the Revolution.</h2>
          <button className="cta-button">Buy Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;