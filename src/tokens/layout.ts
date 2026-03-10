// Layout tokens — max-width, nav height, section padding (Rule 2: 8pt grid, Rule 13: rem)
// Use these in Nav, App, and global.css (values must stay in sync with CSS)

import { spacing } from "./spacing";
import { toRem } from "./units";

export const layout = {
  /** Max content width (px) */
  maxWidth: 1100,
  /** Nav bar height — 64px (Rule 2) */
  navHeight: spacing.xxxl,
  /** Section padding Y mobile — 48px */
  sectionPaddingYMobile: spacing.xxl,
  /** Section padding Y desktop — 80px (spacing.4xl) */
  sectionPaddingYDesktop: spacing["4xl"],
  /** Touch target minimum (a11y) */
  touchTargetMin: 44,
} as const;

/** Rem values for use in styles (Rule 13). */
export const layoutRem = {
  maxWidth: "68.75rem",
  navHeight: toRem(layout.navHeight),
  touchTargetMin: toRem(layout.touchTargetMin),
} as const;

export const FIGMA_LAYOUT = {
  "layout/maxWidth": { value: "1100", type: "sizing", description: "Max content width" },
  "layout/navHeight": { value: "64", type: "sizing", description: "Nav bar height" },
};
