import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "spatial",
  "experience",
  "projects",
  "ai-workflow",
  "skills",
  "badges",
  "blog",
  "contact",
];
const OFFSET = 120;

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      let current = "hero";
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && sy >= el.offsetTop - OFFSET) {
          current = SECTION_IDS[i];
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return activeId;
}
