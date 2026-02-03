import React, { useEffect, useRef, useState } from "react";
import "./testimonials.css";

import user1 from "../../assets/images/1.png";
import user2 from "../../assets/images/2.png";
import user3 from "../../assets/images/24px.png";

function Testimonials() {
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
      { threshold: 0.1 }
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
      className={`testimonials-section ${isVisible ? "visible" : ""}`}
    >
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          Trusted by Happy Travellers Worldwide
        </h2>

        <div className="testimonials-wrapper">
          <button className="nav-btn left-btn">❮</button>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="profile-img">
                <img src={user1} alt="Jordan Smith" />
              </div>
              <h3>Jordan Smith</h3>
              <div className="stars">★★★★★</div>
              <p>
                The support team delivered excellent service. Their experience
                and professionalism stood out. They weren't pushy at all and
                finished everything quickly and properly.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="profile-img">
                <img src={user2} alt="Liam Johnson" />
              </div>
              <h3>Liam Johnson</h3>
              <div className="stars">★★★★★</div>
              <p>
                From beginning to end, the process was incredibly professional
                and efficient. They handled all my queries with care, stayed on
                schedule, and made the trip stress-free.
              </p>
            </div>

            <div className="testimonial-card">
              <div className="profile-img">
                <img src={user3} alt="Emma Carter" />
              </div>
              <h3>Emma Carter</h3>
              <div className="stars">★★★★★</div>
              <p>
                The support team delivered excellent service. Their experience
                and professionalism stood out. They weren't pushy at all and
                finished everything quickly and properly.
              </p>
            </div>
          </div>

          <button className="nav-btn right-btn">❯</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
