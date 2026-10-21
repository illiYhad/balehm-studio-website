import { NextResponse, type NextRequest } from "next/server";

/**
 * ไทย = ไม่มี prefix (URL เดิม คง SEO) · อังกฤษ = /en
 * - เส้นที่ไม่มี /en → rewrite ภายในเป็น /th/... (ผู้ใช้ไม่เห็น /th)
 * - /th หรือ /th/... พิมพ์ตรง ๆ → redirect 308 ไปเส้นไม่มี prefix
 * matcher ยกเว้นไฟล์ static · api · _next
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/th" || pathname.startsWith("/th/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/th${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
