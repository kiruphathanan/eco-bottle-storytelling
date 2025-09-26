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

  // ... All previous refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bottleRef = useRef(null);
  const problemSectionRef = useRef(null);
  const problemTitleRef = useRef(null);
  const problemTextRef = useRef(null);
  const solutionSectionRef = useRef(null);
  const solutionTitleRef = useRef(null);
  const solutionTextRef = useRef(null);
  const solutionBottleRef = useRef(null);

  // NEW: Create refs for the benefits section
  const benefitsSectionRef = useRef(null);
  const benefitsTitleRef = useRef(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // ... All previous animations
      const introTl = gsap.timeline();
      introTl.from(titleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' });
      introTl.from(subtitleRef.current, { opacity: 0, y: '20px', duration: 0.8, ease: 'power3.out' }, "-=0.6");
      introTl.from(bottleRef.current, { opacity: 0, y: '20px', scale: 0.9, duration: 1, ease: 'power3.out' }, "-=0.6");

      gsap.to(component.current, { backgroundColor: '#2c3e50', scrollTrigger: { trigger: problemSectionRef.current, start: 'top 50%', end: 'bottom 100%', scrub: true }});
      const problemTl = gsap.timeline({ scrollTrigger: { trigger: problemSectionRef.current, start: 'top 60%' }});
      problemTl.from(problemTitleRef.current, { x: -100, opacity: 0, duration: 1 });
      problemTl.from(problemTextRef.current, { x: -100, opacity: 0, duration: 1 }, "-=0.7");

      gsap.to(component.current, { backgroundColor: '#ffffff', scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 50%', end: 'bottom 100%', scrub: true }});
      const solutionTl = gsap.timeline({ scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 60%' }});
      solutionTl.from(solutionTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      solutionTl.from(solutionTextRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.7');
      solutionTl.from(solutionBottleRef.current, { opacity: 0, scale: 0.8, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, '-=0.5');
      gsap.to(solutionBottleRef.current, { boxShadow: "0px 0px 30px 5px rgba(45, 212, 191, 0.7)", scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 40%', end: 'bottom 100%', toggleActions: "play reverse play reverse" }});
      gsap.to(solutionBottleRef.current, { y: -150, rotate: 15, scrollTrigger: { trigger: solutionSectionRef.current, start: 'top 100%', end: 'bottom 0%', scrub: true }});

      // --- NEW: BENEFITS SECTION ANIMATIONS ---
      const benefitsTl = gsap.timeline({
        scrollTrigger: {
          trigger: benefitsSectionRef.current,
          start: 'top 60%',
        }
      });

      // Animate the title
      benefitsTl.from(benefitsTitleRef.current, { opacity: 0, y: 50, duration: 1 });

      // Animate the images with a stagger effect
      benefitsTl.from('.lifestyle-images img', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.2, // This is the magic! Animates each image 0.2s after the previous one.
      }, "-=0.5");


    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      {/* ... Intro Section ... */}
      <section className="section intro">...</section>

      {/* ... Problem Section ... */}
      <section className="section problem" ref={problemSectionRef}>...</section>

      {/* ... Solution Section ... */}
      <section className="section solution" ref={solutionSectionRef}>...</section>

      {/* Section 4: Benefits */}
      {/* NEW: Attach refs */}
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

      {/* ... CTA Section ... */}
      <section className="section cta">...</section>
    </div>
  );
}
// NOTE: For brevity, the JSX for the first 3 sections is collapsed (...). 
// Do NOT remove them from your code. Only add the new refs.
export default App;