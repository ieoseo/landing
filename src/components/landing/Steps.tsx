type Step = { n: string; title: string; desc: string };

const STEPS: Step[] = [
  {
    n: "1",
    title: "목표를 등록해요",
    desc: "시험·자격증·마감을 D-Day로 추가하면 가장 임박한 목표가 홈에 크게 떠요.",
  },
  {
    n: "2",
    title: "할 일을 쪼개요",
    desc: "예상 시간을 적어 오늘 할 일을 등록하고, 집중 타이머로 실제로 실행해요.",
  },
  {
    n: "3",
    title: "이어서 나아가요",
    desc: "못 한 일은 여유 있는 날로 자동 이월. 매일 끊기지 않고 이어가요.",
  },
];

/** Three-step onboarding ("오늘부터 이어서"). */
export function Steps() {
  return (
    <section className="block" id="how" style={{ background: "var(--band)" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">3단계면 충분해요</div>
          <h2>오늘부터 이어서</h2>
          <p>복잡한 설정 없이, 목표 하나만 등록하면 바로 시작돼요.</p>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <div className="step reveal" key={step.n}>
              <div className="num">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
