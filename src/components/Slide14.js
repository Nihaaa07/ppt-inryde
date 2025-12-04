import React from "react";
import "./Slide14.css";
import { FiUsers, FiShield, FiAlertCircle, FiRepeat } from "react-icons/fi";

export default function Slide14() {
  return (
    <div className="slide14-container">
      {/* Header */}
      <div className="slide14-header">
        <span className="slide14-brand">INRYDE</span>
        <span className="slide14-section">PARTNERSHIP & ENGAGEMENT</span>
      </div>

      {/* Title */}
      <h1 className="slide14-title">Stakeholder & Union Engagement</h1>
      <p className="slide14-subtitle">
        Building a sustainable ecosystem through transparent dialogue, 
        collaborative problem-solving, and mutual respect with driver partners.
      </p>

      {/* Card Grid */}
      <div className="slide14-grid">

        <div className="slide14-card">
          <div className="slide14-icon">
            <FiUsers />
          </div>
          <h3 className="slide14-card-title">Union Collaboration</h3>
          <p className="slide14-card-text">
            Active engagement with CITU and local driver unions through structured 
            meetings to align operational goals with driver welfare.
          </p>
        </div>

        <div className="slide14-card">
          <div className="slide14-icon">
            <FiAlertCircle />
          </div>
          <h3 className="slide14-card-title">Rapid Issue Resolution</h3>
          <p className="slide14-card-text">
            Dedicated joint helpdesk mechanism ensuring that driver grievances and 
            operational issues are resolved within 24–48 hours.
          </p>
        </div>

        <div className="slide14-card">
          <div className="slide14-icon">
            <FiShield />
          </div>
          <h3 className="slide14-card-title">Co-Created Code of Conduct</h3>
          <p className="slide14-card-text">
            Collaborative development of a comprehensive Driver Code of Conduct 
            crafted jointly with union representatives for fairness and accountability.
          </p>
        </div>

        <div className="slide14-card">
          <div className="slide14-icon">
            <FiRepeat />
          </div>
          <h3 className="slide14-card-title">Quarterly Roundtables</h3>
          <p className="slide14-card-text">
            Regular stakeholder forums for capturing driver feedback, ensuring policy 
            transparency, and fostering continuous improvement.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="slide14-footer">
        <span>INRYDE – Government & Stakeholder Presentation</span>
        <span>Slide 14</span>
      </div>
    </div>
  );
}
