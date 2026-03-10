// 8pt grid — Rule 2. Rule 13: use rem in app via spacingRem or toRem().
// Figma: Create variables named spacing/xs through spacing/3xl

import { toRem } from "./units";

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64,
  /** 80 — section padding desktop, 8pt grid */
  "4xl": 80,
} as const;

export type SpacingKey = keyof typeof spacing;

/** Rem values for use in CSS and inline styles (Rule 13). Base 16px. */
export const spacingRem = {
  xs: toRem(8),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(32),
  xl: toRem(40),
  xxl: toRem(48),
  xxxl: toRem(64),
  "4xl": toRem(80),
} as const;

// Figma Tokens Studio compatible export
export const FIGMA_SPACING = {
  "spacing/xs": { value: "8", type: "spacing" },
  "spacing/sm": { value: "16", type: "spacing" },
  "spacing/md": { value: "24", type: "spacing" },
  "spacing/lg": { value: "32", type: "spacing" },
  "spacing/xl": { value: "40", type: "spacing" },
  "spacing/2xl": { value: "48", type: "spacing" },
  "spacing/3xl": { value: "64", type: "spacing" },
  "spacing/4xl": { value: "80", type: "spacing" },
};
