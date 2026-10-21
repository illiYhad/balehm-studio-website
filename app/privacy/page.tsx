import type { Metadata } from "next";
import { PendingPage } from "@/components/PendingPage";

export const metadata: Metadata = { title: "นโยบายความเป็นส่วนตัว", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <PendingPage title="นโยบายความเป็นส่วนตัว" />;
}
