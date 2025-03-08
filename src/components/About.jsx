import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          We are a team of passionate individuals dedicated to making climate data accessible and understandable for everyone.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals, organizations, and policymakers with intuitive tools to visualize and understand the impact of climate change.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              We envision a world where everyone has access to accurate and actionable climate data to drive meaningful change.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              Our team consists of data scientists, developers, and climate enthusiasts who are committed to creating impactful visualizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;