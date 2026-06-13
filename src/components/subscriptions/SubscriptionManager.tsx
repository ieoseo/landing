"use client";

import { useEffect, useMemo, useState } from "react";
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

function uid(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "s" + Math.random().toString(36).slice(2);
}

/** 구독 관리 — 카탈로그 검색 → 금액 수동 설정 → 캘린더 확인. 상태는 localStorage. */
export function SubscriptionManager() {
  const [mounted, setMounted] = useState(false);
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [query, setQuery] = useState("");
  const [picked, setPicked] = useState<CatalogService | null>(null);
  const [amount, setAmount] = useState("");
  const [billingDay, setBillingDay] = useState("1");
  const [cursor, setCursor] = useState({ y: 2026, m: 0 });

  // 마운트 후에만 localStorage·현재 달을 읽어 하이드레이션 불일치를 피한다.
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
    if (!q) return CATALOG;
    return CATALOG.filter((c) => c.name.toLowerCase().includes(q));
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
      {
        id: uid(),
        serviceId: picked.id,
        name: picked.name,
        color: picked.color,
        category: picked.category,
        amount: amt,
        billingDay: day,
      },
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
    <div className="sub-app">
      <header className="sub-hero">
        <span className="badge badge-primary">구독 일정 관리</span>
        <h1>흩어진 구독, 한 캘린더에서</h1>
        <p>
          쓰고 있는 구독을 골라 금액만 정하면, 매달 언제 얼마가 빠져나가는지 한눈에 봐요. 결제일이 캘린더에 모여요.
        </p>
        <div className="sub-totals">
          <div className="sub-total">
            <span className="sub-total-k">월 합계</span>
            <strong className="brand-font">{formatKRW(monthlyTotal)}</strong>
          </div>
          <div className="sub-total">
            <span className="sub-total-k">연 환산</span>
            <strong className="brand-font">{formatKRW(yearlyTotal)}</strong>
          </div>
          <div className="sub-total">
            <span className="sub-total-k">구독 수</span>
            <strong className="brand-font">{subs.length}</strong>
          </div>
        </div>
      </header>

      <div className="sub-grid">
        <section className="card sub-panel" aria-labelledby="sub-add-h">
          <h2 id="sub-add-h" className="sub-panel-h">
            구독 추가
          </h2>
          <input
            className="sub-input"
            type="search"
            inputMode="search"
            placeholder="서비스 검색 (예: Netflix, ChatGPT)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="구독 서비스 검색"
          />

          {!picked ? (
            <div className="sub-catalog" role="listbox" aria-label="구독 카탈로그">
              {results.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="chip sub-cat-chip"
                  onClick={() => pick(c)}
                >
                  <span className="sub-avatar" style={{ background: c.color }} aria-hidden="true">
                    {initialOf(c.name)}
                  </span>
                  {c.name}
                </button>
              ))}
              {results.length === 0 && <p className="sub-empty">검색 결과가 없어요.</p>}
            </div>
          ) : (
            <div className="sub-form">
              <div className="sub-form-head">
                <span className="sub-avatar lg" style={{ background: picked.color }} aria-hidden="true">
                  {initialOf(picked.name)}
                </span>
                <div>
                  <strong>{picked.name}</strong>
                  <span className={`badge badge-${CATEGORY_META[picked.category].tone}`}>
                    {CATEGORY_META[picked.category].label}
                  </span>
                </div>
              </div>

              <label className="sub-field">
                <span>월 금액 (원)</span>
                <input
                  className="sub-input"
                  type="number"
                  min={0}
                  step={100}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="직접 입력"
                />
              </label>

              <label className="sub-field">
                <span>매월 결제일</span>
                <input
                  className="sub-input"
                  type="number"
                  min={1}
                  max={31}
                  value={billingDay}
                  onChange={(e) => setBillingDay(e.target.value)}
                />
              </label>

              <div className="sub-form-actions">
                <button type="button" className="btn btn-outline btn-md" onClick={() => setPicked(null)}>
                  취소
                </button>
                <button type="button" className="btn btn-primary btn-md" onClick={add}>
                  추가
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="card sub-panel" aria-labelledby="sub-cal-h">
          <div className="sub-cal-bar">
            <h2 id="sub-cal-h" className="sub-panel-h">
              {cursor.y}년 {MONTHS[cursor.m]}
            </h2>
            <div className="sub-cal-nav">
              <button type="button" className="btn btn-outline btn-sm" onClick={() => shiftMonth(-1)} aria-label="이전 달">
                ‹
              </button>
              <button type="button" className="btn btn-outline btn-sm" onClick={() => shiftMonth(1)} aria-label="다음 달">
                ›
              </button>
            </div>
          </div>
          {mounted ? (
            <SubscriptionCalendar year={cursor.y} month={cursor.m} subs={subs} />
          ) : (
            <div className="sub-cal-skeleton" aria-hidden="true" />
          )}
        </section>
      </div>

      <section className="sub-list-wrap" aria-labelledby="sub-list-h">
        <h2 id="sub-list-h" className="sub-panel-h">
          내 구독 {subs.length > 0 && <span className="sub-count">{subs.length}</span>}
        </h2>
        {subs.length === 0 ? (
          <p className="sub-empty">아직 등록한 구독이 없어요. 위에서 검색해 추가해 보세요.</p>
        ) : (
          <ul className="sub-list">
            {sorted.map((s) => (
              <li key={s.id} className="card sub-row">
                <span className="sub-avatar" style={{ background: s.color }} aria-hidden="true">
                  {initialOf(s.name)}
                </span>
                <div className="sub-row-main">
                  <strong>{s.name}</strong>
                  <span className="sub-row-meta">매월 {s.billingDay}일</span>
                </div>
                <span className={`badge badge-${CATEGORY_META[s.category].tone}`}>
                  {CATEGORY_META[s.category].label}
                </span>
                <span className="sub-row-amt brand-font">{formatKRW(s.amount)}</span>
                <button
                  type="button"
                  className="sub-remove"
                  onClick={() => remove(s.id)}
                  aria-label={`${s.name} 삭제`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
