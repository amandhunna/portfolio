import { ReactNode } from "react";
import {
  FaAws,
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaGlobeAmericas,
  FaJava,
  FaJs,
  FaLaptopCode,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaNode,
  FaProjectDiagram,
  FaReact,
  FaRobot,
  FaServer,
  FaSyncAlt,
  FaToolbox,
  FaWrench,
} from "react-icons/fa";
import {
  SiMapbox,
  SiMui,
  SiPostgresql,
  SiPython,
  SiTurbo,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export interface SkillGroupData {
  title: string;
  titleIcon: ReactNode;
  items: { icon: ReactNode; label: string }[];
}

export const SKILL_GROUPS: SkillGroupData[] = [
  {
    title: "Frontend",
    titleIcon: <FaLaptopCode size={12} />,
    items: [
      { icon: <FaReact size={14} />, label: "React 19" },
      { icon: <SiTypescript size={14} />, label: "TypeScript" },
      { icon: <SiVite size={14} />, label: "Vite" },
      { icon: <FaSyncAlt size={14} />, label: "React Query" },
    ],
  },
  {
    title: "UI \u0026 Design",
    titleIcon: <FaCode size={12} />,
    items: [
      { icon: <SiMui size={14} />, label: "MUI 7" },
      { icon: <FaWrench size={14} />, label: "Design Tokens" },
      { icon: <FaGlobe size={14} />, label: "WCAG / a11y" },
    ],
  },
  {
    title: "Maps \u0026 GIS",
    titleIcon: <FaMapMarkedAlt size={12} />,
    items: [
      { icon: <SiMapbox size={14} />, label: "Mapbox GL" },
      { icon: <FaLayerGroup size={14} />, label: "deck.gl" },
      { icon: <FaGlobeAmericas size={14} />, label: "Turf.js / H3" },
    ],
  },
  {
    title: "Architecture",
    titleIcon: <FaProjectDiagram size={12} />,
    items: [
      { icon: <FaProjectDiagram size={14} />, label: "MVVM" },
      { icon: <SiTurbo size={14} />, label: "Turborepo" },
      { icon: <FaNode size={14} />, label: "pnpm workspaces" },
    ],
  },
  {
    title: "Platform",
    titleIcon: <FaServer size={12} />,
    items: [
      { icon: <FaNode size={14} />, label: "Node.js 22" },
      { icon: <FaAws size={14} />, label: "S3 / CloudFront" },
      { icon: <FaCloudUploadAlt size={14} />, label: "CI / lint-staged" },
    ],
  },
  {
    title: "AI \u0026 DX",
    titleIcon: <FaRobot size={12} />,
    items: [
      { icon: <FaRobot size={14} />, label: "Cursor / Claude" },
      { icon: <FaToolbox size={14} />, label: "Agent Skills" },
      { icon: <FaWrench size={14} />, label: "MCP Integrations" },
    ],
  },
  {
    title: "Languages",
    titleIcon: <FaCode size={12} />,
    items: [
      { icon: <FaJs size={14} />, label: "JavaScript" },
      { icon: <SiTypescript size={14} />, label: "TypeScript" },
      { icon: <SiPython size={14} />, label: "Python" },
    ],
  },
  {
    title: "Backend \u0026 Data",
    titleIcon: <FaDatabase size={12} />,
    items: [
      { icon: <FaNode size={14} />, label: "Express" },
      { icon: <FaJava size={14} />, label: "Spring Boot" },
      { icon: <SiPostgresql size={14} />, label: "PostgreSQL" },
    ],
  },
];
