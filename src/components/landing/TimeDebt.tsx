import { CarryForwardIcon, CheckIcon } from "../icons";

/** Ink-dark highlight of the signature "시간 빌려쓰기" (carry-forward) flow. */
export function TimeDebt() {
  return (
    <section className="block" id="timedebt" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="debt reveal">
          <div>
            <span className="badge">이어서만의 핵심</span>
            <h3>
              못 한 일은 다음 날로
              <br />
              이어서 옮겨드려요
            </h3>
            <p>
              매일 자정, 끝내지 못한 일을 감지해 같은 주 안에서 가장 여유 있는 날로 자동 이월해요. 마감에 쫓겨
              포기하는 대신, 현실적인 날로 다시 배치합니다.
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
              주말 안에 못 풀면 다음 주로 넘기고 '계속 밀림'으로 표시해, 무엇이 자꾸 밀리는지도 한눈에 보여줘요.
            </p>
          </div>
          <div className="flow">
            <div className="flow-row">
              <div className="ic" style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}>
                월
              </div>
              <div className="tx">
                <div className="t">운동 2시간 · 못 함</div>
                <div className="s">자정에 '미룬 시간'으로 자동 전환</div>
              </div>
            </div>
            <div className="flow-row">
              <div className="ic" style={{ background: "rgba(58,192,255,0.2)", color: "#5CCBFF" }}>
                <CarryForwardIcon />
              </div>
              <div className="tx">
                <div className="t">토요일로 이어서 이월</div>
                <div className="s">예약 시간이 가장 적은 날로 똑똑하게 배치</div>
              </div>
            </div>
            <div className="flow-row">
              <div className="ic" style={{ background: "rgba(43,217,104,0.18)", color: "#37E075" }}>
                <CheckIcon />
              </div>
              <div className="tx">
                <div className="t">토요일에 완료</div>
                <div className="s">미룬 시간 해소 · 스트릭 유지</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
