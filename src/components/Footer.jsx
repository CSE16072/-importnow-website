
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            import<span>now</span><sup>®</sup>
          </a>
          <p>
            Import directly from China. Without the guesswork.
            Sourcing, inspection and shipping — handled end to end.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#what-we-import">What We Import</a>
          <a href="#china-trips">China Trips</a>
        </div>

        <div className="footer-links">
          <h4>Discover</h4>
          <a href="#blog">Import Guides</a>
          <a href="#projects">Recently Delivered</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Get in touch</h4>
          <a href="https://wa.me/919989724320" target="_blank" rel="noreferrer">
            +91 99897 24320
          </a>
          <a
            href="https://www.instagram.com/importnow.in/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <p>Hyderabad, India</p>
          <p>Shanghai, China</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ImportNow. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
