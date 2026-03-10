// Component size tokens — Rule 4 (buttons, inputs, touch targets). Rule 13: use rem in app.

import { toRem } from "./units";

export const componentSizes = {
  buttonHeight: { sm: 32, md: 40, lg: 48 },
  inputHeight: { md: 40, lg: 48 },
  tableRow: { comfortable: 48, compact: 40, dense: 32 },
  /** Icon button (e.g. theme toggle) */
  iconButton: 40,
  /** Min touch target (a11y) */
  touchTargetMin: 44,
} as const;

/** Rem values for use in inline styles (Rule 13). */
export const componentSizesRem = {
  buttonHeight: { sm: toRem(32), md: toRem(40), lg: toRem(48) },
  inputHeight: { md: toRem(40), lg: toRem(48) },
  iconButton: toRem(40),
  touchTargetMin: toRem(44),
} as const;

// Figma: already in figma-tokens.json under "component"
export const FIGMA_COMPONENT_SIZES = {
  "component/button-sm": { value: "32", type: "sizing", description: "Button small height" },
  "component/button-md": { value: "40", type: "sizing", description: "Button medium height" },
  "component/button-lg": { value: "48", type: "sizing", description: "Button large height" },
  "component/input-md": { value: "40", type: "sizing", description: "Input medium height" },
  "component/input-lg": { value: "48", type: "sizing", description: "Input large height" },
  "component/table-comfortable": { value: "48", type: "sizing", description: "Table row comfortable" },
  "component/table-compact": { value: "40", type: "sizing", description: "Table row compact" },
  "component/table-dense": { value: "32", type: "sizing", description: "Table row dense" },
};
