"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Globe, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { TRUST } from "@/lib/content";
import type { Dict } from "@/lib/i18n";

const ICONS: Record<string, LucideIcon> = { Globe, ShieldCheck, Rocket, Bot };
const DURATION = 1200;

/** ตัวเลข Trust + count-up 0→ค่า ตอนเข้าจอ · SSR/ไม่มี JS/reduced-motion = ค่าจริงทันที · ข้อความจาก t.trust (ลำดับตรง TRUST) */
export function TrustStats({ t }: { t: Dict }) {
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
        const p = Math.min(1, (now - start) / DURATION);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
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
      {TRUST.map((item, i) => {
        const Icon = ICONS[item.icon];
        const text = t.trust[i];
        const m = item.num.match(/^(\d+)(.*)$/);
        const shown = m ? `${Math.round(Number(m[1]) * progress)}${m[2]}` : item.num;
        return (
          <div className="card" key={text.label}>
            <span className="ico-box" aria-hidden="true">
              <Icon size={24} strokeWidth={1.75} />
            </span>
            <span className="num">
              <span className="num-val">{shown}</span>
              {text.unit && <small>{text.unit}</small>}
            </span>
            <span className="lbl">{text.label}</span>
          </div>
        );
      })}
    </div>
  );
}
