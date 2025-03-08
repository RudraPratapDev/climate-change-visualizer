import React from 'react';
import '../styles/components/Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Powerful Visualization Tools</h2>
      <p className="section-subtitle">
        Explore our suite of interactive tools designed to make climate data accessible, engaging, and actionable.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Global Temperature Mapping</h3>
          <p>Explore temperature anomalies across the globe with interactive heat maps.</p>
        </div>
        <div className="feature-card">
          <h3>Sea Level Rise</h3>
          <p>Track rising sea levels and their impact on coastal regions.</p>
        </div>
        <div className="feature-card">
          <h3>Extreme Weather Events</h3>
          <p>Analyze trends in extreme weather events like hurricanes and floods.</p>
        </div>
        <div className="feature-card">
          <h3>CO2 Emissions</h3>
          <p>Visualize global CO2 emissions and their sources over time.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;