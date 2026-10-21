import Image from "next/image";
import Link from "next/link";
import { Building2, House, LayoutDashboard, Trophy, type LucideIcon } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { TemplateShot } from "@/components/TemplateShot";
import { TrustStats } from "@/components/TrustStats";
import { HOME_TEMPLATES, PACKAGES, PORTFOLIO, SERVICES } from "@/lib/content";
import { getDict, isLang, localePath } from "@/lib/i18n";
import { LINE_URL, hasValue } from "@/lib/site-config";
import { notFound } from "next/navigation";

const SERVICE_ICONS: Record<string, LucideIcon> = { Building2, House, Trophy, LayoutDashboard };

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  const lineHref = hasValue(LINE_URL) ? LINE_URL : "#contact";
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Web · Systems · AI Agents</span>
            <h1>
              {t.hero.titleA}
              <strong>{t.hero.titleStrong}</strong>
              <br />
              {t.hero.titleB}
            </h1>
            <p className="muted hero-lead">{t.hero.lead}</p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href={lineHref}
                {...(hasValue(LINE_URL) ? { target: "_blank", rel: "noopener" } : {})}
              >
                {t.hero.ctaLine}
              </a>
              <a className="btn btn-ghost" href="#pricing">
                {t.hero.ctaPricing}
              </a>
            </div>
          </div>
          <div className="hero-badge">
            <Image src="/BTS_badge_1024.png" alt={t.hero.badgeAlt} width={380} height={380} priority sizes="(max-width: 900px) 200px, 380px" />
          </div>
        </div>
      </header>

      <section className="trust-band">
        <div className="wrap">
          <TrustStats t={t} />
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h2>{t.services.title}</h2>
            <p className="muted">{t.services.lead}</p>
          </div>
          <div className="grid-4">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              const text = t.services.items[i];
              return (
                <div className="card svc" key={text.title}>
                  <div className="svc-top">
                    <span className="ico-box" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <span className="tag">{text.tag}</span>
                  </div>
                  <h3>{text.title}</h3>
                  <p>{text.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.pricing.eyebrow}</span>
            <h2>{t.pricing.title}</h2>
            <p className="muted">{t.pricing.lead}</p>
          </div>
          <div className="grid-3">
            {PACKAGES.map((p) => {
              const text = t.pricing.packages[p.key];
              return (
                <div className={`card price-card${p.hot ? " hot" : ""}`} key={p.key}>
                  {p.hot && <span className="ribbon">{t.pricing.ribbon}</span>}
                  <h3>{text.title}</h3>
                  <div className="price">
                    {t.pricing.pricePrefix && <span className="cur">{t.pricing.pricePrefix}</span>}
                    <span className="amt">{p.amount}</span>
                    {text.cur && <span className="cur">{text.cur}</span>}
                  </div>
                  <ul>
                    {text.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a className={`btn ${p.hot ? "btn-primary" : "btn-ghost"}`} href="#contact">
                    {text.cta}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="bonus">
            <div className="ico">AI</div>
            <div>
              <h3>{t.pricing.bonusTitle}</h3>
              <p className="muted">{t.pricing.bonusText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <p className="muted">{t.work.lead}</p>
          </div>
          <div className="pf">
            {PORTFOLIO.map((w, i) => {
              const text = t.work.items[i];
              return (
                <a className="card" href={w.url} target="_blank" rel="noopener" key={w.url}>
                  <div className="shot">
                    <Image src={w.img} alt={text.name} fill sizes="(max-width: 900px) 100vw, 380px" />
                  </div>
                  <div className="meta">
                    <h3>{text.name}</h3>
                    <small>{text.meta}</small>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="templates" className="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.templates.eyebrow}</span>
            <h2>{t.templates.title}</h2>
            <p className="muted">{t.templates.lead}</p>
          </div>
          <div className="tpl">
            {HOME_TEMPLATES.map((tp) => (
              <div className="card" key={tp.code}>
                <TemplateShot t={tp} sizes="(max-width: 900px) 50vw, 280px" />
                <div className="meta">
                  <span>{t.templates.items[tp.code].short}</span>
                  <span className="lic">{t.templates.items[tp.code].licenseShort}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-8)" }}>
            <Link className="btn btn-ghost" href={localePath(lang, "/templates")}>
              {t.templates.seeAll}
            </Link>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
          </div>
          <div className="steps">
            {t.process.steps.map((s, i) => (
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
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
          </div>
          <div className="faq">
            {t.faq.items.map((f) => (
              <div className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection lang={lang} t={t} />
    </>
  );
}
