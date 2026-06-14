import type { ContentCardData } from "./types";

export const AI_WORKFLOW_CARDS: ContentCardData[] = [
  {
    title: "Agent Operating System",
    subtitle: ".agent/ \u00B7 rules, skills, commands",
    body:
      "Single source of truth for AI-assisted engineering: 14 coding standards, 4 domain skills, 6 workflow commands, and a 13-section PR checklist \u2014 mirrored into Cursor rules and Claude Code entry points so every tool follows the same contract.",
    pills: [],
  },
  {
    title: "Context Engineering",
    subtitle: "Scoped skills vs. whole-repo dumps",
    body:
      "Domain-scoped skills for map platform, shell features, and planning packages. Navigation anchors in long docs, multi-skill composition, and targeted context windows to reduce hallucination and keep agent sessions production-grade.",
    pills: [],
  },
  {
    title: "MCP Integrations",
    subtitle: "Figma \u00B7 Playwright \u00B7 Datadog \u00B7 QGIS",
    body:
      "Design-to-code via Figma MCP, automated E2E via Playwright, production observability via Datadog, and geospatial data prep via QGIS MCP \u2014 all wired with post-agent typecheck hooks for zero-regression handoff.",
    pills: [],
    link: {
      href: "https://www.linkedin.com/posts/amandhunna-ln_hackaithon-hackathon-agenticai-activity-7343324539860209667-AjPa/",
      label: "Hackathon AI RCA \u2192",
    },
  },
];
