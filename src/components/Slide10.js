import React from "react";
import "./Slide10.css";

export default function Slide10() {
  return (
    <div className="slide10-container">

      {/* LEFT SECTION */}
      <div className="slide10-left">
        <h1 className="slide10-title">Driver Assessment & Onboarding</h1>
        <p className="slide10-subtitle">
          A comprehensive, multi-stage vetting process designed to ensure every driver
          meets our strict standards for safety, professionalism, and service.
        </p>

        <div className="verified-card">
          <h2 className="verified-value">100% Verified</h2>
          <p className="verified-desc">Mandatory Background Checks</p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="slide10-steps">

        {/* Step 01 */}
        <div className="step-card">
          <div className="step-icon pink-bg">
            <img src="/icons/id-card.svg" alt="Document Verification" />
          </div>
          <div>
            <p className="step-number">STEP 01</p>
            <h3 className="step-title">Document Verification</h3>
            <p className="step-desc">
              Rigorous validation of Driving License, Aadhaar, PAN, and criminal
              background checks (KYC).
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="step-card">
          <div className="step-icon yellow-bg">
            <img src="/icons/car.svg" alt="Vehicle Compliance" />
          </div>
          <div>
            <p className="step-number">STEP 02</p>
            <h3 className="step-title">Vehicle Compliance</h3>
            <p className="step-desc">
              Physical inspection of vehicle fitness, insurance validity, and required
              transport permits.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="step-card">
          <div className="step-icon red-bg">
            <img src="/icons/user.svg" alt="Behavioral Assessment" />
          </div>
          <div>
            <p className="step-number">STEP 03</p>
            <h3 className="step-title">Behavioral Assessment</h3>
            <p className="step-desc">
              Psychometric evaluation to assess patience, attitude, and customer service
              orientation.
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="step-card">
          <div className="step-icon gold-bg">
            <img src="/icons/certificate.svg" alt="Training & Go-Live" />
          </div>
          <div>
            <p className="step-number">STEP 04</p>
            <h3 className="step-title">Training & Go-Live</h3>
            <p className="step-desc">
              App usage training, safety protocols, soft skills workshop, and final readiness
              probation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
