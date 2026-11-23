
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    product: "",
    quantity: "",
    budget: "",
    details: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hello ImportNow! I would like to get a free sourcing quote.

Name: ${formData.name}
City: ${formData.city}
Product: ${formData.product}
Approximate quantity: ${formData.quantity}
Budget: ${formData.budget}
Details: ${formData.details}
    `.trim();

    const whatsappURL = `https://wa.me/919989724320?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-eyebrow">START IMPORTING</span>

          <h2>
            Tell us what you want to import.
            <span> We'll take it from there.</span>
          </h2>

          <p className="contact-description">
            Share the product and quantity. You'll get supplier options,
            landed cost and timelines, free of charge.
          </p>

          <div className="contact-detail">
            <span className="contact-detail-label">CALL / WHATSAPP</span>
            <a href="https://wa.me/919989724320" target="_blank" rel="noreferrer">
              +91 99897 24320
            </a>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-label">INSTAGRAM</span>
            <a href="https://www.instagram.com/importnow.in/" target="_blank" rel="noreferrer">
              @importnow.in
            </a>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-label">OUR OFFICES</span>
            <p>Hyderabad, India · Shanghai, China</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Get a free sourcing quote</h3>
          <p className="form-intro">Tell us a little about what you need.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="e.g. Hyderabad"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="product">What do you want to import?</label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
              >
                <option value="">Select a product category</option>
                <option value="Furniture & interiors">Furniture & interiors</option>
                <option value="Electronics & tech">Electronics & tech</option>
                <option value="EV & automotive">EV & automotive</option>
                <option value="Lighting">Lighting</option>
                <option value="Supermarket & general goods">Supermarket & general goods</option>
                <option value="Machinery & automation">Machinery & automation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="quantity">Approx. quantity</label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                placeholder="e.g. 1 container"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="budget">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select your budget</option>
                <option value="Below ₹1 lakh">Below ₹1 lakh</option>
                <option value="₹1 lakh – ₹5 lakh">₹1 lakh – ₹5 lakh</option>
                <option value="₹5 lakh – ₹10 lakh">₹5 lakh – ₹10 lakh</option>
                <option value="₹10 lakh – ₹25 lakh">₹10 lakh – ₹25 lakh</option>
                <option value="Above ₹25 lakh">Above ₹25 lakh</option>
                <option value="Not decided yet">Not decided yet</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="details">Details</label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell us more about the product or your requirements..."
                rows="4"
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            <button className="contact-submit" type="submit">
              Send on WhatsApp <span>↗</span>
            </button>

            <p className="form-note">
              This opens WhatsApp with your details filled in. You can review
              and send the message there. We usually reply within a few hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
