// ข้อความ/ตัวเลข/ราคา ตาม design/DESIGN_v1_home.html ตรงตัว · แคตตาล็อกตาม BRIEF ข้อ 4.2 + 4.3

export const TRUST = [
  { icon: "Globe", num: "6", unit: "", label: "เว็บไซต์ออนไลน์จริง" },
  { icon: "ShieldCheck", num: "100%", unit: "", label: "โค้ดและข้อมูลเป็นของลูกค้า" },
  { icon: "Rocket", num: "7", unit: " วัน", label: "เริ่มเห็นหน้าเว็บตัวอย่าง" },
  { icon: "Bot", num: "3", unit: " เดือน", label: "ผู้ช่วย AI ฟรี ทุกแพ็กเกจ" },
];

export const SERVICES = [
  { icon: "Building2", tag: "เว็บธุรกิจ", title: "เว็บไซต์บริษัท / ร้านค้า", desc: "หน้าแรก บริการ ผลงาน ติดต่อ พร้อมหลังบ้านแก้ข้อความ-รูปเองได้" },
  { icon: "House", tag: "อสังหาฯ", title: "เว็บขายบ้าน-ที่ดิน", desc: "ค้นหาทรัพย์ เปรียบเทียบ เครื่องคำนวณผลตอบแทน ฟอร์มติดต่อเข้าหลังบ้าน" },
  { icon: "Trophy", tag: "อีเวนต์", title: "เว็บงานแข่ง / อีสปอร์ต", desc: "รับสมัคร ตารางแข่ง ผลสด หน้าจอถ่ายทอด overlay สำหรับ OBS" },
  { icon: "LayoutDashboard", tag: "ระบบ", title: "ระบบหลังบ้านเฉพาะงาน", desc: "เช็กอิน จัดการข้อมูล แดชบอร์ด ผู้ช่วย AI ตอบลูกค้า" },
];

export const PACKAGES = [
  {
    key: "starter",
    title: "Starter — เว็บหน้าเดียว",
    amount: "11,250",
    cur: "บาท",
    items: ["1 หน้า ข้อมูลครบ รองรับมือถือ", "หลังบ้านแก้ข้อความ/รูปเอง", "ปุ่ม LINE · โทร · แผนที่", "ฟรีโดเมน + โฮสต์ปีแรก", "ส่งมอบใน 7 วัน"],
    cta: "เลือกแพ็กนี้",
    hot: false,
  },
  {
    key: "business",
    title: "Business — เว็บธุรกิจ 5–7 หน้า",
    amount: "26,250",
    cur: "บาท",
    items: ["5–7 หน้า + บทความ", "หลังบ้านครบ: ข้อมูล · ฟอร์ม · บทความ", "ฟอร์มติดต่อเข้าฐานข้อมูล + แจ้ง LINE", "SEO พื้นฐาน + ความปลอดภัยมาตรฐาน", "ส่งมอบใน 14 วัน"],
    cta: "เลือกแพ็กนี้",
    hot: true,
  },
  {
    key: "system",
    title: "System — เว็บเฉพาะทาง / ระบบ",
    amount: "45,000",
    cur: "บาท เริ่มต้น",
    items: ["อสังหาฯ · อีเวนต์ · ที่พัก · ระบบจอง", "ฐานข้อมูล + สิทธิ์ผู้ใช้หลายระดับ", "หน้าจอถ่ายทอด / แดชบอร์ด", "ประเมินขอบเขตก่อนเริ่ม", "ส่งมอบตามขอบเขตที่ตกลง"],
    cta: "คุยรายละเอียด",
    hot: false,
  },
] as const;

/** ค่าใน select ของฟอร์ม (ตรงกับ design) — server ตรวจว่าอยู่ในรายการนี้ */
export const PACKAGE_OPTIONS = ["Starter 11,250", "Business 26,250", "System 45,000+", "ยังไม่แน่ใจ"] as const;

export const PORTFOLIO = [
  {
    img: "/pf/aiko.jpg",
    name: "Muu House Real Estate",
    meta: "เว็บอสังหาฯ · ค้นหา เปรียบเทียบ เครื่องคำนวณ Yield · หลังบ้าน",
    url: "https://www.muuhouserealestase465.com",
  },
  {
    img: "/pf/pattaya.jpg",
    name: "Eastern Beauty & Wellness 2026",
    meta: "เว็บงานแข่งขัน · สมัคร · ผู้เข้าแข่ง · Stream Hub",
    url: "https://pattaya.balehmstudio.com",
  },
  {
    img: "/pf/praksa.jpg",
    name: "กระสาเกมส์ 2026 · เทศบาลตำบลแพรกษา",
    meta: "อีสปอร์ต ROV · สายการแข่ง · จอบอร์ดสถานี · overlay",
    url: "https://praksa-esports-2026.vercel.app",
  },
  {
    img: "/pf/boonsai.jpg",
    name: "บุญใสอพาร์ทเม้นท์",
    meta: "เว็บที่พัก · ห้องว่าง · ราคา · ติดต่อ",
    url: "https://boonsai-apartment.vercel.app",
  },
  {
    img: "/pf/luminary.jpg",
    name: "Luminary Global Cleaning",
    meta: "เว็บบริการทำความสะอาด · ผลงาน · ขอใบเสนอราคา",
    url: "https://luminary-global.vercel.app",
  },
  {
    img: "/pf/zodiac.jpg",
    name: "Zodiac Arena",
    meta: "แพลตฟอร์มทัวร์นาเมนต์ · ทีม · ร้านค้า · ระบบแต้ม",
    url: "https://www.zodiacleaguetournaments.com",
  },
];

export type Template = {
  code: string;
  name: string;
  /** ประเภทลูกค้า (BRIEF 4.2) */
  audience: string;
  /** ป้ายสั้นบนหน้าแรก (design) */
  short: string;
  license: string;
  licenseShort: string;
  demo: string;
  img?: string;
};

export const TEMPLATES: Template[] = [
  { code: "T01", name: "TailNext", audience: "บริษัท/ธุรกิจทั่วไป", short: "ธุรกิจทั่วไป", license: "Free · ต้องใส่เครดิต", licenseShort: "Free", demo: "https://preview.themewagon.com/tailnext/", img: "/tpl/tailnext.jpg" },
  { code: "T02", name: "Play", audience: "บริษัท/ธุรกิจทั่วไป", short: "ธุรกิจทั่วไป", license: "Free (open-source)", licenseShort: "Free", demo: "https://play.demo.nextjstemplates.com" },
  { code: "T03", name: "Massively", audience: "ร้านอาหาร/คาเฟ่", short: "ร้านอาหาร / คาเฟ่", license: "CC BY 3.0 · ต้องใส่เครดิต", licenseShort: "CC BY", demo: "https://html5up.net/uploads/demos/massively/", img: "/tpl/massively.jpg" },
  { code: "T04", name: "Grayscale", audience: "ร้านอาหาร/คาเฟ่", short: "ร้านอาหาร / คาเฟ่", license: "MIT", licenseShort: "MIT", demo: "https://startbootstrap.com/previews/grayscale" },
  { code: "T05", name: "Next.js Portfolio", audience: "พอร์ตโฟลิโอ/ฟรีแลนซ์/ช่างภาพ", short: "พอร์ตโฟลิโอ", license: "Free open-source · ใช้งานพาณิชย์ได้", licenseShort: "Free", demo: "https://react-portfolio-template.netlify.app/", img: "/tpl/portfolio.jpg" },
  { code: "T06", name: "Portfolio Starter Kit", audience: "พอร์ตโฟลิโอ", short: "พอร์ตโฟลิโอ", license: "MIT", licenseShort: "MIT", demo: "https://portfolio-blog-starter.vercel.app" },
  { code: "T07", name: "Agency", audience: "เอเจนซี่/สตูดิโอ", short: "เอเจนซี่ / สตูดิโอ", license: "MIT", licenseShort: "MIT", demo: "https://startbootstrap.com/previews/agency", img: "/tpl/agency.jpg" },
  { code: "T08", name: "Stellar", audience: "อพาร์ตเมนต์/ที่พัก", short: "ที่พัก / อพาร์ตเมนต์", license: "CC BY 3.0 · ต้องใส่เครดิต", licenseShort: "CC BY", demo: "https://html5up.net/uploads/demos/stellar/", img: "/tpl/stellar.jpg" },
  { code: "T09", name: "Dimension", audience: "อีเวนต์/อีสปอร์ต", short: "อีเวนต์ / งานแข่ง", license: "CC BY 3.0 · ต้องใส่เครดิต", licenseShort: "CC BY", demo: "https://html5up.net/uploads/demos/dimension/", img: "/tpl/dimension.jpg" },
  { code: "T10", name: "Clean Blog", audience: "บล็อก/สื่อ", short: "บล็อก / สื่อ", license: "MIT", licenseShort: "MIT", demo: "https://startbootstrap.com/previews/clean-blog", img: "/tpl/clean_blog.jpg" },
  { code: "T11", name: "Blog Starter Kit", audience: "บล็อก (Next.js)", short: "บล็อก / สื่อ", license: "MIT", licenseShort: "MIT", demo: "https://next-blog-starter.vercel.app/" },
  { code: "T12", name: "TailAdmin", audience: "หลังบ้าน/แดชบอร์ดลูกค้า", short: "หลังบ้าน / แดชบอร์ด", license: "Free (open-source)", licenseShort: "Free", demo: "https://nextjs-demo.tailadmin.com/", img: "/tpl/tailadmin.jpg" },
];

/** ลำดับ 8 ตัวบนหน้าแรก ตาม design */
export const HOME_TEMPLATES = ["T01", "T03", "T08", "T09", "T07", "T05", "T10", "T12"].map(
  (c) => TEMPLATES.find((t) => t.code === c)!,
);

export const STEPS = [
  { title: "คุยความต้องการ", desc: "ทาง LINE หรือฟอร์ม · เลือกเทมเพลตที่ชอบ" },
  { title: "สรุปขอบเขต + ราคา", desc: "ใบเสนอราคาชัด · มัดจำ 50%" },
  { title: "สร้าง + ส่งตัวอย่าง", desc: "เห็นหน้าเว็บจริงบนลิงก์ภายใน 7 วัน" },
  { title: "แก้ไข", desc: "ปรับได้ 3 รอบ · ตรวจทุกหน้าทุกขนาดจอ" },
  { title: "ส่งมอบ + สอนใช้", desc: "โดเมน หลังบ้าน ผู้ช่วย AI · ดูแล 3 เดือน" },
];

export const FAQ = [
  { q: "\"โค้ดเป็นของคุณ 100%\" หมายความว่าอะไร", a: "ซอร์สโค้ด ฐานข้อมูล และบัญชีโฮสต์เป็นชื่อของคุณ ย้ายไปจ้างใครต่อก็ได้ ไม่ต้องเช่าแพลตฟอร์มของเรา" },
  { q: "ต่างจากเว็บสำเร็จรูป / WordPress ยังไง", a: "เราเขียนโค้ดจริงบน Next.js จึงเร็วกว่า ปลอดภัยกว่า และปรับแต่งได้ไม่จำกัด แต่ยังมีหลังบ้านให้คุณแก้เองได้เหมือนกัน" },
  { q: "ผู้ช่วย AI ประจำธุรกิจคือตัวไหน ใช้ยังไง", a: "เป็นบัญชี Claude Pro ในชื่อคุณ เราตั้ง Project และใส่ข้อมูลธุรกิจคุณให้ ใช้ตอบลูกค้า ร่างโพสต์ หรือถามวิธีใช้หลังบ้านได้ทันที" },
  { q: "ปีถัดไปต้องจ่ายอะไรบ้าง", a: "โดเมน + โฮสต์ + ดูแลพื้นฐาน รวม 3,500 บาท/ปี และผู้ช่วย AI ~700 บาท/เดือน ถ้าต้องการใช้ต่อ" },
  { q: "ใช้เวลานานแค่ไหน", a: "เห็นหน้าเว็บตัวอย่างใน 7 วัน · Starter ส่งมอบ 7 วัน · Business 14 วัน · System ตามขอบเขต" },
  { q: "แก้งานได้กี่รอบ", a: "3 รอบระหว่างทำ · หลังส่งมอบดูแลฟรี 3 เดือน (แก้บั๊ก ไม่รวมเพิ่มฟีเจอร์)" },
];
