import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TemplateShot } from "@/components/TemplateShot";
import { TEMPLATES } from "@/lib/content";
import { alternatesFor, getDict, isLang, localePath } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  return { title: t.templates.pageTitle, description: t.templates.metaDescription, alternates: alternatesFor(lang, "/templates") };
}

export default async function TemplatesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.templates.eyebrow}</span>
            <h1>{t.templates.pageTitle}</h1>
            <p className="muted">{t.templates.lead}</p>
          </div>
        </div>
      </div>
      <div className="page-body">
        <div className="wrap">
          <div className="tpl tpl-full">
            {TEMPLATES.map((tp) => {
              const text = t.templates.items[tp.code];
              return (
                <div className="card" key={tp.code}>
                  <TemplateShot t={tp} sizes="(max-width: 900px) 100vw, 380px" />
                  <div className="body">
                    <span className="code">{tp.code}</span>
                    <h3>{tp.name}</h3>
                    <div className="row">
                      <span>{text.audience}</span>
                      <span className="lic">{text.license}</span>
                    </div>
                    <div className="actions">
                      <a className="btn btn-ghost" href={tp.demo} target="_blank" rel="noopener">
                        {t.templates.demo}
                      </a>
                      <Link className="btn btn-primary" href={`${localePath(lang, "/")}?template=${tp.code}#contact`}>
                        {t.templates.pick}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
