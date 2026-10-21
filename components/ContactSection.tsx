import Image from "next/image";
import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import type { Dict, Lang } from "@/lib/i18n";
import { EMAIL, LINE_ID, LINE_URL, PHONE, PHONE_DISPLAY, PHONE_TEL, hasValue } from "@/lib/site-config";

export function ContactSection({ lang, t }: { lang: Lang; t: Dict }) {
  const lineText = hasValue(LINE_ID) ? `LINE: ${LINE_ID}` : "LINE";
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-side">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p className="muted">{t.contact.lead}</p>
          {/* chip ที่ค่าใน site-config ว่าง = ไม่แสดง */}
          <div className="chips">
            {hasValue(LINE_URL) && (
              <a className="chip" href={LINE_URL} target="_blank" rel="noopener">
                {lineText}
              </a>
            )}
            {hasValue(PHONE) && (
              <a className="chip" href={PHONE_TEL}>
                {t.contact.phone}: {PHONE_DISPLAY}
              </a>
            )}
            {hasValue(EMAIL) && (
              <a className="chip" href={`mailto:${EMAIL}`}>
                {t.contact.email}: {EMAIL}
              </a>
            )}
          </div>
          {hasValue(LINE_URL) && (
            <>
              {/* desktop: QR (public/line-qr.svg สร้างจาก LINE_URL) · มือถือ: สแกนจอตัวเองไม่ได้ → ปุ่มแอด LINE */}
              <div className="qr">
                <Image src="/line-qr.svg" alt={t.contact.qrAlt} width={160} height={160} unoptimized />
                <span className="muted">{t.contact.qrCaption}</span>
              </div>
              <a className="btn btn-primary qr-mobile" href={LINE_URL} target="_blank" rel="noopener">
                {t.contact.addLine}
              </a>
            </>
          )}
        </div>
        <Suspense>
          <InquiryForm lang={lang} t={t} />
        </Suspense>
      </div>
    </section>
  );
}
