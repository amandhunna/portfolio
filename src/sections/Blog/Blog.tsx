import type { ReactNode } from "react";
import { FaAws, FaDatabase, FaGlobe } from "react-icons/fa";
import { BlogCard } from "../../components/BlogCard";
import { Button } from "../../components/Button";
import { SectionHeader } from "../../components/SectionHeader";
import { BLOG_POSTS } from "../../content/blog";
import type { BlogPostData } from "../../content/blog";

const TAG_ICONS: Record<BlogPostData["tagIcon"], ReactNode> = {
  aws: <FaAws size={12} />,
  globe: <FaGlobe size={12} />,
  database: <FaDatabase size={12} />,
};

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container fade-up">
        <SectionHeader label="BLOG" title={"Writing \u0026 Insights"} />
        <div className="grid-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.href}
              href={post.href}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tag}
              tagIcon={TAG_ICONS[post.tagIcon]}
            />
          ))}
        </div>
        <div className="card-action">
          <Button
            variant="secondary"
            size="md"
            href="https://amandhunna.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            All posts on Medium
          </Button>
        </div>
      </div>
    </section>
  );
}
