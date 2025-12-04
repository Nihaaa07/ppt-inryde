import React from "react";
import "./Slide24.css";
import { FaHandshake, FaChevronRight, FaPhoneAlt } from "react-icons/fa";

export default function Slide24() {
  return (
    <div className="slide24-container">
      <header className="slide24-header">
        <h2>Request for Government Support</h2>
        <p>Ensuring operational continuity and essential mobility services during crisis & natural calamities.</p>
      </header>

      <div className="slide24-main-card">
        <FaHandshake className="slide24-main-icon" />
        <h3>Financial Assistance for Resilience</h3>
        <p>
          INRYDE requires co-response funding to ensure passenger safety, driver welfare, 
          and regulatory compliance over short-term periods. We are ready to serve the nation.
        </p>
      </div>

      <div className="slide24-grid">
        <div className="slide24-box">
          <h4>Partnership Proposals</h4>
          <ul>
            <li><FaChevronRight /> Data Sharing MoU for traffic insights</li>
            <li><FaChevronRight /> Airport Service Counter Pilot</li>
            <li><FaChevronRight /> Phase II SOS Integration with Police</li>
          </ul>
        </div>

        <div className="slide24-box">
          <h4>Immediate Next Steps</h4>
          <ul>
            <li><FaChevronRight /> Establish Joint Working Group</li>
            <li><FaChevronRight /> Policy alignment & compliance review</li>
            <li><FaChevronRight /> Pilot program operational kickoff</li>
          </ul>
        </div>

        <div className="slide24-box">
          <h4>Contact Information</h4>
          <p><strong>INRYDE | BGT Groups</strong></p>
          <p>Lead: KBG Tilak</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
        </div>
      </div>

      <footer className="slide-footer">INRYDE – Government & Stakeholder Presentation | Slide 24</footer>
    </div>
  );
}
