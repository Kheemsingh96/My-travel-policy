import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Protection from "./components/protection/protection";
import WhyChoose from "./components/whyChoose/whyChoose";
import TravelPlans from "./components/travelPlans/travelPlans";
import Testimonials from "./components/testimonials/testimonials";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Step from "./pages/step/step";
import Step2 from "./pages/step2/step2";
import Thanks from "./pages/thanks/thanks";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          openForm={openForm} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />

        {isFormOpen && (
          <div className="form-overlay">
            <div className="form-container">
              <button onClick={closeForm} style={{float: 'right'}}>Close</button>
              <h2>Get Travel Insurance Quote</h2>
              <p>Form content goes here...</p>
            </div>
          </div>
        )}

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Protection />
                <WhyChoose />
                <TravelPlans />
                <Testimonials />
                <FAQ />
              </>
            } />
            <Route path="/step" element={<Step />} />
            <Route path="/step-2" element={<Step2 />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;