import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { componentSizesRem } from "../../tokens/componentSizes";
import { fontFamily, fontSizeRem, fontWeight } from "../../tokens/typography";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  size?: Size;
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
};

type Props = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

// Rule 4, Rule 13 — rem units
const h: Record<Size, string> = componentSizesRem.buttonHeight;
const px: Record<Size, string> = { sm: spacingRem.sm, md: spacingRem.md, lg: spacingRem.lg };
const fs: Record<Size, string> = { sm: fontSizeRem.xs, md: fontSizeRem.sm, lg: fontSizeRem.base };

const baseStyle = (size: Size, variant: Variant, fullWidth: boolean) => ({
  height: h[size],
  padding: `0 ${px[size]}`,
  fontSize: fs[size],
  fontFamily,
  fontWeight: fontWeight.semibold,
  borderRadius: radiiRem.sm,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacingRem.xs,
  cursor: "pointer",
  transition: "all 0.2s ease",
  border: variant === "secondary" ? "1px solid var(--secondary-border)" : "none",
  background: variant === "primary" ? "var(--accent-base)" : variant === "secondary" ? "var(--secondary-bg)" : "transparent",
  color: variant === "primary" ? "#fff" : variant === "ghost" ? "var(--accent-base)" : "var(--dominant-text)",
  width: fullWidth ? "100%" : undefined,
  letterSpacing: "-0.01em",
  textDecoration: "none",
});

export const Button: React.FC<Props> = ({
  size = "md",
  variant = "primary",
  fullWidth = false,
  icon,
  children,
  style,
  className,
  href,
  ...rest
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${className || ""}`;
  const combinedStyle = { ...baseStyle(size, variant, fullWidth), ...style };

  if (href) {
    return (
      <a
        className={classNames}
        style={combinedStyle}
        href={href}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      style={combinedStyle}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon}
      {children}
    </button>
  );
};
