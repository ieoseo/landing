import type { CSSProperties } from "react";
import { CheckIcon } from "../icons";

type ShowRow = {
  tag: string;
  tagStyle: CSSProperties;
  title: [string, string];
  desc: string;
  items: [string, string];
  shot: { src: string; alt: string; w: number; h: number };
  reversed?: boolean;
};

const ROWS: ShowRow[] = [
  {
    tag: "오늘",
    tagStyle: { background: "rgba(0,102,255,0.08)", color: "var(--blue)" },
    title: ["오늘 할 일을", "열자마자 한눈에"],
    desc: "가장 임박한 D-Day, 오늘 진행률, 그날의 할 일 흐름이 첫 화면에 모여요. 무엇부터 할지 고민할 필요 없이 바로 시작해요.",
    items: ["히어로 D-Day 카드와 주간 진행률", "마감 D-Day 레일 · 오늘의 흐름 타임라인"],
    shot: { src: "/screenshots/shot-today.png", alt: "오늘 화면", w: 402, h: 874 },
  },
  {
    tag: "시간 빌려쓰기",
    tagStyle: { background: "rgba(255,146,0,0.12)", color: "#B86200" },
    title: ["못 한 일은", "여유 있는 날로 이어서"],
    desc: "주간 계획·완료·밀린 시간을 집계하고, 끝내지 못한 일은 '미룬 시간'으로 쌓여 자동으로 이월돼요. 배정됨·계속 밀림 상태까지 한눈에 봐요.",
    items: ["주간 시간 요약과 미룬 시간 현황", "자동·수동 이월, 옮긴 할 일 표시"],
    shot: { src: "/screenshots/shot-tasks.png", alt: "할 일 화면", w: 402, h: 874 },
    reversed: true,
  },
  {
    tag: "집중",
    tagStyle: { background: "rgba(0,102,255,0.08)", color: "var(--blue)" },
    title: ["집중해서", "진짜로 끝내요"],
    desc: "포모도로 타이머로 할 일을 실제로 실행하게 도와요. 집중·휴식 사이클, 오늘 집중 통계, 4가지 타이머 스킨까지.",
    items: ["실시간 카운트다운 · 오늘 집중 통계", "할 일 연동 · 링/미니멀/리퀴드/플립 스킨"],
    shot: { src: "/screenshots/shot-focus.png", alt: "집중 화면", w: 402, h: 872 },
  },
  {
    tag: "플랜",
    tagStyle: { background: "rgba(0,174,255,0.12)", color: "#0079C2" },
    title: ["캘린더까지", "한 화면에"],
    desc: "앱 안 일정과 Google·Apple·Notion 외부 일정을 한 곳에. 월·주·일 뷰로 출처까지 색으로 구분해서 보여줘요.",
    items: ["월·주·일 뷰 통합 캘린더", "외부 캘린더 출처별 색상 구분"],
    shot: { src: "/screenshots/shot-plan.png", alt: "플랜 화면", w: 402, h: 872 },
    reversed: true,
  },
];

/** Alternating screenshot rows — the app preview ("앱 미리보기"). */
export function Showcase() {
  return (
    <section className="block" id="features">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-tag">앱 미리보기</div>
          <h2>흩어진 자기관리를 하나로</h2>
          <p>마감 추적부터 할 일 실행까지, 따로 쓰던 앱들을 이어서 하나로 묶었어요.</p>
        </div>
        <div className="showcase">
          {ROWS.map((row) => (
            <div className={row.reversed ? "show-row rev reveal" : "show-row reveal"} key={row.shot.src}>
              <div className="show-text">
                <span className="show-tag" style={row.tagStyle}>
                  {row.tag}
                </span>
                <h3>
                  {row.title[0]}
                  <br />
                  {row.title[1]}
                </h3>
                <p>{row.desc}</p>
                <div className="show-list">
                  {row.items.map((item) => (
                    <div className="li" key={item}>
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="show-frame">
                <div className="device-shot">
                  <img src={row.shot.src} alt={row.shot.alt} width={row.shot.w} height={row.shot.h} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
