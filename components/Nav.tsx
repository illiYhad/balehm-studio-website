import Image from "next/image";
import Link from "next/link";

const MENU = [
  { href: "/#services", label: "บริการ" },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#work", label: "ผลงาน" },
  { href: "/#templates", label: "เทมเพลต" },
  { href: "/#faq", label: "คำถาม" },
];

export function Nav() {
  return (
    <nav className="nav" aria-label="เมนูหลัก">
      <div className="wrap">
        <Link className="brand" href="/">
          <Image src="/BTS_badge_256.png" alt="Balehm Tech Studio" width={40} height={40} priority />
          <span>BALEHM TECH STUDIO</span>
        </Link>
        <div className="menu">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href}>
              {m.label}
            </Link>
          ))}
        </div>
        <Link className="btn btn-primary" href="/#contact">
          ขอใบเสนอราคา
        </Link>
      </div>
    </nav>
  );
}
