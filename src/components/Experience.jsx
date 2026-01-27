export default function Experience() {
  return (
    <section id="experience" className="section">

      <h2>Experience</h2>

      <div className="experience-card">
        <h3>Frontend Developer Intern</h3>

        <p className="experience-meta">
          Crayond Digital Pvt. Ltd. | Mar 2025 – Jul 2025
        </p>

        <ul className="experience-points">
          <li>
            Built <strong>15+ reusable and responsive UI components</strong>
            using React.js and Next.js, improving code maintainability and
            development speed.
          </li>
          <li>
            Optimized state management and component integration to enhance
            <strong> UI performance and scalability</strong> across applications.
          </li>
        </ul>
      </div>

      <h2 className="mt-large">Certifications & Accomplishments</h2>

      <div className="achievement-grid">

        <div className="achievement-card">
          <span className="achievement-dot"></span>
          UI/UX Design Certification – Maiyyam
        </div>

        <div className="achievement-card">
          <span className="achievement-dot"></span>
          Full Stack Development Program – Maiyyam
        </div>

        <div className="achievement-card">
          <span className="achievement-dot"></span>
          Qualified for Semi-Finals, Smart India Hackathon – Oct 2025
        </div>

      </div>

    </section>
  );
}
