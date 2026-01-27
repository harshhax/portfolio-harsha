import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
  {
    title: "Programming Languages",
    color: "pl",
    pills: ["Java", "C", "Python", "JavaScript"],
    skills: [
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 88 }
    ]
  },
  {
    title: "Web Technologies",
    color: "frontend",
    pills: ["HTML", "CSS", "React.js"],
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React.js", level: 80 }
    ]
  },
  {
    title: "Databases",
    color: "database",
    pills: ["MySQL", "MongoDB"],
    skills: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 65 }
    ]
  },
  {
    title: "UI / UX Design",
    color: "design",
    pills: ["Figma", "Wireframing", "Prototyping"],
    skills: [
      { name: "Figma", level: 80 },
      { name: "Wireframing", level: 78 },
      { name: "Prototyping", level: 75 }
    ]
  }
];


  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {/* ✅ THIS GRID IS REQUIRED */}
      <div className="skills-cards-grid">
        {skillGroups.map((group, idx) => (
          <div className="skills-card" key={idx}>

            <h3>{group.title}</h3>

            {/* Pills */}
            <div className="skills-pills">
              {group.pills.map(pill => (
                <span key={pill}>{pill}</span>
              ))}
            </div>

            {/* Skill bars */}
            {group.skills.map(skill => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-row-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-row-bar">
                 <motion.div
                    className={`skill-row-fill ${group.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />

                </div>
              </div>
            ))}

          </div>
        ))}
      </div>
    </section>
  );
}
