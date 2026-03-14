"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const DURATION = 1600; // ms

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(formatNumber(0, decimals));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);
          animate();
        }
      },
      { threshold: 0.5 }
    );

    function animate() {
      const start = performance.now();

      function tick(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / DURATION, 1);
        const easedProgress = easeOutQuart(progress);
        const current = easedProgress * target;

        setDisplay(formatNumber(current, decimals));

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function formatNumber(value: number, decimals: number): string {
  return value.toFixed(decimals);
}
