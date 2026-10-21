// ข้อมูลติดต่อที่ยังไม่มี = "" → หน้าเว็บซ่อน chip/ปุ่มนั้น (ห้ามใส่ค่าสมมติ · แบบเดียวกับ Aiko K-A15)
export const BRAND = "Balehm Tech Studio";
export const LINE_URL = ""; // เช่น https://line.me/R/ti/p/@xxxx
export const LINE_ID = ""; // เช่น @xxxx (ข้อความบน chip)
export const PHONE = ""; // เช่น 0812345678
export const EMAIL = "";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://balehmstudio.com").replace(/\/$/, "");

export const hasValue = (v: string | null | undefined): v is string => !!v && v.trim() !== "";
