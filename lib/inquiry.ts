import { PACKAGE_OPTIONS, TEMPLATES } from "@/lib/content";
import type { Dict } from "@/lib/i18n";

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

export function validateInquiry(form: FormData, m: Dict["inquiry"]): { ok: true; value: Inquiry } | { ok: false; message: string } {
  const name = str(form, "name");
  const contact = str(form, "contact");
  const business = str(form, "business");
  const pkg = str(form, "package");
  const template = str(form, "template");
  const message = str(form, "message");

  if (name.length < 1 || name.length > 60) return { ok: false, message: m.name };
  if (contact.length < 3 || contact.length > 100) return { ok: false, message: m.contact };
  if (business.length > 100) return { ok: false, message: m.business };
  if (message.length > 2000) return { ok: false, message: m.message };
  if (pkg && !(PACKAGE_OPTIONS as readonly string[]).includes(pkg)) return { ok: false, message: m.package };
  if (template && !TEMPLATES.some((t) => t.code === template)) return { ok: false, message: m.template };

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
