import { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { spacingRem } from "../../tokens/spacing";
import { fontFamily, fontSizeRem, fontWeight } from "../../tokens/typography";

export type AnimatedStatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  format?: string;
};

export type StaticStatCardProps = {
  label: string;
  staticDisplay: string;
};

export type StatCardProps = AnimatedStatCardProps | StaticStatCardProps;

function formatNum(n: number, target: number, fmt?: string): string {
  if (fmt && target >= 1_000_000) {
    const m = n / 1_000_000;
    if (m >= 1) return m.toFixed(1).replace(/\.0$/, "") + "M";
    const k = n / 1_000;
    if (k >= 1) return Math.floor(k) + "K";
    return Math.floor(n).toString();
  }
  return Math.floor(n).toString();
}

function StatCardAnimated({ label, value, suffix = "", format }: AnimatedStatCardProps) {
  const [display, setDisplay] = useState("0" + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const start = performance.now();
        const duration = 2000;
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay(formatNum(ease * value, value, format) + suffix);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, suffix, format]);

  return (
    <Card transparent padding="sm">
      <div ref={ref} style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily,
            fontSize: fontSizeRem.xxl,
            fontWeight: fontWeight.bold,
            color: "var(--accent-base)",
            letterSpacing: "-0.03em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {display}
        </div>
        <div style={{ fontFamily, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)", marginTop: spacingRem.xs }}>
          {label}
        </div>
      </div>
    </Card>
  );
}

function StatCardStatic({ label, staticDisplay }: StaticStatCardProps) {
  return (
    <Card transparent padding="sm">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily,
            fontSize: fontSizeRem.lg,
            fontWeight: fontWeight.bold,
            color: "var(--accent-base)",
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
          }}
        >
          {staticDisplay}
        </div>
        <div style={{ fontFamily, fontSize: fontSizeRem.xs, color: "var(--dominant-text-muted)", marginTop: spacingRem.xs }}>
          {label}
        </div>
      </div>
    </Card>
  );
}

export function StatCard(props: StatCardProps) {
  if ("staticDisplay" in props) {
    return <StatCardStatic {...props} />;
  }
  return <StatCardAnimated {...props} />;
}
