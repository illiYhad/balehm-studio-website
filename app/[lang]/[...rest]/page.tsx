import { notFound } from "next/navigation";

/** เส้นทางที่ไม่มีจริงใต้ /th หรือ /en → 404 ของ [lang] (ไม่ใช้ generateStaticParams · dynamicParams=false ใน layout กันภาษาอื่น) */
export default function CatchAll() {
  notFound();
}
