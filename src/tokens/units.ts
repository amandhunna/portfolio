// Rule 13 — rem/em units. Base 16px so 1rem = 16px.

export const BASE_FONT_PX = 16;

/** Convert px to rem for use in styles (base 16px). */
export function toRem(px: number): string {
  return `${px / BASE_FONT_PX}rem`;
}
