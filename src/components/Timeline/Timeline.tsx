import React, { ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";

interface TimelineItemProps {
  isFirst?: boolean;
  children: ReactNode;
}

export const Timeline: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div style={{ position: "relative", display: "flex", flexDirection: "column", paddingLeft: spacing.lg }}>
    {/* Vertical line */}
    <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 3, background: "var(--secondary-border)", borderRadius: 2 }} />
    {children}
  </div>
);

export const TimelineItem: React.FC<TimelineItemProps> = ({ isFirst = false, children }) => (
  <div style={{ position: "relative", paddingBottom: spacing.md, paddingLeft: spacing.sm }}>
    {/* Dot */}
    <div
      style={{
        position: "absolute",
        left: -spacing.lg,
        top: 4,
        width: isFirst ? 19 : 17,
        height: isFirst ? 19 : 17,
        borderRadius: radii.full,
        border: `3px solid var(--accent-base)`,
        background: isFirst ? "var(--accent-base)" : "var(--dominant-bg)",
        boxShadow: isFirst ? "0 0 0 4px var(--accent-light)" : undefined,
        zIndex: 2,
      }}
    />
    {/* Content card */}
    <div
      style={{
        padding: `${spacing.sm}px ${spacing.md}px`,
        background: "transparent",
        border: "1px solid var(--secondary-border)",
        borderRadius: radii.md,
        backdropFilter: "blur(8px)",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </div>
  </div>
);
