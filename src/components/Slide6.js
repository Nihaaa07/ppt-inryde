import React from "react";
import "./Slide6.css";

export default function Slide6() {
  return (
    <div className="slide6-container">
      <div className="slide6-left">

        <h1 className="slide6-title">
          Emergency Assistance & <br /> Hospital Coordination
        </h1>

        <p className="slide6-subtitle">
          A structured rapid response mechanism integrated with healthcare providers
          to ensure critical care when it matters most.
        </p>

        <div className="slide6-left-card">
          <h2>24/7</h2>
          <p>Control Room Readiness</p>
        </div>
      </div>

      <div className="slide6-right">

        {/* STEP 01 */}
        <div className="slide6-step-card">
          <span className="step-label">STEP 01</span>
          <div className="step-icon red">📡</div>
          <h3>Incident Detection & Triage</h3>
          <p>
            Automatic SOS alerts trigger control room dashboard; immediate triage call to assess severity.
          </p>
        </div>

        {/* STEP 02 */}
        <div className="slide6-step-card">
          <span className="step-label">STEP 02</span>
          <div className="step-icon yellow">🚑</div>
          <h3>Priority Routing</h3>
          <p>
            Direct routing to nearest partnered top-tier hospitals with advance notification for readiness.
          </p>
        </div>

        {/* STEP 03 */}
        <div className="slide6-step-card">
          <span className="step-label">STEP 03</span>
          <div className="step-icon pink">⛑️</div>
          <h3>Care Assurance</h3>
          <p>
            Guaranteed free accident care and administrative support for hit-and-run cases.
          </p>
        </div>

        {/* PHASE II */}
        <div className="slide6-step-card wide">
          <span className="step-label grey">PHASE II INTEGRATION</span>
          <div className="step-icon grey">🔗</div>
          <h3>108 Ambulance Linkage</h3>
          <p>
            Direct API integration with government 108 services and post-incident follow-up protocols.
          </p>
        </div>

      </div>
    </div>
  );
}
