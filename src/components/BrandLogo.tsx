type BrandLogoProps = {
  className?: string;
  /** Unique gradient id — required when multiple logos render on one page. */
  gradientId?: string;
  /** When set, the mark is exposed to assistive tech with this label; otherwise hidden. */
  title?: string;
};

/** 이어서 브랜드 마크 — 파란 그라데이션 라운드 사각형 + 흰 OOΛ 글리프(ㅇㅇ+ㅅ). */
export function BrandLogo({ className, gradientId = "ieoseoLogo", title }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1024 1024"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2E86FF" />
          <stop offset="1" stopColor="#0A4FD6" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="229" fill={`url(#${gradientId})`} />
      <g fill="none" stroke="#fff" strokeWidth="72" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="268" cy="512" r="92" />
        <circle cx="512" cy="512" r="92" />
        <path d="M664 604 Q756 404 756 404 Q756 404 848 604" />
      </g>
    </svg>
  );
}
