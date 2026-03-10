import React, { ReactNode } from "react";
import { spacingRem } from "../../tokens/spacing";
import { radiiRem } from "../../tokens/radii";
import { fontFamily, fontFamilyMono, fontSizeRem, fontWeight, lineHeight } from "../../tokens/typography";

interface Props {
  href: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  tagIcon?: ReactNode;
}

export const BlogCard: React.FC<Props> = ({ href, date, title, excerpt, tag, tagIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: spacingRem.sm,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radiiRem.md,
      backdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
      transition: "all 0.2s ease",
    }}
  >
    <span style={{ fontFamily: fontFamilyMono, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)", marginBottom: "0.25rem" }}>{date}</span>
    <h3 style={{ fontFamily, fontSize: fontSizeRem.base, fontWeight: fontWeight.bold, lineHeight: lineHeight.heading, margin: 0, marginBottom: "0.25rem" }}>{title}</h3>
    <p style={{ fontFamily, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)", lineHeight: lineHeight.normal, flex: 1, margin: 0 }}>{excerpt}</p>
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", marginTop: spacingRem.xs, fontSize: fontSizeRem.xs, fontWeight: fontWeight.medium, color: "var(--accent-base)" }}>
      {tagIcon} {tag}
    </span>
  </a>
);
