import React, { useState, useEffect, useRef } from "react";
import "./faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "Is travel insurance really required?",
      answer:
        "Yes. Travel insurance provides essential protection that helps you travel with confidence. It safeguards you against unexpected situations such as flight delays, baggage loss, trip disruptions, and emergency medical expenses, ensuring financial security and peace of mind throughout your journey.",
    },
    {
      question: "How does travel insurance work?",
      answer:
        "Travel insurance works by protecting you financially against unexpected events during your trip. Once you purchase a policy, it covers predefined risks such as medical emergencies, flight delays, baggage loss, and trip interruptions. If an insured event occurs, the insurer compensates eligible expenses through reimbursement or provides cashless assistance as per policy coverage.",
    },
    {
      question: "Is a medical checkup required before buying the policy?",
      answer:
        "In most cases, no medical checkup is needed to purchase travel insurance. You can buy the policy easily without undergoing health tests, making the process quick, simple, and hassle-free.",
    },
    {
      question: "Can travel insurance be purchased after booking a trip?",
      answer:
        "Yes, travel insurance can be purchased even after your trip is booked. In fact, buying it post-booking helps you provide accurate trip details such as travel dates, destination, and number of travellers, which are important for determining the right coverage and premium.",
    },
    {
      question: "What is excluded from travel insurance coverage?",
      answer: (
        <>
          Understanding policy exclusions is important before purchasing travel
          insurance. Certain situations, losses, or expenses are typically not
          covered under a standard travel insurance policy, including:
          <ul className="faq-list">
            <li>
              Medical conditions or illnesses resulting from war, conflict, or
              illegal activities
            </li>
            <li>
              Claims arising due to the use of alcohol, drugs, or prohibited
              substances
            </li>
            <li>
              Treatment or expenses related to pre-existing medical conditions
            </li>
            <li>Costs linked to cosmetic procedures or obesity-related treatments</li>
            <li>
              Medical expenses caused by intentional self-harm or self-inflicted
              injuries
            </li>
            <li>
              Injuries sustained while participating in adventure or high-risk
              sports
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How can I cancel my travel insurance policy?",
      answer:
        "Cancelling a travel insurance policy is a simple process. You can submit a cancellation request through email or fax within 14 days from the policy start date. If the policy has already become active, you may be required to provide passport copies as proof that the trip was not undertaken. A nominal cancellation fee may apply, after which the remaining amount will be refunded.",
    },
    {
      question:
        "What is the maximum duration for which travel insurance can be purchased?",
      answer:
        "Typically, the total travel insurance duration, including any extensions, cannot exceed 360 days. However, the maximum coverage period may differ depending on the specific plan chosen.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      className={`faq-section ${isVisible ? "visible" : ""}`}
    >
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>

        <div className="faq-list-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>

                <span className="faq-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#5A6B7C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="faq-answer">
                <div className="answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
