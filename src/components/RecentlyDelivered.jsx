
import "./PortfolioSections.css";

const projects = [
  {
    location: "Foshan → Villa",
    title: "Complete villa furniture",
    description:
      "Sofas, dining sets, office furniture and pergolas, all in one container delivered to a luxury villa.",
    tags: ["Full container", "Door delivery"],
    icon: "🛋️",
  },
  {
    location: "Yiwu → Adilabad",
    title: "Sagar Supermarket",
    description:
      "Complete supermarket stock sourced from Yiwu over video calls and delivered to the client's warehouse.",
    tags: ["Retail", "Video sourcing"],
    icon: "🛒",
  },
  {
    location: "China → Convention",
    title: "Sreeman Convention Centre",
    description:
      "Cots, beds, dining sets and office furniture for a convention venue, with better finish for the same budget.",
    tags: ["Hospitality", "Bulk order"],
    icon: "🏨",
  },
  {
    location: "China → Hyderabad",
    title: "Smart office desks",
    description:
      "Motorised height-adjustable L-shaped desks, imported even as a single piece.",
    tags: ["MOQ 1", "~30 days"],
    icon: "🖥️",
  },
];

function RecentlyDelivered() {
  return (
    <section className="delivered-section" id="projects">
      <div className="portfolio-heading">
        <span className="section-eyebrow">RECENTLY DELIVERED</span>
        <h2>
          Another container unloaded,
          <span> another happy client.</span>
        </h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual project-visual-${index + 1}`}>
              <span className="project-icon">{project.icon}</span>
              <span className="project-location">
                {project.location}
              </span>
            </div>

            <div className="project-content">
              <span className="project-number">
                PROJECT 0{index + 1}
              </span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentlyDelivered;
