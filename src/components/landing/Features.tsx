import type { ReactNode } from "react";

type Detail = { k: string; title: string; desc: string; paths: ReactNode };

/* 줌인 디테일 — Showcase(메인 화면)·TimeDebt(시그니처)와 겹치지 않게, 화면 단위가
   아니라 "그 안에 담긴 세부 기능"을 짧은 사실형으로만 나열한다. 아이콘은 서로 다른 글리프. */
const DETAILS: Detail[] = [
  {
    k: "dday",
    title: "D-Day 3타입",
    desc: "단일 · 기간 진행률 · 기간 D-Day",
    paths: (
      <>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 2h6M12 5V2" />
      </>
    ),
  },
  {
    k: "repeat",
    title: "반복 할 일",
    desc: "주간 · 월간 · 연간 규칙",
    paths: <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />,
  },
  {
    k: "estimate",
    title: "예상 소요시간",
    desc: "하루 계획을 시간 단위로",
    paths: <path d="M4 6h2v2H4zM4 11h2v2H4zM4 16h2v2H4zM9 7h11M9 12h7M9 17h10" />,
  },
  {
    k: "skin",
    title: "타이머 스킨 4종",
    desc: "링 · 미니멀 · 리퀴드 · 플립",
    paths: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 12 8 8M12 12v5" />
      </>
    ),
  },
  {
    k: "calendar",
    title: "외부 캘린더",
    desc: "Google · Apple · Notion 연동",
    paths: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>
    ),
  },
  {
    k: "review",
    title: "주간 리뷰",
    desc: "완료율 · 스트릭 · 카테고리 분포",
    paths: <path d="M4 4v16h16M8 15l3-3 2 2 4-5" />,
  },
];

/** Zoomed-in detail grid — the granular capabilities, kept compact and factual. */
export function Features() {
  return (
    <section className="block detail-block">
      <div className="wrap">
        <div className="sec-head left reveal">
          <div className="sec-tag">디테일까지</div>
          <h2>작지만, 빠짐없이</h2>
          <p>매일 쓰는 데 필요한 것들을 군더더기 없이 담았어요.</p>
        </div>
        <div className="detail-grid">
          {DETAILS.map((d, i) => (
            <div className="dcard reveal" style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={d.k}>
              <svg
                className="dic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {d.paths}
              </svg>
              <div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
