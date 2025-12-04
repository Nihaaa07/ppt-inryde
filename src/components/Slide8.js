import React from "react";
import "./Slide8.css";

export default function Slide8() {
  return (
    <div className="slide8-container">
      <div className="slide8-header">
        <h1>Challan Compliance Mechanism</h1>
        <p>
          Ensuring regulatory adherence by integrating real-time traffic
          violation checks into the driver operational workflow.
        </p>
      </div>

      <div className="slide8-steps">
        <div className="step-card">
          <div className="step-number">01</div>
          <h3>Automated API Check</h3>
          <p>
            System performs real-time checks against traffic police databases to
            identify pending challans.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">02</div>
          <h3>Notification & Restriction</h3>
          <p>
            Driver is notified of dues and temporarily restricted from receiving
            rides until payments are completed.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">03</div>
          <h3>Payment & Clearance</h3>
          <p>
            Ride allocation is automatically re-enabled once the driver clears
            all pending challans.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">04</div>
          <h3>Audit Trail</h3>
          <p>
            Timestamped logs are maintained for regulatory reporting and
            compliance audits.
          </p>
        </div>
      </div>

      <div className="metric-box">
        <h2>100%</h2>
        <p>Automated Compliance Check</p>
      </div>
    </div>
  );
}
