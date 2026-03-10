export { spacing, FIGMA_SPACING } from "./spacing";
export { lightColors, darkColors, FIGMA_COLORS_LIGHT, FIGMA_COLORS_DARK } from "./colors";
export { fontFamily, fontFamilyMono, fontSize, lineHeight, fontWeight, textStyle, FIGMA_TYPOGRAPHY } from "./typography";
export { radii, shadow, FIGMA_RADII } from "./radii";

// Combined Figma Tokens Studio export — paste into tokens.json for Figma plugin
import { FIGMA_SPACING } from "./spacing";
import { FIGMA_COLORS_LIGHT, FIGMA_COLORS_DARK } from "./colors";
import { FIGMA_TYPOGRAPHY } from "./typography";
import { FIGMA_RADII } from "./radii";

export const FIGMA_TOKENS_ALL = {
  light: { ...FIGMA_SPACING, ...FIGMA_COLORS_LIGHT, ...FIGMA_TYPOGRAPHY, ...FIGMA_RADII },
  dark: { ...FIGMA_SPACING, ...FIGMA_COLORS_DARK, ...FIGMA_TYPOGRAPHY, ...FIGMA_RADII },
};
