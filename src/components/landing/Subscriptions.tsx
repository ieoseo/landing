import { SubscriptionManager } from "../subscriptions/SubscriptionManager";

/** 홈 안 구독 일정 관리 섹션 — 폰 기기 안에서 직접 써보는 인터랙티브 화면. */
export function Subscriptions() {
  return (
    <section className="block" id="subscriptions">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">구독 관리</div>
          <h2>구독, 캘린더 하나로</h2>
          <p>쓰는 구독을 골라 금액만 정하면 매달 결제일이 한눈에. 아래 화면에서 직접 추가해 보세요.</p>
        </div>
        <div className="subp-stage reveal">
          <SubscriptionManager />
        </div>
      </div>
    </section>
  );
}
