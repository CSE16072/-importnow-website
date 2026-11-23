
import "./Navbar.css";

function Navbar() {
  const isBlogPage =
    window.location.pathname === "/blog" ||
    window.location.pathname === "/blog.html";

  const navLinks = [
    { name: "Services", link: "/#services" },
    { name: "How It Works", link: "/#how-it-works" },
    { name: "What We Import", link: "/#what-we-import" },
    { name: "China Trips", link: "/#china-trips" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/#contact" }
  ];

  return (
    <header className="navbar">
      <a href={isBlogPage ? "/" : "#home"} className="navbar-logo">
        <span className="logo-name">
          Import<span>Now</span>
        </span>
        <small>CHINA TO INDIA, MADE SIMPLE</small>
      </a>

      <nav className="nav-links">
        {navLinks.map((item) => (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>

      <a href="/#contact" className="nav-cta">
        Get a Free Quote <span>↗</span>
      </a>
    </header>
  );
}

export default Navbar;
