import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <div className="section-head skills-head">
          <div>
            <span className="label" data-reveal>
              03 — Capabilities
            </span>
            <h2 className="section-title" data-reveal style={{ "--d": "80ms" }}>
              A stack chosen <em>with care</em>
            </h2>
          </div>
          <p className="head-note" data-reveal style={{ "--d": "160ms" }}>
            Tools I reach for regularly — and the fundamentals that make them
            interchangeable.
          </p>
        </div>

        <div className="stack-grid">
          {skillGroups.map((group, index) => (
            <article
              className="stack-card"
              key={group.title}
              data-reveal
              style={{ "--d": `${index * 100}ms` }}
            >
              <header>
                <span className="stack-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.title}</h3>
              </header>
              <p className="stack-caption">{group.caption}</p>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="skills-note" data-reveal>
          The full list, including education and certifications, lives in my CV
          — happy to send it over.
        </p>
      </div>
    </section>
  );
}
