import { useEffect, useRef, useState } from "react";

const START = 900; // ms until the intro is complete
const EXIT = 1050;

const prefersReducedMotion =
  typeof window !== "undefined" &&
  (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(prefersReducedMotion ? 100 : 0);
  const [leaving, setLeaving] = useState(prefersReducedMotion);
  const [hidden, setHidden] = useState(prefersReducedMotion);
  const doneRef = useRef(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      onDone();
      return undefined;
    }

    let frame = 0;
    const started = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - started) / START);
      setPct(Math.round(progress * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        onDone();
        setLeaving(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  useEffect(() => {
    if (!leaving || hidden) return undefined;
    const timer = setTimeout(() => setHidden(true), EXIT);
    return () => clearTimeout(timer);
  }, [leaving, hidden]);

  return (
    <div
      className={`preloader ${leaving ? "is-leaving" : ""} ${hidden ? "is-hidden" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-center">
        <span className="preloader-mark">Abanoub George</span>
        <span className="preloader-sub">Portfolio — 2026</span>
        <div className="preloader-bar">
          <i style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
      </div>
      <span className="preloader-count">{String(pct).padStart(3, "0")}</span>
    </div>
  );
}
