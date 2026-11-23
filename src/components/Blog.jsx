
import "./PortfolioSections.css";

function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-content">
        <span className="section-eyebrow">IMPORT GUIDES</span>

        <h2>
          Learn before
          <span> you import.</span>
        </h2>

        <p>
          Practical guides on sourcing, shipping, customs
          and business ideas from China.
        </p>

        <a
          href="https://importnow-concept.vercel.app/blog"
          target="_blank"
          rel="noreferrer"
          className="blog-button"
        >
          View all articles <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Blog;
