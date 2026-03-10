import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";

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

// Heights: 32, 40, 48 — Rule 4
const h: Record<Size, number> = { sm: 32, md: 40, lg: 48 };
const px: Record<Size, number> = { sm: spacing.sm, md: spacing.md, lg: spacing.lg };
const fs: Record<Size, number> = { sm: fontSize.xs, md: fontSize.sm, lg: fontSize.base };

const baseStyle = (size: Size, variant: Variant, fullWidth: boolean) => ({
  height: h[size],
  padding: `0 ${px[size]}px`,
  fontSize: fs[size],
  fontFamily,
  fontWeight: fontWeight.semibold,
  borderRadius: radii.sm,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.xs,
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
