import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";

type Split = "60-40" | "golden" | "3-col" | "full";

interface Props {
  split?: Split;
  gap?: "sm" | "md" | "lg";
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const grid: Record<Split, string> = {
  "60-40": "3fr 2fr",
  golden: "1.618fr 1fr",
  "3-col": "1fr 1fr 1fr",
  full: "1fr",
};

const gapMap = { sm: spacingRem.sm, md: spacingRem.md, lg: spacingRem.lg } as const;

export const Layout: React.FC<Props> = ({ split = "full", gap = "md", children, style, className }) => (
  <div
    className={className}
    style={{ display: "grid", gridTemplateColumns: grid[split], gap: gapMap[gap], width: "100%", ...style }}
  >
    {children}
  </div>
);
