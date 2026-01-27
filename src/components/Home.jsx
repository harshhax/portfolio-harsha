import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="section hero-side">

      {/* LEFT : INTRO CONTENT */}
      <motion.div
        className="intro-wrapper"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="intro-pill">INTRODUCTION</span>

        <h1 className="intro-name">
          I'm <span>Harsha Varthini</span>
        </h1>

        <h3 className="intro-role">Frontend Developer</h3>

        <div className="intro-tags">
          <span>React</span>
          <span>UI / UX</span>
          <span>Accessibility</span>
          <span>Responsive Design</span>
        </div>

        <p className="intro-desc">
          I focus on building responsive, accessible, and user-friendly web
          interfaces using modern frontend technologies, with strong attention
          to usability and visual clarity.
        </p>

        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>

      {/* RIGHT : PROFILE IMAGE + HOVER SKILLS */}
      <motion.div
        className="hero-profile-wrapper"
        initial={{ opacity: 0, x: 40, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="hero-side-avatar">
          <img src="/profile.jpg" alt="Harsha Varthini" />
        </div>

      
      </motion.div>

    </section>
  );
}
