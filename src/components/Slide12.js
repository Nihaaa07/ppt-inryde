import React from "react";
import "./Slide12.css";

export default function Slide12() {
  return (
    <div className="slide12-container">
      <header className="slide12-header">
        <span className="slide12-logo">INRYDE</span>
        <span className="slide12-section">SERVICE EXPANSION</span>
      </header>

      <h1 className="slide12-title">Tourism & Last-Mile Connectivity</h1>
      <p className="slide12-subtitle">
        Bridging gaps in transportation to support tourism and serve remote communities
        effectively.
      </p>

      <div className="slide12-grid">
        <div className="slide12-card">
          <div className="slide12-icon">🧳</div>
          <h3>Tourist Itineraries</h3>
          <p>
            Support for domestic and international tourists with customizable itineraries
            and multi-stop bookings.
          </p>
        </div>

        <div className="slide12-card">
          <div className="slide12-icon">🚉</div>
          <h3>Transit Hub Integration</h3>
          <p>
            Seamless connectivity to airports, railway stations, and bus terminals for
            smooth inter-modal travel.
          </p>
        </div>

        <div className="slide12-card">
          <div className="slide12-icon">🌄</div>
          <h3>Rural Last-Mile Access</h3>
          <p>
            Reliable service in rural areas ensuring access to hospitals, markets, and essential services.
          </p>
        </div>

        <div className="slide12-card">
          <div className="slide12-icon">🚌</div>
          <h3>Public Transport Feeder</h3>
          <p>
            Integration with public transport networks for holistic mobility across the city.
          </p>
        </div>
      </div>

      <footer className="slide12-footer">
        INRYDE — Government & Stakeholder Presentation
        <span className="slide12-page">Slide 12</span>
      </footer>
    </div>
  );
}
