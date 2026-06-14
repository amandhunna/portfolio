import { ABOUT } from "../content/about";
import { BLOG_POSTS } from "../content/blog";
import { EXPERIENCE_ENTRIES } from "../content/experience";
import { SKILL_GROUPS } from "../content/skills";

export function Resume() {
  return (
    <div className="resume">
      {/* Toolbar — hidden on print */}
      <div className="resume-toolbar no-print">
        <a href="/">&#x2190; Back to portfolio</a>
        <button className="resume-print-btn" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      {/* Header */}
      <header className="resume-header">
        <h1>Amanjot Singh</h1>
        <p className="resume-title">Senior Frontend Engineer &#x2014; Map UI &amp; Geospatial Systems</p>
        <div className="resume-contact">
          <a href="mailto:amandhunna.dev@gmail.com">amandhunna.dev@gmail.com</a>
          <span>+91 70424 58977</span>
          <a href="https://linkedin.com/in/amandhunna-ln" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/amandhunna-ln
          </a>
          <a href="https://github.com/amandhunna" target="_blank" rel="noopener noreferrer">
            github.com/amandhunna
          </a>
          <a href="https://amandhunna.medium.com" target="_blank" rel="noopener noreferrer">
            amandhunna.medium.com
          </a>
          <span>India</span>
        </div>
      </header>

      {/* Summary */}
      <section className="resume-section">
        <h2>Summary</h2>
        <p className="resume-summary">{ABOUT.body}</p>
      </section>

      {/* Experience */}
      <section className="resume-section">
        <h2>Experience</h2>
        {EXPERIENCE_ENTRIES.map((entry) => (
          <div key={entry.company} className="resume-job">
            <div className="resume-job-header">
              <strong>{entry.role}</strong>
              <span className="resume-job-company">{entry.company}</span>
              <span className="resume-date">{entry.date}</span>
            </div>
            {entry.summary && (
              <p className="resume-summary-text">{entry.summary}</p>
            )}
            {entry.highlights && entry.highlights.length > 0 && (
              <ul className="resume-highlights">
                {entry.highlights.map((h) => (
                  <li key={h.title}>
                    <strong>{h.title}:</strong> {h.body}
                  </li>
                ))}
              </ul>
            )}
            {entry.pills && entry.pills.length > 0 && (
              <div className="resume-pills">{entry.pills.join(" · ")}</div>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2>Skills</h2>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="resume-skill-row">
            <strong>{group.title}:</strong>{" "}
            {group.items.map((item) => item.label).join(", ")}
          </div>
        ))}
      </section>

      {/* Writing */}
      <section className="resume-section">
        <h2>Writing</h2>
        {BLOG_POSTS.map((post) => (
          <div key={post.href} className="resume-blog-item">
            <a href={post.href} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <span className="resume-date"> · {post.date}</span>
            {" — "}
            <span>{post.excerpt}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
