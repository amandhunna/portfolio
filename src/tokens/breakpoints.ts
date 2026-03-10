// Breakpoints — mobile-first (Rule 12). Use in min-width media queries.

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type BreakpointKey = keyof typeof breakpoints;

// Figma Tokens Studio / design docs: viewport breakpoints (px)
export const FIGMA_BREAKPOINTS = {
  "breakpoint/sm": { value: "640", type: "sizing", description: "Small (phone landscape)" },
  "breakpoint/md": { value: "768", type: "sizing", description: "Medium (tablet)" },
  "breakpoint/lg": { value: "1024", type: "sizing", description: "Large (desktop)" },
  "breakpoint/xl": { value: "1280", type: "sizing", description: "Extra large (wide)" },
};
