import { useEffect } from "react";

/**
 * Reveals every [data-reveal] element once it enters the viewport.
 * Staggering is handled with the --d custom property on each element.
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);
}
