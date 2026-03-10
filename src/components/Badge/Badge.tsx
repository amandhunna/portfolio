import React, { ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { fontFamily, fontSize, fontWeight, fontFamilyMono } from "../../tokens/typography";

interface Props {
  icon: ReactNode;
  name: string;
  source: string;
  accentColor?: string;
}

export const Badge: React.FC<Props> = ({ icon, name, source, accentColor = "#9fe817" }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: spacing.sm - 4, // 12 is not 8pt but gap inside a badge is visual exception
      padding: `${spacing.xs}px ${spacing.sm}px`,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radii.sm,
      backdropFilter: "blur(8px)",
      transition: "all 0.2s ease",
    }}
  >
    <div
      style={{
        width: 38,
        height: 38,
        borderRadius: radii.sm,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        background: `${accentColor}1a`,
        color: accentColor,
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily, fontSize: fontSize.sm, fontWeight: fontWeight.semibold, lineHeight: 1.2 }}>{name}</span>
      <span style={{ fontFamily: fontFamilyMono, fontSize: 11, color: "var(--dominant-text-muted)", marginTop: 2 }}>{source}</span>
    </div>
  </div>
);
