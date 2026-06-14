import { SubscriptionManager } from "../subscriptions/SubscriptionManager";

/** 홈 구독 일정 관리 섹션 — 토스풍 에디토리얼(좌 헤드라인 / 우 플로팅 폰). 폰은 인터랙티브. */
export function Subscriptions() {
  return (
    <section className="block sub-block" id="subscriptions">
      <div className="wrap sub-ed">
        <div className="sub-ed-copy reveal">
          <div className="sub-ed-tag">구독 · 캘린더</div>
          <h2>
            흩어진 구독,
            <br />
            캘린더 하나로
            <br />
            똑똑하게
          </h2>
          <p>쓰는 구독을 검색해 고르고 금액만 정하면, 매달 언제 얼마가 빠지는지 한눈에 모여요.</p>
          <p className="sub-ed-cap">
            정해진 서비스에서 검색 · 금액 수동 설정 · 결제일 캘린더까지 한 번에. 오른쪽 화면에서 직접 추가해 보세요.
          </p>
        </div>
        <div className="sub-ed-phone reveal">
          <SubscriptionManager />
        </div>
      </div>
    </section>
  );
}
