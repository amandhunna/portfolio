import { Card } from "../Card";
import { Typography } from "../Typography";
import { Button } from "../Button";

interface Props {
  title: string;
  subtitle: string;
  body: string;
  pills?: string[];
  link?: { href: string; label: string };
  className?: string;
}

export function ContentCard({
  title,
  subtitle,
  body,
  pills,
  link,
  className,
}: Props) {
  return (
    <Card transparent className={className}>
      <Typography variant="h4" className="card-heading">
        {title}
      </Typography>
      <Typography
        variant="mono"
        color="var(--dominant-text-muted)"
        className="card-subtitle"
      >
        {subtitle}
      </Typography>
      <Typography variant="small" color="var(--dominant-text-muted)">
        {body}
      </Typography>
      {link ? (
        <div className="card-action">
          <Button
            variant="ghost"
            size="sm"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Button>
        </div>
      ) : null}
      {pills && pills.length > 0 ? (
        <div className={`tech-pill-row${link ? " tech-pill-row--md" : ""}`}>
          {pills.map((pill) => (
            <span key={pill} className="tech-pill">
              {pill}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
