import type { CSSProperties } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaShieldAlt,
  FaCloud,
  FaAws,
  FaKey,
  FaServer,
  FaClipboardCheck,
  FaHeadset,
  FaChevronRight,
  FaMicrosoft,
} from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { ThemeProvider } from "./components/ThemeProvider";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { StatCard } from "./components/StatCard";
import { Layout } from "./components/Layout";
import { Timeline, TimelineItem } from "./components/Timeline";
import { BlogCard } from "./components/BlogCard";
import { SkillGroup } from "./components/SkillGroup";
import { MitmCodeBackdrop } from "./components/MitmCodeBackdrop";
import { Nav } from "./components/Nav";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { spacingRem } from "./tokens/spacing";
import { layoutRem } from "./tokens/layout";
import { fontSizeRem, fontWeight } from "./tokens/typography";
import { radiiRem } from "./tokens/radii";
import "./styles/global.css";

const pillRowStyle: CSSProperties = {
  display: "flex",
  gap: spacingRem.xs,
  marginTop: spacingRem.xs,
  flexWrap: "wrap",
};

function Portfolio() {
  useScrollReveal();

  return (
    <>
      <MitmCodeBackdrop />
      <Nav />

      <section
        id="hero"
        className="section fade-up"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: layoutRem.navHeight,
        }}
      >
        <div className="container">
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: spacingRem.xs,
              background: "var(--accent-light)",
              color: "var(--accent-base)",
              fontSize: fontSizeRem.xs,
              fontWeight: fontWeight.semibold,
              padding: `${spacingRem.xs} ${spacingRem.sm}`,
              borderRadius: radiiRem.full,
              marginBottom: spacingRem.sm,
            }}
          >
            <span
              className="hero-badge-dot"
              style={{
                width: spacingRem.xs,
                height: spacingRem.xs,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
              }}
            />
            Cloud Security Engineer
          </div>
          <Typography
            variant="h1"
            className="hero-title"
            style={{
              background: "linear-gradient(135deg, var(--accent-base), #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Prabhdeep Singh Taneja
          </Typography>
          <Typography
            variant="body"
            color="var(--dominant-text-muted)"
            style={{
              maxWidth: 560,
              marginTop: spacingRem.sm,
              marginBottom: spacingRem.md,
            }}
          >
            Designing secure, scalable cloud architectures and Zero Trust environments from enterprise security
            implementations to modern cloud-native solutions.
          </Typography>
          <div style={{ display: "flex", gap: spacingRem.xs, flexWrap: "wrap" }}>
            <Button variant="secondary" size="lg" href="#projects" icon={<FaShieldAlt size={16} />}>
              Cloud Security Projects
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Get in Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/prabhdeep1"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={18} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container fade-up">
          <Layout split="60-40" gap="lg" className="layout-60-40">
            <div>
              <Typography variant="label" color="var(--accent-base)">
                ABOUT
              </Typography>
              <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.sm }}>
                Cloud security, end to end.
              </Typography>
              <Typography variant="body" color="var(--dominant-text-muted)">
                Enterprise-grade data protection, SASE, DLP, endpoint and email security, and identity-led Zero Trust
                across AWS, Azure, and GCP — from proof-of-concept through global production rollouts.
              </Typography>
              <Typography
                variant="body"
                color="var(--dominant-text-muted)"
                style={{ marginTop: spacingRem.sm }}
              >
                Delivering secure, scalable, and enterprise-ready security solutions across cloud, endpoint, and data
                protection domains.
              </Typography>
            </div>
            <Layout split="3-col" gap="sm" className="layout-3-col">
              <StatCard value={3} suffix="+" label="Years Experience" />
              <StatCard value={10} suffix="+" label="Enterprise Clients" />
              <StatCard staticDisplay="Multiple" label="Global Deployments" />
            </Layout>
          </Layout>
        </div>
      </section>

      <section id="expertise" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            EXPERTISE
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.md }}>
            Work &amp; impact
          </Typography>
          <div className="grid-3">
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Data Loss Prevention (DLP) &amp; SASE Deployments
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                Enterprise data protection &amp; secure access
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Implemented enterprise-grade data protection and secure access solutions across multiple clients using
                industry-leading tools.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Led POC, implementation, and support for DLP solutions</li>
                <li>Designed policies to prevent sensitive data exfiltration</li>
                <li>Integrated with endpoints, cloud apps, and user identity systems</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">Netskope</span>
                <span className="tech-pill">GTB DLP</span>
                <span className="tech-pill">Zscaler</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Endpoint &amp; Threat Protection
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                EDR / XDR &amp; visibility
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Deployed and managed endpoint security solutions to protect enterprise environments from advanced threats.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Implemented EDR/XDR solutions across enterprise environments</li>
                <li>Strengthened endpoint visibility and threat detection</li>
                <li>Assisted in incident response and threat analysis</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">CrowdStrike</span>
                <span className="tech-pill">Netskope</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Email &amp; Web Security Solutions
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                SEG &amp; web filtering
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Implemented secure email gateways and web filtering.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Protected users from phishing, malware, and unsafe web access</li>
                <li>Supported ongoing monitoring and policy tuning</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">Netskope</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Cloud Security &amp; Identity Management
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                Multi-cloud &amp; Zero Trust
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Designed secure cloud environments with strong identity and access controls.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Integrated security across AWS, Azure, and GCP</li>
                <li>Implemented Zero Trust architecture principles</li>
                <li>Managed identity solutions and secure authentication</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Azure</span>
                <span className="tech-pill">Okta</span>
                <span className="tech-pill">OneLogin</span>
                <span className="tech-pill">GCP</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Proof of Concept (POC) &amp; Client Engagements
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                Consulting &amp; architecture
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Executed multiple POCs to demonstrate security solution capabilities and align with client requirements.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Delivered POCs for enterprise clients (banking, telecom, etc.)</li>
                <li>Customized solutions based on business needs</li>
                <li>Converted POCs into full implementations</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">Client Consulting</span>
                <span className="tech-pill">Solution Architecture</span>
              </div>
            </Card>
            <Card transparent className="reveal-item">
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Enterprise Security Operations &amp; Support
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                Production &amp; reliability
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Provided ongoing support, troubleshooting, and optimization for deployed security solutions.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Managed production environments</li>
                <li>Handled escalations and critical incidents</li>
                <li>Improved system performance and reliability</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">Monitoring</span>
                <span className="tech-pill">Troubleshooting</span>
                <span className="tech-pill">SIEM</span>
                <span className="tech-pill">Security Ops</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            EXPERIENCE
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.md }}>
            Where I&apos;ve worked
          </Typography>
          <Timeline className="timeline-wrap">
            <TimelineItem isFirst>
              <div className="job-header" style={{ marginBottom: spacingRem.xs }}>
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Sr. Cloud Security Engineer ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>Xploreteq Integrated Solutions</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  Jan 2024 — Present
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Designed and implemented enterprise-grade cloud security architectures across AWS, Azure, and GCP. Led
                deployments of SASE, DLP, and endpoint protection solutions for global clients.
              </Typography>
              <div style={pillRowStyle}>
                <span className="tech-pill">Netskope</span>
                <span className="tech-pill">CrowdStrike</span>
                <span className="tech-pill">GTB DLP</span>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Azure</span>
                <span className="tech-pill">GCP</span>
                <span className="tech-pill">Okta</span>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div className="job-header" style={{ marginBottom: spacingRem.xs }}>
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Cloud Security Engineer ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>Unizent Technologies Pvt. Ltd.</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  2022 — 2024
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Worked on delivering customized security solutions aligned with enterprise client requirements, focusing
                on endpoint security and monitoring.
              </Typography>
              <div style={pillRowStyle}>
                <span className="tech-pill">SentinelOne</span>
                <span className="tech-pill">Endpoint Security</span>
                <span className="tech-pill">Monitoring</span>
                <span className="tech-pill">Security Architecture</span>
              </div>
            </TimelineItem>
            <TimelineItem>
              <div className="job-header" style={{ marginBottom: spacingRem.xs }}>
                <Typography variant="body" style={{ fontWeight: 600 }}>
                  Information Security Analyst ·{" "}
                  <span style={{ color: "var(--accent-base)" }}>ACPL Systems Pvt. Ltd.</span>
                </Typography>
                <Typography variant="mono" color="var(--dominant-text-muted)">
                  2021 — 2022
                </Typography>
              </div>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Started career in cloud security by integrating CASB and cloud-native security tools across major cloud
                platforms.
              </Typography>
              <div style={pillRowStyle}>
                <span className="tech-pill">Netskope</span>
                <span className="tech-pill">CASB</span>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Azure</span>
                <span className="tech-pill">GCP</span>
                <span className="tech-pill">Cloud Security</span>
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            PROJECTS
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.md }}>
            Selected engagements
          </Typography>
          <Typography variant="body" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.lg }}>
            Enterprise security programs across SASE, CASB, DLP, and Zero Trust.
          </Typography>
          <div className="grid-3">
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Spinny – SASE &amp; ZTNA Architecture (5000+ Users)
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                SASE · ZTNA · Endpoint Security
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Designed and deployed a secure access architecture for a distributed workforce using Zero Trust
                principles.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Implemented ZTNA-based access replacing traditional VPN</li>
                <li>Deployed Netskope SASE for secure web and cloud access</li>
              </ul>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Shoppers Stop – CASB &amp; DLP Implementation
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                CASB · Data Loss Prevention
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Implemented CASB + DLP controls to secure SaaS applications and prevent data leakage.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Integrated CASB (Netskope/Forcepoint) with cloud apps</li>
                <li>Created policies for data visibility and control (Shadow IT, SaaS)</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">CASB</span>
                <span className="tech-pill">Netskope</span>
                <span className="tech-pill">ZTNA</span>
              </div>
            </Card>
            <Card transparent>
              <Typography variant="h4" style={{ marginBottom: spacingRem.xs }}>
                Moneyview – Zero Trust Cloud Security, CASB
              </Typography>
              <Typography variant="mono" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.xs }}>
                Zero Trust · Cloud Security · IAM
              </Typography>
              <Typography variant="small" color="var(--dominant-text-muted)">
                Implemented Zero Trust security model for a fintech environment handling sensitive data.
              </Typography>
              <ul
                style={{
                  margin: `${spacingRem.xs} 0 0`,
                  paddingLeft: "1.1rem",
                  color: "var(--dominant-text-muted)",
                  fontSize: fontSizeRem.xs,
                  lineHeight: 1.5,
                }}
              >
                <li>Integrated endpoint + user identity validation</li>
                <li>Strengthened protection for financial data systems</li>
              </ul>
              <div style={pillRowStyle}>
                <span className="tech-pill">Zero Trust</span>
                <span className="tech-pill">Cloud Security</span>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Azure</span>
                <span className="tech-pill">IAM</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="toolkit" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            TOOLKIT
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.md }}>
            Platforms, identity &amp; operations
          </Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: spacingRem.sm,
            }}
          >
            <SkillGroup
              title="SASE & Security Platforms"
              titleIcon={<FaShieldAlt size={12} />}
              items={[
                { icon: <FaChevronRight size={10} />, label: "Netskope" },
                { icon: <FaChevronRight size={10} />, label: "Zscaler" },
                { icon: <FaChevronRight size={10} />, label: "CrowdStrike" },
              ]}
            />
            <SkillGroup
              title="Identity & Access (IAM)"
              titleIcon={<FaKey size={12} />}
              items={[
                { icon: <FaChevronRight size={10} />, label: "Azure AD (Entra ID)" },
                { icon: <FaChevronRight size={10} />, label: "Okta" },
                { icon: <FaChevronRight size={10} />, label: "OneLogin" },
              ]}
            />
            <SkillGroup
              title="Endpoint & Device Management"
              titleIcon={<FaServer size={12} />}
              items={[
                { icon: <FaChevronRight size={10} />, label: "ManageEngine" },
                { icon: <FaChevronRight size={10} />, label: "SCCM" },
                { icon: <FaChevronRight size={10} />, label: "Intune" },
              ]}
            />
            <SkillGroup
              title="Cloud & Security Architecture"
              titleIcon={<FaCloud size={12} />}
              items={[
                { icon: <FaAws size={12} />, label: "AWS" },
                { icon: <FaMicrosoft size={12} />, label: "Azure" },
                { icon: <SiGooglecloud size={12} />, label: "GCP" },
                { icon: <FaChevronRight size={10} />, label: "Zero Trust" },
                { icon: <FaChevronRight size={10} />, label: "ZTNA" },
              ]}
            />
            <SkillGroup
              title="Security Operations & Support"
              titleIcon={<FaHeadset size={12} />}
              items={[
                { icon: <FaChevronRight size={10} />, label: "Ticketing Systems" },
                { icon: <FaChevronRight size={10} />, label: "Incident Handling" },
                { icon: <FaChevronRight size={10} />, label: "Escalation" },
              ]}
            />
            <SkillGroup
              title="Productivity & Collaboration"
              titleIcon={<FaMicrosoft size={12} />}
              items={[{ icon: <FaChevronRight size={10} />, label: "Microsoft 365 (Word, Excel, Outlook, PowerPoint)" }]}
            />
            <SkillGroup
              title="Documentation & Knowledge"
              titleIcon={<FaClipboardCheck size={12} />}
              items={[
                { icon: <FaChevronRight size={10} />, label: "SOW, POC, SOP, KT docs" },
                { icon: <FaChevronRight size={10} />, label: "Visio, Word, Excel, PowerPoint" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="blog" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            BLOG
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.md }}>
            Writing &amp; insights
          </Typography>
          <div className="grid-3">
            <BlogCard
              href="https://medium.com/@prabhdeepsingh8998/memory-forensics-case-study-detecting-malware-in-a-windows-memory-dump-256ff8ee0fec"
              date="Security"
              title="Memory forensics case study: detecting malware in a Windows memory dump"
              excerpt="Walkthrough of memory analysis techniques for malware detection."
              tag="Forensics"
              tagIcon={<FaShieldAlt size={12} />}
            />
            <BlogCard
              href="https://medium.com/@prabhdeepsingh8998/inside-the-wire-uncovering-icedid-malware-with-wireshark-and-network-miner-64534deb5e06"
              date="Security"
              title="Inside the wire: uncovering IcedID malware with Wireshark and NetworkMiner"
              excerpt="Network traffic analysis for malware investigation."
              tag="Network Security"
              tagIcon={<FaShieldAlt size={12} />}
            />
          </div>
          <div style={{ marginTop: spacingRem.md }}>
            <Button
              variant="secondary"
              size="md"
              href="https://medium.com/@prabhdeepsingh8998"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaMedium size={16} />}
            >
              All posts on Medium
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container fade-up">
          <Typography variant="label" color="var(--accent-base)">
            CONTACT
          </Typography>
          <Typography variant="h3" style={{ marginTop: spacingRem.xs, marginBottom: spacingRem.sm }}>
            Let&apos;s connect
          </Typography>
          <Typography variant="body" color="var(--dominant-text-muted)" style={{ marginBottom: spacingRem.md, maxWidth: "42ch" }}>
            Open to cloud security, SASE/DLP, and Zero Trust engagements. Reach out on LinkedIn or Medium.
          </Typography>
          <div
            style={{
              display: "flex",
              gap: spacingRem.xs,
              flexWrap: "wrap",
              marginBottom: spacingRem.md,
            }}
          >
            <Button
              variant="secondary"
              size="md"
              href="https://www.linkedin.com/in/prabhdeepsingh-infosec/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaLinkedin size={16} />}
            >
              LinkedIn
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://medium.com/@prabhdeepsingh8998"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaMedium size={16} />}
            >
              Medium
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="https://github.com/prabhdeep1"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={16} />}
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: spacingRem.md,
          color: "var(--dominant-text-muted)",
          fontSize: fontSizeRem.xs,
          borderTop: "1px solid var(--secondary-border)",
        }}
      >
        &#x00A9; {new Date().getFullYear()} Prabhdeep Singh Taneja. Cloud Security Engineer.
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
