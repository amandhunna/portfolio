export interface BlogPostData {
  href: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  tagIcon: "aws" | "globe" | "database";
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    href: "https://amandhunna.medium.com/why-aws-lambda-layers-are-essential-solving-dependency-management-in-serverless-applications-3bc9eb2e0592",
    date: "Nov 2024",
    title: "Why AWS Lambda Layers are Essential",
    excerpt: "Solving dependency management in serverless applications.",
    tag: "AWS Lambda",
    tagIcon: "aws",
  },
  {
    href: "https://amandhunna.medium.com/understanding-the-browser-rendering-process-from-parsing-to-painting-0e779f68bb9d",
    date: "Oct 2024",
    title: "Understanding the Browser Rendering Process",
    excerpt: "From parsing to painting \u2014 how browsers turn code into visuals.",
    tag: "Web Performance",
    tagIcon: "globe",
  },
  {
    href: "https://amandhunna.medium.com/pacelc-theorem-beyond-cap-afddd0a20aa4",
    date: "Aug 2024",
    title: "PACELC Theorem: Beyond CAP",
    excerpt: "How PACELC extends CAP for distributed system trade-offs.",
    tag: "System Design",
    tagIcon: "database",
  },
];
