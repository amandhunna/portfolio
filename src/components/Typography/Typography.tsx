import React, { ReactNode } from "react";
import { fontFamily, fontFamilyMono, textStyle, fontSizeRem, TextStyleKey } from "../../tokens/typography";

interface Props {
  variant?: TextStyleKey;
  as?: keyof React.JSX.IntrinsicElements;
  color?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const tagMap: Record<TextStyleKey, string> = {
  h1: "h1", h2: "h2", h3: "h3", h4: "h4",
  body: "p", small: "p", label: "span", mono: "code",
};

const variantToSizeKey: Record<TextStyleKey, keyof typeof fontSizeRem> = {
  h1: "display", h2: "xxxl", h3: "xxl", h4: "xl",
  body: "base", small: "xs", label: "xs", mono: "sm",
};

export const Typography: React.FC<Props> = ({
  variant = "body", as, color, children, style, className,
}) => {
  const Tag = (as || tagMap[variant]) as keyof React.JSX.IntrinsicElements;
  const ts = textStyle[variant];
  return (
    <Tag
      className={className}
      style={{
        fontFamily: variant === "mono" ? fontFamilyMono : fontFamily,
        fontSize: fontSizeRem[variantToSizeKey[variant]],
        lineHeight: ts.height,
        fontWeight: ts.weight,
        color: color || "var(--dominant-text)",
        margin: 0,
        letterSpacing: variant.startsWith("h") ? "-0.03em" : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};
