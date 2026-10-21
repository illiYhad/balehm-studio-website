// ข้อมูลติดต่อที่ยังไม่มี = "" → หน้าเว็บซ่อน chip/ปุ่มนั้น (ห้ามใส่ค่าสมมติ · แบบเดียวกับ Aiko K-A15)
export const BRAND = "Balehm Tech Studio";
export const LINE_URL = "https://line.me/ti/p/83g4YcXTbu"; // ถอดจาก QR จริงของพี่หยัด (K-BTS-WEB-4)
export const LINE_ID = "illiyhad"; // ข้อความบน chip
export const PHONE = "0838818839";
export const PHONE_DISPLAY = "083-881-8839";
export const PHONE_TEL = "tel:+66838818839";
export const EMAIL = "suriyabalem@gmail.com";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://balehmstudio.com").replace(/\/$/, "");

export const hasValue = (v: string | null | undefined): v is string => !!v && v.trim() !== "";
