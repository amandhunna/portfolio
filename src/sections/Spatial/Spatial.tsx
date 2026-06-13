import { ContentCard } from "../../components/ContentCard";
import { SectionHeader } from "../../components/SectionHeader";
import { SPATIAL_CARDS } from "../../content/spatial";

export function Spatial() {
  return (
    <section id="spatial" className="section">
      <div className="container fade-up">
        <SectionHeader label={"SPATIAL \u0026 GIS"} title="Geospatial Engineering" />
        <div className="grid-3">
          {SPATIAL_CARDS.map((card, index) => (
            <ContentCard
              key={card.title}
              {...card}
              className={index < 3 ? "reveal-item" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
