export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="education-timeline">

        {/* ITEM 1 */}
        <div className="education-card">
          <div className="education-index">1</div>

          <div className="education-content">
            <div className="education-header">
              <h3>Bannari Amman Institute of Technology, Sathyamangalam</h3>
              <span className="education-badge">CGPA: 8.76</span>
            </div>

            <p className="education-degree">
              Bachelor of Computer Science and Design
            </p>

            <p className="education-year">2023 – 2027</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="education-card">
          <div className="education-index">2</div>

          <div className="education-content">
            <div className="education-header">
              <h3>Mahatma Montessori Hr. Sec. School, Madurai</h3>
              <span className="education-badge">85%</span>
            </div>

            <p className="education-degree">
              Higher Secondary Education
            </p>

            <p className="education-year">2023</p>
          </div>
        </div>

      </div>
    </section>
  );
}
