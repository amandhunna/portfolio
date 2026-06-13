import type { ContentCardData } from "./types";

export const SPATIAL_CARDS: ContentCardData[] = [
  {
    title: "Map Platform Architecture",
    subtitle: "@cris/map & common-map",
    body:
      "Shared map package used across risk map, essentials, and planning products. Architected horizon-based source/layer configs, wildfire overlays, KPI popups, and per-tenant S3 map config — one shell, multiple surfaces.",
    pills: ["Mapbox GL", "react-map-gl", "deck.gl"],
  },
  {
    title: "Planning Geography",
    subtitle: "AOI selection & drill-down",
    body:
      "Create Plan geography workflows: county/circuit hierarchy drill-down, virtual circuit lists, draw/lasso AOI selection, and feature-state styling for utility wildfire mitigation planning.",
    pills: ["Mapbox Draw", "Turf.js", "H3"],
  },
  {
    title: "Geospatial Pipelines",
    subtitle: "Vector tiles & GeoJSON at scale",
    body:
      "End-to-end data pipelines for 500K+ network segments — QGIS layer prep, PyQGIS automation, and Mapbox GL performance tuning for large-scale utility network rendering.",
    pills: ["QGIS", "GeoJSON", "PyQGIS"],
  },
];
