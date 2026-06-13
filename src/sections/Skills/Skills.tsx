import { SkillGroup } from "../../components/SkillGroup";
import { SectionHeader } from "../../components/SectionHeader";
import { SKILL_GROUPS } from "../../content/skills";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container fade-up">
        <SectionHeader label="SKILLS" title="My toolkit" />
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              titleIcon={group.titleIcon}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
