// src/App.js

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import bottleImg from './assets/bottle.png';
import pollutionImg from './assets/pollution.jpg';
import gymImg from './assets/gym.jpg';
import officeImg from './assets/office.jpg';
import travelImg from './assets/travel.jpg';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const component = useRef(null);

  // Intro Refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);

  // Problem Refs
  const problemSectionRef = useRef(null);
  const problemTitleRef = useRef(null);
  const problemTextRef = useRef(null);

  // NEW: Create refs for the solution section
  const solutionSectionRef = useRef(null);
  const solutionTitleRef = useRef(null);
  const solutionTextRef = useRef(null);
  const solutionBottleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- INTRO ANIMATION ---
      const introTl = gsap.timeline();
      introTl.from(titleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' });
      introTl.from(subtitleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' }, "-=0.6");
      introTl.from(bottleRef.current, { opacity: 0, y: '20px', scale: 0.9, duration: 1, ease: 'power3.out' }, "-=0.6");

      // --- PROBLEM BACKGROUND & TEXT ---
      gsap.to(component.current, {
        backgroundColor: '#2c3e50',
        scrollTrigger: {
          trigger: problemSectionRef.current,
          start: 'top 50%',
          end: 'bottom 100%',
          scrub: true,
        }
      });
      const problemTl = gsap.timeline({ scrollTrigger: { trigger: problemSectionRef.current, start: 'top 60%' }});
      problemTl.from(problemTitleRef.current, { x: -100, opacity: 0, duration: 1 });
      problemTl.from(problemTextRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.7");

      // --- NEW: SOLUTION BACKGROUND & ANIMATIONS ---

      // Background transition back to light
      gsap.to(component.current, {
        backgroundColor: '#ffffff', // Transition to white
        scrollTrigger: {
          trigger: solutionSectionRef.current,
          start: 'top 50%',
          end: 'bottom 100%',
          scrub: true,
        }
      });

      // Solution Content Timeline
      const solutionTl = gsap.timeline({
        scrollTrigger: {
          trigger: solutionSectionRef.current,
          start: 'top 60%'
        }
      });
      solutionTl.from(solutionTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      solutionTl.from(solutionTextRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.7');

      // Bottle fade in, glow, and parallax
      solutionTl.from(solutionBottleRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)'
      }, '-=0.5');

      // Glow effect
      gsap.to(solutionBottleRef.current, {
          boxShadow: "0px 0px 30px 5px rgba(45, 212, 191, 0.7)",
          scrollTrigger: {
            trigger: solutionSectionRef.current,
            start: 'top 40%',
            end: 'bottom 100%',
            toggleActions: "play reverse play reverse", // Glows when entering, fades when leaving
          }
      });

      // Parallax effect
      gsap.to(solutionBottleRef.current, {
        y: -150, // Move the bottle up as you scroll down
        rotate: 15, // Tilt the bottle slightly
        scrollTrigger: {
          trigger: solutionSectionRef.current,
          start: 'top 100%',
          end: 'bottom 0%',
          scrub: true, // Link animation to scroll position
        }
      });

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      {/* ... Intro Section ... */}
      <section className="section intro">
        <div className="content">
          <h1 ref={titleRef}>AquaPure</h1>
          <p ref={subtitleRef}>The Last Bottle You'll Ever Need.</p>
          <img src={bottleImg} alt="Eco-friendly bottle" className="bottle-img" ref={bottleRef}/>
        </div>
      </section>

      {/* ... Problem Section ... */}
      <section className="section problem" ref={problemSectionRef}>
        <div className="content">
          <h2 ref={problemTitleRef}>The Plastic Problem is Drowning Us.</h2>
          <p ref={problemTextRef}>Every year, millions of tons of plastic bottles end up in our oceans, harming wildlife and our planet.</p>
        </div>
      </section>

      {/* Section 3: Solution */}
      {/* NEW: Attach refs and add bottle image */}
      <section className="section solution" ref={solutionSectionRef}>
        <div className="content">
          <h2 ref={solutionTitleRef}>A Better, Sustainable Solution.</h2>
          <p ref={solutionTextRef}>Our bottles are made from 100% recycled steel, copper, and wood. A conscious choice for a cleaner world.</p>
          <img 
            src={bottleImg} 
            alt="Eco-friendly bottle" 
            className="bottle-img-solution" 
            ref={solutionBottleRef} 
          />
        </div>
      </section>

      {/* ... Benefits Section ... */}
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

      {/* ... CTA Section ... */}
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