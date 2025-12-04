import React from "react";
import "./Slide2.css";
import { FaBullseye, FaCogs, FaRoute } from "react-icons/fa";

export default function Slide2() {
  return (
    <div className="slide2-container">
      <h1 className="slide2-title">Organizational Overview</h1>

      <div className="tag-strip">
        <span className="tag-red">INRYDE by BGT Groups</span>
        <span className="tag-divider">|</span>
        <span className="tag-lead">Led by K.B.G. Tilak</span>
      </div>

      <div className="slide2-cards">
        
        {/* Card 1 */}
        <div className="slide2-card card-red">
          <div className="icon-box">
            <FaBullseye size={32} />
          </div>
          <h2>Core Mission</h2>
          <p>
            To provide safe, affordable, and reliable transportation for all citizens,
            focusing on community welfare over pure profit maximization.
          </p>
        </div>

        {/* Card 2 */}
        <div className="slide2-card card-yellow">
          <div className="icon-box">
            <FaCogs size={32} />
          </div>
          <h2>Operating Model</h2>
          <p>
            A public-focused, compliant, and tech-driven approach that ensures strict
            accountability, driver welfare, and passenger safety.
          </p>
        </div>

        {/* Card 3 */}
        <div className="slide2-card card-black">
          <div className="icon-box">
            <FaRoute size={32} />
          </div>
          <h2>Expansion Roadmap</h2>
          <p>
            Executing a phased nationwide expansion strategy, building robust 
            partnerships with local governments and stakeholders in every region.
          </p>
        </div>

      </div>
    </div>
  );
}
