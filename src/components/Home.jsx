import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="section hero-side">

      {/* LEFT : TEXT */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Harsha Varthini</h1>

        <h3>Frontend Developer</h3>

        <p>
          Focused on building responsive, accessible, and user-friendly web
          interfaces with modern frontend technologies.
        </p>

        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>

      {/* RIGHT : PROFILE + SKILLS */}
      <motion.div
        className="hero-profile-wrapper"
        initial={{ opacity: 0, x: 40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="hero-side-avatar">
          <img src="/profile.png" alt="Profile Avatar" />
        </div>

        {/* MICRO SKILL TAGS */}
        <div className="hero-skill-tags">
          <span>React</span>
          <span>UI/UX</span>
          <span>Accessibility</span>
        </div>
      </motion.div>

    </section>
  );
}
