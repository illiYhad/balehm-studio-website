import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatButtons } from "@/components/FloatButtons";
import { notFound } from "next/navigation";
import { LANGS, alternatesFor, getDict, isLang, localePath, type Lang } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site-config";
import "../globals.css";

// ฟอนต์ในเครื่องทั้งหมด (ไม่โหลด Google ตอนรันไทม์)
const thai = localFont({
  variable: "--nf-thai",
  display: "swap",
  src: [
    { path: "./fonts/noto-sans-thai-400.woff2", weight: "400" },
    { path: "./fonts/noto-sans-thai-500.woff2", weight: "500" },
    { path: "./fonts/noto-sans-thai-600.woff2", weight: "600" },
    { path: "./fonts/noto-sans-thai-700.woff2", weight: "700" },
  ],
});
const inter = localFont({
  variable: "--nf-inter",
  display: "swap",
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400" },
    { path: "./fonts/inter-600.woff2", weight: "600" },
    { path: "./fonts/inter-700.woff2", weight: "700" },
  ],
});
const bebas = localFont({ variable: "--nf-bebas", display: "swap", src: "./fonts/bebas-neue-400.woff2" });

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getDict(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: meta.title, template: "%s · Balehm Tech Studio" },
    description: meta.description,
    applicationName: "Balehm Tech Studio",
    keywords: meta.keywords,
    alternates: alternatesFor(lang, "/"),
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: [lang === "en" ? "th_TH" : "en_US"],
      url: `${SITE_URL}${localePath(lang, "/")}`,
      siteName: "Balehm Tech Studio",
      title: meta.title,
      description: meta.description,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export const viewport: Viewport = { themeColor: "#0B0C0F", colorScheme: "dark" };

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;
  const t = getDict(lang);
  return (
    <html lang={lang} className={`${thai.variable} ${inter.variable} ${bebas.variable}`}>
      <body>
        <Nav lang={lang} t={t} />
        <main>{children}</main>
        <Footer lang={lang} t={t} />
        <FloatButtons t={t} />
      </body>
    </html>
  );
}
