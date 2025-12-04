import React from "react";
import "./Slide16.css";
import { FiMoon, FiTrendingUp, FiMessageCircle, FiShield } from "react-icons/fi";

export default function Slide16() {
  return (
    <div className="slide16-container">

      <div className="slide16-header">
        <span className="slide16-brand">INRYDE</span>
        <span className="slide16-section">PRICING POLICY</span>
      </div>

      <h1 className="slide16-title">Night Surge Pricing</h1>
      <p className="slide16-subtitle">
        Fair Compensation for Drivers • Transparent for Riders • Regulatory Compliance
      </p>

      <div className="slide16-icon-wrapper">
        <div className="slide16-main-icon"><FiMoon /></div>
      </div>

      <div className="slide16-grid">

        <div className="slide16-card red-border">
          <div className="slide16-card-icon"><FiTrendingUp /></div>
          <h3>Balanced Surge (40–50%)</h3>
          <p>
            A capped surge policy ensuring drivers are fairly compensated for night shifts
            while maintaining affordability.
          </p>
        </div>

        <div className="slide16-card yellow-border">
          <div className="slide16-card-icon"><FiMessageCircle /></div>
          <h3>Clear Communication</h3>
          <p>
            Riders receive upfront notifications before booking to ensure transparency.
          </p>
        </div>

        <div className="slide16-card black-border">
          <div className="slide16-card-icon"><FiShield /></div>
          <h3>Regulatory Alignment</h3>
          <p>
            All pricing strictly aligned with city guidelines and safety requirements.
          </p>
        </div>

      </div>

      <div className="slide16-footer">
        <span>INRYDE – Government & Stakeholder Presentation</span>
        <span>Slide 16</span>
      </div>

    </div>
  );
}
