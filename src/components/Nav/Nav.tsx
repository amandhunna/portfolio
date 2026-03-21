import { useState } from "react";
import { useTheme } from "../ThemeProvider";
import { useActiveSection } from "../../hooks/useActiveSection";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { layoutRem } from "../../tokens/layout";
import { componentSizesRem } from "../../tokens/componentSizes";

const LINKS: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const activeId = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--secondary-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--secondary-border)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="nav-container"
        style={{
          maxWidth: layoutRem.maxWidth,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: layoutRem.navHeight,
        }}
      >
        <a
          href="#hero"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--dominant-text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          PT<span style={{ color: "var(--accent-base)" }}>.</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: spacingRem.sm }}>
          <ul
            id="navLinks"
            className={`nav-links ${menuOpen ? "open" : ""}`}
            style={{ listStyle: "none", margin: 0, padding: 0 }}
            aria-hidden={!menuOpen}
          >
            {LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: "none",
                      color: isActive ? "var(--accent-base)" : "var(--dominant-text-muted)",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: componentSizesRem.iconButton,
              height: componentSizesRem.iconButton,
              borderRadius: radiiRem.sm,
              background: "var(--secondary-bg)",
              border: "1px solid var(--secondary-border)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--dominant-text-muted)",
              transition: "all 0.3s ease",
            }}
          >
            {theme === "dark" ? (
              <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              flexDirection: "column",
              gap: 5,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: spacingRem.xs,
              minHeight: componentSizesRem.touchTargetMin,
              minWidth: componentSizesRem.touchTargetMin,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>
    </nav>
  );
}
