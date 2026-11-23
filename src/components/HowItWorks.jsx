
import { useState } from "react";
import "./ContentSections.css";

const steps = [
  {
    number: "01",
    title: "Source the right factory",
    description:
      "Tell us the product. We shortlist verified manufacturers and get you real prices, not middleman quotes.",
    status: "FACTORY SOURCING",
    location: "Yiwu, China",
    detail: "Finding and verifying the right manufacturer for your product."
  },
  {
    number: "02",
    title: "Inspect & approve samples",
    description:
      "Our team visits the factory and checks samples. You approve over video call.",
    status: "SAMPLE APPROVAL",
    location: "Factory, China",
    detail: "Samples are inspected and shared with you for approval."
  },
  {
    number: "03",
    title: "Quality check & loading",
    description:
      "Every carton is checked and counted. Then the cranes load your container onto the ship.",
    status: "LOADED",
    location: "Shanghai Port, China",
    detail: "Products are checked, packed and loaded into the container."
  },
  {
    number: "04",
    title: "Ocean freight",
    description:
      "Your container sails from Shanghai to India, and we track it the whole way.",
    status: "IN TRANSIT",
    location: "Indian Ocean",
    detail: "The container travels by sea from Shanghai towards India."
  },
  {
    number: "05",
    title: "Customs clearance",
    description:
      "Duties, GST and paperwork are handled at the Indian port, so the container is released quickly.",
    status: "CUSTOMS CLEARANCE",
    location: "Chennai Port, India",
    detail: "Import documentation, customs duties and clearance are handled."
  },
  {
    number: "06",
    title: "Delivered to your door",
    description:
      "The container is unloaded and trucked to your shop, warehouse or site.",
    status: "DELIVERED",
    location: "Your destination, India",
    detail: "Your goods are delivered to your shop, warehouse or project site."
  }
];

function HowItWorks() {
  const [selectedStep, setSelectedStep] = useState(3);

  const activeStep = steps[selectedStep];
  const progress = ((selectedStep + 1) / steps.length) * 100;

  return (
    <section className="content-section process-section" id="how-it-works">
      <div className="section-heading">
        <span className="section-eyebrow">
          HOW IT WORKS · SHIPMENT JOURNEY
        </span>

        <h2>
          Watch your order travel <span>from China to India.</span>
        </h2>

        <p>
          Follow the journey from factory checks and loading in China to
          ocean freight, customs clearance and delivery at your door.
        </p>
      </div>

      <div className="process-layout">
        <div className="process-steps">
          {steps.map((step, index) => (
            <button
              type="button"
              className={`process-step ${
                selectedStep === index ? "active-process-step" : ""
              }`}
              key={step.number}
              onClick={() => setSelectedStep(index)}
              aria-pressed={selectedStep === index}
            >
              <span className="process-number">
                {index < selectedStep ? "✓" : step.number}
              </span>

              <div className="process-description">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="process-visual">
          <div className="shipment-visual-heading">
            <span className="shipment-live-dot"></span>
            SHIPMENT JOURNEY VIEW
          </div>

          <div className="shipment-route-summary">
            <span>CONTAINER JOURNEY</span>
            <strong>
              Shanghai <i>→</i> Chennai
            </strong>
          </div>

          <div className="process-map">
            <div className="map-origin">
              <span>🇨🇳</span>
              <strong>Shanghai</strong>
              <small>Origin port · China</small>
            </div>

            <div className="map-journey">
              <div className="map-dashed-line"></div>
              <span className="map-ship">🚢</span>
              <small className="map-journey-label">
                OCEAN FREIGHT
              </small>
            </div>

            <div className="map-destination">
              <span>🇮🇳</span>
              <strong>Chennai</strong>
              <small>Destination · India</small>
            </div>
          </div>

          <div className="shipment-progress">
            <div className="shipment-progress-labels">
              <span>JOURNEY STATUS</span>
              <strong>{activeStep.status}</strong>
            </div>

            <div
              className="shipment-progress-track"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Selected shipment stage progress"
            >
              <span style={{ width: `${progress}%` }}></span>
            </div>

            <div className="shipment-timeline">
              <span className={selectedStep >= 2 ? "timeline-done" : ""}>
                {selectedStep >= 2 ? "✓" : "1"} Factory loaded
              </span>

              <span className={selectedStep >= 3 ? "timeline-done" : ""}>
                {selectedStep >= 3 ? "✓" : "2"} Ocean freight
              </span>

              <span className={selectedStep >= 4 ? "timeline-current" : ""}>
                {selectedStep >= 4 ? "●" : "3"} Customs & delivery
              </span>
            </div>
          </div>

          <div className="shipment-selected-stage">
            <span>SELECTED STAGE · {activeStep.number}</span>
            <strong>{activeStep.title}</strong>
            <p>{activeStep.detail}</p>
            <small>LOCATION: {activeStep.location}</small>
          </div>

          <div className="process-note">
            <span>✓</span>
            <div>
              <strong>One team tracking every step.</strong>
              <p>
                From the factory floor in China to your front door in India.
              </p>
            </div>
          </div>

          <p className="shipment-demo-note">
            Interactive journey overview · Not connected to live vessel data
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
