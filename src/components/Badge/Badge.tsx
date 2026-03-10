import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { fontFamily, fontSizeRem, fontWeight, fontFamilyMono } from "../../tokens/typography";

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
      gap: "0.75rem",
      padding: `${spacingRem.xs} ${spacingRem.sm}`,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radiiRem.sm,
      backdropFilter: "blur(8px)",
      transition: "all 0.2s ease",
    }}
  >
    <div
      style={{
        width: spacingRem.xl,
        height: spacingRem.xl,
        borderRadius: radiiRem.sm,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: fontSizeRem.base,
        background: `${accentColor}1a`,
        color: accentColor,
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontFamily, fontSize: fontSizeRem.sm, fontWeight: fontWeight.semibold, lineHeight: 1.2 }}>{name}</span>
      <span style={{ fontFamily: fontFamilyMono, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)", marginTop: "0.25rem" }}>{source}</span>
    </div>
  </div>
);
