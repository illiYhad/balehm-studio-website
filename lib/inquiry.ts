import { PACKAGE_OPTIONS, TEMPLATES } from "@/lib/content";

export type InquiryState = { ok: boolean; message: string; fallback?: boolean } | null;

export type Inquiry = {
  name: string;
  contact: string;
  business: string | null;
  package: string | null;
  template: string | null;
  message: string | null;
};

const str = (form: FormData, key: string) => String(form.get(key) ?? "").trim();

export function validateInquiry(form: FormData): { ok: true; value: Inquiry } | { ok: false; message: string } {
  const name = str(form, "name");
  const contact = str(form, "contact");
  const business = str(form, "business");
  const pkg = str(form, "package");
  const template = str(form, "template");
  const message = str(form, "message");

  if (name.length < 1 || name.length > 60) return { ok: false, message: "กรุณากรอกชื่อ (ไม่เกิน 60 ตัวอักษร)" };
  if (contact.length < 3 || contact.length > 100) return { ok: false, message: "กรุณากรอกเบอร์โทรหรือ LINE สำหรับติดต่อกลับ" };
  if (business.length > 100) return { ok: false, message: "ช่องธุรกิจยาวเกินไป (ไม่เกิน 100 ตัวอักษร)" };
  if (message.length > 2000) return { ok: false, message: "รายละเอียดยาวเกินไป (ไม่เกิน 2,000 ตัวอักษร)" };
  if (pkg && !(PACKAGE_OPTIONS as readonly string[]).includes(pkg)) return { ok: false, message: "แพ็กเกจไม่ถูกต้อง" };
  if (template && !TEMPLATES.some((t) => t.code === template)) return { ok: false, message: "รหัสเทมเพลตไม่ถูกต้อง" };

  return {
    ok: true,
    value: {
      name,
      contact,
      business: business || null,
      package: pkg || null,
      template: template || null,
      message: message || null,
    },
  };
}
