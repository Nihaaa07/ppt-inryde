import React from "react";
import "./Slide3.css";

import { 
  FaComments, 
  FaShieldAlt, 
  FaStar, 
  FaUserShield 
} from "react-icons/fa";

export default function Slide3() {
  return (
    <div className="slide3-container">

      <h1 className="slide3-title">Safe Connectivity</h1>

      <p className="slide3-sub">
        Technology-driven safety measures ensuring secure interactions between drivers and passengers.
      </p>

      <div className="slide3-grid">

        {/* 1 — Masked Communication */}
        <div className="sc-row">
          <div className="sc-icon"><FaComments size={30} /></div>
          <div>
            <h2>Masked Communication</h2>
            <p>
              In-app real-time driver–passenger messaging and calling with full number masking 
              to protect personal contact details.
            </p>
          </div>
        </div>

        {/* 2 — Tamper-Proof Logs */}
        <div className="sc-row">
          <div className="sc-icon"><FaShieldAlt size={30} /></div>
          <div>
            <h2>Tamper-Proof Logs</h2>
            <p>
              Immutable logs of all interactions and trips for safety audits, 
              dispute resolution, and legal accountability.
            </p>
          </div>
        </div>

        {/* 3 — Performance Accountability */}
        <div className="sc-row">
          <div className="sc-icon"><FaStar size={30} /></div>
          <div>
            <h2>Performance Accountability</h2>
            <p>
              Rating and feedback loops directly tied to safety KPIs, 
              ensuring immediate flagging of behavioral issues.
            </p>
          </div>
        </div>

        {/* 4 — Privacy-First Design */}
        <div className="sc-row">
          <div className="sc-icon"><FaUserShield size={30} /></div>
          <div>
            <h2>Privacy-First Design</h2>
            <p>
              System architecture aligned with local data privacy laws, 
              ensuring user data is never monetized or exposed.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
