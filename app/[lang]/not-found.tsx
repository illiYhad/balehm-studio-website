"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NOT_FOUND } from "@/lib/i18n/not-found";

/** 404 ใต้ [lang] · not-found อ่าน params ไม่ได้ → ดู pathname: /en/* = อังกฤษ นอกนั้นไทย · client component เพื่อไม่ให้ข้อความไทยฝังใน HTML ของหน้า /en */
export default function NotFound() {
  const path = usePathname() || "/";
  const en = path === "/en" || path.startsWith("/en/");
  const t = en ? NOT_FOUND.en : NOT_FOUND.th;
  const p = en ? "/en" : "";
  return (
    <div className="center-page">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>{t.title}</h1>
        <p className="muted">{t.lead}</p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" href={p || "/"}>
            {t.home}
          </Link>
          <Link className="btn btn-ghost" href={`${p}/templates`}>
            {t.templates}
          </Link>
        </div>
      </div>
    </div>
  );
}
