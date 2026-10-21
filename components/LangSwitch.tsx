"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n";

/** TH | EN · อยู่หน้าเดิมของอีกภาษา (/templates ↔ /en/templates) · ไม่จำค่า (ไม่มี cookie/localStorage) */
export function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const path = usePathname() || "/";
  const thPath = path === "/en" ? "/" : path.startsWith("/en/") ? path.slice(3) : path;
  const enPath = thPath === "/" ? "/en" : `/en${thPath}`;
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
