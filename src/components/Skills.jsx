const skillsData = [
  { name: "HTML", image: "HTML" },
  { name: "CSS", image: "CSS" },
  { name: "JavaScript", image: "JavaScript" },
  { name: "Bootstrap", image: "Bootstrap" },
  { name: "React", image: "React" },
  { name: "Laravel", image: "Laravel" },
  { name: "Python", image: "Python" },
  { name: "SQL", image: "SQL" },
  { name: "PHP", image: "PHP" },
  { name: "DSA", image: "DSA" },
  { name: "OOP", image: "OOP" },
  { name: "Node.js", image: "nodeJS" },
];

function Skills() {
  return (
    <section className="skills-portfolio" id="skills">
      <h2 className="skills-heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={`/skills/${skill.image}.png`} alt={skill.name} className="skill-image" />
            <div className="skill-box">
              <h3>{skill.name}</h3>
              <p>
                Experienced in building real-world projects using {skill.name}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
