import { useState } from "react";

export default function Certificates() {
  const certificates = [
    {
      platform: "Maiyyam Certificate",
      title: "Full Stack Development Program – Maiyyam",
      year: "Issued 2025",
      tags: ["HTML", "CSS", "React", "MongoDB"],
      image: "/certificates/Full-Stack.jpg",
      link: "https://www.maiyyam.com/verify/MYMFSM1802",
    },
    {
      platform: "Maiyyam Certificate",
      title: "UI / UX Design – Maiyyam",
      year: "Issued 2025",
      tags: ["Figma", "Wireframing", "Prototyping"],
      image: "/certificates/UI-UX.jpg",
      link: "https://www.maiyyam.com/verify/MYMUIUXDS1364",
    },
    {
      platform: "SIH – Semi Finalist",
      title: "Smart India Hackathon 2025",
      year: "Issued 2025",
      tags: ["Problem Solving", "Team Collaboration", "Innovation"],
      image: "/certificates/SIH.jpg",
    },
    {
      platform: "Virtual Internship",
      title: "Web Development",
      year: "Issued 2025",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/certificates/WEB DEVELOPMENT.jpg",
    },
    {
      platform: "KPR College of Engineering",
      title: "24 hr Hackzilla - HACKZILLA Participant",
      year: "Issued 2025",
      image: "/certificates/KPR HACKATHON.jpeg",
    },
    {
      platform: "Adobe",
      title: "Adobe India Hackathon",
      year: "Issued 2025",
      image: "/certificates/Adobe hackathon.jpg",
    },
  ];

  const VISIBLE_COUNT = 3;
  const [start, setStart] = useState(0);

  const next = () => {
    if (start + VISIBLE_COUNT < certificates.length) {
      setStart(start + VISIBLE_COUNT);
    }
  };

  const prev = () => {
    if (start - VISIBLE_COUNT >= 0) {
      setStart(start - VISIBLE_COUNT);
    }
  };

  const visibleCertificates = certificates.slice(
    start,
    start + VISIBLE_COUNT
  );

  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>

      <div className="certificate-slider-wrapper">

        {/* LEFT ARROW */}
        <button
          className="cert-arrow"
          onClick={prev}
          disabled={start === 0}
        >
          ‹
        </button>

        {/* CERTIFICATES */}
        <div className="certificate-grid">
          {visibleCertificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>

              <div className="certificate-content">
                <small className="certificate-platform">
                  {cert.platform}
                </small>

                <h3>{cert.title}</h3>
                <p className="certificate-year">{cert.year}</p>

                {cert.tags && (
                  <div className="certificate-tags">
                    {cert.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}

                {/* show link only if exists */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    View credential ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          className="cert-arrow"
          onClick={next}
          disabled={start + VISIBLE_COUNT >= certificates.length}
        >
          ›
        </button>
      </div>
    </section>
  );
}
