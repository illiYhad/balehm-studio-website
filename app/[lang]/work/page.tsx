import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PORTFOLIO } from "@/lib/content";
import { alternatesFor, getDict, isLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.work.metaTitle, description: t.work.metaDescription, alternates: alternatesFor(lang, "/work") };
}

export default async function WorkPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h1>{t.work.title}</h1>
            <p className="muted">{t.work.lead}</p>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="wrap">
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
                    <span className="go">{w.url.replace(/^https:\/\/(www\.)?/, "")} ↗</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
