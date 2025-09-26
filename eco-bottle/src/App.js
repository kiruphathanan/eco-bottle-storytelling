// src/App.js

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import bottleImg from './assets/bottle.png';
import pollutionImg from './assets/pollution.jpg'; // We'll use this later
import gymImg from './assets/gym.jpg';
import officeImg from './assets/office.jpg';
import travelImg from './assets/travel.jpg';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const component = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);

  // NEW: Create refs for the problem section and its content
  const problemSectionRef = useRef(null);
  const problemTitleRef = useRef(null);
  const problemTextRef = useRef(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- INTRO ANIMATION ---
      const tl = gsap.timeline();
      tl.from(titleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' });
      tl.from(subtitleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' }, "-=0.6");
      tl.from(bottleRef.current, { opacity: 0, y: '20px', scale: 0.9, duration: 1, ease: 'power3.out' }, "-=0.6");

      // --- NEW: BACKGROUND COLOR SCROLL TRIGGER ---
      gsap.to(component.current, { // Target the main .App container
        backgroundColor: '#2c3e50', // The dark color we want to transition to
        scrollTrigger: {
          trigger: problemSectionRef.current, // The element that triggers the animation
          start: 'top 50%', // When the top of the trigger hits 50% of the viewport height
          end: 'bottom 100%', // When the bottom of the trigger hits the top of the viewport
          scrub: true, // This makes the animation smooth as you scroll
        }
      });
      
      // --- NEW: PROBLEM SECTION TEXT ANIMATION ---
      const problemTl = gsap.timeline({
        scrollTrigger: {
          trigger: problemSectionRef.current,
          start: 'top 60%',
        }
      });

      problemTl.from(problemTitleRef.current, { x: -100, opacity: 0, duration: 1 });
      problemTl.from(problemTextRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.7");

    }, component);

    return () => ctx.revert();
  }, []);


  return (
    <div className="App" ref={component}>
      {/* Section 1: Intro */}
      <section className="section intro">
        <div className="content">
          <h1 ref={titleRef}>AquaPure</h1>
          <p ref={subtitleRef}>The Last Bottle You'll Ever Need.</p>
          <img src={bottleImg} alt="Eco-friendly bottle" className="bottle-img" ref={bottleRef}/>
        </div>
      </section>

      {/* Section 2: Problem */}
      {/* NEW: Attach refs to the section and its content */}
      <section className="section problem" ref={problemSectionRef}>
        <div className="content">
          <h2 ref={problemTitleRef}>The Plastic Problem is Drowning Us.</h2>
          <p ref={problemTextRef}>Every year, millions of tons of plastic bottles end up in our oceans, harming wildlife and our planet.</p>
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