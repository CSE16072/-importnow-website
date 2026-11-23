
import { useEffect } from "react";
import "./BlogArticlePage.css";

const articles = [
  {
    slug: "how-to-import-from-china-to-india",
    title: "How to Import from China to India in 2026: A Step-by-Step Guide",
    date: "18 November 2026",
    readTime: "7 min read",
    category: "Import guides",
    intro: "Importing products from China to India can open up new business opportunities. But before placing an order, you need to understand the process, documentation, shipping and customs requirements.",
    sections: [
      {
        heading: "1. Choose the right product",
        paragraphs: [
          "Start by identifying the product you want to import. Research demand in India, competing products, expected selling prices and potential profit margins.",
          "Check whether the product is restricted, regulated or requires special approvals before importing."
        ]
      },
      {
        heading: "2. Find and verify your supplier",
        paragraphs: [
          "Search for manufacturers through trusted sourcing platforms, trade fairs or local sourcing partners.",
          "Verify the supplier's business details, factory capabilities, product quality and export experience. Request samples before confirming a bulk order."
        ]
      },
      {
        heading: "3. Understand your import documents",
        paragraphs: [
          "An Importer Exporter Code (IEC) is generally required to import goods into India. You should also understand the commercial invoice, packing list, bill of lading or airway bill and applicable certificates.",
          "Requirements vary depending on the product, so confirm the applicable rules before shipping."
        ]
      },
      {
        heading: "4. Confirm pricing and payment",
        paragraphs: [
          "Ask for a detailed quotation covering product cost, minimum order quantity, packaging and delivery terms.",
          "Agree on payment milestones and inspect the supplier's credentials before transferring money."
        ]
      },
      {
        heading: "5. Arrange shipping from China",
        paragraphs: [
          "Choose between sea freight and air freight based on shipment size, budget and urgency.",
          "Sea freight is commonly used for larger shipments, while air freight may suit smaller or urgent orders."
        ]
      },
      {
        heading: "6. Customs clearance and delivery",
        paragraphs: [
          "When the shipment reaches India, customs documentation, applicable duties and regulatory checks must be completed.",
          "Once cleared, arrange transportation from the port to your warehouse or final destination."
        ]
      },
      {
        heading: "Final checklist",
        paragraphs: [
          "Verify your supplier, inspect samples, confirm the full landed cost, prepare documents and plan shipping before placing a large order.",
          "For product-specific requirements, consult a qualified customs broker or import professional."
        ]
      }
    ]
  },
  {
    slug: "yiwu-vs-guangzhou-vs-foshan",
    title: "Yiwu, Guangzhou or Foshan? Choosing the Right Chinese Market for Your Product",
    date: "12 November 2026",
    readTime: "6 min read",
    category: "Wholesale markets",
    intro: "China has several major wholesale and manufacturing hubs. Choosing the right destination can save time and help you find suppliers that match your product requirements.",
    sections: [
      {
        heading: "Yiwu: Small commodities and variety",
        paragraphs: [
          "Yiwu is widely known for its wholesale markets covering everyday consumer goods, accessories, stationery, gifts and household products.",
          "It can be useful for buyers who want to compare a wide range of products in one location."
        ]
      },
      {
        heading: "Guangzhou: Fashion and wholesale markets",
        paragraphs: [
          "Guangzhou is known for clothing, textiles, footwear, bags and accessories, along with several specialised wholesale markets.",
          "It is worth considering when your business focuses on fashion or related product categories."
        ]
      },
      {
        heading: "Foshan: Furniture and building materials",
        paragraphs: [
          "Foshan is a major destination for furniture, lighting, ceramics, sanitary ware and building materials.",
          "Buyers sourcing interiors and construction-related products may find specialised suppliers in this region."
        ]
      },
      {
        heading: "How to choose the right market",
        paragraphs: [
          "Start with your product category, target price, quality requirements and order quantity.",
          "Compare suppliers, request samples and plan visits around the markets most relevant to your products."
        ]
      }
    ]
  },
  {
    slug: "importing-furniture-from-china",
    title: "Importing Furniture from China: Costs, MOQ and What to Check",
    date: "5 November 2026",
    readTime: "6 min read",
    category: "Product guides",
    intro: "China offers a wide range of furniture styles and manufacturing options. A successful purchase depends on checking quality, understanding minimum order quantities and calculating the complete landed cost.",
    sections: [
      {
        heading: "Why source furniture from China?",
        paragraphs: [
          "Furniture buyers can explore a broad selection of designs, materials and customisation options from different manufacturers.",
          "Foshan is one of the well-known furniture sourcing destinations."
        ]
      },
      {
        heading: "Understand MOQ and pricing",
        paragraphs: [
          "Minimum order quantities vary by factory, material, design and customisation requirements.",
          "Ask suppliers for written quotations that clearly separate product cost, packaging, samples and shipping."
        ]
      },
      {
        heading: "Inspect materials and construction",
        paragraphs: [
          "Check frame materials, upholstery, finishes, dimensions, hardware and overall workmanship.",
          "Request samples or arrange a quality inspection before approving bulk production."
        ]
      },
      {
        heading: "Calculate the landed cost",
        paragraphs: [
          "Include product price, inland transportation, freight, insurance, customs duties, clearance charges and delivery in India.",
          "Compare the final landed cost with your expected selling price before confirming the order."
        ]
      }
    ]
  },
  {
    slug: "ev-scooter-business-ckd-kits",
    title: "Starting an EV Scooter Business with CKD Kits from China",
    date: "28 October 2026",
    readTime: "6 min read",
    category: "Business ideas",
    intro: "Completely knocked-down (CKD) kits are supplied as separate components for assembly in the destination country. They can be one sourcing model for businesses exploring electric two-wheelers.",
    sections: [
      {
        heading: "What is a CKD kit?",
        paragraphs: [
          "A CKD kit contains components supplied separately for assembly rather than a fully assembled vehicle.",
          "The exact contents and assembly requirements depend on the supplier and vehicle model."
        ]
      },
      {
        heading: "Evaluate the supplier and product",
        paragraphs: [
          "Review the motor, battery, controller, frame, braking system and other critical components.",
          "Request technical specifications, test reports, warranty details and sample evaluation before making a purchase."
        ]
      },
      {
        heading: "Check Indian regulations",
        paragraphs: [
          "Electric vehicles and their components may be subject to applicable Indian safety, certification, import and registration requirements.",
          "Confirm the latest requirements with the relevant authorities and qualified compliance professionals before importing."
        ]
      },
      {
        heading: "Build a realistic business plan",
        paragraphs: [
          "Calculate component costs, assembly expenses, logistics, taxes, certification, after-sales support and warranty provisions.",
          "Validate market demand and service capabilities before investing in bulk inventory."
        ]
      }
    ]
  },
  {
    slug: "canton-fair-guide-for-indian-businesses",
    title: "Canton Fair Guide for Indian Businesses: Dates, Visa and What to Expect",
    date: "20 October 2026",
    readTime: "7 min read",
    category: "China trips",
    intro: "The Canton Fair in Guangzhou is a major international trade event. It gives buyers an opportunity to meet suppliers, compare products and explore business relationships.",
    sections: [
      {
        heading: "Plan your visit",
        paragraphs: [
          "Check the official Canton Fair website for the latest session dates, registration instructions and exhibitor information.",
          "Plan your visit around the product categories and phases that match your sourcing needs."
        ]
      },
      {
        heading: "Prepare your travel documents",
        paragraphs: [
          "Check the current Chinese visa requirements for Indian citizens and allow enough time for the application process.",
          "Keep your passport, invitation or registration details and travel arrangements organised."
        ]
      },
      {
        heading: "Make a supplier shortlist",
        paragraphs: [
          "Research exhibitors before travelling and identify the products you want to source.",
          "Prepare questions about pricing, MOQ, production capacity, customisation and export experience."
        ]
      },
      {
        heading: "Follow up after the fair",
        paragraphs: [
          "Collect supplier details, product specifications and quotations during your meetings.",
          "Compare offers, verify suppliers and request samples before placing orders."
        ]
      }
    ]
  },
  {
    slug: "how-to-verify-a-chinese-supplier",
    title: "How to Verify a Chinese Supplier Before You Pay",
    date: "9 October 2026",
    readTime: "5 min read",
    category: "Import guides",
    intro: "Supplier verification is an important step in international sourcing. A few checks before payment can help reduce the risk of poor-quality products, misleading claims and payment disputes.",
    sections: [
      {
        heading: "1. Verify the company details",
        paragraphs: [
          "Request the company's registered business name, registration details and business address.",
          "Check that the company information matches the details on quotations, contracts and payment instructions."
        ]
      },
      {
        heading: "2. Check factory capabilities",
        paragraphs: [
          "Ask for factory photos, production videos, equipment details and information about production capacity.",
          "Consider an independent factory audit when the order value or risk justifies it."
        ]
      },
      {
        heading: "3. Request samples",
        paragraphs: [
          "Evaluate product quality, dimensions, materials, packaging and finish using samples.",
          "Keep an approved sample or documented specifications as a reference for bulk production."
        ]
      },
      {
        heading: "4. Confirm payment details",
        paragraphs: [
          "Make sure the beneficiary name and bank details match the verified supplier or an agreed, documented payment arrangement.",
          "Be cautious of sudden changes to bank accounts or requests to pay unrelated individuals."
        ]
      },
      {
        heading: "5. Inspect before shipment",
        paragraphs: [
          "Arrange pre-shipment inspection to check quantity, quality, packaging and agreed specifications.",
          "Document any issues and resolve them with the supplier before releasing the final payment."
        ]
      }
    ]
  }
];

function BlogArticlePage() {
  const slug = new URLSearchParams(window.location.search).get("p");
  const article = articles.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (article) {
      document.title = `${article.title} | ImportNow`;
    }
  }, [article]);

  if (!article) {
    return (
      <section className="article-page">
        <div className="article-container">
          <h1>Article not found</h1>
          <a href="/blog">Back to Blog</a>
        </div>
      </section>
    );
  }

  return (
    <article className="article-page">
      <div className="article-container">
        <div className="article-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog">Blog</a>
          <span>/</span>
          <span>{article.category}</span>
        </div>

        <header className="article-header">
          <span className="article-category">{article.category}</span>
          <h1>{article.title}</h1>

          <div className="article-meta">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

          <p className="article-intro">{article.intro}</p>
        </header>

        <div className="article-cover">
          <span>IMPORTNOW</span>
          <h2>{article.category}</h2>
        </div>

        <div className="article-body">
          {article.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="article-cta">
          <h2>Planning to import from China?</h2>
          <p>
            Let ImportNow help you with sourcing, supplier coordination
            and shipping from China to India.
          </p>
          <a href="/#contact">Talk to our team</a>
        </div>

        <a className="article-back-link" href="/blog">
          ← Back to all articles
        </a>
      </div>
    </article>
  );
}

export default BlogArticlePage;
