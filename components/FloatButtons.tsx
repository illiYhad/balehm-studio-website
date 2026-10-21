import { LINE_URL, PHONE, hasValue } from "@/lib/site-config";

/** ปุ่มลอย LINE/โทร — ค่าใน site-config ว่าง = ไม่แสดงปุ่มนั้น */
export function FloatButtons() {
  const line = hasValue(LINE_URL);
  const phone = hasValue(PHONE);
  if (!line && !phone) return null;
  return (
    <div className="float">
      {line && (
        <a className="btn btn-primary" href={LINE_URL} target="_blank" rel="noopener" aria-label="LINE">
          L
        </a>
      )}
      {phone && (
        <a className="btn btn-ghost" href={`tel:${PHONE}`} aria-label="โทร">
          ☎
        </a>
      )}
    </div>
  );
}
