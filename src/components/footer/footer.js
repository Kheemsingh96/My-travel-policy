import React from "react";
import "./footer.css";
import { 
  FaFacebook, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col brand">
          <img src={Logo} alt="My Travel Policy" className="footer-logo" />
          <p>
            Mytravelpolicy protects your international travel with dependable, end-to-end coverage designed for both leisure and business trips.
          </p>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

      
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/renew-policy">Renew your policy</a></li>
            <li><a href="/claims">Claims Helpline</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/international-insurance">International Insurance</a></li>
            <li><a href="/student-insurance">Student Travel Insurance</a></li>
            <li><a href="/corporate-insurance">Corporate Travel Insurance</a></li>
            <li><a href="/senior-citizen-insurance">Senior Citizen Insurance</a></li>
            <li><a href="/visa-insurance">Schengen Visa Insurance</a></li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:support@mytravelpolicy.com">support@mytravelpolicy.com</a>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <a href="tel:+918080854433">+91 8080854433</a>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              B 318, Eastern Business District, LBS Road, Kanjurmarg West, Mumbai, Maharashtra - 400078
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 My Travel Policy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;