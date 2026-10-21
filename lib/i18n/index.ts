import { en } from "./en";
import { th, type Dict } from "./th";

export type { Dict };
export const LANGS = ["th", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);
export const getDict = (lang: Lang): Dict => (lang === "en" ? en : th);

/** ลิงก์ภายในตามภาษา: ไทยไม่มี prefix · อังกฤษ /en · path เริ่มด้วย "/" (เช่น "/", "/templates", "/#contact") */
export function localePath(lang: Lang, path: string): string {
  if (lang === "th") return path;
  if (path === "/") return "/en";
  if (path.startsWith("/#")) return `/en${path.slice(1)}`;
  return `/en${path}`;
}

/** metadata.alternates สำหรับ path ไทย (เช่น "/templates") · x-default = ไทย */
export function alternatesFor(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: { th: path, en: localePath("en", path), "x-default": path },
  };
}
