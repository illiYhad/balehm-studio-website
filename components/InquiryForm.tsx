"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitInquiry } from "@/app/actions";
import { PACKAGE_OPTIONS, TEMPLATES } from "@/lib/content";
import type { Dict, Lang } from "@/lib/i18n";
import type { InquiryState } from "@/lib/inquiry";
import { LINE_URL, hasValue } from "@/lib/site-config";

export function InquiryForm({ lang, t }: { lang: Lang; t: Dict }) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(submitInquiry, null);
  // /templates → "เลือกแบบนี้" ส่ง ?template=T01 มา
  const templateParam = useSearchParams().get("template");
  const picked = TEMPLATES.find((tp) => tp.code === templateParam);
  const f = t.form;

  return (
    <form className="form card" action={action}>
      {/* ภาษาของข้อความตอบกลับ · ไม่บันทึกลงตาราง */}
      <input type="hidden" name="lang" value={lang} />
      <div className="field">
        <label htmlFor="f-name">{f.name}</label>
        <input id="f-name" name="name" placeholder={f.namePh} required maxLength={60} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-contact">{f.contact}</label>
        <input id="f-contact" name="contact" placeholder={f.contactPh} required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="f-business">{f.business}</label>
        <input id="f-business" name="business" placeholder={f.businessPh} maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="f-package">{f.package}</label>
        {/* value = PACKAGE_OPTIONS เดิม (server เช็ค) · ป้ายแปลตามภาษา */}
        <select id="f-package" name="package" defaultValue={PACKAGE_OPTIONS[0]}>
          {PACKAGE_OPTIONS.map((p, i) => (
            <option key={p} value={p}>
              {f.packageLabels[i] ?? p}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name="template" value={picked?.code ?? ""} />
      {picked && (
        <p className="picked">
          {f.picked}{" "}
          <b>
            {picked.code} · {picked.name}
          </b>
        </p>
      )}
      <div className="field">
        <label htmlFor="f-message">{f.message}</label>
        <textarea id="f-message" name="message" placeholder={f.messagePh} maxLength={2000} />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">{f.honeypot}</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state && (
        <div className={`notice ${state.ok ? "ok" : "warn"}`} role="status">
          <span>{state.message}</span>
          {state.fallback && hasValue(LINE_URL) && (
            <a className="btn btn-primary" href={LINE_URL} target="_blank" rel="noopener">
              {f.lineFallback}
            </a>
          )}
        </div>
      )}
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? f.sending : f.submit}
      </button>
    </form>
  );
}
