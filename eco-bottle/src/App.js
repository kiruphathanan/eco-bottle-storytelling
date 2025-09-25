// src/App.js
import './App.css';

// Import assets
import bottleImg from './assets/bottle.png';
import pollutionImg from './assets/pollution.jpg';
import gymImg from './assets/gym.jpg';
import officeImg from './assets/office.jpg';
import travelImg from './assets/travel.jpg';

function App() {
  return (
    <div className="App">
      {/* Section 1: Intro */}
      <section className="section intro">
        <div className="content">
          <h1>AquaPure</h1>
          <p>The Last Bottle You'll Ever Need.</p>
          <img src={bottleImg} alt="Eco-friendly bottle" className="bottle-img" />
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