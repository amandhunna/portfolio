import React, { ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

interface Props {
  children: ReactNode;
  padding?: "sm" | "md";
  transparent?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// padding sm=16, md=24 — Rule 2. radius 16 — Rule 4.
export const Card: React.FC<Props> = ({
  children, padding = "md", transparent = false, style, className,
}) => (
  <div
    className={className}
    style={{
      padding: padding === "sm" ? spacing.sm : spacing.md,
      background: transparent ? "transparent" : "var(--secondary-bg)",
      border: "1px solid var(--secondary-border)",
      borderRadius: radii.md,
      backdropFilter: transparent ? "blur(8px)" : undefined,
      WebkitBackdropFilter: transparent ? "blur(8px)" : undefined,
      transition: "all 0.2s ease",
      display: "flex",
      flexDirection: "column",
      ...style,
    }}
  >
    {children}
  </div>
);
