import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight, FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import './step2.css';

function Step2() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [travellersData, setTravellersData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(0); 
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const count = parseInt(location.state?.travellers || '1');
    const initialData = Array.from({ length: count }, () => ({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      mobile: '',
      email: ''
    }));
    setTravellersData(initialData);
  }, [location.state]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTravellers = [...travellersData];
    updatedTravellers[index] = {
      ...updatedTravellers[index],
      [name]: value
    };
    setTravellersData(updatedTravellers);

    if (errors[`${index}-${name}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`${index}-${name}`];
        return newErrors;
      });
    }
  };

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const validate = () => {
    let newErrors = {};
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    travellersData.forEach((traveller, index) => {
      if (!traveller.firstName.trim()) newErrors[`${index}-firstName`] = "First Name is required";
      if (!traveller.lastName.trim()) newErrors[`${index}-lastName`] = "Last Name is required";
      if (!traveller.dob) newErrors[`${index}-dob`] = "Date of Birth is required";
      if (!traveller.gender) newErrors[`${index}-gender`] = "Please select gender";
      
      if (!traveller.mobile) {
        newErrors[`${index}-mobile`] = "Mobile number is required";
      } else if (!mobileRegex.test(traveller.mobile)) {
        newErrors[`${index}-mobile`] = "Enter valid 10-digit number";
      }

      if (!traveller.email) {
        newErrors[`${index}-email`] = "Email address is required";
      } else if (!emailRegex.test(traveller.email)) {
        newErrors[`${index}-email`] = "Enter a valid email address";
      }
    });

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const errorIndex = parseInt(firstErrorKey.split('-')[0]);
      setExpandedIndex(errorIndex);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const primaryTraveller = travellersData[0];
      const fullName = `${primaryTraveller.firstName} ${primaryTraveller.lastName}`;
      navigate('/thanks', { state: { fullName: fullName } });
    }
  };

  return (
    <div className="life-step">
      <div className="step-bg-circle"></div>
      
      <div className="life-step-box large-box">
        <h2 className="step-title">
          Enter your details and connect with a travel<br />insurance expert
        </h2>

        <form onSubmit={handleSubmit} className="step-form-container">
          
          <div className="travellers-list">
            {travellersData.map((traveller, index) => (
              <div key={index} className={`traveller-section ${expandedIndex === index ? 'expanded' : ''}`}>
                <div className="traveller-header" onClick={() => toggleAccordion(index)}>
                  <div className="traveller-title">
                    <FaUser className="user-icon" />
                    <span>Traveller -{index + 1}</span>
                  </div>
                  {expandedIndex === index ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
                </div>

                {expandedIndex === index && (
                  <div className="traveller-form-grid">
                    <div className="field">
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={traveller.firstName}
                        onChange={(e) => handleChange(index, e)}
                        className={errors[`${index}-firstName`] ? "input-error" : ""}
                      />
                      {errors[`${index}-firstName`] && <span className="life-error-text">{errors[`${index}-firstName`]}</span>}
                    </div>

                    <div className="field">
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        value={traveller.lastName}
                        onChange={(e) => handleChange(index, e)}
                        className={errors[`${index}-lastName`] ? "input-error" : ""}
                      />
                      {errors[`${index}-lastName`] && <span className="life-error-text">{errors[`${index}-lastName`]}</span>}
                    </div>

                    <div className="field">
                      <input 
                        type="text" 
                        name="dob"
                        placeholder="Date of birth"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        onClick={(e) => {
                          e.target.type = "date";
                          if(e.target.showPicker) e.target.showPicker();
                        }}
                        value={traveller.dob}
                        onChange={(e) => handleChange(index, e)}
                        className={errors[`${index}-dob`] ? "input-error" : ""}
                      />
                      {errors[`${index}-dob`] && <span className="life-error-text">{errors[`${index}-dob`]}</span>}
                    </div>

                    <div className="field">
                      <select 
                        name="gender" 
                        value={traveller.gender} 
                        onChange={(e) => handleChange(index, e)}
                        className={errors[`${index}-gender`] ? "input-error" : ""}
                      >
                        <option value="" disabled hidden>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors[`${index}-gender`] && <span className="life-error-text">{errors[`${index}-gender`]}</span>}
                    </div>

                    <div className="field">
                      <input 
                        type="tel" 
                        name="mobile"
                        placeholder="Mobile Number" 
                        value={traveller.mobile}
                        onChange={(e) => handleChange(index, e)}
                        maxLength="10"
                        className={errors[`${index}-mobile`] ? "input-error" : ""}
                      />
                      {errors[`${index}-mobile`] && <span className="life-error-text">{errors[`${index}-mobile`]}</span>}
                    </div>

                    <div className="field">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        value={traveller.email}
                        onChange={(e) => handleChange(index, e)}
                        className={errors[`${index}-email`] ? "input-error" : ""}
                      />
                      {errors[`${index}-email`] && <span className="life-error-text">{errors[`${index}-email`]}</span>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="step-footer">
            <button type="submit" className="next-btn">
              Next <FaArrowRight />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Step2;