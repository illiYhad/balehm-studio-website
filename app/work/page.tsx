import type { Metadata } from "next";
import Image from "next/image";
import { PORTFOLIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "ผลงาน",
  description: "เว็บไซต์และระบบที่ Balehm Tech Studio สร้างและออนไลน์อยู่จริง 6 เว็บ",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">ผลงานจริง</span>
            <h1>เว็บที่ออนไลน์อยู่ตอนนี้</h1>
            <p className="muted">กดเข้าไปดูได้ทุกเว็บ — ไม่ใช่ภาพจำลอง</p>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="wrap">
          <div className="pf">
            {PORTFOLIO.map((w) => (
              <a className="card" href={w.url} target="_blank" rel="noopener" key={w.url}>
                <div className="shot">
                  <Image src={w.img} alt={w.name} fill sizes="(max-width: 900px) 100vw, 380px" />
                </div>
                <div className="meta">
                  <h3>{w.name}</h3>
                  <small>{w.meta}</small>
                  <span className="go">{w.url.replace(/^https:\/\/(www\.)?/, "")} ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
