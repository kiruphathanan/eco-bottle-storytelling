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
  const benefitsSectionRef = useRef(null);
  const benefitsTitleRef = useRef(null);

  // NEW: Create refs for the CTA section
  const ctaSectionRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // --- All previous animations go here ---
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

      const benefitsTl = gsap.timeline({ scrollTrigger: { trigger: benefitsSectionRef.current, start: 'top 60%' }});
      benefitsTl.from(benefitsTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      benefitsTl.from('.lifestyle-images img', { opacity: 0, y: 50, scale: 0.95, duration: 0.7, stagger: 0.2 }, "-=0.5");

      // --- NEW: CTA SECTION ANIMATIONS ---

      // Background transition to green
      gsap.to(component.current, {
        backgroundColor: '#27ae60', // Eco-friendly green
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: 'top 50%',
          end: 'bottom 100%',
          scrub: true,
        }
      });

      // CTA Content Timeline
      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: 'top 60%',
        }
      });
      ctaTl.from(ctaTitleRef.current, { opacity: 0, y: 50, duration: 1 });
      ctaTl.from(ctaButtonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)', // A fun, bouncy ease
      }, "-=0.5");


    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      {/* ... All Previous Sections ... */}
      <section className="section intro">...</section>
      <section className="section problem" ref={problemSectionRef}>...</section>
      <section className="section solution" ref={solutionSectionRef}>...</section>
      <section className="section benefits" ref={benefitsSectionRef}>...</section>

      {/* Section 5: CTA */}
      {/* NEW: Attach refs to final section */}
      <section className="section cta" ref={ctaSectionRef}>
         <div className="content">
          <h2 ref={ctaTitleRef}>Join the Revolution.</h2>
          <button className="cta-button" ref={ctaButtonRef}>Buy Now</button>
        </div>
      </section>
    </div>
  );
}
// NOTE: For brevity, the JSX for the other sections is collapsed (...). 
// Do NOT remove them from your code. Only add the new refs.
export default App;