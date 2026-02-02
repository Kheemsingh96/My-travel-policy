import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './travelPlans.css';

import soloImage from "../../assets/images/travel-1.png";
import familyImage from "../../assets/images/travel-2.png";
import annualImage from "../../assets/images/travel-3.png";

function TravelPlans() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleViewPlans = () => {
    navigate('/step');
  };

  return (
    <section ref={sectionRef} className={`plans-section ${isVisible ? 'visible' : ''}`}>
      <div className="plans-container">
        
        <h2 className="plans-heading">Travel Insurance Plans for Every Type of Traveller</h2>

        <div className="plans-grid">
          
          <div className="plan-card">
            <div className="card-image">
              <img src={soloImage} alt="Solo Travel" className="solo-img" />
            </div>
            <h3>Solo Travel Coverage</h3>
            <p>
              Perfect for independent travellers. Travelling alone demands reliable protection. This plan covers medical emergencies, 
              trip disruptions, and baggage issues, letting you explore freely without unnecessary risks.
            </p>
            <button className="view-plans-btn" onClick={handleViewPlans}>View Plans</button>
          </div>

          <div className="plan-card">
            <div className="card-image">
              <img src={familyImage} alt="Family Travel" className="family-img" />
            </div>
            <h3>Family Travel Protection</h3>
            <p>
              One plan for the entire family. Designed for families on the move, this plan ensures everyone is covered for health 
              emergencies, travel delays, and unforeseen situations throughout the trip.
            </p>
            <button className="view-plans-btn" onClick={handleViewPlans}>View Plans</button>
          </div>

          <div className="plan-card">
            <div className="card-image">
              <img src={annualImage} alt="Annual Travel" className="annual-img" />
            </div>
            <h3>Annual Travel Insurance Plan</h3>
            <p>
              Designed for frequent international travellers. Cover all your trips for an entire year with one comprehensive policy. Enjoy seamless 
              coverage, fewer renewals, and reliable protection wherever your travels take you.
            </p>
            <button className="view-plans-btn" onClick={handleViewPlans}>View Plans</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TravelPlans;