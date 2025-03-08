import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo">PROTO020</div>
          <p className="footer-description">
            Dedicated to improving public understanding of climate change through accessible data visualization.
          </p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#features">Visualizations</a></li>
            <li><a href="#data">Datasets</a></li>
            <li><a href="#about">Resources</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 PROTO020 Climate Data Visualizer. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
      </div>
    </footer>
  );
};

export default Footer;