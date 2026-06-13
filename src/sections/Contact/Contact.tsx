import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMedium,
  FaPhone,
} from "react-icons/fa";
import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container fade-up">
        <Typography variant="label" color="var(--accent-base)">
          CONTACT
        </Typography>
        <Typography variant="h3" className="contact-heading">
          Let&apos;s build something.
        </Typography>
        <Typography
          variant="body"
          color="var(--dominant-text-muted)"
          className="section-header__intro section-header__intro--narrow"
        >
          Senior frontend engineer with deep map platform and AI&#x2011;native
          DX experience. If you&apos;re building at scale and need an engineer
          who architects infrastructure &#x2014; let&apos;s talk.
        </Typography>
        <div className="btn-row btn-row--spaced">
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
          <Button
            variant="secondary"
            size="md"
            href="mailto:amandhunna.dev@gmail.com"
            icon={<FaEnvelope size={16} />}
          >
            amandhunna.dev@gmail.com
          </Button>
          <Button
            variant="secondary"
            size="md"
            href="tel:+917042458977"
            icon={<FaPhone size={16} />}
          >
            +91 70424 58977
          </Button>
        </div>
        <Typography variant="small" color="var(--dominant-text-muted)" className="location-row">
          <FaMapMarkerAlt size={14} /> Based in India
        </Typography>
      </div>
    </section>
  );
}
