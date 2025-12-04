import React from "react";
import "./Slide1.css";
import logo from "../assets/logo.png";

export default function Slide1() {
  return (
    <div className="slide1">

      {/* Background Shapes */}
      <div className="bg-left"></div>
      <div className="bg-right"></div>

      {/* Top Logo */}
      <div className="top-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Main Content */}
      <div className="text-block">
        <h1>
          Ride-Hailing Platform<br />Comprehensive Overview
        </h1>

        <p className="subtitle">
          Safe, Affordable, Reliable Mobility for Government & Stakeholders
        </p>
      </div>

    </div>
  );
}
