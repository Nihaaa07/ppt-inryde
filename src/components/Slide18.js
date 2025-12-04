import React from "react";
import "./Slide18.css";
import { FiXCircle, FiCheckCircle, FiAlertTriangle, FiBarChart } from "react-icons/fi";

export default function Slide18() {
  return (
    <div className="slide18-container">

      <div className="slide18-header">
        <span className="slide18-brand">INRYDE</span>
        <span className="slide18-section">DRIVER WELFARE & EARNINGS</span>
      </div>

      <h1 className="slide18-title">Long-Distance Ride Support</h1>
      <p className="slide18-subtitle">
        Ensuring economic viability for drivers in intercity and rural routes with a balanced commission structure.
      </p>

      <div className="slide18-grid">

        {/* No Return Trip */}
        <div className="slide18-card red-border">
          <div className="slide18-card-icon"><FiXCircle /></div>
          <h3>No Return Trip</h3>
          <ul>
            <li>25% Commission Credit for empty-leg return.</li>
            <li>Credit processed within 3–4 hours of ride.</li>
            <li>Driver protection ensuring route profitability.</li>
          </ul>
        </div>

        {/* With Return Trip */}
        <div className="slide18-card yellow-border">
          <div className="slide18-card-icon"><FiCheckCircle /></div>
          <h3>With Return Trip</h3>
          <ul>
            <li>Standard 0–5% commission structure applies.</li>
            <li>Transparent earnings & deduction logs.</li>
            <li>Fair model ensures high driver opportunity.</li>
          </ul>
        </div>

      </div>

      <div className="slide18-footer">
        <span>INRYDE – Government & Stakeholder Presentation</span>
        <span>Slide 18</span>
      </div>

    </div>
  );
}
