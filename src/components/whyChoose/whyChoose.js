import React, { useEffect, useRef, useState } from "react";
import "./whyChoose.css";

import questionIllustration from "../../assets/images/image-1.png";
import visaIcon from "../../assets/images/passport (1) 1.png";
import claimIcon from "../../assets/images/insurance 1.png";
import ambulanceIcon from "../../assets/images/ambulance 1.png";
import supportIcon from "../../assets/images/security 1.png";

function WhyChoose() {
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
      { threshold: 0.2 }
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
      className={`why-choose-section ${isVisible ? "visible" : ""}`}
    >
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2>Why Millions Trust Mytravelpolicy for Travel Insurance</h2>
          <p>
            Mytravelpolicy offers fast issuance, easy claims, and reliable
            coverage for medical emergencies and trip disruptions—no medical
            check-ups for basic plans.
          </p>
        </div>

        <div className="features-grid">
          <div className="features-column left-column">
            <div className="feature-item">
              <img
                src={visaIcon}
                alt="Visa Compliance"
                className="feature-icon visa-icon"
              />
              <div className="feature-text">
                <h3>Visa Compliance</h3>
                <p>
                  Travel insurance meets visa norms and is accepted for visa
                  applications and entry across Schengen and other countries.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img
                src={claimIcon}
                alt="Easy Claims"
                className="feature-icon claim-icon"
              />
              <div className="feature-text">
                <h3>Easy Claims</h3>
                <p>
                  Claims can be raised quickly through the app with minimal
                  documents and a strong settlement record assured reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="features-column center-column">
            <img
              src={questionIllustration}
              alt="Why Choose Us"
              className="center-illustration"
            />
          </div>

          <div className="features-column right-column">
            <div className="feature-item">
              <img
                src={ambulanceIcon}
                alt="Medical Emergencies"
                className="feature-icon ambulance-icon"
              />
              <div className="feature-text">
                <h3>Medical Emergencies</h3>
                <p>
                  Coverage protects sudden medical emergencies, hospitalisation,
                  doctor consultations, and daily hospital benefits.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <img
                src={supportIcon}
                alt="24x7 Support"
                className="feature-icon support-icon"
              />
              <div className="feature-text">
                <h3>24×7 Support</h3>
                <p>
                  Get round-the-clock assistance for queries, claims, and travel
                  emergencies, ensuring you are never alone abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
