import { ReactNode } from "react";
import { Typography } from "../Typography";

interface Props {
  label: string;
  title: string;
  intro?: ReactNode;
  introClassName?: string;
}

export function SectionHeader({ label, title, intro, introClassName }: Props) {
  return (
    <>
      <Typography variant="label" color="var(--accent-base)">
        {label}
      </Typography>
      <Typography variant="h3" className="section-header__title">
        {title}
      </Typography>
      {intro ? (
        <Typography
          variant="body"
          color="var(--dominant-text-muted)"
          className={introClassName ?? "section-header__intro"}
        >
          {intro}
        </Typography>
      ) : null}
    </>
  );
}
