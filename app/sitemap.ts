import type { MetadataRoute } from "next";
import { localePath } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site-config";

const PAGES: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/templates", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // ทั้ง 2 ภาษา · hreflang ชี้หากัน · x-default = ไทย
  return PAGES.flatMap((p) => {
    const languages = { th: `${SITE_URL}${p.path}`, en: `${SITE_URL}${localePath("en", p.path)}`, "x-default": `${SITE_URL}${p.path}` };
    return (["th", "en"] as const).map((lang) => ({
      url: `${SITE_URL}${localePath(lang, p.path)}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: lang === "th" ? p.priority : p.priority * 0.9,
      alternates: { languages },
    }));
  });
}
