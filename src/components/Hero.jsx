
import "./Hero.css";
import Globe from "react-globe.gl";

function GlobeVisual() {
  const locations = [
    { lat: 29.306, lng: 120.076, name: "Yiwu", country: "China", color: "#e76b32" },
    { lat: 23.021, lng: 113.122, name: "Foshan", country: "China", color: "#e76b32" },
    { lat: 22.543, lng: 114.058, name: "Shenzhen", country: "China", color: "#e76b32" },
    { lat: 23.130, lng: 113.264, name: "Guangzhou", country: "China", color: "#e76b32" },
    { lat: 31.230, lng: 121.474, name: "Shanghai", country: "China", color: "#e76b32" },
    { lat: 22.917, lng: 113.084, name: "Guzhen", country: "China", color: "#e76b32" },
    { lat: 29.868, lng: 121.544, name: "Ningbo", country: "China", color: "#e76b32" },

    { lat: 19.079, lng: 78.690, name: "Adilabad", country: "India", color: "#f7f3d5" },
    { lat: 17.385, lng: 78.486, name: "Hyderabad", country: "India", color: "#f7f3d5" },
    { lat: 18.104, lng: 78.852, name: "Siddipet", country: "India", color: "#f7f3d5" },
    { lat: 13.083, lng: 80.271, name: "Chennai", country: "India", color: "#f7f3d5" },
    { lat: 18.950, lng: 72.950, name: "Nhava Sheva", country: "India", color: "#f7f3d5" },
    { lat: 17.723, lng: 83.301, name: "Vizag", country: "India", color: "#f7f3d5" },
    { lat: 19.076, lng: 72.878, name: "Mumbai", country: "India", color: "#f7f3d5" }
  ];

  const arcs = [
    { startLat: 29.306, startLng: 120.076, endLat: 19.079, endLng: 78.690 },
    { startLat: 23.021, startLng: 113.122, endLat: 17.385, endLng: 78.486 },
    { startLat: 22.543, startLng: 114.058, endLat: 18.104, endLng: 78.852 },
    { startLat: 23.130, startLng: 113.264, endLat: 13.083, endLng: 80.271 },
    { startLat: 31.230, startLng: 121.474, endLat: 18.950, endLng: 72.950 },
    { startLat: 22.917, startLng: 113.084, endLat: 17.723, endLng: 83.301 },
    { startLat: 29.868, startLng: 121.544, endLat: 19.076, endLng: 72.878 }
  ].map((route) => ({
    ...route,
    color: ["#e76b32", "#f7f3d5"]
  }));

  return (
    <div className="globe-panel">
      <div className="visual-label">
        <span className="live-dot"></span>
        INTERACTIVE GLOBAL NETWORK
      </div>

      <div className="interactive-globe">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          width={500}
          height={350}
          showAtmosphere
          atmosphereColor="#e76b32"
          atmosphereAltitude={0.16}
          pointsData={locations}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.025}
          pointRadius={0.35}
          pointsMerge={false}
          labelsData={locations}
          labelLat="lat"
          labelLng="lng"
          labelText={(d) => d.name.toUpperCase()}
          labelColor="color"
          labelSize={0.65}
          labelDotRadius={0.2}
          labelAltitude={0.035}
          arcsData={arcs}
          arcColor="color"
          arcDashLength={0.5}
          arcDashGap={0.15}
          arcDashAnimateTime={0}
          arcStroke={0.6}
          animateIn={false}
          enablePointerInteraction
        />
      </div>

      <div className="globe-caption">
        <strong>
          China <span className="caption-arrow">↔</span> India
        </strong>
        <span>Interactive sourcing and shipping network</span>
      </div>

      <div className="globe-live-foot">
        <span></span> NETWORK OVERVIEW <b>•</b> CHINA · INDIA
      </div>
    </div>
  );
}

function ShipmentVisual() {
  return (
    <div className="shipment-panel">
      <div className="visual-label">
        <span className="live-dot"></span>
        SHIPMENT JOURNEY
      </div>

      <div className="shipment-heading">
        <span>CONTAINER JOURNEY</span>
        <strong>Shanghai <i>→</i> Chennai</strong>
      </div>

      <p className="hero-shipment-message">
        Explore all six shipment stages in the How It Works section below.
      </p>
    </div>
  );
}

function Hero({ visualMode = "globe" }) {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-trust">
            <span className="trust-dot"></span>
            Trusted by 500+ Indian businesses
          </div>

          <h1>
            Import directly from China.
            <span> Without the guesswork.</span>
          </h1>

          <p className="hero-description">
            Sourcing, factory inspection, shipping and customs, handled end
            to end by a team with its own company in Shanghai. You choose
            the product. We bring it to your door.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              Get a free sourcing quote <span>→</span>
            </a>
            <a href="#how-it-works" className="hero-secondary-btn">
              See how it works <span>↗</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Businesses served</span>
            </div>
            <div>
              <strong>1 pc</strong>
              <span>MOQ on many products</span>
            </div>
            <div>
              <strong>Shanghai</strong>
              <span>Own registered company</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" key={visualMode}>
          {visualMode === "shipment" ? <ShipmentVisual /> : <GlobeVisual />}
        </div>
      </section>

      <div className="route-strip">
        <span>OUR IMPORT NETWORK</span>
        <p>
          Yiwu → Adilabad <b>•</b> Foshan → Hyderabad <b>•</b>
          Shenzhen → Siddipet <b>•</b> Guangzhou → Chennai <b>•</b>
          Shanghai → Nhava Sheva
        </p>
      </div>
    </>
  );
}

export default Hero;
