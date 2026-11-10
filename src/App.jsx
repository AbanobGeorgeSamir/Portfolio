import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useRevealOnScroll from "./hooks/useRevealOnScroll";
import { getInitialTheme, THEME_KEY } from "./hooks/useTheme";

export default function App() {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useRevealOnScroll();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("is-ready", ready);
    root.classList.toggle("is-loading", !ready);

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* storage may be unavailable */
    }
  }, [ready, theme]);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
