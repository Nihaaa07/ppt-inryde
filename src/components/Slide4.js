import React from "react";
import "./Slide4.css";

const cards = [
  {
    icon: "📋",
    iconBg: "#ffe7ed",
    borderColor: "#e63950",
    title: "Strict Punctuality SLAs",
    description:
      "Rigorous on-time performance targets are enforced with clear KPIs. Drivers are incentivized for punctuality to ensure reliable service for every booking.",
  },
  {
    icon: "🗺️",
    iconBg: "#fff7cc",
    borderColor: "#f4c400",
    title: "Predictive ETA & Routing",
    description:
      "Advanced route optimization algorithms analyze real-time traffic data to provide accurate ETAs and suggest the most efficient paths.",
  },
  {
    icon: "🔔",
    iconBg: "#f2f2f2",
    borderColor: "#000000",
    title: "Proactive Delay Alerts",
    description:
      "Automatic detection of potential delays triggers instant alerts to passengers and activates an escalation matrix for alternative arrangements.",
  },
];

export default function Slide4() {
  return (
    <div className="slide4-wrapper">
      <h1 className="slide4-title">Timely & Reliable Rides</h1>

      <p className="slide4-subtitle">
        Ensuring <span>predictable travel</span> through strict punctuality
        standards and smart technology.
      </p>

      <div className="slide4-cards">
        {cards.map((card, index) => (
          <div
            className="slide4-card"
            key={index}
            style={{ borderTop: `6px solid ${card.borderColor}` }}
          >
            <div
              className="slide4-icon"
              style={{ backgroundColor: card.iconBg }}
            >
              {card.icon}
            </div>

            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
