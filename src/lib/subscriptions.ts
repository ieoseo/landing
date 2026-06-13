// 구독 관리(랜딩 프로토타입) — 정해진 카탈로그 + 로컬 상태.
// 현재 서버 API 로 구독을 가져올 수 없어, 카탈로그에서 검색해 고르고 금액은 수동 설정한다.
// 상태는 브라우저 localStorage 에만 저장(서버 없음).

/** 카탈로그 서비스(정해진 구독). 로고는 그리지 않고 브랜드 색 + 머리글자로 표현. */
export interface CatalogService {
  id: string;
  name: string;
  /** 브랜드 대표 색(아바타 배경). */
  color: string;
  /** 분류 — 뱃지 톤 매핑에 사용. */
  category: SubCategory;
  /** 참고용 대략 월 요금(원). 입력 힌트로만 쓰고 실제 금액은 사용자가 정한다. */
  typical?: number;
}

export type SubCategory = "ai" | "ott" | "music" | "productivity" | "shopping";

/** 분류 → 한글 라벨 + seed 뱃지 톤(.badge-{tone}). */
export const CATEGORY_META: Record<SubCategory, { label: string; tone: string }> = {
  ai: { label: "AI", tone: "primary" },
  ott: { label: "OTT", tone: "danger" },
  music: { label: "음악", tone: "success" },
  productivity: { label: "생산성", tone: "violet" },
  shopping: { label: "쇼핑", tone: "warning" },
};

/** 정해진 구독 카탈로그. 검색 가능(이름). */
export const CATALOG: CatalogService[] = [
  { id: "chatgpt", name: "ChatGPT Plus", color: "#10A37F", category: "ai", typical: 29000 },
  { id: "claude", name: "Claude Pro", color: "#CC785C", category: "ai", typical: 29000 },
  { id: "gemini", name: "Gemini Advanced", color: "#1A73E8", category: "ai", typical: 29000 },
  { id: "perplexity", name: "Perplexity Pro", color: "#20B8CD", category: "ai", typical: 29000 },
  { id: "netflix", name: "Netflix", color: "#E50914", category: "ott", typical: 17000 },
  { id: "youtube", name: "YouTube Premium", color: "#FF0000", category: "ott", typical: 14900 },
  { id: "disney", name: "Disney+", color: "#113CCF", category: "ott", typical: 9900 },
  { id: "tving", name: "TVING", color: "#FF153C", category: "ott", typical: 17000 },
  { id: "wavve", name: "Wavve", color: "#1351F9", category: "ott", typical: 13900 },
  { id: "watcha", name: "WATCHA", color: "#FF0558", category: "ott", typical: 7900 },
  { id: "spotify", name: "Spotify", color: "#1DB954", category: "music", typical: 10900 },
  { id: "melon", name: "Melon", color: "#00CD3C", category: "music", typical: 10900 },
  { id: "applemusic", name: "Apple Music", color: "#FA243C", category: "music", typical: 11000 },
  { id: "notion", name: "Notion Plus", color: "#111111", category: "productivity", typical: 12000 },
  { id: "github", name: "GitHub Pro", color: "#181717", category: "productivity", typical: 5500 },
  { id: "adobe", name: "Adobe CC", color: "#DA1F26", category: "productivity", typical: 24000 },
  { id: "icloud", name: "iCloud+", color: "#3693F3", category: "productivity", typical: 3300 },
  { id: "coupang", name: "쿠팡 와우", color: "#E4002B", category: "shopping", typical: 7890 },
  { id: "naver", name: "네이버플러스", color: "#03C75A", category: "shopping", typical: 4900 },
];

/** 등록된 구독 1건. billingDay = 매월 결제일(1~31). amount = 월 요금(원). */
export interface Subscription {
  id: string;
  serviceId: string;
  name: string;
  color: string;
  category: SubCategory;
  amount: number;
  billingDay: number;
}

const STORAGE_KEY = "ieoseo:subscriptions";

/** localStorage 에서 구독 목록을 읽는다(브라우저 전용, 실패 시 빈 배열). */
export function loadSubscriptions(): Subscription[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isSubscription);
  } catch {
    return [];
  }
}

/** 구독 목록을 localStorage 에 저장한다. */
export function saveSubscriptions(subs: Subscription[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
  } catch {
    // 저장 실패(용량/프라이빗 모드)는 조용히 무시 — 세션 내 동작은 유지.
  }
}

function isSubscription(v: unknown): v is Subscription {
  if (typeof v !== "object" || v === null) return false;
  const s = v as Record<string, unknown>;
  return (
    typeof s.id === "string" &&
    typeof s.serviceId === "string" &&
    typeof s.name === "string" &&
    typeof s.color === "string" &&
    typeof s.amount === "number" &&
    typeof s.billingDay === "number"
  );
}

/** 원화 표기(₩12,900). */
export function formatKRW(amount: number): string {
  return "₩" + Math.round(amount).toLocaleString("ko-KR");
}

/** 서비스 머리글자(아바타용) — 영문/한글 첫 글자. */
export function initialOf(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}
