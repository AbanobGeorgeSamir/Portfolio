import { useEffect, useRef, useState } from "react";
import { profile } from "../data";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      setScrolled(doc.scrollTop > 24);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.classList.add("menu-open");
    } else {
      root.classList.remove("menu-open");
    }

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      root.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Abanob George — back to top">
          <span className="brand-mark">AG</span>
          <span className="brand-name">Abanob George</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
                </g>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>

          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Let's talk
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
              <path
                d="M3 13 13 3M5 3h8v8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            type="button"
            className={`menu-btn ${open ? "is-open" : ""}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="nav-progress" aria-hidden="true">
          <i ref={progressRef} />
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="menu-links" aria-label="Mobile">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ "--i": index }}
            >
              <span className="menu-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </>
  );
}
