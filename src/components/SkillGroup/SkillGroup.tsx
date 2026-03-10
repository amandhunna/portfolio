import React, { ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";

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
      padding: `${spacing.sm}px ${spacing.sm}px`,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radii.sm,
      backdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      gap: spacing.xs,
      transition: "all 0.2s ease",
    }}
  >
    <span style={{ fontFamily, fontSize: 11, fontWeight: fontWeight.semibold, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-base)", display: "flex", alignItems: "center", gap: spacing.xs }}>
      {titleIcon} {title}
    </span>
    <div style={{ display: "flex", gap: spacing.xs, flexWrap: "wrap" }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: spacing.xs, fontFamily, fontSize: fontSize.xs, color: "var(--dominant-text-muted)" }}>
          <span style={{ color: "var(--accent-base)" }}>{item.icon}</span> {item.label}
        </span>
      ))}
    </div>
  </div>
);
