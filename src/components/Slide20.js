import React from "react";
import "./Slide20.css";
import { FiPhoneCall, FiBell, FiShare2, FiRadio } from "react-icons/fi";

export default function Slide20() {
  return (
    <div className="slide slide20">
      <div className="slide-header">
        <span className="brand">INRYDE</span>
        <span className="tag">SECURITY & LAW ENFORCEMENT</span>
      </div>

      <h1 className="slide-title">Emergency SOS + Police Integration</h1>

      <div className="subtitle">Deploying advanced safety protocols (Phase II) to bridge the gap between passengers and law enforcement instantly.</div>

      <div className="sos-grid">
        <div className="sos-card red-border">
          <div className="icon-wrap red-bg"><FiBell /></div>
          <h3>Advanced SOS Activation</h3>
          <p>Immediate emergency triggers alert the Police Control Room.</p>
        </div>

        <div className="sos-card yellow-border">
          <div className="icon-wrap yellow-bg"><FiShare2 /></div>
          <h3>Instant Information Sharing</h3>
          <p>Live location, vehicle details, and driver info shared instantly.</p>
        </div>

        <div className="sos-card black-border">
          <div className="icon-wrap black-bg"><FiRadio /></div>
          <h3>Dual Alert Modes</h3>
          <p>Silent alert for covert emergencies + audible alarm mode.</p>
        </div>
      </div>

      <div className="footer">INRYDE • Government & Stakeholder Presentation — Slide 20</div>
    </div>
  );
}
