import type { Metadata } from "next";
import Link from "next/link";
import { TemplateShot } from "@/components/TemplateShot";
import { TEMPLATES } from "@/lib/content";

export const metadata: Metadata = {
  title: "แคตตาล็อกเทมเพลต 12 แบบ",
  description: "เลือกโครงหน้าตาเว็บที่ชอบจาก 12 เทมเพลต แล้วเราเขียนใหม่บน Next.js ให้ — โค้ดเป็นของคุณ 100%",
  alternates: { canonical: "/templates" },
};

export default function TemplatesPage() {
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">เลือกแบบได้เอง</span>
            <h1>แคตตาล็อกเทมเพลต 12 แบบ</h1>
            <p className="muted">เลือกโครงหน้าตาที่ชอบ แล้วเราเขียนใหม่บนสแต็กของเรา — ไม่ใช่ส่งเทมเพลตดิบ</p>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="wrap">
          <div className="tpl tpl-full">
            {TEMPLATES.map((t) => (
              <div className="card" key={t.code}>
                <TemplateShot t={t} sizes="(max-width: 900px) 100vw, 380px" />
                <div className="body">
                  <span className="code">{t.code}</span>
                  <h3>{t.name}</h3>
                  <div className="row">
                    <span>{t.audience}</span>
                    <span className="lic">{t.license}</span>
                  </div>
                  <div className="actions">
                    <a className="btn btn-ghost" href={t.demo} target="_blank" rel="noopener">
                      ดูตัวอย่างสด
                    </a>
                    <Link className="btn btn-primary" href={`/?template=${t.code}#contact`}>
                      เลือกแบบนี้
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
