import type { Metadata } from "next";
import { PendingPage } from "@/components/PendingPage";

export const metadata: Metadata = { title: "ข้อกำหนดการใช้งาน", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <PendingPage title="ข้อกำหนดการใช้งาน" />;
}
