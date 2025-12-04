import React from "react";
import "./Slide23.css";
import { FaShieldAlt, FaMobileAlt, FaUsers } from "react-icons/fa";

export default function Slide23() {
  return (
    <div className="slide23-container">
      <header className="slide23-header">
        <h2>Rider Loyalty Program</h2>
        <p className="slide23-sub">₹10,00,000 Insurance Cover for Early & Consistent Riders</p>
      </header>

      <div className="slide23-cards">
        <div className="slide23-card">
          <FaShieldAlt className="slide23-icon" />
          <h4>Exclusive Coverage</h4>
          <p>Provides ₹10,00,000 insurance coverage for early registered riders, valid for 5 years for securing long-term protection.</p>
        </div>

        <div className="slide23-card">
          <FaMobileAlt className="slide23-icon" />
          <h4>App-Based Enrollment</h4>
          <p>Seamless eligibility checks with digitized enrollment, ensuring policy compliance and on-time updates.</p>
        </div>

        <div className="slide23-card">
          <FaUsers className="slide23-icon" />
          <h4>Community Welfare</h4>
          <p>Fortifying rider safety & well-being by extending insurance, financial literacy, and community-based support.</p>
        </div>
      </div>

      <footer className="slide-footer">INRYDE – Government & Stakeholder Presentation | Slide 23</footer>
    </div>
  );
}
