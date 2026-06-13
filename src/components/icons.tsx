import { seedIcons } from "@/lib/seedIcons";
import { seedProviders } from "@/lib/seedProviders";

type IconProps = { className?: string };

/** seed 의 path d(서브패스가 ' M' 으로 이어짐)를 개별 <path> 로 분리. */
function subpaths(d: string): string[] {
  return d.split(" M").map((p, i) => (i === 0 ? p : "M" + p));
}

/** Lucide-style check — seed `check`. 쇼케이스 리스트 / 시간-부채 완료. */
export function CheckIcon({ className, strokeWidth = 2.4 }: IconProps & { strokeWidth?: number }) {
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
      {subpaths(seedIcons.check).map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** 이월 흐름 화살표 — seed `repeat`. 시간 빌려쓰기 흐름. */
export function CarryForwardIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {subpaths(seedIcons.repeat).map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Apple 글리프 — seed `provider/apple.svg`(단일 소스). fill=currentColor 상속.
    inner 는 seed-design 빌드타임 생성 SVG(신뢰된 정적, 사용자 입력 아님). */
export function AppleGlyph({ className }: IconProps) {
  const p = seedProviders.apple;
  return (
    <svg
      className={className}
      viewBox={p.viewBox}
      fill="currentColor"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: p.inner }}
    />
  );
}

/** Google Play 글리프 — seed `provider/google-play.svg`(단일 소스, 멀티컬러). */
export function GooglePlayGlyph({ className }: IconProps) {
  const p = seedProviders["google-play"];
  return (
    <svg
      className={className}
      viewBox={p.viewBox}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: p.inner }}
    />
  );
}
