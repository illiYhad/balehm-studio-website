import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { EMAIL, LINE_ID, LINE_URL, PHONE, hasValue } from "@/lib/site-config";

export function ContactSection() {
  const lineText = hasValue(LINE_ID) ? `LINE: ${LINE_ID}` : "LINE";
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-side">
          <span className="eyebrow">ติดต่อ</span>
          <h2>เล่าสิ่งที่อยากได้ เราตอบใน 24 ชม.</h2>
          <p className="muted">ไม่ต้องรู้ศัพท์เทคนิค บอกแค่ธุรกิจทำอะไร อยากให้เว็บช่วยอะไร</p>
          {/* chip ที่ค่าใน site-config ว่าง = ไม่แสดง */}
          <div className="chips">
            {hasValue(LINE_URL) && (
              <a className="chip" href={LINE_URL} target="_blank" rel="noopener">
                {lineText}
              </a>
            )}
            {hasValue(PHONE) && (
              <a className="chip" href={`tel:${PHONE}`}>
                โทร: {PHONE}
              </a>
            )}
            {hasValue(EMAIL) && (
              <a className="chip" href={`mailto:${EMAIL}`}>
                อีเมล: {EMAIL}
              </a>
            )}
          </div>
        </div>
        <Suspense>
          <InquiryForm />
        </Suspense>
      </div>
    </section>
  );
}
