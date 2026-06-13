"use client";

import { useEffect, useMemo, useState } from "react";
import { seedIcons } from "@/lib/seedIcons";
import {
  CATALOG,
  CATEGORY_META,
  formatKRW,
  initialOf,
  loadSubscriptions,
  saveSubscriptions,
  type CatalogService,
  type Subscription,
} from "@/lib/subscriptions";
import { SubscriptionCalendar } from "./SubscriptionCalendar";

const MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const NAV: ReadonlyArray<readonly [keyof typeof seedIcons, string]> = [
  ["home", "오늘"],
  ["calendar", "플랜"],
  ["focus", "집중"],
  ["user", "나"],
];

function uid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "s" + Math.random().toString(36).slice(2);
}

/** seed path(서브패스 ' M')를 stroke svg 로 렌더. */
function Icon({ name, sw = 1.9 }: { name: keyof typeof seedIcons; sw?: number }) {
  const d = seedIcons[name] ?? "";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d.split(" M").map((p, i) => (
        <path key={i} d={i === 0 ? p : "M" + p} />
      ))}
    </svg>
  );
}

/** 구독 관리 — 폰 기기 프레임 안 인터랙티브 앱 화면. 상태는 localStorage(서버 API 미가용). */
export function SubscriptionManager() {
  const [mounted, setMounted] = useState(false);
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<CatalogService | null>(null);
  const [amount, setAmount] = useState("");
  const [billingDay, setBillingDay] = useState("1");
  const [cursor, setCursor] = useState({ y: 2026, m: 0 });

  useEffect(() => {
    setSubs(loadSubscriptions());
    const now = new Date();
    setCursor({ y: now.getFullYear(), m: now.getMonth() });
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) saveSubscriptions(subs);
  }, [subs, mounted]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? CATALOG.filter((c) => c.name.toLowerCase().includes(q)) : CATALOG;
  }, [query]);

  const monthlyTotal = useMemo(() => subs.reduce((sum, s) => sum + s.amount, 0), [subs]);
  const yearlyTotal = monthlyTotal * 12;
  const sorted = useMemo(() => [...subs].sort((a, b) => a.billingDay - b.billingDay), [subs]);

  function pick(service: CatalogService) {
    setPicked(service);
    setAmount(service.typical ? String(service.typical) : "");
  }

  function add() {
    if (!picked) return;
    const amt = Math.max(0, Math.round(Number(amount) || 0));
    const day = Math.min(31, Math.max(1, Math.round(Number(billingDay) || 1)));
    setSubs((prev) => [
      ...prev,
      { id: uid(), serviceId: picked.id, name: picked.name, color: picked.color, category: picked.category, amount: amt, billingDay: day },
    ]);
    setPicked(null);
    setAmount("");
    setQuery("");
  }

  function remove(id: string) {
    setSubs((prev) => prev.filter((s) => s.id !== id));
  }

  function shiftMonth(delta: number) {
    setCursor((c) => {
      const next = c.m + delta;
      return { y: c.y + Math.floor(next / 12), m: ((next % 12) + 12) % 12 };
    });
  }

  return (
    <div className="subp-device">
      <div className="subp-screen">
        <div className="subp">
          <div className="subp-status">
            <span>9:41</span>
            <span className="pill" />
            <span className="sig">
              <i />
            </span>
          </div>

          <div className="subp-body">
            <div className="subp-top">
              <div className="subp-eyebrow">정기결제, 흩어지지 않게</div>
              <div className="subp-h">구독 관리</div>
            </div>

            <div className="subp-totals">
              <div className="subp-total">
                <span>월 합계</span>
                <strong className="brand-font">{formatKRW(monthlyTotal)}</strong>
              </div>
              <div className="subp-total">
                <span>연 환산</span>
                <strong className="brand-font">{formatKRW(yearlyTotal)}</strong>
              </div>
              <div className="subp-total">
                <span>구독</span>
                <strong className="brand-font">{subs.length}</strong>
              </div>
            </div>

            {!picked ? (
              <>
                <input
                  className="subp-input"
                  type="search"
                  inputMode="search"
                  placeholder="서비스 검색 (예: Netflix)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="구독 서비스 검색"
                />
                <div className="subp-cat" role="listbox" aria-label="구독 카탈로그">
                  {results.map((c) => (
                    <button key={c.id} type="button" className="chip subp-chip" onClick={() => pick(c)}>
                      <span className="subp-avatar" style={{ background: c.color }} aria-hidden="true">
                        {initialOf(c.name)}
                      </span>
                      {c.name}
                    </button>
                  ))}
                  {results.length === 0 && <p className="subp-empty">검색 결과가 없어요.</p>}
                </div>
              </>
            ) : (
              <div className="subp-form">
                <div className="subp-form-head">
                  <span className="subp-avatar lg" style={{ background: picked.color }} aria-hidden="true">
                    {initialOf(picked.name)}
                  </span>
                  <div>
                    <strong>{picked.name}</strong>
                    <span className={`badge badge-${CATEGORY_META[picked.category].tone}`}>{CATEGORY_META[picked.category].label}</span>
                  </div>
                </div>
                <label className="subp-field">
                  <span>월 금액 (원)</span>
                  <input className="subp-input" type="number" min={0} step={100} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="직접 입력" />
                </label>
                <label className="subp-field">
                  <span>매월 결제일</span>
                  <input className="subp-input" type="number" min={1} max={31} value={billingDay} onChange={(e) => setBillingDay(e.target.value)} />
                </label>
                <div className="subp-actions">
                  <button type="button" className="btn btn-outline btn-md" onClick={() => setPicked(null)}>
                    취소
                  </button>
                  <button type="button" className="btn btn-primary btn-md" onClick={add}>
                    추가
                  </button>
                </div>
              </div>
            )}

            <div className="subp-secbar">
              <span className="subp-sec">
                {cursor.y}년 {MONTHS[cursor.m]} 결제
              </span>
              <div className="subp-monthnav">
                <button type="button" onClick={() => shiftMonth(-1)} aria-label="이전 달">
                  ‹
                </button>
                <button type="button" onClick={() => shiftMonth(1)} aria-label="다음 달">
                  ›
                </button>
              </div>
            </div>
            {mounted ? <SubscriptionCalendar year={cursor.y} month={cursor.m} subs={subs} /> : <div className="subp-cal-skel" aria-hidden="true" />}

            <div className="subp-sec">내 구독{subs.length > 0 && <span className="subp-count">{subs.length}</span>}</div>
            {subs.length === 0 ? (
              <p className="subp-empty">위에서 서비스를 골라 추가해 보세요.</p>
            ) : (
              <ul className="subp-list">
                {sorted.map((s) => (
                  <li key={s.id} className="subp-row">
                    <span className="subp-avatar" style={{ background: s.color }} aria-hidden="true">
                      {initialOf(s.name)}
                    </span>
                    <div className="subp-row-main">
                      <strong>{s.name}</strong>
                      <span>매월 {s.billingDay}일</span>
                    </div>
                    <span className="subp-row-amt brand-font">{formatKRW(s.amount)}</span>
                    <button type="button" className="subp-remove" onClick={() => remove(s.id)} aria-label={`${s.name} 삭제`}>
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="subp-nav">
            {NAV.map(([icon, label]) => (
              <a key={label} className={label === "나" ? "on" : undefined}>
                <Icon name={icon} sw={2} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
