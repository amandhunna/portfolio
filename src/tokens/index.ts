export { toRem } from "./units";
export { spacing, spacingRem, FIGMA_SPACING } from "./spacing";
export { breakpoints, FIGMA_BREAKPOINTS } from "./breakpoints";
export { lightColors, darkColors, FIGMA_COLORS_LIGHT, FIGMA_COLORS_DARK } from "./colors";
export { fontFamily, fontFamilyMono, fontSize, fontSizeRem, lineHeight, fontWeight, textStyle, FIGMA_TYPOGRAPHY } from "./typography";
export { radii, radiiRem, shadow, FIGMA_RADII } from "./radii";
export { layout, layoutRem, FIGMA_LAYOUT } from "./layout";
export { componentSizes, componentSizesRem, FIGMA_COMPONENT_SIZES } from "./componentSizes";

// Combined Figma Tokens Studio export — paste into tokens.json for Figma plugin
import { FIGMA_SPACING } from "./spacing";
import { FIGMA_BREAKPOINTS } from "./breakpoints";
import { FIGMA_COLORS_LIGHT, FIGMA_COLORS_DARK } from "./colors";
import { FIGMA_TYPOGRAPHY } from "./typography";
import { FIGMA_RADII } from "./radii";
import { FIGMA_LAYOUT } from "./layout";
import { FIGMA_COMPONENT_SIZES } from "./componentSizes";

export const FIGMA_TOKENS_ALL = {
  light: {
    ...FIGMA_SPACING,
    ...FIGMA_BREAKPOINTS,
    ...FIGMA_COLORS_LIGHT,
    ...FIGMA_TYPOGRAPHY,
    ...FIGMA_RADII,
    ...FIGMA_LAYOUT,
    ...FIGMA_COMPONENT_SIZES,
  },
  dark: {
    ...FIGMA_SPACING,
    ...FIGMA_BREAKPOINTS,
    ...FIGMA_COLORS_DARK,
    ...FIGMA_TYPOGRAPHY,
    ...FIGMA_RADII,
    ...FIGMA_LAYOUT,
    ...FIGMA_COMPONENT_SIZES,
  },
};
