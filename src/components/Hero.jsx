import { useRef } from "react";
import { profile } from "../data";
import useLocalTime from "../hooks/useLocalTime";

export default function Hero() {
  const time = useLocalTime();
  const sectionRef = useRef(null);

  const handlePointer = (event) => {
    const node = sectionRef.current;
    if (!node || event.pointerType !== "mouse") return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--gx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--gy", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="top" className="hero" ref={sectionRef} onPointerMove={handlePointer}>
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner shell">
        <div className="hero-top">
          <span className="label hero-eyebrow">Portfolio — 2026</span>
          <span className="status">
            <i aria-hidden="true" />
            Available for work
          </span>
        </div>

        <h1 className="hero-name">
          <span className="hero-line" style={{ "--delay": "80ms" }}>
            <span>Abanob</span>
          </span>
          <span className="hero-line" style={{ "--delay": "200ms" }}>
            <span>
              George <em>Samir</em>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-lede" data-rise style={{ "--delay": "520ms" }}>
            Full-stack developer building considered web products — Laravel on
            the server, React on the client, and a stubborn attention to the
            details in between.
          </p>

          <div className="hero-actions" data-rise style={{ "--delay": "620ms" }}>
            <a className="btn btn-primary" href="#work">
              View selected work
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <dl className="hero-meta" data-rise style={{ "--delay": "720ms" }}>
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Full-stack web</dd>
          </div>
          <div>
            <dt>Local time</dt>
            <dd>{time || "—"} <span className="hero-meta-dim">EET</span></dd>
          </div>
          <div>
            <dt>Currently</dt>
            <dd>Open to opportunities</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
