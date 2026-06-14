import { ContentCard } from "../../components/ContentCard";
import { SectionHeader } from "../../components/SectionHeader";
import { PROJECT_CARDS } from "../../content/projects";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container fade-up">
        <SectionHeader
          label="PROJECTS"
          title="Selected Projects"
          intro={
            "Enterprise-scale products, platform work, and AI tooling. See AI \u0026 Workflow for agent OS details."
          }
          introClassName="section-header__intro section-header__intro--wide"
        />
        <div className="grid-3">
          {PROJECT_CARDS.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
