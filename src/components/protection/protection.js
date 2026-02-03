import React, { useEffect, useRef, useState } from "react";
import "./protection.css";

import travelIllustration from "../../assets/images/travel-insurance.png";
import checkIcon from "../../assets/images/tick.png";

function Protection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`protection-section ${isVisible ? "visible" : ""}`}
    >
      <div className="protection-container">
        <div className="protection-image-wrapper">
          <img
            src={travelIllustration}
            alt="Travel Protection"
            className="main-illustration"
          />
        </div>

        <div className="protection-content">
          <h2>
            Travel Insurance <span className="highlight">Protection</span> That{" "}
            <br />
            Travels With You
          </h2>

          <p className="protection-description">
            Travel insurance protects you from unexpected expenses while
            travelling abroad, covering medical emergencies, trip delays, and
            baggage loss, ensuring financial security and allowing you to enjoy
            your journey with confidence.
          </p>

          <ul className="protection-list">
            <li>
              <img src={checkIcon} alt="check" className="list-icon" />
              <span>Medical and dental emergency coverage overseas</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" className="list-icon" />
              <span>
                Protection against trip delays, baggage loss, and passport
                issues
              </span>
            </li>
            <li>
              <img src={checkIcon} alt="check" className="list-icon" />
              <span>Access to 1 lakh+ cashless hospitals worldwide</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Protection;
