import React from "react";
import "./Slide11.css";

export default function Slide11() {
  return (
    <div className="slide11-container">
      <header className="slide11-header">
        <span className="slide11-logo">INRYDE</span>
        <span className="slide11-section">OPERATIONAL EXCELLENCE</span>
      </header>

      <h1 className="slide11-title">Dedicated Control Room Operations</h1>
      <p className="slide11-subtitle">
        A centralized command center ensuring round-the-clock oversight, rapid
        incident response, and seamless support.
      </p>

      <div className="slide11-grid">
        <div className="slide11-card">
          <div className="slide11-icon">📡</div>
          <h3>24/7 Monitoring & Oversight</h3>
          <p>
            Continuous surveillance of platform operations by a dedicated team
            to handle critical incidents, emergencies, and service disruptions
            instantly.
          </p>
        </div>

        <div className="slide11-card">
          <div className="slide11-icon">🎧</div>
          <h3>Customer Issue Resolution</h3>
          <p>
            Structured ticket management system ensuring passenger and driver
            complaints are resolved within defined SLAs.
          </p>
        </div>

        <div className="slide11-card">
          <div className="slide11-icon">📍</div>
          <h3>Live GPS Tracking</h3>
          <p>
            Real-time geospatial tracking of all active rides, enabling immediate
            anomaly detection and proactive safety interventions.
          </p>
        </div>

        <div className="slide11-card">
          <div className="slide11-icon">🌐</div>
          <h3>Multilingual Support</h3>
          <p>
            Dedicated support teams offering assistance in multiple regional
            languages for diverse driver and rider communities.
          </p>
        </div>
      </div>

      <footer className="slide11-footer">
        INRYDE — Government & Stakeholder Presentation
        <span className="slide11-page">Slide 11</span>
      </footer>
    </div>
  );
}
