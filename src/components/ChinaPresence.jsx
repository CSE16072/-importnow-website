
import "./ChinaSections.css";

function ChinaPresence() {
  const details = [
    "Registered business licence issued in Shanghai, China",
    "Chinese company bank account, so payments to factories are safe and traceable",
    "Team on the ground for factory visits, quality checks and market trips",
    "Indian founder on both sides: talk to us in Telugu, Hindi or English",
  ];

  return (
    <section className="china-presence" id="china-presence">
      <div className="china-presence-content">
        <span className="section-eyebrow">OFFICIALLY IN CHINA</span>

        <h2>
          Many claim an office in China.
          <span> We have the licence.</span>
        </h2>

        <p className="china-intro">
          ImportNow operates through its own registered company
          in Shanghai, Shanghai Shengqiao Chain Trading Co., Ltd.
          That means we can sign contracts with factories, pay
          suppliers locally and stand behind every order.
        </p>

        <div className="china-benefits">
          {details.map((detail, index) => (
            <div className="china-benefit" key={index}>
              <span>✓</span>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="licence-card">
        <div className="licence-top">
          <span className="licence-symbol">营</span>
          <div>
            <strong>营业执照</strong>
            <small>BUSINESS LICENCE</small>
          </div>
          <span className="licence-seal">✓</span>
        </div>

        <div className="licence-divider"></div>

        <div className="licence-information">
          <span>Company</span>
          <strong>Shanghai Shengqiao Chain Trading Co., Ltd.</strong>

          <span>Location</span>
          <strong>Shanghai, People's Republic of China</strong>

          <span>Scope</span>
          <strong>Supply chain, sourcing & international trade</strong>

          <span>Serving</span>
          <strong>Importers across India</strong>
        </div>

        <div className="licence-bottom">
          <span>SHANGHAI</span>
          <span>SHENGQIAO</span>
          <span>TRADING</span>
        </div>
      </div>
    </section>
  );
}

export default ChinaPresence;
