import React, { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { spacing } from "../../tokens/spacing";
import { fontFamily, fontSize, fontWeight } from "../../tokens/typography";

interface Props {
  value: number;
  suffix?: string;
  format?: string; // e.g. "1.5M"
  label: string;
}

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

export const StatCard: React.FC<Props> = ({ value, suffix = "", format, label }) => {
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
        <div style={{ fontFamily, fontSize: fontSize.xxl, fontWeight: fontWeight.bold, color: "var(--accent-base)", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
          {display}
        </div>
        <div style={{ fontFamily, fontSize: fontSize.xs, color: "var(--dominant-text-muted)", marginTop: spacing.xs / 2 }}>
          {label}
        </div>
      </div>
    </Card>
  );
};
