import type { ExperienceEntry } from "./types";

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: "Senior Frontend Engineer",
    company: "AiDash",
    date: "Jun 2022 — Present · India",
    summary:
      "Core engineer on CRIS Frontend — a pnpm + Turborepo monorepo powering wildfire risk intelligence, near-term risk maps, and mitigation planning for utility customers.",
    highlights: [
      {
        title: "Map Platform & Geospatial",
        body:
          "Architected @cris/map — shared map package across risk, essentials, and planning products. Designed horizon-based source/layer pipeline with a config registry supporting 10+ layer types, wildfire overlays, KPI popups, and per-tenant S3 config. Led extraction into a reusable workspace package. Built end-to-end geospatial pipelines for 500K+ network segments — QGIS/PyQGIS layer prep, vector tile generation, and Mapbox GL performance tuning.",
      },
      {
        title: "Planning & Product",
        body:
          "Built Create Plan geography workflows end-to-end: county/circuit hierarchy drill-down, draw/lasso AOI selection, virtual circuit lists, and feature-state styling for utility wildfire mitigation planning. Delivered short and long-term planning packages and Map Experience shell for composable map-first product modes.",
      },
      {
        title: "Monorepo & Platform",
        body:
          "Led Phase 1 monorepo migration from a single Vite app to apps/shell + workspace packages — enabled /cris/planning to ship independently without forking. Migrated 100+ static assets and i18n locales to S3/CloudFront, cutting 60k+ lines from the build and centralizing per-tenant config.",
      },
      {
        title: "AI Developer Experience",
        body:
          "Built .agent/ as the single source of truth for AI-assisted engineering: 14 coding standards, 4 domain skills, 6 workflow commands, 13-section PR checklist, and post-agent typecheck hooks — adopted across Cursor and Claude Code for multi-tool consistency.",
      },
    ],
    pills: ["React 19", "TypeScript", "Mapbox GL", "pnpm", "Turborepo", "MUI 7"],
  },
  {
    role: "Software Engineer",
    company: "Swiggy",
    date: "Oct 2021 — Jun 2022",
    summary:
      "Design language system — 80% fewer UI inconsistencies. Bundle size 3.5s → 1.2s, 10M+ DAU.",
  },
  {
    role: "Deputy Manager",
    company: "Jio",
    date: "Sep 2020 — Oct 2021",
    summary:
      "Re-engineered React apps (>300Cr ARR) — 2× performance. 50% smaller codebase.",
  },
  {
    role: "Associate SE",
    company: "Successive Technologies",
    date: "Jul 2018 — Sep 2020",
    summary:
      "Drag-and-drop web builder — 1,500+ businesses. REST → GraphQL migration — 800ms → 250ms.",
  },
];
