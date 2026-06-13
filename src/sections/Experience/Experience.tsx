import { SectionHeader } from "../../components/SectionHeader";
import { Timeline, TimelineItem } from "../../components/Timeline";
import { Typography } from "../../components/Typography";
import { fontWeight } from "../../tokens/typography";
import { EXPERIENCE_ENTRIES } from "../../content/experience";
import type { ExperienceEntry } from "../../content/types";

function ExperienceJob({ entry, isFirst }: { entry: ExperienceEntry; isFirst?: boolean }) {
  return (
    <TimelineItem isFirst={isFirst}>
      <div className="job-header" style={{ marginBottom: "0.5rem" }}>
        <Typography variant="body" style={{ fontWeight: fontWeight.semibold }}>
          {entry.role} &#x00B7;{" "}
          <span className="text-accent">{entry.company}</span>
        </Typography>
        <Typography variant="mono" color="var(--dominant-text-muted)">
          {entry.date}
        </Typography>
      </div>
      {entry.summary ? (
        <Typography
          variant="small"
          color="var(--dominant-text-muted)"
          style={{ marginBottom: entry.highlights ? "1rem" : undefined }}
        >
          {entry.summary}
        </Typography>
      ) : null}
      {entry.highlights?.map((highlight) => (
        <div key={highlight.title}>
          <Typography
            variant="small"
            color="var(--dominant-text)"
            className="job-highlight-title"
          >
            {highlight.title}
          </Typography>
          <Typography
            variant="small"
            color="var(--dominant-text-muted)"
            className="job-highlight-body"
          >
            {highlight.body}
          </Typography>
        </div>
      ))}
      {entry.pills && entry.pills.length > 0 ? (
        <div className="tech-pill-row">
          {entry.pills.map((pill) => (
            <span key={pill} className="tech-pill">
              {pill}
            </span>
          ))}
        </div>
      ) : null}
    </TimelineItem>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container fade-up">
        <SectionHeader label="EXPERIENCE" title="Where I've worked" />
        <Timeline className="timeline-wrap">
          {EXPERIENCE_ENTRIES.map((entry, index) => (
            <ExperienceJob key={entry.company} entry={entry} isFirst={index === 0} />
          ))}
        </Timeline>
      </div>
    </section>
  );
}
