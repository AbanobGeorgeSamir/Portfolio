import { useEffect, useState } from "react";
import { profile, socials } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell">
        <span className="label" data-reveal>
          05 — Contact
        </span>

        <h2 className="contact-title" data-reveal style={{ "--d": "80ms" }}>
          Have something <em>worth building?</em>
        </h2>

        <p className="contact-lede" data-reveal style={{ "--d": "150ms" }}>
          I'm open to full-time roles and freelance work. Tell me what you're
          making and I'll reply within a day.
        </p>

        <div className="contact-main" data-reveal style={{ "--d": "220ms" }}>
          <a
            className="contact-mail"
            href={`mailto:${profile.email}?subject=Portfolio%20Contact`}
          >
            <span>{profile.email}</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path
                d="M5 19 19 5M7 5h12v12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="contact-actions">
            <button type="button" className="btn btn-primary" onClick={copyEmail}>
              {copied ? "Copied to clipboard" : "Copy email"}
            </button>
            <a
              className="btn btn-ghost"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <ul className="social-list" data-reveal style={{ "--d": "280ms" }}>
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <span className="social-label">{social.label}</span>
                <span className="social-meta">{social.meta}</span>
                <span className="social-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
