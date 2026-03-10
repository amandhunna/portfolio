import React, { ReactNode } from "react";
import { spacing } from "../../tokens/spacing";
import { radii } from "../../tokens/radii";
import { fontFamily, fontFamilyMono, fontSize, fontWeight, lineHeight } from "../../tokens/typography";

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
      padding: spacing.sm,
      background: "transparent",
      border: "1px solid var(--secondary-border)",
      borderRadius: radii.md,
      backdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
      transition: "all 0.2s ease",
    }}
  >
    <span style={{ fontFamily: fontFamilyMono, fontSize: 11, color: "var(--dominant-text-muted)", marginBottom: spacing.xs / 2 }}>{date}</span>
    <h3 style={{ fontFamily, fontSize: fontSize.base, fontWeight: fontWeight.bold, lineHeight: lineHeight.heading, margin: 0, marginBottom: spacing.xs / 2 }}>{title}</h3>
    <p style={{ fontFamily, fontSize: fontSize.xs, color: "var(--dominant-text-muted)", lineHeight: lineHeight.normal, flex: 1, margin: 0 }}>{excerpt}</p>
    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: spacing.xs, fontSize: 11, fontWeight: fontWeight.medium, color: "var(--accent-base)" }}>
      {tagIcon} {tag}
    </span>
  </a>
);
