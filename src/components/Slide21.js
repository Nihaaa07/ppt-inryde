import React from "react";
import "./Slide21.css";
import { FiBell, FiCheckCircle, FiFileText, FiSend } from "react-icons/fi";

export default function Slide21() {
  return (
    <div className="slide slide21">
      <div className="slide-header">
        <span className="brand">INRYDE</span>
        <span className="tag">OPERATIONAL EXCELLENCE</span>
      </div>

      <h1 className="slide-title">Driver Notifications</h1>

      <p className="slide-desc">
        A comprehensive communication system ensuring drivers receive, understand, and acknowledge critical updates instantly.
      </p>

      <div className="notif-grid">
        <div className="notif-card red-border">
          <div className="icon-wrap red-bg"><FiBell /></div>
          <h3>Timely Operational Alerts</h3>
          <p>Real-time push notifications for application updates & policy changes.</p>
        </div>

        <div className="notif-card yellow-border">
          <div className="icon-wrap yellow-bg"><FiCheckCircle /></div>
          <h3>Mandatory Acknowledgment</h3>
          <p>"Read & Acknowledge" ensures compliance before continuing rides.</p>
        </div>

        <div className="notif-card blue-border">
          <div className="icon-wrap blue-bg"><FiSend /></div>
          <h3>Multi-Channel Reach</h3>
          <p>App prompts, SMS, email, and IVR ensure updates reach drivers.</p>
        </div>

        <div className="notif-card black-border">
          <div className="icon-wrap black-bg"><FiFileText /></div>
          <h3>Policy Document Center</h3>
          <p>A digital archive of policies and notices for easy reference.</p>
        </div>
      </div>

      <div className="footer">INRYDE • Government & Stakeholder Presentation — Slide 21</div>
    </div>
  );
}
