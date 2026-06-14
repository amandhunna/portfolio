import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Nav } from "./components/Nav";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { About } from "./sections/About";
import { AiWorkflow } from "./sections/AiWorkflow";
import { Badges } from "./sections/Badges";
import { Blog } from "./sections/Blog";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import "./styles/global.css";

const Globe = lazy(() =>
  import("./components/Globe").then((module) => ({ default: module.Globe })),
);

function Portfolio() {
  useScrollReveal();

  return (
    <>
      <Suspense fallback={null}>
        <Globe />
      </Suspense>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <AiWorkflow />
        <Skills />
        <Badges />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
