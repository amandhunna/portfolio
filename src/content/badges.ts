export interface BadgeData {
  name: string;
  source: string;
  icon: "crosshairs" | "book" | "graduation" | "network" | "shield" | "js" | "code" | "toolbox" | "robot";
}

export const BADGES: BadgeData[] = [
  { icon: "crosshairs", name: "AI Red Teamer", source: "AI Security Path \u00B7 Hard" },
  { icon: "book", name: "Philomath", source: "Learning Process \u00B7 Completed" },
  { icon: "graduation", name: "Academician", source: "Academy \u00B7 Completed" },
  { icon: "network", name: "Everything is Connected", source: "Networking \u00B7 Completed" },
  { icon: "shield", name: "Your Request is My Demand", source: "Web Requests \u00B7 Completed" },
  { icon: "js", name: "Playing with the Mess", source: "JS Deobfuscation \u00B7 Completed" },
  { icon: "code", name: "Developer", source: "Web Applications \u00B7 Completed" },
  { icon: "toolbox", name: "Start Building Your Arsenal", source: "Setting Up \u00B7 Completed" },
  { icon: "robot", name: "Superior Intelligence", source: "Fundamentals of AI \u00B7 Completed" },
];
