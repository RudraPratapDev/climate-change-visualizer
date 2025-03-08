import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DataVisualization from './components/DataVisualization';
import ClimateMap from './components/ClimateMap'; // Import the new map component
import Footer from './components/Footer';
import About from './components/About';
import './styles/global.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <DataVisualization />
      <ClimateMap /> 
      <About />
      <Footer />
    </div>
  );
};

export default App;