import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";

interface Props {
  children: ReactNode;
  padding?: "sm" | "md";
  transparent?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

// Rule 2, Rule 4, Rule 13 — rem units
export const Card: React.FC<Props> = ({
  children, padding = "md", transparent = false, style, className,
}) => (
  <div
    className={className}
    style={{
      padding: padding === "sm" ? spacingRem.sm : spacingRem.md,
      background: transparent ? "transparent" : "var(--secondary-bg)",
      border: "1px solid var(--secondary-border)",
      borderRadius: radiiRem.md,
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
