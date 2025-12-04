import React from "react";
import "./Slide22.css";
import { FiTrendingUp, FiUserCheck, FiShield } from "react-icons/fi";

export default function Slide22() {
  return (
    <div className="slide slide22">
      <div className="slide-header">
        <span className="brand">INRYDE</span>
        <span className="tag">SOCIAL IMPACT & ETHICS</span>
      </div>

      <h1 className="slide-title">Public-Focused, Not Profit-Driven Model</h1>

      <p className="slide-desc">
        Building a sustainable mobility ecosystem by prioritising affordability, driver earnings, and community safety over excessive profits.
      </p>

      <div className="impact-grid">
        <div className="impact-card yellow-border">
          <div className="icon-wrap yellow-bg"><FiUserCheck /></div>
          <h3>Low Commission</h3>
          <p>Industry-low 0–5% commission ensuring maximum driver earnings.</p>
        </div>

        <div className="impact-card red-border">
          <div className="icon-wrap red-bg"><FiTrendingUp /></div>
          <h3>Fair & Transparent Pricing</h3>
          <p>Upfront fares with no surge traps or hidden charges.</p>
        </div>

        <div className="impact-card black-border">
          <div className="icon-wrap black-bg"><FiShield /></div>
          <h3>100% Safety Reinforcement</h3>
          <p>All safety revenue reinvested into driver support & public security.</p>
        </div>
      </div>

      <div className="footer">INRYDE • Government & Stakeholder Presentation — Slide 22</div>
    </div>
  );
}
