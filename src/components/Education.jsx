export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="timeline">

        {/* COLLEGE */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div className="timeline-content">
            <h3>Bachelor of Computer Science and Design</h3>
            <p className="timeline-meta">
              Bannari Amman Institute of Technology | 2023 – 2027
            </p>
            <p>
              CGPA: <strong>8.76</strong>
            </p>
          </div>
        </div>

        {/* SCHOOL */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div className="timeline-content">
            <h3>Higher Secondary Education</h3>
            <p className="timeline-meta">
              Mahatma Montessori Hr. Sec. School, Madurai | 2023
            </p>
            <p>
              Score: <strong>85%</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
