import React from "react";
import "./Slide13.css";

export default function Slide13() {
  return (
    <div className="slide13-container">
      <header className="slide13-header">
        <span className="slide13-logo">INRYDE</span>
        <span className="slide13-section">Infrastructure Proposal</span>
      </header>

      <h1 className="slide13-title">Airport Service Counter Request</h1>
      <p className="slide13-subtitle">
        Proposal for Visakhapatnam (Bhogapuram) Airport Integration
      </p>

      <div className="slide13-cards">
        <div className="slide13-card">
          <div className="slide13-icon">🛫</div>
          <h3>Counter & Branding</h3>
          <p>
            Request for an INRYDE-branded airport arrival counter with 24/7 staffing
            aligned to flight schedules.
          </p>
        </div>

        <div className="slide13-card">
          <div className="slide13-icon">🎟️</div>
          <h3>Passenger Benefits</h3>
          <p>
            Ensures safer pickups, reduces unauthorized loading, and improves travel
            experience for domestic and international passengers.
          </p>
        </div>

        <div className="slide13-card">
          <div className="slide13-icon">🧪</div>
          <h3>Pilot Implementation</h3>
          <p>
            6–12 month pilot phase to evaluate operational efficiency and performance in
            coordination with airport authorities.
          </p>
        </div>
      </div>

      <footer className="slide13-footer">
        INRYDE — Government & Stakeholder Presentation
        <span className="slide13-page">Slide 13</span>
      </footer>
    </div>
  );
}
