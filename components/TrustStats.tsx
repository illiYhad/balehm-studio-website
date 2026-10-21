"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Globe, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { TRUST } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = { Globe, ShieldCheck, Rocket, Bot };
const DURATION = 1200;

/** ตัวเลข Trust + count-up 0→ค่า ตอนเข้าจอ · SSR/ไม่มี JS/reduced-motion = ค่าจริงทันที */
export function TrustStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) return; // เห็นอยู่แล้วตอนโหลด ไม่ต้องกระพริบเป็น 0
    setProgress(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="trust" ref={ref}>
      {TRUST.map((t) => {
        const Icon = ICONS[t.icon];
        const m = t.num.match(/^(\d+)(.*)$/);
        const shown = m ? `${Math.round(Number(m[1]) * progress)}${m[2]}` : t.num;
        return (
          <div className="card" key={t.label}>
            <span className="ico-box" aria-hidden="true">
              <Icon size={24} strokeWidth={1.75} />
            </span>
            <span className="num">
              <span className="num-val">{shown}</span>
              {t.unit && <small>{t.unit}</small>}
            </span>
            <span className="lbl">{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
