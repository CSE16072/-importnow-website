
import "./ContentSections.css";

const categories = [
  {
    icon: "🛋️",
    hub: "FOSHAN HUB",
    title: "Furniture & interiors",
    items: [
      "Complete home and villa furniture",
      "Office desks and executive chairs",
      "Banquet hall and hotel fit-outs",
    ],
    note: "Height-adjustable desk from ₹45,000 · MOQ 1",
  },
  {
    icon: "💻",
    hub: "SHENZHEN HUB",
    title: "Electronics & tech",
    items: [
      "LED screens and digital signage",
      "Mobile accessories in bulk",
      "Power bank rental kiosks",
    ],
    note: "Business ideas India doesn't have yet",
  },
  {
    icon: "🛵",
    hub: "GUANGZHOU HUB",
    title: "EV & automotive",
    items: [
      "Electric scooters as kits for assembly in India",
      "Battery cells sourced separately",
      "Car LED lights with your own brand",
    ],
    note: "Car LED private label · MOQ 500",
  },
  {
    icon: "💡",
    hub: "GUZHEN HUB",
    title: "Lighting",
    items: [
      "Decorative and architectural lighting",
      "Commercial LED fixtures",
      "Custom designs for projects",
    ],
    note: "Direct from China's lighting capital",
  },
  {
    icon: "🛒",
    hub: "YIWU HUB",
    title: "Supermarket & general goods",
    items: [
      "Complete store stock in one container",
      "Home, kitchen, toys and gifts",
      "Choose products over video call",
    ],
    note: "World's largest small-goods market",
  },
  {
    icon: "⚙️",
    hub: "PAN-CHINA",
    title: "Machinery & automation",
    items: [
      "Production and packaging machines",
      "Smart vending and robotic kiosks",
      "Spares and after-sales support",
    ],
    note: "Tell us the machine, we find the factory",
  },
];

function Products() {
  return (
    <section className="content-section products-section" id="what-we-import">
      <div className="section-heading">
        <span className="section-eyebrow">WHAT WE IMPORT</span>

        <h2>
          China has a market for every industry.
          <span> We know each one.</span>
        </h2>

        <p>
          Each industry has its own manufacturing hub.
          We take you straight to the source.
        </p>
      </div>

      <div className="products-grid">
        {categories.map((product) => (
          <article className="product-card" key={product.title}>
            <div className="product-card-top">
              <span className="product-icon">{product.icon}</span>
              <span className="product-hub">{product.hub}</span>
            </div>

            <h3>{product.title}</h3>

            <ul>
              {product.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="product-note">{product.note}</div>

            <a href="#contact">
              Explore sourcing <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
