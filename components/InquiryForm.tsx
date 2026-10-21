"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitInquiry } from "@/app/actions";
import { PACKAGE_OPTIONS, TEMPLATES } from "@/lib/content";
import type { InquiryState } from "@/lib/inquiry";
import { LINE_URL, hasValue } from "@/lib/site-config";

export function InquiryForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(submitInquiry, null);
  // /templates → "เลือกแบบนี้" ส่ง ?template=T01 มา
  const templateParam = useSearchParams().get("template");
  const picked = TEMPLATES.find((t) => t.code === templateParam);

  return (
    <form className="form card" action={action}>
      <div className="field">
        <label htmlFor="f-name">ชื่อ</label>
        <input id="f-name" name="name" placeholder="ชื่อ-นามสกุล" required maxLength={60} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-contact">เบอร์โทร / LINE</label>
        <input id="f-contact" name="contact" placeholder="สำหรับติดต่อกลับ" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="f-business">ธุรกิจของคุณ</label>
        <input id="f-business" name="business" placeholder="เช่น ร้านอาหาร · อพาร์ตเมนต์ · งานแข่ง" maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="f-package">สนใจแพ็กเกจ</label>
        <select id="f-package" name="package" defaultValue={PACKAGE_OPTIONS[0]}>
          {PACKAGE_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <input type="hidden" name="template" value={picked?.code ?? ""} />
      {picked && (
        <p className="picked">
          เทมเพลตที่เลือก: <b>{picked.code} · {picked.name}</b>
        </p>
      )}
      <div className="field">
        <label htmlFor="f-message">รายละเอียด</label>
        <textarea id="f-message" name="message" placeholder="อยากให้เว็บช่วยอะไร มีตัวอย่างเว็บที่ชอบไหม" maxLength={2000} />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">เว็บไซต์</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {state && (
        <div className={`notice ${state.ok ? "ok" : "warn"}`} role="status">
          <span>{state.message}</span>
          {state.fallback && hasValue(LINE_URL) && (
            <a className="btn btn-primary" href={LINE_URL} target="_blank" rel="noopener">
              ทัก LINE
            </a>
          )}
        </div>
      )}
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "กำลังส่ง…" : "ส่งขอใบเสนอราคา"}
      </button>
    </form>
  );
}
