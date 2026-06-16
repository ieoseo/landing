import type { CSSProperties } from "react";
import { CheckIcon } from "../icons";
import { PhoneScreen, type PhoneVariant } from "./PhoneScreens";

type ShowRow = {
  tag: string;
  tagStyle: CSSProperties;
  title: [string, string];
  desc: string;
  items: [string, string];
  variant: PhoneVariant;
  reversed?: boolean;
};

const ROWS: ShowRow[] = [
  {
    tag: "오늘",
    tagStyle: { background: "var(--blue-subtle)", color: "var(--blue)" },
    title: ["열자마자", "오늘이 정리돼 있어요"],
    desc: "가장 임박한 D-Day, 오늘 진행률, 그날의 할 일 흐름이 첫 화면에 모여요. 무엇부터 할지 고민할 필요 없이 바로 시작해요.",
    items: ["히어로 D-Day 카드와 주간 진행률", "마감 D-Day 레일 · 오늘의 흐름 타임라인"],
    variant: "today",
  },
  {
    tag: "집중",
    tagStyle: { background: "var(--blue-subtle)", color: "var(--blue)" },
    title: ["타이머를 켜고", "진짜로 끝내요"],
    desc: "뽀모도로 타이머로 할 일을 실제로 실행하게 도와요. 집중·휴식 사이클, 오늘 집중 통계, 4가지 타이머 스킨까지.",
    items: ["실시간 카운트다운 · 오늘 집중 통계", "할 일 연동 · 링/미니멀/리퀴드/플립 스킨"],
    variant: "focus",
    reversed: true,
  },
  {
    tag: "플랜",
    tagStyle: { background: "var(--hue-sky-subtle)", color: "var(--info-fg)" },
    title: ["내 일정도 남의 일정도", "한 화면에"],
    desc: "앱 안 일정과 Google·Apple·Notion 외부 일정을 한 곳에. 월·주·일 뷰로 출처까지 색으로 구분해서 보여줘요.",
    items: ["월·주·일 뷰 통합 캘린더", "외부 캘린더 출처별 색상 구분"],
    variant: "plan",
  },
];

/** Alternating coded app-screen rows — the app preview ("앱 미리보기"). */
export function Showcase() {
  return (
    <section className="block" id="features">
      <div className="wrap">
        <div className="sec-head left reveal">
          <div className="sec-tag">화면 둘러보기</div>
          <h2>탭 세 개로 끝나요</h2>
          <p>오늘 · 집중 · 플랜. 매일 보는 세 화면에 자기관리에 필요한 건 다 들어있어요.</p>
        </div>
        <div className="showcase">
          {ROWS.map((row) => (
            <div className={row.reversed ? "show-row rev reveal" : "show-row reveal"} key={row.variant}>
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
                  <PhoneScreen variant={row.variant} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
