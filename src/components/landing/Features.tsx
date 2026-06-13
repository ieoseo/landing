import type { CSSProperties, ReactNode } from "react";

type Feature = {
  title: string;
  desc: string;
  iconStyle: CSSProperties;
  paths: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "D-Day 카운트다운",
    desc: "시험·자격증·마감을 등록하면 가장 임박한 목표가 홈에 크게 떠요. 단일 D-Day, 기간 진행률, 기간 D-Day 세 가지 타입을 지원해요.",
    iconStyle: { background: "rgba(0,102,255,0.10)", color: "var(--blue)" },
    paths: (
      <>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 2h6M12 5V2" />
      </>
    ),
  },
  {
    title: "할 일 관리",
    desc: "예상 소요시간을 적어두면 하루 계획이 시간 단위로 잡혀요. 반복 할 일, 카테고리, 완료 체크까지 가볍게.",
    iconStyle: { background: "rgba(0,191,64,0.12)", color: "#018A33" },
    paths: <path d="M4 6h2v2H4zM4 11h2v2H4zM4 16h2v2H4zM9 7h11M9 12h11M9 17h11" />,
  },
  {
    title: "집중 타이머",
    desc: "포모도로로 할 일을 실제로 실행하게 도와요. 집중·휴식 사이클, 오늘 집중 통계, 4가지 타이머 스킨을 제공해요.",
    iconStyle: { background: "rgba(0,102,255,0.10)", color: "var(--blue)" },
    paths: (
      <>
        <circle cx="12" cy="13" r="9" />
        <path d="M12 8v5l3 2M9 2h6" />
      </>
    ),
  },
  {
    title: "통합 캘린더",
    desc: "앱 안 일정과 Google·Apple·Notion 외부 일정을 한 화면에. 월·주·일 뷰로 출처까지 구분해서 보여줘요.",
    iconStyle: { background: "rgba(0,174,255,0.12)", color: "#0079C2" },
    paths: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M3 9h18M7 3v3M17 3v3" />
      </>
    ),
  },
  {
    title: "시간 빌려쓰기",
    desc: "오늘 못 한 일은 '미룬 시간'으로 쌓여 여유 있는 날로 자동 이월돼요. 일을 놓쳐도 사라지지 않아요.",
    iconStyle: { background: "rgba(255,146,0,0.12)", color: "#B86200" },
    paths: (
      <>
        <path d="M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6" />
        <path d="M3 9h18M8 2v4M16 2v4" />
        <path d="M14 18h6m0 0-2.5-2.5M20 18l-2.5 2.5" />
      </>
    ),
  },
  {
    title: "주간 리뷰",
    desc: "완료율, 연속 달성(스트릭), 요일별 실행, 카테고리 분포를 돌아보며 다음 주를 더 잘 계획해요.",
    iconStyle: { background: "rgba(101,65,242,0.10)", color: "#5B30E8" },
    paths: <path d="M3 3v18h18M7 14l3-3 3 3 4-5" />,
  },
];

/** Core feature grid ("핵심 기능"). */
export function Features() {
  return (
    <section className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">핵심 기능</div>
          <h2>이 모든 걸, 하나의 앱에서</h2>
          <p>마감 추적부터 할 일 실행까지, 따로 쓰던 앱들을 이어서 하나로 묶었어요.</p>
        </div>
        <div className="features">
          {FEATURES.map((feature) => (
            <div className="fcard reveal" key={feature.title}>
              <div className="ic" style={feature.iconStyle}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {feature.paths}
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
