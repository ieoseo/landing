import { formatKRW, type Subscription } from "@/lib/subscriptions";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

interface Props {
  year: number;
  /** 0-11 */
  month: number;
  subs: Subscription[];
}

/** 결제일(billingDay)을 이 달의 실제 날짜로 보정(말일 초과 시 말일로). */
function billingDayInMonth(day: number, daysInMonth: number): number {
  return Math.min(day, daysInMonth);
}

/** 한 달 캘린더에 구독 결제일을 표시한다(앱 안 일정처럼 출처색 점으로). */
export function SubscriptionCalendar({ year, month, subs }: Props) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();

  // day(1..daysInMonth) → 그 날 결제되는 구독들.
  const byDay = new Map<number, Subscription[]>();
  for (const sub of subs) {
    const d = billingDayInMonth(sub.billingDay, daysInMonth);
    const list = byDay.get(d) ?? [];
    list.push(sub);
    byDay.set(d, list);
  }

  const cells: Array<number | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="sub-cal" aria-label={`${year}년 ${month + 1}월 결제 캘린더`}>
      <div className="sub-cal-grid sub-cal-head" aria-hidden="true">
        {WEEKDAYS.map((w) => (
          <div key={w} className="sub-cal-wd">
            {w}
          </div>
        ))}
      </div>
      <div className="sub-cal-grid">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e${i}`} className="sub-cal-cell empty" />;
          const dayer = byDay.get(day) ?? [];
          const total = dayer.reduce((sum, s) => sum + s.amount, 0);
          return (
            <div
              key={day}
              className={dayer.length ? "sub-cal-cell has" : "sub-cal-cell"}
              title={
                dayer.length
                  ? `${day}일 · ${dayer.map((s) => s.name).join(", ")} · ${formatKRW(total)}`
                  : undefined
              }
            >
              <span className="sub-cal-d">{day}</span>
              {dayer.length > 0 && (
                <div className="sub-cal-dots">
                  {dayer.slice(0, 4).map((s) => (
                    <span
                      key={s.id}
                      className="sub-cal-dot"
                      style={{ background: s.color }}
                    />
                  ))}
                  {dayer.length > 4 && <span className="sub-cal-more">+{dayer.length - 4}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
