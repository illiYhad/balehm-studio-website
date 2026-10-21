/** หน้าเอกสารที่ยังไม่มีข้อความจริง — ห้ามแต่งเอง รอเจ้าของเว็บ · notice = บรรทัดบนสุดหน้า EN (ไทยว่าง) */
export function PendingPage({ title, pending, notice }: { title: string; pending: string; notice: string }) {
  return (
    <div className="center-page">
      <div className="wrap">
        {notice && <p className="muted legal-notice">{notice}</p>}
        <h1>{title}</h1>
        <p className="muted">{pending}</p>
      </div>
    </div>
  );
}
