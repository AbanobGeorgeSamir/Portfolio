export const THEME_KEY = "ag-portfolio-theme";

export function getInitialTheme() {
  if (typeof document === "undefined") return "dark";

  const stored = (() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  })();

  if (stored === "light" || stored === "dark") return stored;

  const fromDocument = document.documentElement.dataset.theme;
  if (fromDocument === "light" || fromDocument === "dark") return fromDocument;

  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}
