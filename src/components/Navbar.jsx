import React from 'react';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">P</div>
        PROTO020
      </div>
      <div className="nav-links">
        <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
        <a href="#data" onClick={() => scrollToSection('data')}>Visualizations</a>
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      <button className="cta-button" onClick={() => scrollToSection('data')}>Explore Data</button>
    </nav>
  );
};

export default Navbar;