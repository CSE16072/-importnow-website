
import "./ContentSections.css";

const services = [
  {
    number: "01",
    icon: "🔎",
    title: "Product sourcing",
    description:
      "We find verified manufacturers across Yiwu, Guangzhou, Shenzhen and Foshan, and negotiate prices on your behalf.",
  },
  {
    number: "02",
    icon: "🏭",
    title: "Factory inspection",
    description:
      "Our team visits factories in person. We check licences, samples and production capacity before you pay.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Quality control",
    description:
      "Pre-shipment checks with photo and video reports, completed before the container is sealed.",
  },
  {
    number: "04",
    icon: "🚢",
    title: "Shipping & logistics",
    description:
      "Full-container and shared-container sea freight from Chinese ports, plus air cargo for urgent orders.",
  },
  {
    number: "05",
    icon: "📋",
    title: "Customs clearance",
    description:
      "Documentation, duties, GST and clearance at Indian ports. No surprises when the shipment arrives.",
  },
  {
    number: "06",
    icon: "📦",
    title: "Doorstep delivery",
    description:
      "From the port straight to your shop, warehouse, villa or site, with the container unloaded on location.",
  },
];

function Services() {
  return (
    <section className="content-section services-section" id="services">
      <div className="section-heading">
        <span className="section-eyebrow">END-TO-END IMPORTS</span>

        <h2>
          One team from the factory floor
          <span> to your front door.</span>
        </h2>

        <p>
          Anyone can say they import from China. What you actually
          need is a smooth process, clear communication and a
          shipment that arrives safely.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <a href="#contact">
              Discuss your requirement <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
