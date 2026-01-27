export default function Experience() {
  return (
    <section id="experience" className="section">

      <h2>Experience</h2>

      <div className="experience-glass-card">

        {/* TOP ROW */}
        <div className="experience-header">
          <div>
            <span className="company-badge">CRAYON'D SOFTWARE</span>
            <h3 className="role-title">Frontend Web Developer</h3>
          </div>

          <span className="experience-date">
            MAR 2025 – JUN 2025 · BIT SATHY, INDIA
          </span>
        </div>

        {/* RESPONSIBILITIES */}
        <h4 className="experience-subtitle">KEY RESPONSIBILITIES</h4>

        <ul className="experience-list">
          <li>
            Built responsive, user-friendly marketing pages and UI components
            using <strong>Next.js, React, and Tailwind CSS</strong>.
          </li>
          <li>
            Collaborated with senior developers on production releases, code
            reviews, and deployment processes.
          </li>
          <li>
            Developed and integrated <strong>Node.js and Express APIs</strong>
            with validation, logging, and basic testing workflows.
          </li>
          <li>
            Gained hands-on exposure to full-stack development including CI
            pipelines, version control, and observability practices.
          </li>
        </ul>

        <h4 className="experience-subtitle">SKILLS LEARNT</h4>
        {/* SKILLS */}
        <div className="experience-skills">
          <span>Next.js</span>
          <span>React.js</span>
          <span>Tailwind CSS</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>API Development</span>
          <span>Git & GitHub</span>
        </div>

      </div>

    </section>
  );
}
