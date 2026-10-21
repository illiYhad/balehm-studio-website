import Link from "next/link";
import { localePath, type Dict, type Lang } from "@/lib/i18n";

export function Footer({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <footer>
      <div className="wrap">
        <div>© 2026 Balehm Tech Studio · balehmstudio.com</div>
        <div className="links">
          <Link href={localePath(lang, "/privacy")}>{t.footer.privacy}</Link>
          <span aria-hidden="true">·</span>
          <Link href={localePath(lang, "/terms")}>{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
}
