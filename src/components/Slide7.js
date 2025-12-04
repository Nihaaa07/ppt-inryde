import React from "react";
import "./Slide7.css";

const items = [
  {
    icon: "🤝",
    bg: "#ffe7e7",
    title: "Multi-Agency Collaboration",
    desc: "Active partnerships with Transport Department, Police, and Municipal bodies to align operations with city planning and safety directives."
  },
  {
    icon: "📝",
    bg: "#ffe7e7",
    title: "Data Sharing MoUs",
    desc: "Formal agreements establishing real-time data dashboards for authorities, aiding in traffic management and incident analysis."
  },
  {
    icon: "⚖️",
    bg: "#ffe7e7",
    title: "Legal Adherence",
    desc: "Strict compliance with Motor Vehicle Act guidelines and local transport regulations, supported by periodic internal and external audits."
  },
  {
    icon: "📋",
    bg: "#ffe7e7",
    title: "Regulatory Audits",
    desc: "Transparent reporting mechanisms and scheduled reviews to demonstrate ongoing adherence to safety and operational standards."
  }
];

export default function Slide7() {
  return (
    <div className="slide7-container">
      <div className="slide7-header">
        <h1>Government Coordination & Compliance</h1>
        <div className="slide7-underline"></div>
        <p>
          Establishing robust partnerships with regulatory bodies to ensure
          operational transparency and public safety.
        </p>
      </div>

      <div className="slide7-grid">
        {items.map((item, index) => (
          <div className="slide7-card" key={index}>
            <div className="slide7-icon" style={{ backgroundColor: item.bg }}>
              <span>{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
