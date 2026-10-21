// ข้อมูลที่ใช้ร่วมทุกภาษา: ตัวเลข ราคา รหัส URL รูป ไอคอน · ข้อความอยู่ใน lib/i18n/{th,en}.ts (ลำดับต้องตรงกัน)

export const TRUST = [
  { icon: "Globe", num: "6" },
  { icon: "ShieldCheck", num: "100%" },
  { icon: "Rocket", num: "7" },
  { icon: "Bot", num: "3" },
];

export const SERVICES = [{ icon: "Building2" }, { icon: "House" }, { icon: "Trophy" }, { icon: "LayoutDashboard" }];

export const PACKAGES = [
  { key: "starter", amount: "11,250", hot: false },
  { key: "business", amount: "26,250", hot: true },
  { key: "system", amount: "45,000", hot: false },
] as const;

export type PackageKey = (typeof PACKAGES)[number]["key"];

/** ค่าใน select ของฟอร์ม (ตรงกับ design) — server ตรวจว่าอยู่ในรายการนี้ · ป้ายแสดงผลแปลได้ แต่ value ต้องคงเดิม */
export const PACKAGE_OPTIONS = ["Starter 11,250", "Business 26,250", "System 45,000+", "ยังไม่แน่ใจ"] as const;

export const PORTFOLIO = [
  { img: "/pf/aiko.jpg", url: "https://www.muuhouserealestase465.com" },
  { img: "/pf/pattaya.jpg", url: "https://pattaya.balehmstudio.com" },
  { img: "/pf/praksa.jpg", url: "https://praksa-esports-2026.vercel.app" },
  { img: "/pf/boonsai.jpg", url: "https://boonsai-apartment.vercel.app" },
  { img: "/pf/luminary.jpg", url: "https://luminary-global.vercel.app" },
  { img: "/pf/zodiac.jpg", url: "https://www.zodiacleaguetournaments.com" },
];

export type Template = {
  code: string;
  name: string;
  demo: string;
  img?: string;
};

export const TEMPLATES: Template[] = [
  { code: "T01", name: "TailNext", demo: "https://preview.themewagon.com/tailnext/", img: "/tpl/tailnext.jpg" },
  { code: "T02", name: "Play", demo: "https://play.demo.nextjstemplates.com" },
  { code: "T03", name: "Massively", demo: "https://html5up.net/uploads/demos/massively/", img: "/tpl/massively.jpg" },
  { code: "T04", name: "Grayscale", demo: "https://startbootstrap.com/previews/grayscale" },
  { code: "T05", name: "Next.js Portfolio", demo: "https://react-portfolio-template.netlify.app/", img: "/tpl/portfolio.jpg" },
  { code: "T06", name: "Portfolio Starter Kit", demo: "https://portfolio-blog-starter.vercel.app" },
  { code: "T07", name: "Agency", demo: "https://startbootstrap.com/previews/agency", img: "/tpl/agency.jpg" },
  { code: "T08", name: "Stellar", demo: "https://html5up.net/uploads/demos/stellar/", img: "/tpl/stellar.jpg" },
  { code: "T09", name: "Dimension", demo: "https://html5up.net/uploads/demos/dimension/", img: "/tpl/dimension.jpg" },
  { code: "T10", name: "Clean Blog", demo: "https://startbootstrap.com/previews/clean-blog", img: "/tpl/clean_blog.jpg" },
  { code: "T11", name: "Blog Starter Kit", demo: "https://next-blog-starter.vercel.app/" },
  { code: "T12", name: "TailAdmin", demo: "https://nextjs-demo.tailadmin.com/", img: "/tpl/tailadmin.jpg" },
];

/** ลำดับ 8 ตัวบนหน้าแรก ตาม design */
export const HOME_TEMPLATES = ["T01", "T03", "T08", "T09", "T07", "T05", "T10", "T12"].map(
  (c) => TEMPLATES.find((t) => t.code === c)!,
);
