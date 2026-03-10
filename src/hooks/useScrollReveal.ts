import { useEffect } from "react";

const SELECTORS = ".fade-up, .reveal-item";
const OPTIONS: IntersectionObserverInit = {
  threshold: 0.05,
  rootMargin: "0px 0px -60px 0px",
};

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, OPTIONS);

    const elements = document.querySelectorAll(SELECTORS);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
