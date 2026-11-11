import { profile } from "../data";
import useLocalTime from "../hooks/useLocalTime";

export default function Footer() {
  const time = useLocalTime();

  return (
    <footer className="footer">
      <div className="shell footer-top">
        <a className="footer-mark" href="#top" aria-label="Back to top">
          <span className="footer-monogram">AG</span>
          <span className="footer-meta">
            {profile.name}
            <small>Full-stack developer</small>
          </span>
        </a>

        <button
          type="button"
          className="footer-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
            <path
              d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="footer-word" aria-hidden="true">
        Abanoub George
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Abanoub George Samir</span>
        <span className="footer-clock">
          <i aria-hidden="true" /> {time || "—"} South Sinai
        </span>
        <span className="footer-build">Designed &amp; built in React</span>
      </div>
    </footer>
  );
}
