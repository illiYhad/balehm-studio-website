import Image from "next/image";
import Link from "next/link";
import { Building2, House, LayoutDashboard, Trophy, type LucideIcon } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { TemplateShot } from "@/components/TemplateShot";
import { TrustStats } from "@/components/TrustStats";
import { FAQ, HOME_TEMPLATES, PACKAGES, PORTFOLIO, SERVICES, STEPS, TRUST } from "@/lib/content";
import { LINE_URL, hasValue } from "@/lib/site-config";

const SERVICE_ICONS: Record<string, LucideIcon> = { Building2, House, Trophy, LayoutDashboard };

export default function Home() {
  const lineHref = hasValue(LINE_URL) ? LINE_URL : "#contact";
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Web · Systems · AI Agents</span>
            <h1>
              เว็บและระบบที่<strong>โค้ดเป็นของคุณ 100%</strong>
              <br />
              พร้อมผู้ช่วย AI ประจำธุรกิจ
            </h1>
            <p className="muted hero-lead">
              ไม่ใช่เว็บสำเร็จรูป ไม่ต้องเช่าแพลตฟอร์มรายปี — เราสร้างด้วย Next.js + ฐานข้อมูลจริง + หลังบ้านที่คุณแก้เองได้
              ส่งมอบพร้อมผู้ช่วย AI ที่เทรนข้อมูลธุรกิจของคุณไว้แล้ว
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href={lineHref}
                {...(hasValue(LINE_URL) ? { target: "_blank", rel: "noopener" } : {})}
              >
                ปรึกษาฟรีทาง LINE
              </a>
              <a className="btn btn-ghost" href="#pricing">
                ดูราคาแพ็กเกจ
              </a>
            </div>
          </div>
          <div className="hero-badge">
            <Image src="/BTS_badge_1024.png" alt="ตรา BTS" width={380} height={380} priority sizes="(max-width: 900px) 200px, 380px" />
          </div>
        </div>
      </header>

      <section className="trust-band">
        <div className="wrap">
          <TrustStats />
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">บริการ</span>
            <h2>เราทำอะไรให้คุณได้บ้าง</h2>
            <p className="muted">ทุกงานใช้สแต็กเดียวกับที่เราใช้กับลูกค้าจริง: Next.js · Supabase · Vercel</p>
          </div>
          <div className="grid-4">
            {SERVICES.map((s) => (
              <div className="card svc" key={s.title}>
                <div className="svc-top">
                  <span className="ico-box" aria-hidden="true">
                    {(() => {
                      const Icon = SERVICE_ICONS[s.icon];
                      return <Icon size={24} strokeWidth={1.75} />;
                    })()}
                  </span>
                  <span className="tag">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">ราคา</span>
            <h2>3 แพ็กเกจ ราคาชัด ไม่มีค่าแอบแฝง</h2>
            <p className="muted">มัดจำ 50% เริ่มงาน · อีก 50% เมื่อส่งมอบ · ปีถัดไป (โดเมน + โฮสต์ + ดูแล) 3,500 บาท</p>
          </div>
          <div className="grid-3">
            {PACKAGES.map((p) => (
              <div className={`card price-card${p.hot ? " hot" : ""}`} key={p.key}>
                {p.hot && <span className="ribbon">ยอดนิยม</span>}
                <h3>{p.title}</h3>
                <div className="price">
                  <span className="amt">{p.amount}</span>
                  <span className="cur">{p.cur}</span>
                </div>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <a className={`btn ${p.hot ? "btn-primary" : "btn-ghost"}`} href="#contact">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="bonus">
            <div className="ico">AI</div>
            <div>
              <h3>ทุกแพ็กเกจแถม &quot;ผู้ช่วย AI ประจำธุรกิจคุณ&quot;</h3>
              <p className="muted">
                เราตั้งค่า Claude Pro และเทรนข้อมูลธุรกิจของคุณ (สินค้า ราคา คำถามลูกค้า วิธีใช้หลังบ้าน) ให้พร้อมใช้ — ฟรี 3 เดือนแรก
                หลังจากนั้นต่ออายุเอง ~700 บาท/เดือน
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">ผลงานจริง</span>
            <h2>เว็บที่ออนไลน์อยู่ตอนนี้</h2>
            <p className="muted">กดเข้าไปดูได้ทุกเว็บ — ไม่ใช่ภาพจำลอง</p>
          </div>
          <div className="pf">
            {PORTFOLIO.map((w) => (
              <a className="card" href={w.url} target="_blank" rel="noopener" key={w.url}>
                <div className="shot">
                  <Image src={w.img} alt={w.name} fill sizes="(max-width: 900px) 100vw, 380px" />
                </div>
                <div className="meta">
                  <h3>{w.name}</h3>
                  <small>{w.meta}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">เลือกแบบได้เอง</span>
            <h2>แคตตาล็อกเทมเพลตให้คุณเลือกก่อนเริ่ม</h2>
            <p className="muted">เลือกโครงหน้าตาที่ชอบ แล้วเราเขียนใหม่บนสแต็กของเรา — ไม่ใช่ส่งเทมเพลตดิบ</p>
          </div>
          <div className="tpl">
            {HOME_TEMPLATES.map((t) => (
              <div className="card" key={t.code}>
                <TemplateShot t={t} sizes="(max-width: 900px) 50vw, 280px" />
                <div className="meta">
                  <span>{t.short}</span>
                  <span className="lic">{t.licenseShort}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Link className="btn btn-ghost" href="/templates">
              ดูเทมเพลตทั้ง 12 แบบ
            </Link>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">ขั้นตอน</span>
            <h2>5 ขั้น จากคุยครั้งแรกถึงเว็บออนไลน์</h2>
          </div>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="card step" key={s.title}>
                <span className="n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">คำถามที่พบบ่อย</span>
            <h2>ก่อนตัดสินใจ</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <div className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
