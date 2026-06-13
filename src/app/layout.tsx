import type { Metadata, Viewport } from "next";
import "@/styles/seed-tokens.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/landing.css";
import "@/styles/phone.css";
import "@/styles/doc.css";

const SITE_URL = "https://ieoseo.app";
const TITLE = "이어서 — D-Day · 할 일 · 집중을 하나로";
const DESCRIPTION =
  "못 한 일은 사라지지 않고 여유 있는 날로 이어서. D-Day, 할 일, 집중 타이머를 하나로 묶은 자기관리 앱.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "이어서",
  keywords: [
    "이어서",
    "ieoseo",
    "자기관리",
    "D-Day",
    "할 일",
    "투두",
    "포모도로",
    "집중 타이머",
    "시간 빌려쓰기",
    "미룬 시간",
    "통합 캘린더",
  ],
  authors: [{ name: "이어서" }],
  alternates: { canonical: "/" },
  icons: { icon: "/icons/favicon.png", apple: "/icons/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "이어서",
    locale: "ko_KR",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/icons/og.png", width: 1024, height: 1024, alt: "이어서" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icons/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css";
const WANTED_SANS_CSS =
  "https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/complete/WantedSansVariable.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the before-paint script adds `js` to <html>,
    // so the client className intentionally differs from the server HTML.
    <html lang="ko" suppressHydrationWarning>
      <body>
        {/* Arm the hidden reveal start-state before paint so there is no FOUC.
            Without JS the `.reveal` elements stay visible (no-JS / crawler safe). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* React 19 hoists these <link>s into <head> and dedupes them. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={PRETENDARD_CSS} />
        <link rel="stylesheet" href={WANTED_SANS_CSS} />
        {children}
      </body>
    </html>
  );
}
