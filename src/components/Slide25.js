import React from "react";
import "./Slide25.css";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Tooltip,
  Legend
} from "chart.js";

// Register everything required for MIXED bar+line charts
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Tooltip,
  Legend
);

export default function Slide25() {
  const data = {
    labels: ["Year 1", "Year 3", "Year 5", "Year 10"],
    datasets: [
      {
        type: "bar",
        data: [150, 300, 600, 1200],
        backgroundColor: "#4A90E2"
      },
      {
        type: "line",
        data: [100, 250, 500, 1000],
        borderColor: "#E24A4A",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } }
  };

  return (
    <div className="slide25-container">
      <h2>5–10 Year Projection</h2>

      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>

      <footer className="slide-footer">
        INRYDE – Government & Stakeholder Presentation | Slide 25
      </footer>
    </div>
  );
}
