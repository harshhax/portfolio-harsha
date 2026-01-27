import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 88 }
    ],

    "Web Technologies": [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React.js", level: 80 }
    ],

    "UI/UX Design": [
      { name: "Figma", level: 80 },
      { name: "Wireframing", level: 78 },
      { name: "Prototyping", level: 75 }
    ],

    "Database Technologies": [
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 70 }
    ],

    "Tools": [
      { name: "Git", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 }
    ]
  };

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "50px" }}>
          <h3>{category}</h3>

          <div className="skills-grid">
            {items.map(skill => (
              <div key={skill.name} className="skill-card">
                
                {/* HEADER */}
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>

                {/* PROGRESS (hidden until hover) */}
                <div className="bar-bg">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
