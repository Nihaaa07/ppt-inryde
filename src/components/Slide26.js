import React from "react";
import "./Slide26.css";
import { FaBullhorn, FaTools, FaClipboardCheck } from "react-icons/fa";

export default function Slide26() {
  return (
    <div className="slide26-container">
      <header className="slide26-header">
        <h2>Conclusion & Next Steps</h2>
        <p>Building a safer, affordable, and technologically advanced mobility ecosystem for our community.</p>
      </header>

      <div className="slide26-main">
        <h3>Our Commitment</h3>
        <p>
          INRYDE pledges to be a responsible long-term partner, prioritizing passenger  
          safety, driver welfare, and regulatory compliance over short-term profits.
        </p>
      </div>

      <div className="slide26-grid">
        <div className="slide26-card">
          <FaBullhorn className="slide26-icon" />
          <h4>Activation Triggers</h4>
          <p>Support mechanism activated strictly during government-declared natural calamities.</p>
        </div>

        <div className="slide26-card">
          <FaTools className="slide26-icon" />
          <h4>Support Mechanism</h4>
          <p>Direct operational grants offered to offset high cost burdens ensuring drivers stay on the road.</p>
        </div>

        <div className="slide26-card">
          <FaClipboardCheck className="slide26-icon" />
          <h4>Transparent Reporting</h4>
          <p>Real-time dashboards & audit trails for government verification.</p>
        </div>
      </div>

      <footer className="slide-footer">INRYDE – Government & Stakeholder Presentation | Slide 26</footer>
    </div>
  );
}
