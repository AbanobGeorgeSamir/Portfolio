import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<div aria-busy="true" />}>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
