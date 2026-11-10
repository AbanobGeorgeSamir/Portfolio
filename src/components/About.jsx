import { principles, profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="shell about-grid">
        <div className="about-aside">
          <span className="label" data-reveal>
            02 — About
          </span>
          <h2 className="section-title about-title" data-reveal style={{ "--d": "80ms" }}>
            Quiet interfaces, <em>solid</em> engineering.
          </h2>
          <div className="about-stamp" data-reveal style={{ "--d": "160ms" }}>
            <span className="about-stamp-mark">AG</span>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="about-body">
          <p className="about-lede" data-reveal>
            I'm a full-stack developer based in Cairo. I spend most of my time
            in Laravel and PHP on the server, React on the client, and the
            unglamorous middle ground — data models, states, the small
            transitions — where a product actually starts to feel good.
          </p>

          <p className="about-copy" data-reveal style={{ "--d": "80ms" }}>
            My work leans practical: understand the problem properly, choose the
            simplest tool that fits, then finish it to a standard I'd be happy to
            put my name on. I care about readable code, honest interfaces and
            getting the last ten percent right, because that's the part people
            remember.
          </p>

          <dl className="about-facts" data-reveal style={{ "--d": "140ms" }}>
            <div>
              <dt>Based</dt>
              <dd>{profile.location} — open to remote</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Full-stack web applications</dd>
            </div>
            <div>
              <dt>Working with</dt>
              <dd>Laravel, React, PHP, Node.js, MySQL</dd>
            </div>
            <div>
              <dt>Off-screen</dt>
              <dd>Python side projects and a chess board</dd>
            </div>
          </dl>

          <div className="principles">
            {principles.map((item, index) => (
              <article
                className="principle"
                key={item.title}
                data-reveal
                style={{ "--d": `${index * 90}ms` }}
              >
                <span className="principle-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
