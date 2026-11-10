import { useEffect, useRef } from "react";

/**
 * A small, lerped cursor that only appears on fine pointers.
 * It never replaces keyboard focus or native interaction.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (!finePointer) return undefined;

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    root.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const soft = { x: target.x, y: target.y };
    let frame = 0;

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
    };

    const onOver = (event) => {
      const interactive = event.target.closest?.(
        "a, button, [data-cursor], input, textarea, select"
      );
      root.classList.toggle("is-hovering", Boolean(interactive));
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      dot.style.opacity = "";
      ring.style.opacity = "";
    };

    const loop = () => {
      soft.x += (target.x - soft.x) * 0.16;
      soft.y += (target.y - soft.y) * 0.16;
      ring.style.transform = `translate3d(${soft.x}px, ${soft.y}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor", "is-hovering");
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
