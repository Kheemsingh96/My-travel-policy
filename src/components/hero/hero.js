import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';

import starIcon from "../../assets/images/Group.png";
import planeIcon from "../../assets/images/Vector.png";
import logoIcon from "../../assets/images/circle.png";

function Hero() {
  const [selectedType, setSelectedType] = useState('international');
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/step');
  };

  return (
    <section className="hero-section">
      
      <div className="bg-rings-container">
        <div className="ring ring-outer"></div>
        <div className="ring ring-middle"></div>
        <div className="ring ring-inner"></div>
      </div>

      <img src={starIcon} alt="decoration" className="decoration star-icon" />
      <img src={planeIcon} alt="decoration" className="decoration plane-icon" />
      
      <div className="hero-content">
        <h1>
          Your Journey Deserves Protection from <br />
          <span className="brand-name">My Travel Policy</span>
        </h1>
        
        <p className="hero-description">
          Mytravelpolicy protects your international travel with dependable, end-to-end coverage designed for both 
          leisure and business trips. Stay secure against medical emergencies, trip cancellations, delays, and unforeseen 
          disruptions—so you can travel with confidence, not worry.
        </p>

        <div className="travel-options">
          <div 
            className={`option ${selectedType === 'international' ? 'active' : ''}`}
            onClick={() => setSelectedType('international')}
          >
            <div className="radio-circle">
              {selectedType === 'international' && <div className="tick-mark"></div>}
            </div>
            <span>International Travel</span>
          </div>

          <div 
            className={`option ${selectedType === 'student' ? 'active' : ''}`}
            onClick={() => setSelectedType('student')}
          >
            <div className="radio-circle">
              {selectedType === 'student' && <div className="tick-mark"></div>}
            </div>
            <span>Student Travel</span>
          </div>
          
          <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
      
      <img src={logoIcon} alt="logo mark" className="decoration logo-icon" />
    </section>
  );
}

export default Hero;