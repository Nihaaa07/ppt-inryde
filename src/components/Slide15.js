import React from "react";
import "./Slide15.css";
import { FiPercent, FiTrendingUp, FiClock, FiAward, FiStar, FiBookOpen } from "react-icons/fi";

export default function Slide15() {
  return (
    <div className="slide15-container">

      {/* Header */}
      <div className="slide15-header">
        <span className="slide15-brand">INRYDE</span>
        <span className="slide15-section">DRIVER WELFARE & ECONOMY</span>
      </div>

      {/* Title */}
      <h1 className="slide15-title">Low Driver Commission (0–5%)</h1>
      <p className="slide15-subtitle">
        Disrupting the industry with a driver-centric model that maximizes earnings
        and ensures sustainable livelihoods.
      </p>

      {/* Three Big Cards */}
      <div className="slide15-main-grid">
        <div className="slide15-big-card">
          <FiPercent className="slide15-big-icon" />
          <h3>0–5%<br/>Platform Commission</h3>
          <p>Significantly lower than industry standards (20–30%), allowing drivers to retain more value.</p>
        </div>

        <div className="slide15-big-card">
          <FiTrendingUp className="slide15-big-icon" />
          <h3>High<br/>Take-Home Earnings</h3>
          <p>Reduced overhead translated directly to drivers, boosting income for partner families.</p>
        </div>

        <div className="slide15-big-card">
          <FiClock className="slide15-big-icon" />
          <h3>24 hr<br/>Payout Cycle</h3>
          <p>
            Same-day or next-day settlements with transparent statements and transaction logs.
          </p>
        </div>
      </div>

      {/* Three Small Cards */}
      <div className="slide15-small-grid">

        <div className="slide15-small-card">
          <FiAward className="slide15-small-icon" />
          <span>Quality Incentives</span>
        </div>

        <div className="slide15-small-card">
          <FiStar className="slide15-small-icon" />
          <span>Performance Bonus</span>
        </div>

        <div className="slide15-small-card">
          <FiBookOpen className="slide15-small-icon" />
          <span>Transparent Ledger</span>
        </div>

      </div>

      {/* Footer */}
      <div className="slide15-footer">
        <span>INRYDE – Government & Stakeholder Presentation</span>
        <span>Slide 15</span>
      </div>
    </div>
  );
}
