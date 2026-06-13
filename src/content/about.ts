export interface AboutStat {
  value: number;
  suffix: string;
  format?: string;
  label: string;
}

export const ABOUT = {
  label: "ABOUT",
  heading: "Platform engineer. Map systems. AI-native.",
  body: "Eight years turning engineering complexity into product leverage — from design systems at 10M+ DAU to geospatial wildfire risk intelligence for global energy providers. I architect the map platforms, monorepo infrastructure, and AI-augmented developer tooling that compound into measurable, enterprise-scale outcomes.",
  stats: [
    { value: 8, suffix: "+", label: "Years Shipping" },
    { value: 10, suffix: "M+", label: "Peak DAU" },
    { value: 1_500_000, suffix: "+", format: "M", label: "Assets Powered" },
    { value: 60, suffix: "K+", label: "Lines Eliminated" },
  ] as AboutStat[],
};
