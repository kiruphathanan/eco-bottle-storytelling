// src/App.js

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import assets
import bottleImg from './assets/bottle.png'; // We'll keep this for the solution section
import gymImg from './assets/gym.jpg';
import officeImg from './assets/office.jpg';
import travelImg from './assets/travel.jpg';
import introVideo from './assets/intro-video.mp4'; // NEW: Import your video

gsap.registerPlugin(ScrollTrigger);

function App() {
  const component = useRef(null);

  // All our refs for animation
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  // const bottleRef = useRef(null); // No longer needed for intro section
  const introVideoRef = useRef(null); // NEW: Ref for the video element

  const problemSectionRef = useRef(null);
  const problemTitleRef = useRef(null);
  const problemTextRef = useRef(null);
  const solutionSectionRef = useRef(null);
  const solutionTitleRef = useRef(null);
  const solutionTextRef = useRef(null);
  const solutionBottleRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const benefitsTitleRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- INTRO ANIMATION ---
      const introTl = gsap.timeline();
      // NEW: Animate video first
      introTl.from(introVideoRef.current, { opacity: 0, duration: 1.5, ease: 'power2.inOut' }); 
      // Animate title and subtitle over the video
      introTl.from(titleRef.current, { opacity: 0, y: '20px', duration: 1, ease: 'power3.out' }, "-=0.8"); // Overlap with video fade in
      introTl.from(subtitleRef.current, { opacity: 0, y: '20px', duration: 1, ease: 'power3.out' }, "-=0.7");
      // Remove bottle animation from intro, it's now in the solution section
      // introTl.from(bottleRef.current, { opacity: 0, y: '20px', scale: 0.9, duration: 1, ease: 'power3.out' }, "-=0.6");

      // --- PROBLEM SECTION ANIMATIONS ---
      gsap.to(component.current, { backgroundColor: '#2c3e50', scrollTrigger: { trigger: problemSectionRef.current, start: 'top 50%', end: 'bottom 100%', scrub: true }});
      const problemTl = gsap.timeline({ scrollTrigger: { trigger: problemSectionRef.current, start: 'top 60%' }});
      problemTl.from(problemTitleRef.current, { x: -100, opacity: 0, duration: 1 });
      problemTl.from(problemTextRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.7");

      // --- SOLUTION SECTION ANIMATIONS ---
      gsap.to(component.current, { backgroundColor: '#ffffff', scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 50%', end: 'bottom 100%', scrub: true }});
      const solutionTl = gsap.timeline({ scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 60%' }});
      solutionTl.from(solutionTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      solutionTl.from(solutionTextRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.7');
      solutionTl.from(solutionBottleRef.current, { opacity: 0, scale: 0.8, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, '-=0.5');
      gsap.to(solutionBottleRef.current, { boxShadow: "0px 0px 30px 5px rgba(45, 212, 191, 0.7)", scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 40%', end: 'bottom 100%', toggleActions: "play reverse play reverse" }});
      gsap.to(solutionBottleRef.current, { y: -150, rotate: 15, scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 100%', end: 'bottom 0%', scrub: true }});

      // --- BENEFITS SECTION ANIMATIONS ---
      const benefitsTl = gsap.timeline({ scrollTrigger: { trigger: benefitsSectionRef.current, start: 'top 60%' }});
      benefitsTl.from(benefitsTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      benefitsTl.from('.lifestyle-images img', { opacity: 0, y: 50, scale: 0.95, duration: 0.7, stagger: 0.2 }, "-=0.5");

      // --- CTA SECTION ANIMATIONS ---
      gsap.to(component.current, { backgroundColor: '#27ae60', scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 50%', end: 'bottom 100%', scrub: true }});
      const ctaTl = gsap.timeline({ scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 60%' }});
      ctaTl.from(ctaTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      ctaTl.from(ctaButtonRef.current, { opacity: 0, scale: 0.5, duration: 1, ease: 'back.out(1.7)' }, "-=0.5");

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      {/* Section 1: Intro */}
      <section className="section intro">
        <video 
          className="intro-video" 
          ref={introVideoRef} 
          src={introVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        ></video>
        <div className="content">
          <h1 ref={titleRef}>AquaPure</h1>
          <p ref={subtitleRef}>The Last Bottle You'll Ever Need.</p>
          {/* <img src={bottleImg} alt="Eco-friendly bottle" className="bottle-img" ref={bottleRef}/> */}
          {/* The bottle image is removed from intro to make space for video */}
        </div>
      </section>

      {/* Section 2: Problem */}
      <section className="section problem" ref={problemSectionRef}>
        <div className="content">
          <h2 ref={problemTitleRef}>The Plastic Problem is Drowning Us.</h2>
          <p ref={problemTextRef}>Every year, millions of tons of plastic bottles end up in our oceans, harming wildlife and our planet.</p>
        </div>
      </section>

      {/* Section 3: Solution */}
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

      {/* Section 4: Benefits */}
      <section className="section benefits" ref={benefitsSectionRef}>
         <div className="content">
          <h2 ref={benefitsTitleRef}>For Every Part of Your Day.</h2>
          <div className="lifestyle-images">
            <img src={gymImg} alt="Person at the gym" />
            <img src={officeImg} alt="Person at the office" />
            <img src={travelImg} alt="Person traveling" />
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="section cta" ref={ctaSectionRef}>
         <div className="content">
          <h2 ref={ctaTitleRef}>Join the Revolution.</h2>
          <button className="cta-button" ref={ctaButtonRef}>Buy Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;