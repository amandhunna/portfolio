import { ContentCard } from "../../components/ContentCard";
import { SectionHeader } from "../../components/SectionHeader";
import { AI_WORKFLOW_CARDS } from "../../content/aiWorkflow";

export function AiWorkflow() {
  return (
    <section id="ai-workflow" className="section">
      <div className="container fade-up">
        <SectionHeader
          label={"AI \u0026 WORKFLOW ENGINEERING"}
          title="AI-Augmented Developer Experience"
          intro="Context engineering, workflow automation, and MCP integrations that make LLM assistants production-grade teammates."
          introClassName="section-header__intro section-header__intro--wide"
        />
        <div className="grid-3">
          {AI_WORKFLOW_CARDS.map((card) => (
            <ContentCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
