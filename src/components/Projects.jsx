import { useEffect, useRef, useState } from "react";
import { profile, projects } from "../data";

function Plate({ project, active }) {
  return (
    <div
      className={`plate ${active ? "is-active" : ""}`}
      style={{ "--a": project.colors[0], "--b": project.colors[1], "--c": project.colors[2] }}
    >
      <span className="plate-grid" aria-hidden="true" />
      <span className="plate-mark">{project.mark}</span>
      <span className="plate-meta">
        {project.tags[0]} — {project.year}
      </span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const previewRef = useRef(null);
  const position = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const frame = useRef(0);
  const pointerFine = useRef(false);

  useEffect(() => {
    pointerFine.current = window.matchMedia?.("(pointer: fine)").matches ?? false;
    if (!pointerFine.current) return undefined;

    const loop = () => {
      const p = position.current;
      p.x += (p.tx - p.x) * 0.14;
      p.y += (p.ty - p.y) * 0.14;
      if (previewRef.current) {
        previewRef.current.style.setProperty("--x", `${p.x}px`);
        previewRef.current.style.setProperty("--y", `${p.y}px`);
      }
      frame.current = requestAnimationFrame(loop);
    };

    frame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handleMove = (event) => {
    if (!pointerFine.current) return;
    position.current.tx = event.clientX;
    position.current.ty = event.clientY;
  };

  return (
    <section id="work" className="section projects" onPointerMove={handleMove}>
      <div className="shell">
        <div className="section-head projects-head">
          <div>
            <span className="label" data-reveal>
              01 — Selected work
            </span>
            <h2 className="section-title" data-reveal style={{ "--d": "80ms" }}>
              Things I've <em>built</em>
            </h2>
          </div>
          <a
            className="head-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--d": "160ms" }}
          >
            {String(projects.length).padStart(2, "0")} projects — GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div
          className="projects-list"
          data-reveal
          onPointerEnter={() => setHovering(true)}
          onPointerLeave={() => setHovering(false)}
        >
          {projects.map((project, index) => (
            <a
              key={project.title}
              className="project-row"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onPointerEnter={() => setActive(index)}
            >
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-title-wrap">
                <span className="project-name">{project.title}</span>
                <span className="project-blurb">{project.blurb}</span>
              </span>
              <span className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>
              <span className="project-year">{project.year}</span>
              <span className="project-arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="15" height="15">
                  <path
                    d="M3 13 13 3M5 3h8v8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <p className="projects-note" data-reveal>
          More experiments live on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . Each project links to its source.
        </p>
      </div>

      <div
        ref={previewRef}
        className={`project-preview ${hovering ? "is-on" : ""}`}
        aria-hidden="true"
      >
        {projects.map((project, index) => (
          <Plate key={project.title} project={project} active={index === active} />
        ))}
      </div>
    </section>
  );
}
