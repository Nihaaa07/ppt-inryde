import React from "react";
import "./Slide6.css";

export default function Slide6() {
  return (
    <div className="s6-root">
      <div className="s6-inner">

        {/* LEFT SIDE */}
        <aside className="s6-left">
          <h1 className="s6-title">
            Emergency Assistance & <br /> Hospital Coordination
          </h1>

          <p className="s6-desc">
            A structured rapid response mechanism integrated with healthcare
            providers to ensure critical care when it matters most.
          </p>

          <div className="s6-left-card">
            <h2>24/7</h2>
            <p>Control Room Readiness</p>
          </div>
        </aside>

        {/* RIGHT SIDE */}
        <section className="s6-right">
          <div className="s6-cards-viewport">

            <article className="s6-card">
              <div className="s6-card-head">
                <span className="s6-step-label">STEP 01</span>
                <div className="s6-icon red">📡</div>
              </div>
              <h3>Incident Detection & Triage</h3>
              <p>
                Automatic SOS alerts trigger control room dashboard; immediate
                triage call to assess severity.
              </p>
            </article>

            <article className="s6-card">
              <div className="s6-card-head">
                <span className="s6-step-label">STEP 02</span>
                <div className="s6-icon yellow">🚑</div>
              </div>
              <h3>Priority Routing</h3>
              <p>
                Direct routing to nearest partnered top-tier hospitals with
                advance notification for readiness.
              </p>
            </article>

            <article className="s6-card">
              <div className="s6-card-head">
                <span className="s6-step-label">STEP 03</span>
                <div className="s6-icon pink">⛑️</div>
              </div>
              <h3>Care Assurance</h3>
              <p>
                Guaranteed free accident care and administrative support for
                hit-and-run cases.
              </p>
            </article>

            <article className="s6-card wide">
              <div className="s6-card-head">
                <span className="s6-step-label grey">PHASE II INTEGRATION</span>
                <div className="s6-icon grey">🔗</div>
              </div>
              <h3>108 Ambulance Linkage</h3>
              <p>
                Direct API integration with government 108 services and
                post-incident follow-up protocols.
              </p>
            </article>

          </div>
        </section>

      </div>
    </div>
  );
}
