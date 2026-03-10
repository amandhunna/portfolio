import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { toRem } from "../../tokens/units";

interface TimelineItemProps {
  isFirst?: boolean;
  children: ReactNode;
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className }) => (
  <div
    className={className}
    style={{ position: "relative", display: "flex", flexDirection: "column", paddingLeft: spacingRem.lg }}
  >
    {/* Vertical line — position overridden in CSS for .timeline-wrap so it aligns with dots on mobile */}
    <div
      className="timeline-line"
      style={{
        position: "absolute",
        left: toRem(7),
        top: 0,
        bottom: 0,
        width: toRem(3),
        background: "var(--secondary-border)",
        borderRadius: toRem(2),
      }}
    />
    {children}
  </div>
);

export const TimelineItem: React.FC<TimelineItemProps> = ({ isFirst = false, children }) => (
  <div style={{ position: "relative", paddingBottom: spacingRem.md, paddingLeft: spacingRem.sm }}>
    {/* Dot */}
    <div
      className="timeline-dot"
      style={{
        position: "absolute",
        left: `-${spacingRem.lg}`,
        top: toRem(4),
        width: isFirst ? toRem(19) : toRem(17),
        height: isFirst ? toRem(19) : toRem(17),
        borderRadius: radiiRem.full,
        border: "3px solid var(--accent-base)",
        background: isFirst ? "var(--accent-base)" : "var(--dominant-bg)",
        boxShadow: isFirst ? "0 0 0 4px var(--accent-light)" : undefined,
        zIndex: 2,
      }}
    />
    {/* Content card */}
    <div
      style={{
        padding: `${spacingRem.sm} ${spacingRem.md}`,
        background: "transparent",
        border: "1px solid var(--secondary-border)",
        borderRadius: radiiRem.md,
        backdropFilter: "blur(8px)",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </div>
  </div>
);
