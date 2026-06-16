import { seedIcons } from "@/lib/seedIcons";

export type PhoneVariant = "today" | "tasks" | "focus" | "plan";

/** seed path(서브패스 ' M')를 stroke svg 로 렌더. */
function SeedIcon({
  name,
  className,
  strokeWidth = 1.9,
}: {
  name: keyof typeof seedIcons;
  className?: string;
  strokeWidth?: number;
}) {
  const d = seedIcons[name] ?? "";
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d.split(" M").map((p, i) => (
        <path key={i} d={i === 0 ? p : "M" + p} />
      ))}
    </svg>
  );
}

const NAV: ReadonlyArray<readonly [keyof typeof seedIcons, string]> = [
  ["home", "오늘"],
  ["calendar", "플랜"],
  ["focus", "집중"],
  ["user", "나"],
];

function Nav({ active }: { active: string }) {
  return (
    <div className="ps-nav">
      {NAV.map(([icon, label]) => (
        <a key={label} className={active === label ? "on" : undefined}>
          <SeedIcon name={icon} strokeWidth={2} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

function Fab() {
  return (
    <div className="ps-fab">
      <SeedIcon name="plus" strokeWidth={2.4} />
    </div>
  );
}

function Today() {
  return (
    <div className="ps">
      <div className="ps-body">
        <div className="ps-cockpit">
          <div className="blob" />
          <div className="top">
            <div className="date">6월 1일 월요일</div>
            <div className="greet ps-brand">안녕하세요, 이어서님</div>
          </div>
          <div className="mid">
            <div className="ps-ring">
              <i>
                <b className="ps-brand">33%</b>
                <small>완료</small>
              </i>
            </div>
            <div className="stat">
              <small>오늘의 할 일</small>
              <b className="ps-brand">
                3/9 <span>완료</span>
              </b>
              <p>남은 6시간 45분 정도면 끝나요</p>
            </div>
          </div>
          <div className="next">
            <span>
              <em>다음</em>정처기 실기 기출 1회
            </span>
            <span>2시간 ›</span>
          </div>
        </div>

        <div className="ps-sec">마감 D-DAY</div>
        <div className="ps-dday">
          {[
            ["정보처리기사 실기", "D-28"],
            ["토익 정기시험", "D-12"],
            ["정처기 실기", "D-7"],
          ].map(([nm, dn]) => (
            <div className="d" key={nm}>
              <SeedIcon name="target" className="ic" strokeWidth={2} />
              <div className="nm">{nm}</div>
              <div className="dn ps-brand">{dn}</div>
            </div>
          ))}
        </div>

        <div className="ps-sec ps-row">
          <span>오늘의 흐름</span>
          <span className="more">추가 ›</span>
        </div>
        <div className="ps-flow">
          <div className="ps-task">
            <span className="dot" />
            <div className="box sel">
              <span className="ck" />
              <div className="tt">
                <b>
                  <span className="ps-chip now">지금</span>정처기 실기 기출 1회
                </b>
                <small>2시간 · 자격증</small>
              </div>
              <div className="ps-timer">
                <SeedIcon name="clock" />
              </div>
            </div>
          </div>
          <div className="ps-task">
            <span className="dot g" />
            <div className="box">
              <span className="ck" />
              <div className="tt">
                <b>헬스 — 하체</b>
                <small>1시간 · 건강</small>
              </div>
              <div className="ps-timer">
                <SeedIcon name="clock" />
              </div>
            </div>
          </div>
          <div className="ps-task">
            <span className="dot o" />
            <div className="box">
              <span className="ck" />
              <div className="tt">
                <b>
                  이력서 1차 수정 <span className="ps-chip move">옮김</span>
                </b>
                <small>45분 · 취업</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fab />
      <Nav active="오늘" />
    </div>
  );
}

function PlanHeader() {
  return (
    <div className="ps-row" style={{ marginTop: 2 }}>
      <div>
        <div className="ps-eyebrow">일정과 할 일을 한 곳에서</div>
        <div className="ps-h">플랜</div>
      </div>
      <div style={{ display: "flex", gap: 7 }}>
        <div className="ps-plus">
          <SeedIcon name="plus" strokeWidth={2.2} />
        </div>
        <div className="ps-plus" style={{ background: "var(--bg-subtle)", color: "var(--fg-muted)" }}>
          <SeedIcon name="bell" strokeWidth={1.9} />
        </div>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="ps">
      <div className="ps-body">
        <PlanHeader />
        <div className="ps-seg" style={{ margin: "10px 0" }}>
          <span>캘린더</span>
          <span className="on">할 일</span>
        </div>
        <div className="ps-week">
          {["월", "화", "수", "목", "금", "토", "일"].map((w, i) => (
            <b key={w} className={i === 0 ? "on" : undefined}>
              {w}
              <u>{i + 1}</u>
            </b>
          ))}
        </div>

        <div className="ps-card" style={{ marginTop: 12 }}>
          <div className="ps-summary">
            <div className="s">
              <b className="ps-brand">
                27.5<span> 시간</span>
              </b>
              <small>계획</small>
            </div>
            <div className="s g">
              <b className="ps-brand">
                16<span> 시간</span>
              </b>
              <small>완료</small>
            </div>
            <div className="s o">
              <b className="ps-brand">
                6.5<span> 시간</span>
              </b>
              <small>밀린 시간</small>
            </div>
          </div>
          <div className="ps-bar">
            <i />
          </div>
          <div className="ps-note">
            이번 주 <b>58% 완료</b> · 밀린 일은 주말로 옮겨드릴게요
          </div>
        </div>

        <div className="ps-debt" style={{ marginTop: 10 }}>
          <div className="ic">
            <SeedIcon name="carryForward" strokeWidth={2} />
          </div>
          <div className="tx">
            <b>
              미룬 시간 <span className="ps-chip late">계속 밀림 1건</span>
            </b>
            <small>총 5시간 40분 · 여유 있는 날로 옮겨드릴게요</small>
          </div>
        </div>

        <div className="ps-sec ps-row">
          <span>옮겨온 할 일</span>
          <span className="more">미룬 시간 ›</span>
        </div>
        <div className="ps-flow">
          <div className="ps-task">
            <div className="box">
              <span className="ck" />
              <div className="tt">
                <b>이력서 1차 수정</b>
                <small>45분 · 취업 · 지난주 금요일에서 옮겨옴</small>
              </div>
              <span className="ps-chip move">옮김</span>
            </div>
          </div>
          <div className="ps-task">
            <div className="box">
              <span className="ck" />
              <div className="tt">
                <b>블로그 회고 글쓰기</b>
                <small>1시간 · 기타</small>
              </div>
              <span className="ps-chip late">밀림</span>
            </div>
          </div>
        </div>
      </div>
      <Fab />
      <Nav active="플랜" />
    </div>
  );
}

function Focus() {
  return (
    <div className="ps">
      <div className="ps-body">
        <div className="ps-row" style={{ marginTop: 2 }}>
          <div>
            <div className="ps-eyebrow">뽀모도로로 실제로 실행해요</div>
            <div className="ps-h">집중</div>
          </div>
          <div className="ps-plus" style={{ background: "var(--bg-subtle)", color: "var(--fg-muted)" }}>
            <SeedIcon name="bell" />
          </div>
        </div>
        <div className="ps-seg" style={{ margin: "10px 0 8px" }}>
          <span className="on">집중</span>
          <span>짧은 휴식</span>
          <span>긴 휴식</span>
        </div>
        <div className="ps-seg">
          <span className="on">링</span>
          <span>미니멀</span>
          <span>리퀴드</span>
          <span>플립</span>
        </div>

        <div className="ps-focus-ring">
          <i>
            <span className="rd">시작 준비 완료</span>
            <b className="ps-brand">25:00</b>
            <small>오늘 4번째 집중</small>
          </i>
        </div>
        <div className="ps-ctrl">
          <div className="b">
            <SeedIcon name="reset" strokeWidth={2} />
          </div>
          <div className="b play">
            <SeedIcon name="play" strokeWidth={2} />
          </div>
          <div className="b">
            <SeedIcon name="skip" strokeWidth={2} />
          </div>
        </div>

        <div className="ps-card ps-fstat">
          <div className="ps-row">
            <span className="ps-meta">오늘 집중</span>
            <span className="ps-meta" style={{ color: "var(--fg-subtle)" }}>
              3 / 6회
            </span>
          </div>
          <div className="chips">
            {[true, true, true, false, false, false].map((on, i) => (
              <i key={i} className={on ? "on" : undefined}>
                <SeedIcon name="clock" strokeWidth={2} />
              </i>
            ))}
          </div>
        </div>
      </div>
      <Nav active="집중" />
    </div>
  );
}

// 이어서 출처(app)는 카테고리와 무관하게 단일 파랑 점, 외부 연동만 각 출처색(현재 앱과 일치).
const CAL: ReadonlyArray<readonly [number | null, string[]]> = [
  [null, []],
  [1, ["app", "app"]],
  [2, ["google"]],
  [3, ["app", "notion"]],
  [4, ["google"]],
  [5, ["app"]],
  [6, ["apple", "google"]],
  [7, ["app"]],
  [8, ["google"]],
  [9, []],
  [10, ["notion"]],
  [11, ["google"]],
  [12, []],
  [13, ["notion"]],
  [14, []],
  [15, []],
  [16, ["app", "app"]],
  [17, ["google"]],
  [18, ["app"]],
  [19, []],
  [20, ["app"]],
  [21, []],
  [22, []],
  [23, []],
  [24, []],
  [25, []],
  [26, ["app"]],
  [27, []],
  [28, ["app"]],
  [29, ["app"]],
  [30, []],
];

const DOT: Record<string, string> = {
  app: "var(--source-app)",
  google: "var(--source-google)",
  apple: "var(--source-apple)",
  notion: "var(--source-notion)",
};

function Plan() {
  return (
    <div className="ps">
      <div className="ps-body">
        <PlanHeader />
        <div className="ps-seg" style={{ margin: "10px 0 8px" }}>
          <span className="on">캘린더</span>
          <span>할 일</span>
        </div>
        <div className="ps-seg">
          <span className="on">월간</span>
          <span>주간</span>
          <span>일간</span>
        </div>
        <div className="ps-cal">
          <div className="hd">
            {["일", "월", "화", "수", "목", "금", "토"].map((d, i) => (
              <span key={d} className={i === 0 ? "sun" : i === 6 ? "sat" : undefined}>
                {d}
              </span>
            ))}
          </div>
          <div className="wk">
            {CAL.map(([n, dots], i) => (
              <span
                key={i}
                className={[n === 16 ? "sel" : "", n !== null && i % 7 === 0 ? "sun" : ""].join(" ").trim() || undefined}
              >
                {n === null ? "" : n === 16 ? <u>16</u> : n}
                {dots.length > 0 && (
                  <span className="dots">
                    {dots.map((c, j) => (
                      <b key={j} style={{ background: DOT[c] }} />
                    ))}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="ps-sec ps-row">
          <span>6월 16일 (화)</span>
          <span className="more">오늘 ›</span>
        </div>
        <div className="ps-evt">
          <div className="e">
            <span className="l" />
            <div className="tx">
              <b>알고리즘 문제 5개</b>
              <small>1시간 30분</small>
            </div>
          </div>
          <div className="e">
            <span className="l" />
            <div className="tx">
              <b>영단어 30개 암기</b>
              <small>30분</small>
            </div>
          </div>
        </div>
      </div>
      <Fab />
      <Nav active="플랜" />
    </div>
  );
}

/** 쇼케이스 폰 안에 코드로 그린 앱 화면(캡쳐 대체). */
export function PhoneScreen({ variant }: { variant: PhoneVariant }) {
  const Screen = { today: Today, tasks: Tasks, focus: Focus, plan: Plan }[variant];
  return (
    <div className="phone-screen">
      <Screen />
    </div>
  );
}
