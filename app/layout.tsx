import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatButtons } from "@/components/FloatButtons";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";

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

const TITLE = "Balehm Tech Studio — รับทำเว็บไซต์และระบบ โค้ดเป็นของคุณ 100% พร้อมผู้ช่วย AI ประจำธุรกิจ";
const DESCRIPTION =
  "รับทำเว็บไซต์และระบบด้วย Next.js + ฐานข้อมูลจริง + หลังบ้านที่แก้เองได้ โค้ดเป็นของคุณ 100% ทุกแพ็กเกจแถมผู้ช่วย AI ประจำธุรกิจ ฟรี 3 เดือน · Web, systems and AI agents for Thai businesses — you own 100% of the code.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Balehm Tech Studio" },
  description: DESCRIPTION,
  applicationName: "Balehm Tech Studio",
  keywords: ["รับทำเว็บไซต์", "รับทำเว็บ Next.js", "ระบบหลังบ้าน", "เว็บอสังหาฯ", "เว็บงานแข่ง", "ผู้ช่วย AI", "web design Thailand"],
  alternates: { canonical: "/", languages: { "th-TH": "/", "en-US": "/" } },
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Balehm Tech Studio",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = { themeColor: "#0B0C0F", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${thai.variable} ${inter.variable} ${bebas.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatButtons />
      </body>
    </html>
  );
}
