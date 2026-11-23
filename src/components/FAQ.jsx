
import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "Can I import just one piece?",
    answer:
      "Yes. Many products can be imported in small quantities. For example, height-adjustable desks can have a minimum order quantity of one piece. Some products, such as private-label car LED lights, may require a higher minimum quantity."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most sea shipments take approximately 30–40 days for door delivery. The actual timeline depends on the product, production time and destination port. Air freight is faster."
  },
  {
    question: "Do you handle customs and GST?",
    answer:
      "Yes. ImportNow helps with shipping documentation, duties, GST, customs clearance and delivery."
  },
  {
    question: "Do I need an IEC?",
    answer:
      "For commercial imports, an Importer Exporter Code (IEC) is required. ImportNow can guide you through the process of getting one."
  },
  {
    question: "Can I visit factories myself?",
    answer:
      "Yes. You can join a guided China business trip or arrange visits to factories that have been shortlisted for your requirements."
  },
  {
    question: "What's the best business to start by importing from China?",
    answer:
      "It depends on your interests and budget. Popular categories include furniture, EV scooters, car accessories, lighting and supermarket products."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-heading">
        <span className="section-eyebrow">GOT QUESTIONS?</span>
        <h2>Questions, <span>answered.</span></h2>
        <p>
          A few things you may want to know before starting your import journey.
        </p>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div className={`faq-item ${activeIndex === index ? "active" : ""}`} key={item.question}>
            <button
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
