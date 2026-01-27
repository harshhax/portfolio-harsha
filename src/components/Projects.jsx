import { FaGithub, FaFigma } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Fitness Application – Workflow & UI Design",
      date: "Dec 2024",
      tech: ["Figma", "UI/UX", "Prototyping"],
      figma: "https://www.figma.com/file/XXXXXXXX",
      description: [
        "Designed an end-to-end user workflow and high-fidelity UI screens for a fitness application.",
        "Focused on intuitive navigation, consistent user flows, and responsive design across devices."
      ]
    },
    {
      title: "Education Platform for Rural Learning",
      date: "Sep 2025",
      tech: ["React.js", "Tailwind CSS", "Accessibility"],
      github: "https://github.com/harshhax/rural-education-platform",
      description: [
        "Developed a frontend education platform tailored for rural users with limited or unstable internet connectivity.",
        "Implemented online/offline indicators, video learning modules, and interactive quizzes."
      ]
    },
    {
      title: "Micro-Donation Platform for Disaster Relief",
      date: "Nov 2025",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/harshhax/micro-donation-platform",
      description: [
        "Developed a responsive frontend platform to support secure micro-donations.",
        "Designed with encryption-focused architecture and inclusive access support."
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

            <p style={{ opacity: 0.75, marginBottom: "12px" }}>
              {project.date}
            </p>

            {/* TECHNOLOGY PILLS */}
            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <ul style={{ paddingLeft: "18px", marginTop: "14px" }}>
              {project.description.map((point, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {point}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
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
