import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SubscriptionManager } from "@/components/subscriptions/SubscriptionManager";

export const metadata: Metadata = {
  title: "구독 일정 관리 — 이어서",
  description:
    "쓰고 있는 구독을 골라 금액만 정하면, 매달 언제 얼마가 빠져나가는지 캘린더로 한눈에. 이어서의 구독 일정 관리.",
  alternates: { canonical: "/subscriptions/" },
};

export default function SubscriptionsPage() {
  return (
    <>
      <SiteHeader variant="doc" />
      <main className="sub-main">
        <SubscriptionManager />
      </main>
      <SiteFooter />
    </>
  );
}
