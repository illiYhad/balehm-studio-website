import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PendingPage } from "@/components/PendingPage";
import { alternatesFor, getDict, isLang } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { title: getDict(lang).footer.privacy, alternates: alternatesFor(lang, "/privacy") };
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return <PendingPage title={t.footer.privacy} pending={t.legal.pending} notice={t.legal.notice} />;
}
