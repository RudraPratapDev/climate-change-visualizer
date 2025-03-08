import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import '../styles/components/Hero.css';

const Hero = () => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.5; // Adjust rotation speed
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Climate Change Visualized</h1>
        <p className="hero-subtitle">
          Transforming complex climate data into intuitive, interactive visualizations that help us understand and address our changing planet.
        </p>
        <div className="hero-cta">
          <button className="cta-button" onClick={() => document.getElementById('data').scrollIntoView({ behavior: 'smooth' })}>
            Start Exploring
          </button>
          <button className="secondary-button" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="globe-container">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0, 0, 0, 0)"
            width={400}
            height={400}
            enablePointerInteraction={true} // Allow user interaction
            onGlobeClick={() => globeEl.current.controls().autoRotate = !globeEl.current.controls().autoRotate} // Toggle rotation on click
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;