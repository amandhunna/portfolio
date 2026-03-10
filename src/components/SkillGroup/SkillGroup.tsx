import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { fontFamily, fontSizeRem, fontWeight } from "../../tokens/typography";

interface SkillItem {
  icon: ReactNode;
  label: string;
}

interface Props {
  title: string;
  titleIcon?: ReactNode;
  items: SkillItem[];
}

export const SkillGroup: React.FC<Props> = ({ title, titleIcon, items }) => (
  <div
    style={{
      padding: `${spacingRem.sm} ${spacingRem.sm}`,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radiiRem.sm,
      backdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      gap: spacingRem.xs,
      transition: "all 0.2s ease",
    }}
  >
    <span style={{ fontFamily, fontSize: fontSizeRem.xs, fontWeight: fontWeight.semibold, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-base)", display: "flex", alignItems: "center", gap: spacingRem.xs }}>
      {titleIcon} {title}
    </span>
    <div style={{ display: "flex", gap: spacingRem.xs, flexWrap: "wrap" }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: spacingRem.xs, fontFamily, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)" }}>
          <span style={{ color: "var(--accent-base)" }}>{item.icon}</span> {item.label}
        </span>
      ))}
    </div>
  </div>
);
