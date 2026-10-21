"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { getDict, isLang } from "@/lib/i18n";
import { validateInquiry, type InquiryState } from "@/lib/inquiry";

async function clientIpHash(): Promise<string> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  // เก็บแค่แฮช ไม่เก็บ IP ดิบ (PDPA · สูตรเดียวกับ Aiko)
  return createHash("sha256").update(`bts:${ip}`).digest("hex").slice(0, 32);
}

/**
 * ฟอร์มขอใบเสนอราคา — มี SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY → บันทึกตาราง inquiries (supabase/001_inquiries.sql)
 * ไม่มี env → ไม่ error แจ้งให้ทัก LINE แทน · ใช้ REST ของ Supabase ตรง ๆ (ใบงานไม่อนุญาตเพิ่มแพ็กเกจ supabase-js)
 */
export async function submitInquiry(_prev: InquiryState, form: FormData): Promise<InquiryState> {
  // ภาษาของข้อความตอบกลับเท่านั้น (hidden lang) · ไม่บันทึกลงตาราง
  const lang = String(form.get("lang") ?? "");
  const m = getDict(isLang(lang) ? lang : "th").inquiry;
  const OK = m.ok;
  const FAIL = m.fail;
  const CLOSED = m.closed;

  // กับดักบอท: ช่องซ่อนที่คนจริงไม่เห็น
  if (String(form.get("website") ?? "") !== "") return { ok: true, message: OK };

  const parsed = validateInquiry(form, m);
  if (!parsed.ok) return { ok: false, message: parsed.message };

  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { ok: false, fallback: true, message: CLOSED };

  const v = parsed.value;
  try {
    const res = await fetch(`${url}/rest/v1/inquiries`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name: v.name,
        contact: v.contact,
        business: v.business,
        package: v.package,
        template_code: v.template,
        message: v.message,
        consent_at: new Date().toISOString(),
        ip_hash: await clientIpHash(),
      }),
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, fallback: true, message: FAIL };
  } catch {
    return { ok: false, fallback: true, message: FAIL };
  }
  return { ok: true, message: OK };
}
