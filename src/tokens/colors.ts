// Color tokens — 60-30-10 rule — Rule 5
// Figma: Create color styles named color/dominant/bg, color/accent/base, etc.

// Light theme — pastel palette (soft, muted, high contrast retained for a11y)
export const lightColors = {
  dominant: { bg: "#F5F3F9", text: "#2D2A38", textMuted: "#6B6780" },
  secondary: { bg: "#FDFCFF", border: "#E5E0ED" },
  accent: {
    base: "#6B8FD4",
    hover: "#5A7BC4",
    light: "#E8EEFA",
    glow: "rgba(107,143,212,0.2)",
    gradientEnd: "#A78BCC",
  },
  semantic: { error: "#D4A0A0", success: "#8FC99F", warning: "#D4C078" },
  globe: { wire: "#7B9EE8", node: "#7B9EE8", arc: "#A78BCC" },
};

export const darkColors = {
  dominant: { bg: "#0A0D12", text: "#E6EDF3", textMuted: "#8B949E" },
  secondary: { bg: "#12161E", border: "#1E2330" },
  accent: {
    base: "#38BDF8",
    hover: "#7DD3FC",
    light: "rgba(56,189,248,0.12)",
    glow: "rgba(56,189,248,0.25)",
    gradientEnd: "#A78BFA",
  },
  semantic: { error: "#F87171", success: "#4ADE80", warning: "#FBBF24" },
  globe: { wire: "#38BDF8", node: "#38BDF8", arc: "#A78BFA" },
};

// CSS custom properties mapping (set by ThemeProvider)
export const cssVars = {
  "--dominant-bg": "dominant.bg",
  "--dominant-text": "dominant.text",
  "--dominant-text-muted": "dominant.textMuted",
  "--secondary-bg": "secondary.bg",
  "--secondary-border": "secondary.border",
  "--accent-base": "accent.base",
  "--accent-hover": "accent.hover",
  "--accent-light": "accent.light",
  "--accent-glow": "accent.glow",
  "--accent-gradient-end": "accent.gradientEnd",
  "--error": "semantic.error",
  "--success": "semantic.success",
  "--warning": "semantic.warning",
} as const;

// Figma Tokens Studio export (light = pastel)
export const FIGMA_COLORS_LIGHT = {
  "color/dominant/bg": { value: "#F5F3F9", type: "color" },
  "color/dominant/text": { value: "#2D2A38", type: "color" },
  "color/dominant/text-muted": { value: "#6B6780", type: "color" },
  "color/secondary/bg": { value: "#FDFCFF", type: "color" },
  "color/secondary/border": { value: "#E5E0ED", type: "color" },
  "color/accent/base": { value: "#6B8FD4", type: "color" },
  "color/accent/hover": { value: "#5A7BC4", type: "color" },
  "color/accent/light": { value: "#E8EEFA", type: "color" },
  "color/semantic/error": { value: "#D4A0A0", type: "color" },
  "color/semantic/success": { value: "#8FC99F", type: "color" },
  "color/semantic/warning": { value: "#D4C078", type: "color" },
};

export const FIGMA_COLORS_DARK = {
  "color/dominant/bg": { value: "#0A0D12", type: "color" },
  "color/dominant/text": { value: "#E6EDF3", type: "color" },
  "color/dominant/text-muted": { value: "#8B949E", type: "color" },
  "color/secondary/bg": { value: "#12161E", type: "color" },
  "color/secondary/border": { value: "#1E2330", type: "color" },
  "color/accent/base": { value: "#38BDF8", type: "color" },
  "color/accent/hover": { value: "#7DD3FC", type: "color" },
  "color/accent/light": { value: "rgba(56,189,248,0.12)", type: "color" },
  "color/semantic/error": { value: "#F87171", type: "color" },
  "color/semantic/success": { value: "#4ADE80", type: "color" },
  "color/semantic/warning": { value: "#FBBF24", type: "color" },
};
