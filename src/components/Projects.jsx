import { FaGithub, FaFigma } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Fitness Application – Workflow & UI Design",
      date: "Dec 2024",
      tech: "Figma",
      figma: "https://www.figma.com/design/qp0of6fqv7Jcv32aOmwk7S/FITNESS-WEB-APP?node-id=0-1&t=ey4aDZk4gq1WJU72-1",
      description: [
        "Designed an end-to-end user workflow and high-fidelity UI screens for a fitness application.",
        "Focused on intuitive navigation, consistent user flows, and responsive design across devices."
      ]
    },
    {
      title: "Education Platform for Rural Learning",
      date: "Sep 2025",
      tech: "React.js, Tailwind CSS",
      github: "https://github.com/harshhax/eduLearn",
      description: [
        "Developed a frontend education platform tailored for rural users with limited or unstable internet connectivity.",
        "Implemented online/offline network status indicators, video-based learning modules, and interactive quizzes to improve accessibility and engagement."
      ]
    },
    {
      title: "Micro-Donation Platform for Disaster Relief (SIH Project)",
      date: "Nov 2025",
      tech: "React.js, Tailwind CSS, TypeScript, Express, Supabase",
      github: "https://github.com/harshhax/prep360",
      description: [
        "Developed a responsive frontend platform to support secure micro-donations during disaster relief initiatives.",
        "Designed the system with AES-256 encryption architecture, offline-enabled access, and USSD-based support for inclusive usage.",
        "Currently working on backend integration for real-time transactions and data synchronization."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p style={{ opacity: 0.8, marginBottom: "8px" }}>
              {project.date}
            </p>

            <p style={{ fontWeight: "500", marginBottom: "10px" }}>
              Tech Stack: {project.tech}
            </p>

            <ul style={{ paddingLeft: "18px", marginBottom: "18px" }}>
              {project.description.map((point, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {point}
                </li>
              ))}
            </ul>

            {/* CENTERED ACTION BUTTON */}
            <div className="project-btn-wrapper">
              {project.figma ? (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FaFigma /> View Design
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FaGithub /> View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
