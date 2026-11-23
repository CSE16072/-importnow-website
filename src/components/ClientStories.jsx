
import "./PortfolioSections.css";

const stories = [
  {
    initial: "S",
    name: "Sai",
    role: "Ad-tech startup · Siddipet",
    quote:
      "I came to source LED screens and electronics. The Guangzhou and Shenzhen markets were easy to navigate, and hotels, food and travel were all taken care of.",
  },
  {
    initial: "M",
    name: "Mahender Reddy",
    role: "Canton Fair trip client",
    quote:
      "Twelve days covering the Canton Fair and factories of my choice. Visa, guidance, Indian food every day. It felt like a personal trip, not a business tour.",
  },
  {
    initial: "SS",
    name: "Sagar Supermarket",
    role: "Retail · Adilabad",
    quote:
      "We picked our products on video calls, and the container came straight from Yiwu to our warehouse. The whole process was hassle-free.",
  },
];

function ClientStories() {
  return (
    <section className="stories-section" id="stories">
      <div className="portfolio-heading">
        <span className="section-eyebrow">CLIENT STORIES</span>

        <h2>
          Heard from the people
          <span> who made the trip.</span>
        </h2>
      </div>

      <div className="stories-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.name}>
            <div className="quote-mark">“</div>

            <p className="story-quote">{story.quote}</p>

            <div className="story-person">
              <div className="story-avatar">{story.initial}</div>

              <div>
                <h3>{story.name}</h3>
                <span>{story.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClientStories;
