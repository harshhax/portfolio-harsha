export default function Projects() {
  const projects = [
    {
      title: "Fitness Application – Workflow & UI Design",
      date: "Dec 2024",
      tech: "Figma",
      description: [
        "Designed an end-to-end user workflow and high-fidelity UI screens for a fitness application.",
        "Focused on intuitive navigation, consistent user flows, and responsive design across devices."
      ]
    },
    {
      title: "Education Platform for Rural Learning",
      date: "Sep 2025",
      tech: "React.js, Tailwind CSS",
      description: [
        "Developed a frontend education platform tailored for rural users with limited or unstable internet connectivity.",
        "Implemented online/offline network status indicators, video-based learning modules, and interactive quizzes to improve accessibility and engagement."
      ]
    },
    {
      title: "Micro-Donation Platform for Disaster Relief (SIH Project)",
      date: "Nov 2025",
      tech: "React.js, Tailwind CSS, TypeScript, Express, Supabase",
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

            <ul style={{ paddingLeft: "18px" }}>
              {project.description.map((point, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
