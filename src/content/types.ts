export interface ContentCardData {
  title: string;
  subtitle: string;
  body: string;
  pills: string[];
  link?: { href: string; label: string };
}

export interface JobHighlight {
  title: string;
  body: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  summary?: string;
  highlights?: JobHighlight[];
  pills?: string[];
}
