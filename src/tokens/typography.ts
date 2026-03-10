// Typography — modular scale 1.25x — Rule 3
// Base 16px → 13, 16, 20, 25, 31, 39, 49
// Figma: Create text styles named text/h1 through text/mono

export const fontFamily = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";
export const fontFamilyMono = "'JetBrains Mono', 'Fira Code', monospace";

export const fontSize = {
  xs: 13,
  sm: 14,
  base: 16,
  lg: 20,
  xl: 25,
  xxl: 31,
  xxxl: 39,
  display: 49,
} as const;

export const lineHeight = {
  tight: 1.1,
  heading: 1.2,
  normal: 1.5,
  relaxed: 1.6,
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// Pre-composed text styles for components
export const textStyle = {
  h1: { size: fontSize.display, height: lineHeight.tight, weight: fontWeight.bold },
  h2: { size: fontSize.xxxl, height: lineHeight.tight, weight: fontWeight.bold },
  h3: { size: fontSize.xxl, height: lineHeight.heading, weight: fontWeight.bold },
  h4: { size: fontSize.xl, height: lineHeight.heading, weight: fontWeight.semibold },
  body: { size: fontSize.base, height: lineHeight.normal, weight: fontWeight.regular },
  small: { size: fontSize.xs, height: lineHeight.normal, weight: fontWeight.regular },
  label: { size: fontSize.xs, height: lineHeight.normal, weight: fontWeight.medium },
  mono: { size: fontSize.sm, height: lineHeight.normal, weight: fontWeight.regular },
} as const;

export type TextStyleKey = keyof typeof textStyle;

// Figma Tokens Studio export
export const FIGMA_TYPOGRAPHY = {
  "text/h1": { value: { fontFamily: "DM Sans", fontSize: "49", lineHeight: "1.1", fontWeight: "700" }, type: "typography" },
  "text/h2": { value: { fontFamily: "DM Sans", fontSize: "39", lineHeight: "1.1", fontWeight: "700" }, type: "typography" },
  "text/h3": { value: { fontFamily: "DM Sans", fontSize: "31", lineHeight: "1.2", fontWeight: "700" }, type: "typography" },
  "text/h4": { value: { fontFamily: "DM Sans", fontSize: "25", lineHeight: "1.2", fontWeight: "600" }, type: "typography" },
  "text/body": { value: { fontFamily: "DM Sans", fontSize: "16", lineHeight: "1.5", fontWeight: "400" }, type: "typography" },
  "text/small": { value: { fontFamily: "DM Sans", fontSize: "13", lineHeight: "1.5", fontWeight: "400" }, type: "typography" },
  "text/label": { value: { fontFamily: "DM Sans", fontSize: "13", lineHeight: "1.5", fontWeight: "500" }, type: "typography" },
  "text/mono": { value: { fontFamily: "JetBrains Mono", fontSize: "14", lineHeight: "1.5", fontWeight: "400" }, type: "typography" },
};
