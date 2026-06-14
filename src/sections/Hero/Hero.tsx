import { Typography } from "../../components/Typography";
import { layoutRem } from "../../tokens/layout";

export function Hero() {
  return (
    <section
      id="hero"
      className="section fade-up hero-section"
      style={{ paddingTop: layoutRem.navHeight }}
    >
      <div className="container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Senior Frontend Engineer
        </div>
        <Typography variant="h1" className="hero-title hero-title-gradient">
          Amanjot Singh
        </Typography>
        <Typography
          variant="body"
          color="var(--dominant-text-muted)"
          className="hero-lede"
        >
          Engineer specialising in map UI and geospatial web apps &#x2014;
          interactive maps and AI-augmented developer tooling.
        </Typography>
      </div>
    </section>
  );
}
