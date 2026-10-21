// ข้อความหน้า 404 แยกจาก Dict หลัก · not-found.tsx เป็น client component (อ่าน params ไม่ได้ ต้องดู pathname) · แยกไฟล์ให้ bundle ฝั่ง client เล็ก
export const NOT_FOUND = {
  th: {
    title: "ไม่พบหน้าที่คุณต้องการ",
    lead: "ลิงก์อาจเปลี่ยนหรือถูกลบไปแล้ว ลองกลับหน้าแรก หรือดูผลงานและเทมเพลตของเรา",
    home: "กลับหน้าแรก",
    templates: "ดูเทมเพลต",
  },
  en: {
    title: "Page not found",
    lead: "The link may have changed or been removed. Head back to the home page, or browse our work and templates.",
    home: "Back to home",
    templates: "See templates",
  },
} as const;
