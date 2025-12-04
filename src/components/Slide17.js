import React from "react";
import "./Slide17.css";
import { FiTable, FiCheckCircle } from "react-icons/fi";

export default function Slide17() {
  return (
    <div className="slide17-container">

      <div className="slide17-header">
        <span className="slide17-brand">INRYDE</span>
        <span className="slide17-section">PRICING & VALUE</span>
      </div>

      <h1 className="slide17-title">Competitive Fare Structure</h1>
      <p className="slide17-subtitle">
        Transparent, affordable pricing designed to benefit both riders and drivers.
      </p>

      <div className="slide17-table-wrapper">
        <table className="slide17-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Base Fare (₹)</th>
              <th>Per KM (₹)</th>
              <th>Per Minute (₹)</th>
              <th>Luggage Limit</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>MINI</td><td>TBD</td><td>TBD</td><td>TBD</td><td>TBD</td>
            </tr>
            <tr>
              <td>PRIME</td><td>TBD</td><td>TBD</td><td>TBD</td><td>TBD</td>
            </tr>
            <tr>
              <td>SUV</td><td>TBD</td><td>TBD</td><td>TBD</td><td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="slide17-adv-card">
        <FiCheckCircle className="slide17-adv-icon" />
        <span>Competitive Advantage: Lower fares compared to Rapido/Uber/Ola in target cities.</span>
      </div>

      <div className="slide17-footer">
        <span>INRYDE – Government & Stakeholder Presentation</span>
        <span>Slide 17</span>
      </div>

    </div>
  );
}
