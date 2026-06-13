import type { ContentCardData } from "./types";

export const PROJECT_CARDS: ContentCardData[] = [
  {
    title: "CRIS Monorepo Migration",
    subtitle: "Tech lead \u00B7 pnpm + Turborepo",
    body:
      "Led Phase 1 migration from a single Vite app to apps/shell + workspace packages. Independent package ownership let /cris/planning ship without forking the codebase.",
    pills: ["pnpm", "Turbo", "Vite"],
  },
  {
    title: "Risk Map Layer System",
    subtitle: "Architect \u00B7 horizon-based sources",
    body:
      "Designed the near/short/long-term source and layer pipeline with a horizon config registry, supporting 10+ layer types and a unified map shell across risk products.",
    pills: ["Mapbox GL", "GeoJSON", "H3"],
  },
  {
    title: "Create Plan AOI Map",
    subtitle: "Feature owner \u00B7 geography workflows",
    body:
      "End-to-end AOI selection, county/circuit hierarchy drill-down, draw/lasso tools, and virtual circuit lists for utility wildfire mitigation planning.",
    pills: ["Mapbox Draw", "Turf.js"],
  },
  {
    title: "CDN Static Asset Migration",
    subtitle: "Implementer \u00B7 S3/CloudFront",
    body:
      "Moved 100+ static assets and i18n locales to S3/CloudFront, centralized per-tenant config, and cut 60k+ lines from the build output.",
    pills: ["AWS", "CloudFront", "S3"],
  },
  {
    title: "Climate Risk Intelligence System",
    subtitle: "AiDash \u00B7 wildfire risk platform",
    body:
      "Core frontend engineer on CRIS \u2014 powering 1.5M+ utility assets with near-term wildfire risk maps, multi-horizon KPI analytics, and mitigation planning workflows.",
    pills: ["React", "Mapbox", "AWS"],
    link: {
      href: "https://www.aidash.com/climate-risk-intelligence-system/",
      label: "View product \u2192",
    },
  },
];
