/** หน้าเอกสารที่ยังไม่มีข้อความจริง — ห้ามแต่งเอง รอเจ้าของเว็บ */
export function PendingPage({ title }: { title: string }) {
  return (
    <div className="center-page">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="muted">รอข้อความจากเจ้าของเว็บ</p>
      </div>
    </div>
  );
}
