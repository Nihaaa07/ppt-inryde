import React from "react";
import "./Slide9.css";

export default function Slide9() {
  return (
    <div className="slide9-container">

      {/* Header */}
      <h1 className="slide9-title">Monthly Safety Review & Audit</h1>
      <p className="slide9-subtitle">
        Rigorous, data-driven performance evaluations to maintain the highest safety standards.
      </p>

      {/* 3 Metric Cards */}
      <div className="slide9-metrics">
        
        <div className="metric-card red-shadow">
          <div className="metric-icon red-bg">
            <img src="/icons/star.svg" alt="rating" />
          </div>
          <h2 className="metric-value">
            4.7<span className="metric-small">/5</span>
          </h2>
          <h3 className="metric-label">MIN. DRIVER RATING</h3>
          <p className="metric-desc">
            Drivers below this threshold undergo mandatory review and retraining.
          </p>
        </div>

        <div className="metric-card yellow-shadow">
          <div className="metric-icon yellow-bg">
            <img src="/icons/warning.svg" alt="incident" />
          </div>
          <h2 className="metric-value">
            &lt;0.01<span className="metric-small">%</span>
          </h2>
          <h3 className="metric-label">INCIDENT RATE</h3>
          <p className="metric-desc">
            Target incident rate per 100k trips monitored in real-time.
          </p>
        </div>

        <div className="metric-card black-shadow">
          <div className="metric-icon black-bg">
            <img src="/icons/clipboard.svg" alt="compliance" />
          </div>
          <h2 className="metric-value">100<span className="metric-small">%</span></h2>
          <h3 className="metric-label">COMPLIANCE SCORE</h3>
          <p className="metric-desc">
            Mandatory adherence to document validity and challan clearance.
          </p>
        </div>

      </div>

    </div>
  );
}
