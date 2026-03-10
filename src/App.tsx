import {
  FaGlobeAmericas,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCrosshairs,
  FaBookOpen,
  FaGraduationCap,
  FaNetworkWired,
  FaShieldAlt,
  FaJs,
  FaCode,
  FaToolbox,
  FaRobot,
  FaAws,
  FaGlobe,
  FaDatabase,
  FaJava,
  FaReact,
  FaMapMarkedAlt,
  FaSyncAlt,
  FaServer,
  FaNode,
  FaDocker,
  FaWrench,
  FaBitbucket,
  FaJira,
  FaLaptopCode,
} from "react-icons/fa";
import { SiPython, SiDjango, SiMongodb, SiPostgresql } from "react-icons/si";
import { ThemeProvider } from "./components/ThemeProvider";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { StatCard } from "./components/StatCard";
import { Layout } from "./components/Layout";
import { Timeline, TimelineItem } from "./components/Timeline";
import { Badge } from "./components/Badge";
import { BlogCard } from "./components/BlogCard";
import { SkillGroup } from "./components/SkillGroup";
import { Globe } from "./components/Globe";
import { Nav } from "./components/Nav";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { spacing } from "./tokens/spacing";
import "./styles/global.css";

function Portfolio() {
  useScrollReveal();

  return (
    <>
      <Globe />
      <Nav />

      {/* Hero */}
      <section
        id="hero"
        className="section fade-up"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64 }}
      >
        <div className="container">
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: spacing.xs,
              background: "var(--accent-light)",
              color: "var(--accent-base)",
              fontSize: 13,
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: 100,
              marginBottom: spacing.sm,
            }}
          >
            <span
              className="hero-badge-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
              }}
            />
            Software Engineer
          </div>
          <Typography
            variant="h1"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-base), #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Amanjot Singh
          </Typography>
          <Typography
            variant="body"
            color="var(--dominant-text-muted)"
            style={{
              maxWidth: 480,
              marginTop: spacing.sm,
              marginBottom: spacing.md,
            }}
          >
            Geospatial systems, scalable frontends, and cloud-native backends
            &#x2014; from climate risk platforms to design systems at scale.
          </Typography>
          <div style={{ display: "flex", gap: spacing.xs, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" href="#spatial" icon={<FaGlobeAmericas size={16} />}>
              Spatial &#x26; GIS
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Get in touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/amandhunna"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={18} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section id="about" className="section">
        <div className="container fade-up">
          <Layout split="60-40" gap="lg">
            <div>
              <Typography variant="label" color="var(--accent-base)">
                ABOUT
              </Typography>
              <Typography
                variant="h3"
                style={{ marginTop: spacing.xs, marginBottom: spacing.sm }}
              >
                Building the web, one system at a time.
              </Typography>
              <Typography variant="body" color="var(--dominant-text-muted)">
                Full-stack engineer focused on geospatial frontends,
                cloud-native backends, and design systems. Recent work spans
                climate risk intelligence, asset inspection, and AI-augmented
                developer tooling.
              </Typography>
            </div>
            <Layout
              split="3-col"
              gap="sm"
              style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <StatCard value={7} suffix="+" label="Years Experience" />
              <StatCard
                value={1500000}
                suffix="+"
                format="1.5M"
                label="Assets Managed"
              />
              <StatCard
                value={10000000}
                suffix="+"
                format="10M"
                label="DAU Impacted"
              />
            </Layout>
          </Layout>
        </div>
      </section>

      {/* Spatial & GIS */}
      <section id="spatial" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            SPATIAL & GIS
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            Geospatial Engineering
          </Typography>
          <div className="grid-3">
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                QGIS & Desktop GIS
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Vector/raster layers, PyQGIS
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Workflows for layer prep, tiling pipelines, and spatial analysis
                with MCP integrations.
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.xs,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">QGIS</span>
                <span className="tech-pill">PyQGIS</span>
                <span className="tech-pill">PostGIS</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                Geospatial Pipelines
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Shapefile → GeoJSON → mbtiles
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                End-to-end pipelines for 500K+ segments with Mapbox GL
                consumption.
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.xs,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">GDAL</span>
                <span className="tech-pill">Tippecanoe</span>
                <span className="tech-pill">Node</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                Web Mapping
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Mapbox GL, React, MTS
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Vector tiles, clustering, hazard layers, and performance tuning
                at scale.
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.xs,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">Mapbox GL</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">H3</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            EXPERIENCE
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            Where I've worked
          </Typography>
          <Timeline>
            <TimelineItem isFirst>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: spacing.xs,
                }}
              >
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Software Engineer ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>AiDash</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  Jun 2022 — Present
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Led CRIS platform (&gt;$5M ARR, 1.5M+ assets). Asset Inspection
                with MapGL.js. 2nd Prize hackathon — AI RCA + MCP.
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.xs,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">React</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">MapGL</span>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: spacing.xs,
                }}
              >
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Software Engineer ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>Swiggy</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  Oct 2021 — Jun 2022
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Design language system — 80% fewer UI inconsistencies. Bundle
                size 3.5s → 1.2s, 10M+ DAU.
              </Typography>
            </TimelineItem>
            <TimelineItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: spacing.xs,
                }}
              >
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Deputy Manager ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>Jio</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  Sep 2020 — Oct 2021
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Re-engineered React apps (&gt;300Cr ARR) — 2× performance. 50%
                smaller codebase.
              </Typography>
            </TimelineItem>
            <TimelineItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: spacing.xs,
                }}
              >
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Associate SE ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>
                    Successive Technologies
                  </span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  Jul 2018 — Sep 2020
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Drag-and-drop web builder — 1,500+ businesses. REST → GraphQL
                migration — 800ms → 250ms.
              </Typography>
            </TimelineItem>
          </Timeline>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            PROJECTS
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            Selected Projects
          </Typography>
          <Typography
            variant="body"
            color="var(--dominant-text-muted)"
            style={{ marginBottom: spacing.lg }}
          >
            Enterprise-scale products and tools I&apos;ve built.
          </Typography>
          <div className="grid-3">
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                Climate Risk Intelligence System
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                AiDash &#x26; Geospatial, Node.js, Spring Boot, AWS
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Full-stack CRIS: 1.5M+ assets, 100K+ segments. Lambda, S3, API
                Gateway, Python shapefile processing.
              </Typography>
              <div style={{ marginTop: spacing.sm }}>
                <Button
                  variant="ghost"
                  size="sm"
                  href="https://www.aidash.com/climate-risk-intelligence-system/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View product &#x2192;
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.sm,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Node</span>
                <span className="tech-pill">Spring</span>
                <span className="tech-pill">Python</span>
              </div>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                Asset Inspection &#x26; Monitoring
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                MapGL.js, GeoJSON, shapefiles
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Visualization of 500K+ road segments. Hazard layers, clustering,
                and real-time monitoring.
              </Typography>
              <div style={{ marginTop: spacing.sm }}>
                <Button
                  variant="ghost"
                  size="sm"
                  href="https://www.aidash.com/asset-inspection-and-monitoring-system/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View product &#x2192;
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.sm,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">MapGL</span>
                <span className="tech-pill">GeoJSON</span>
              </div>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                AiDash Maptiler
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Node, Express, Docker
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Geospatial pipeline: shapefile &#x2192; GeoJSON &#x2192;
                mbtiles &#x2192; Mapbox. Web UI for uploads and pipeline runs.
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: spacing.xs,
                  marginTop: spacing.sm,
                  flexWrap: "wrap",
                }}
              >
                <span className="tech-pill">Node</span>
                <span className="tech-pill">Docker</span>
                <span className="tech-pill">Mapbox</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative & MCP */}
      <section id="creative" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            CREATIVE &#x26; MCP
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            AI-Augmented Tooling
          </Typography>
          <Typography
            variant="body"
            color="var(--dominant-text-muted)"
            style={{ marginBottom: spacing.lg, maxWidth: "50ch" }}
          >
            Model Context Protocol integrations and creative automation.
          </Typography>
          <div className="grid-3">
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                AI RCA &#x26; MCP
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Hackathon 2nd Prize &#x26; Log analysis
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                AI-powered Root Cause Analysis wired to MCP for automated log
                parsing and error aggregation.
              </Typography>
              <div style={{ marginTop: spacing.sm }}>
                <Button
                  variant="ghost"
                  size="sm"
                  href="https://www.linkedin.com/posts/amandhunna-ln_hackaithon-hackathon-agenticai-activity-7343324539860209667-AjPa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn post &#x2192;
                </Button>
              </div>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                QGIS MCP
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Cursor / IDE integration
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                MCP server for QGIS: load projects, add vector/raster layers,
                run processing algorithms, and render map exports.
              </Typography>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacing.xs }}>
                Agent Skills &#x26; Tooling
              </Typography>
              <Typography
                variant="mono"
                color="var(--dominant-text-muted)"
                style={{ marginBottom: spacing.xs }}
              >
                Design systems, MCP builder, skill creator
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Custom agent skills for frontend design and MCP builder
                workflows. Structured SKILL.md patterns for repeatable
                automation.
              </Typography>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            SKILLS
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            My toolkit
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: spacing.sm,
            }}
          >
            <SkillGroup
              title="Languages"
              titleIcon={<FaCode size={12} />}
              items={[
                { icon: <FaJs size={14} />, label: "JavaScript" },
                { icon: <SiPython size={14} />, label: "Python" },
                { icon: <FaJava size={14} />, label: "Java" },
              ]}
            />
            <SkillGroup
              title="Frontend"
              titleIcon={<FaLaptopCode size={12} />}
              items={[
                { icon: <FaReact size={14} />, label: "React" },
                { icon: <FaMapMarkedAlt size={14} />, label: "MapGL" },
                { icon: <FaSyncAlt size={14} />, label: "RQ" },
              ]}
            />
            <SkillGroup
              title="Backend"
              titleIcon={<FaServer size={12} />}
              items={[
                { icon: <FaNode size={14} />, label: "Express" },
                { icon: <SiDjango size={14} />, label: "Django" },
                { icon: <FaJava size={14} />, label: "Spring" },
              ]}
            />
            <SkillGroup
              title="Cloud"
              titleIcon={<FaAws size={12} />}
              items={[
                { icon: <FaAws size={14} />, label: "AWS" },
                { icon: <FaDocker size={14} />, label: "Docker" },
              ]}
            />
            <SkillGroup
              title="Databases"
              titleIcon={<FaDatabase size={12} />}
              items={[
                { icon: <SiMongodb size={14} />, label: "MongoDB" },
                { icon: <SiPostgresql size={14} />, label: "PostgreSQL" },
                { icon: <FaGlobe size={14} />, label: "PostGIS" },
              ]}
            />
            <SkillGroup
              title="Tools"
              titleIcon={<FaWrench size={12} />}
              items={[
                { icon: <FaGithub size={14} />, label: "GitHub" },
                { icon: <FaBitbucket size={14} />, label: "Bitbucket" },
                { icon: <FaJira size={14} />, label: "Jira" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* HTB Badges */}
      <section id="badges" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            BADGES & CERTS
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            Hack The Box
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.sm }}>
            <Badge icon={<FaCrosshairs size={18} />} name="AI Red Teamer" source="AI Security Path · Hard" />
            <Badge icon={<FaBookOpen size={18} />} name="Philomath" source="Learning Process · Completed" />
            <Badge icon={<FaGraduationCap size={18} />} name="Academician" source="Academy · Completed" />
            <Badge icon={<FaNetworkWired size={18} />} name="Everything is Connected" source="Networking · Completed" />
            <Badge icon={<FaShieldAlt size={18} />} name="Your Request is My Demand" source="Web Requests · Completed" />
            <Badge icon={<FaJs size={18} />} name="Playing with the Mess" source="JS Deobfuscation · Completed" />
            <Badge icon={<FaCode size={18} />} name="Developer" source="Web Applications · Completed" />
            <Badge icon={<FaToolbox size={18} />} name="Start Building Your Arsenal" source="Setting Up · Completed" />
            <Badge icon={<FaRobot size={18} />} name="Superior Intelligence" source="Fundamentals of AI · Completed" />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            BLOG
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.md }}
          >
            Writing & Insights
          </Typography>
          <div className="grid-3">
            <BlogCard
              href="https://amandhunna.medium.com/why-aws-lambda-layers-are-essential-solving-dependency-management-in-serverless-applications-3bc9eb2e0592"
              date="Nov 2024"
              title="Why AWS Lambda Layers are Essential"
              excerpt="Solving dependency management in serverless applications."
              tag="AWS Lambda"
              tagIcon={<FaAws size={12} />}
            />
            <BlogCard
              href="https://amandhunna.medium.com/understanding-the-browser-rendering-process-from-parsing-to-painting-0e779f68bb9d"
              date="Oct 2024"
              title="Understanding the Browser Rendering Process"
              excerpt={"From parsing to painting \u2014 how browsers turn code into visuals."}
              tag="Web Performance"
              tagIcon={<FaGlobe size={12} />}
            />
            <BlogCard
              href="https://amandhunna.medium.com/pacelc-theorem-beyond-cap-afddd0a20aa4"
              date="Aug 2024"
              title="PACELC Theorem: Beyond CAP"
              excerpt="How PACELC extends CAP for distributed system trade-offs."
              tag="System Design"
              tagIcon={<FaDatabase size={12} />}
            />
          </div>
          <div style={{ marginTop: spacing.md }}>
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

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            CONTACT
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: spacing.xs, marginBottom: spacing.sm }}
          >
            Let&apos;s connect
          </Typography>
          <Typography
            variant="body"
            color="var(--dominant-text-muted)"
            style={{ marginBottom: spacing.md, maxWidth: "40ch" }}
          >
            Open to roles in full-stack, geospatial, and frontend architecture.
          </Typography>
          <div style={{ display: "flex", gap: spacing.xs, flexWrap: "wrap", marginBottom: spacing.md }}>
            <Button
              variant="secondary"
              size="md"
              href="https://linkedin.com/in/amandhunna-ln"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaLinkedin size={16} />}
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://github.com/amandhunna"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={16} />}
            >
              GitHub
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://amandhunna.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaMedium size={16} />}
            >
              Medium
            </Button>
            <Button variant="secondary" size="md" href="mailto:aman.dhunna@gmail.com" icon={<FaEnvelope size={16} />}>
              Email
            </Button>
            <Button variant="secondary" size="md" href="tel:+917042458977" icon={<FaPhone size={16} />}>
              +91 7042458977
            </Button>
          </div>
          <Typography variant="small" color="var(--dominant-text-muted)" style={{ display: "flex", alignItems: "center", gap: spacing.xs }}>
            <FaMapMarkerAlt size={14} /> Based in India
          </Typography>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: spacing.md,
          color: "var(--dominant-text-muted)",
          fontSize: 13,
          borderTop: "1px solid var(--secondary-border)",
        }}
      >
        &#x00A9; {new Date().getFullYear()} Amanjot Singh. B.Tech IT, GTBIT Delhi.
      </footer>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
