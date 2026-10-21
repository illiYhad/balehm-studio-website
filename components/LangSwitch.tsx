"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Lang } from "@/lib/i18n";

/**
 * ตัด prefix ภาษาออกให้เหลือ path กลาง (ไม่มี prefix)
 * บนหน้าไทย usePathname() คืน path หลัง rewrite ของ middleware (`/th/...`) ใน production — ไม่ใช่ URL ที่ผู้ใช้เห็น
 * จึงต้องตัดทั้ง `/th` และ `/en` · path ที่ไม่มี prefix คืนตามเดิม
 */
export function stripLang(path: string): string {
  for (const l of ["th", "en"]) {
    if (path === `/${l}`) return "/";
    if (path.startsWith(`/${l}/`)) return path.slice(l.length + 1);
  }
  return path;
}

/** TH | EN · อยู่หน้าเดิมของอีกภาษา (/templates ↔ /en/templates) · ไม่จำค่า (ไม่มี cookie/localStorage) */
export function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const neutral = stripLang(usePathname() || "/");
  const thPath = localePath("th", neutral);
  const enPath = localePath("en", neutral);
  return (
    <div className="lang" role="group" aria-label={label}>
      <Link href={thPath} lang="th" hrefLang="th" aria-current={lang === "th" ? "true" : undefined}>
        TH
      </Link>
      <span aria-hidden="true">|</span>
      <Link href={enPath} lang="en" hrefLang="en" aria-current={lang === "en" ? "true" : undefined}>
        EN
      </Link>
    </div>
  );
}
