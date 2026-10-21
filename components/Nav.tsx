import Image from "next/image";
import Link from "next/link";
import { LangSwitch } from "@/components/LangSwitch";
import { localePath, type Dict, type Lang } from "@/lib/i18n";

const MENU = ["services", "pricing", "work", "templates", "faq"] as const;

export function Nav({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <nav className="nav" aria-label={t.nav.aria}>
      <div className="wrap">
        <Link className="brand" href={localePath(lang, "/")}>
          <Image src="/BTS_badge_256.png" alt="Balehm Tech Studio" width={40} height={40} priority />
          <span>BALEHM TECH STUDIO</span>
        </Link>
        <div className="menu">
          {MENU.map((m) => (
            <Link key={m} href={localePath(lang, `/#${m}`)}>
              {t.nav.menu[m]}
            </Link>
          ))}
        </div>
        <div className="nav-end">
          <LangSwitch lang={lang} label={t.nav.langAria} />
          <Link className="btn btn-primary" href={localePath(lang, "/#contact")}>
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
