import { StatCard } from "../../components/StatCard";
import { Typography } from "../../components/Typography";
import { spacingRem } from "../../tokens/spacing";
import { ABOUT } from "../../content/about";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container fade-up">
        <Typography variant="label" color="var(--accent-base)">
          {ABOUT.label}
        </Typography>
        <Typography variant="h3" className="about-heading">
          {ABOUT.heading}
        </Typography>
        <div style={{ maxWidth: "62ch", marginBottom: spacingRem.xl }}>
          <Typography variant="body" color="var(--dominant-text-muted)">
            {ABOUT.body}
          </Typography>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: spacingRem.md,
          }}
        >
          {ABOUT.stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              format={stat.format}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
