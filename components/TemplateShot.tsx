import Image from "next/image";
import type { Template } from "@/lib/content";

/** ภาพหน้าเทมเพลต · ตัวที่ยังไม่มีภาพ (T02/T04/T06/T11) ใช้กล่องสี #262A33 + ชื่อ */
export function TemplateShot({ t, sizes }: { t: Template; sizes: string }) {
  return (
    <div className="shot">
      {t.img ? <Image src={t.img} alt={t.name} fill sizes={sizes} /> : <span className="ph">{t.name}</span>}
    </div>
  );
}
