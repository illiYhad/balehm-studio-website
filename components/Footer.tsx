import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>© 2026 Balehm Tech Studio · balehmstudio.com</div>
        <div className="links">
          <Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">ข้อกำหนดการใช้งาน</Link>
        </div>
      </div>
    </footer>
  );
}
