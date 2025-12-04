import React from "react";
import "./Slide5.css";

export default function Slide5() {
  return (
    <div className="slide5-wrapper">

      {/* Title Section */}
      <div className="slide5-header">
        <h1 className="slide5-title">Driver Health Support</h1>
        <p className="slide5-subtitle">
          Prioritizing the well-being of our partners and their families through
          comprehensive healthcare initiatives.
        </p>
      </div>

      {/* Content Boxes */}
      <div className="slide5-content">

        {/* LEFT BOX */}
        <div className="slide5-card left">
          <div className="slide5-card-header red-border">
            <div className="slide5-icon red-bg">❤️</div>
            <h2>Health Coverage</h2>
          </div>

          <ul className="slide5-list">
            <li>
              <span className="tick">✔</span>
              <strong>Free Health Check-ups:</strong> Comprehensive medical screening provided at no cost to the driver.
            </li>

            <li>
              <span className="tick">✔</span>
              <strong>Family Inclusion:</strong> Coverage extends to the driver plus one immediate family member.
            </li>

            <li>
              <span className="tick">✔</span>
              <strong>Biennial Frequency:</strong> Full check-up cycle repeats every two years to ensure ongoing monitoring.
            </li>
          </ul>

          <div className="slide5-highlight red-light">
            ⭐ Preventative care to reduce long-term health risks.
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="slide5-card right">
          <div className="slide5-card-header yellow-border">
            <div className="slide5-icon yellow-bg">📋</div>
            <h2>Access & Management</h2>
          </div>

          <ul className="slide5-list">
            <li>
              <span className="tick-yellow">✔</span>
              <strong>Partner Clinics Network:</strong> Tie-ups with reputed hospitals and diagnostic centers for easy access.
            </li>

            <li>
              <span className="tick-yellow">✔</span>
              <strong>App-Based Scheduling:</strong> Drivers can book appointments directly through the INRYDE partner app.
            </li>

            <li>
              <span className="tick-yellow">✔</span>
              <strong>Digital Health Records:</strong> Secure, confidential storage of reports with automated wellness reminders.
            </li>
          </ul>

          <div className="slide5-highlight yellow-light">
            📱 Seamless integration with driver daily operations.
          </div>
        </div>

      </div>
    </div>
  );
}
