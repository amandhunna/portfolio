// 8pt grid — Rule 2
// Figma: Create variables named spacing/xs through spacing/3xl

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
} as const;

export type SpacingKey = keyof typeof spacing;

// Figma Tokens Studio compatible export
export const FIGMA_SPACING = {
  "spacing/xs": { value: "8", type: "spacing" },
  "spacing/sm": { value: "16", type: "spacing" },
  "spacing/md": { value: "24", type: "spacing" },
  "spacing/lg": { value: "32", type: "spacing" },
  "spacing/xl": { value: "40", type: "spacing" },
  "spacing/2xl": { value: "48", type: "spacing" },
  "spacing/3xl": { value: "64", type: "spacing" },
};
