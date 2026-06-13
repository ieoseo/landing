import { SubscriptionManager } from "../subscriptions/SubscriptionManager";

/** 홈 안 구독 일정 관리 섹션 — 직접 써보는 인터랙티브 도구(localStorage). */
export function Subscriptions() {
  return (
    <section className="block" id="subscriptions">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">구독 관리</div>
          <h2>흩어진 구독, 한 캘린더에</h2>
          <p>쓰는 구독을 골라 금액만 정하면, 매달 언제 얼마가 빠져나가는지 한눈에. 지금 바로 써보세요.</p>
        </div>
        <SubscriptionManager embedded />
      </div>
    </section>
  );
}
