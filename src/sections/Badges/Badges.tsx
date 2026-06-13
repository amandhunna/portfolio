import type { ReactNode } from "react";
import {
  FaBookOpen,
  FaCode,
  FaCrosshairs,
  FaGraduationCap,
  FaJs,
  FaNetworkWired,
  FaRobot,
  FaShieldAlt,
  FaToolbox,
} from "react-icons/fa";
import { Badge } from "../../components/Badge";
import { SectionHeader } from "../../components/SectionHeader";
import { BADGES } from "../../content/badges";
import type { BadgeData } from "../../content/badges";

const BADGE_ICONS: Record<BadgeData["icon"], ReactNode> = {
  crosshairs: <FaCrosshairs size={18} />,
  book: <FaBookOpen size={18} />,
  graduation: <FaGraduationCap size={18} />,
  network: <FaNetworkWired size={18} />,
  shield: <FaShieldAlt size={18} />,
  js: <FaJs size={18} />,
  code: <FaCode size={18} />,
  toolbox: <FaToolbox size={18} />,
  robot: <FaRobot size={18} />,
};

export function Badges() {
  return (
    <section id="badges" className="section">
      <div className="container fade-up">
        <SectionHeader label={"BADGES \u0026 CERTS"} title="Hack The Box" />
        <div className="badge-row">
          {BADGES.map((badge) => (
            <Badge
              key={badge.name}
              icon={BADGE_ICONS[badge.icon]}
              name={badge.name}
              source={badge.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
