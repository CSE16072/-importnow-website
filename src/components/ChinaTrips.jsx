
import "./ChinaSections.css";

function ChinaTrips() {
  const destinations = [
    "Guangzhou",
    "Shenzhen",
    "Yiwu",
    "Foshan",
    "Macau",
    "Glass Bridge",
  ];

  const inclusions = [
    "Visa guidance & invitation letter",
    "Hotels close to the fair",
    "Indian food daily, veg & non-veg",
    "Guides & translators",
    "Factory visits you choose",
    "Sightseeing between markets",
  ];

  return (
    <section className="china-trips" id="china-trips">
      <div className="trips-heading">
        <span className="section-eyebrow">
          BUSINESS TRIPS TO CHINA
        </span>

        <h2>
          Your business trip doesn't have to
          <span> feel like work.</span>
        </h2>

        <p>
          Guided trips to the Canton Fair, wholesale markets and
          factories you choose. Our clients often tell us it felt
          like a personal trip, not a business tour.
        </p>
      </div>

      <div className="trips-layout">
        <div className="canton-card">
          <div className="canton-image">
            <span className="canton-tag">
              CANTON FAIR · GUANGZHOU
            </span>

            <div className="canton-image-content">
              <span className="canton-icon">🏢</span>
              <h3>China's biggest trade fair</h3>
              <p>Meet manufacturers face to face</p>
            </div>
          </div>

          <div className="canton-description">
            <h3>
              Meet factories face to face.
              We handle everything else.
            </h3>

            <p>
              Walk the world's biggest trade fair with a guide
              who speaks the language, then visit the factories
              you shortlist.
            </p>

            <div className="destination-list">
              {destinations.map((destination) => (
                <span key={destination}>{destination}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="trips-details">
          <div className="trip-inclusions">
            <span className="section-eyebrow">
              WHAT'S INCLUDED
            </span>

            <h3>Everything taken care of.</h3>

            <div className="inclusion-list">
              {inclusions.map((item) => (
                <div className="inclusion-item" key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="departure-card">
            <span className="section-eyebrow">
              NEXT DEPARTURES
            </span>

            <div className="departure-item">
              <span className="departure-icon">🌸</span>
              <div>
                <strong>Spring Canton Fair</strong>
                <p>April–May</p>
              </div>
            </div>

            <div className="departure-item">
              <span className="departure-icon">🍂</span>
              <div>
                <strong>Autumn Canton Fair</strong>
                <p>October–November</p>
              </div>
            </div>

            <a href="#contact" className="trip-button">
              Join the next trip <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChinaTrips;
