// Border radius — Rule 4: only 8 or 16. Rule 13: use rem via radiiRem or toRem().
// Figma: Create variables radius/sm = 8, radius/md = 16

import { toRem } from "./units";

export const radii = {
  sm: 8,
  md: 16,
  full: 9999,
} as const;

/** Rem values for use in styles (Rule 13). full stays as 9999px for pill shape. */
export const radiiRem = {
  sm: toRem(8),
  md: toRem(16),
  full: "9999px",
} as const;

export const shadow = {
  sm: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
  md: "0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.06)",
} as const;

export const FIGMA_RADII = {
  "radius/sm": { value: "8", type: "borderRadius" },
  "radius/md": { value: "16", type: "borderRadius" },
  "radius/full": { value: "9999", type: "borderRadius" },
};
