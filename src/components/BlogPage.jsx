
import { useState } from "react";
import "./BlogPage.css";

const articles = [
  {
    title: "How to Import from China to India in 2026: A Step-by-Step Guide",
    date: "18 November 2026",
    readTime: "7 min read",
    description:
      "From getting your IEC to receiving the container at your door, here is the full import process explained in plain language for first-time importers.",
    category: "Import guides",
    slug: "how-to-import-from-china-to-india"
  },
  {
    title: "Yiwu, Guangzhou or Foshan? Choosing the Right Chinese Market for Your Product",
    date: "12 November 2026",
    readTime: "6 min read",
    description:
      "China has a different manufacturing hub for almost every industry. Going to the right one can cut your costs and save days of searching.",
    category: "Wholesale markets",
    slug: "yiwu-vs-guangzhou-vs-foshan"
  },
  {
    title: "Importing Furniture from China: Costs, MOQ and What to Check",
    date: "5 November 2026",
    readTime: "6 min read",
    description:
      "Premium designs at a better price. Here is what villa owners, offices and hotels should know before importing furniture from Foshan.",
    category: "Product guides",
    slug: "importing-furniture-from-china"
  },
  {
    title: "Starting an EV Scooter Business with CKD Kits from China",
    date: "28 October 2026",
    readTime: "6 min read",
    description:
      "Importing electric scooters as completely knocked-down kits and assembling them in India can be a high-margin business, if you plan it right.",
    category: "Business ideas",
    slug: "ev-scooter-business-ckd-kits"
  },
  {
    title: "Canton Fair Guide for Indian Businesses: Dates, Visa and What to Expect",
    date: "20 October 2026",
    readTime: "7 min read",
    description:
      "The world's largest trade fair happens twice a year in Guangzhou. Here's how to plan your visit and get the most out of it.",
    category: "China trips",
    slug: "canton-fair-guide-for-indian-businesses"
  },
  {
    title: "How to Verify a Chinese Supplier Before You Pay",
    date: "9 October 2026",
    readTime: "5 min read",
    description:
      "A practical checklist to separate real factories from traders and scammers, before your money leaves your account.",
    category: "Import guides",
    slug: "how-to-verify-a-chinese-supplier"
  }
];

const categories = [
  "All",
  "Import guides",
  "Wholesale markets",
  "Product guides",
  "Business ideas",
  "China trips",
  "Shipping",
  "Customs"
];

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <section className="blog-page">
      <div className="blog-page-container">
        <div className="blog-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Blog</span>
        </div>

        <div className="blog-page-heading">
          <span className="section-eyebrow">IMPORTNOW KNOWLEDGE HUB</span>

          <h1>
            Import Guides <span>&amp;</span> Blogs
          </h1>

          <p>
            Everything we've learned from hundreds of shipments: sourcing
            in China, choosing markets, shipping, customs and business
            ideas for India.
          </p>
        </div>

        <div className="blog-category-list">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-articles-grid">
          {filteredArticles.map((article) => (
            <article className="blog-article-card" key={article.slug}>
              <div className="blog-article-visual">
                <span>IMPORTNOW</span>
                <span className="blog-visual-symbol">↗</span>
              </div>

              <div className="blog-article-content">
                <span className="blog-article-category">
                  {article.category}
                </span>

                <h2>
                  <a
                    href={`/post.html?p=${article.slug}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {article.title}
                  </a>
                </h2>

                <div className="blog-article-meta">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <p>{article.description}</p>

                <a
                  className="blog-read-more"
                  href={`/post.html?p=${article.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-results-count">
          Showing {filteredArticles.length} of 12 articles
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
