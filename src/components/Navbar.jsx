import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`}>Home</a>
        <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`}>Objective</a>
        <a href="#education" className={`nav-link ${active === "education" ? "active" : ""}`}>Education</a>
        <a href="#skills" className={`nav-link ${active === "skills" ? "active" : ""}`}>Skills</a>
        <a href="#projects" className={`nav-link ${active === "projects" ? "active" : ""}`}>Projects</a>
        <a href="#experience" className={`nav-link ${active === "experience" ? "active" : ""}`}>Experience</a>
        <a href="#certificates" className={`nav-link ${active === "certificate" ? "active" : ""}`}>Certificates</a>
        <a href="#contact" className={`nav-link ${active === "contact" ? "active" : ""}`}>Contact</a>
      </div>
    </nav>
  );
}
