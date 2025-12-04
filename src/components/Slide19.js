import React from "react";
import "./Slide19.css";
import { FiTruck, FiAlertCircle } from "react-icons/fi";
import { GiMotorcycle } from "react-icons/gi"; // Correct icon
import { FaMotorcycle } from 'react-icons/fa';

export default function Slide19() {
  return (
    <div className="slide slide19">
      <div className="slide-header">
        <span className="brand">INRYDE</span>
        <span className="tag">SAFETY & WELFARE</span>
      </div>

      <h1 className="slide-title">Comprehensive Insurance Program</h1>
      <p className="slide-desc">
        Securing the future of our drivers and their families with industry-leading coverage plans valid for 5 years.
      </p>

      <div className="insurance-grid">
        {/* CARD 1 */}
        <div className="insurance-card red-border">
          <div className="icon-wrap red-bg">
            <FiTruck />
          </div>
          <h3>Four-Wheeler Coverage</h3>

          <ul>
            <li>₹10,00,000 Coverage: Financial protection for drivers & passengers.</li>
            <li>5-Year Validity ensuring long-term security.</li>
            <li>In-App Assistance for claim support & policy details.</li>
          </ul>

          <div className="note red-note">
            <FiAlertCircle />
            High-value protection for vehicle occupants.
          </div>
        </div>

        {/* CARD 2 */}
        <div className="insurance-card yellow-border">
          <div className="icon-wrap yellow-bg">
            <FaMotorcycle />
          </div>
          <h3>Two-Wheeler Protection</h3>

          <ul>
            <li>₹10,00,000 Accidental Cover for rider’s family member.</li>
            <li>Family welfare coverage beyond the driver.</li>
            <li>5-Year Term with simple, transparent claims.</li>
          </ul>

          <div className="note yellow-note">Critical support for rider families.</div>
        </div>
      </div>

      <div className="footer">INRYDE • Government & Stakeholder Presentation — Slide 19</div>
    </div>
  );
}
