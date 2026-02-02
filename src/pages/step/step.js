import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import './step.css';

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

function Step() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    mobile: '',
    travellers: '1'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleTravellerSelect = (value) => {
    setFormData(prevState => ({
      ...prevState,
      travellers: value
    }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.destination.trim()) newErrors.destination = "Destination is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/step-2', { state: formData });
    }
  };

  return (
    <div className="life-step">
      <div className="step-bg-circle"></div>
      
      <div className="life-step-box">
        <h2 className="step-title">Tell us about your trip</h2>

        <form onSubmit={handleSubmit} className="step-form">
          
          <div className="full-width field">
            <label className="field-label">Select Destination of Travel</label>
            <select 
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={errors.destination ? "input-error" : ""}
            >
              <option value="" disabled hidden>Search Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.destination && <span className="life-error-text">{errors.destination}</span>}
          </div>

          <div className="field date-field">
            <label className="field-label">Leaving date</label>
            <div className="input-with-icon">
              <input 
                type="text" 
                name="startDate"
                placeholder="dd-mm-yyyy"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onClick={(e) => {
                  e.target.type = "date";
                  if(e.target.showPicker) e.target.showPicker();
                }}
                value={formData.startDate}
                onChange={handleChange}
                className={errors.startDate ? "input-error" : ""}
              />
              <FaCalendarAlt className="field-icon" />
            </div>
            {errors.startDate && <span className="life-error-text">{errors.startDate}</span>}
          </div>

          <div className="field date-field">
            <label className="field-label">Return date</label>
            <div className="input-with-icon">
              <input 
                type="text" 
                name="endDate"
                placeholder="dd-mm-yyyy"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onClick={(e) => {
                  e.target.type = "date";
                  if(e.target.showPicker) e.target.showPicker();
                }}
                value={formData.endDate}
                onChange={handleChange}
                className={errors.endDate ? "input-error" : ""}
              />
              <FaCalendarAlt className="field-icon" />
            </div>
            {errors.endDate && <span className="life-error-text">{errors.endDate}</span>}
          </div>

          <div className="full-width field">
            <label className="field-label">Mobile No</label>
            <input 
              type="tel" 
              name="mobile"
              placeholder="Enter Mobile Number" 
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              className={errors.mobile ? "input-error" : ""}
            />
            {errors.mobile && <span className="life-error-text">{errors.mobile}</span>}
          </div>

          <div className="full-width field">
            <div className="traveller-label">Select Number of Travellers</div>
            <div className="gender-wrap">
              {['1', '2', '3', '4', '+5 more'].map((num) => (
                <button
                  key={num}
                  type="button"
                  className={formData.travellers === num ? 'active' : ''}
                  onClick={() => handleTravellerSelect(num)}
                >
                  {num}
                </button>
              ))}
            </div>
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

export default Step;