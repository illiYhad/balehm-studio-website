import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center-page">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="muted">ลิงก์อาจเปลี่ยนหรือถูกลบไปแล้ว ลองกลับหน้าแรก หรือดูผลงานและเทมเพลตของเรา</p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" href="/">
            กลับหน้าแรก
          </Link>
          <Link className="btn btn-ghost" href="/templates">
            ดูเทมเพลต
          </Link>
        </div>
      </div>
    </div>
  );
}
