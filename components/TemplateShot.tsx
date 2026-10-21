import Image from "next/image";
import { LayoutTemplate } from "lucide-react";
import type { Template } from "@/lib/content";

/** ภาพหน้าเทมเพลตในกรอบหน้าต่างเบราว์เซอร์ · ตัวที่ยังไม่มีภาพ (T02/T04/T06/T11) ใช้ gradient + ไอคอน + ชื่อ */
export function TemplateShot({ t, sizes }: { t: Template; sizes: string }) {
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className={`shot${t.img ? "" : " shot-empty"}`}>
        {t.img ? (
          <Image src={t.img} alt={t.name} fill sizes={sizes} />
        ) : (
          <span className="ph">
            <LayoutTemplate size={32} strokeWidth={1.75} aria-hidden="true" />
            {t.name}
          </span>
        )}
        <span className="code-pill">{t.code}</span>
      </div>
    </div>
  );
}
