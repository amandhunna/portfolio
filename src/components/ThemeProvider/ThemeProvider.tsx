import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { lightColors, darkColors } from "../../tokens/colors";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

function applyTheme(theme: Theme) {
  const c = theme === "dark" ? darkColors : lightColors;
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.setProperty("--dominant-bg", c.dominant.bg);
  root.style.setProperty("--dominant-text", c.dominant.text);
  root.style.setProperty("--dominant-text-muted", c.dominant.textMuted);
  root.style.setProperty("--secondary-bg", c.secondary.bg);
  root.style.setProperty("--secondary-border", c.secondary.border);
  root.style.setProperty("--accent-base", c.accent.base);
  root.style.setProperty("--accent-hover", c.accent.hover);
  root.style.setProperty("--accent-light", c.accent.light);
  root.style.setProperty("--accent-glow", c.accent.glow);
  root.style.setProperty("--error", c.semantic.error);
  root.style.setProperty("--success", c.semantic.success);
  root.style.setProperty("--warning", c.semantic.warning);
  root.style.setProperty("--globe-wire", c.globe.wire);
  root.style.setProperty("--globe-node", c.globe.node);
  root.style.setProperty("--globe-arc", c.globe.arc);
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved) return saved;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
