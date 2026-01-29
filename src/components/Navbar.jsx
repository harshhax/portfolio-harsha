import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setMenuOpen(false); // close menu on link click
  };

  return (
    <nav className="navbar">
      {/* LOGO / NAME */}
      <h2 className="nav-logo">Harsha.</h2>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          ["home", "Home"],
          ["about", "Objective"],
          ["education", "Education"],
          ["skills", "Skills"],
          ["projects", "Projects"],
          ["experience", "Experience"],
          ["certificates", "Certificates"],
          ["contact", "Contact"]
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${active === id ? "active" : ""}`}
            onClick={handleClick}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
