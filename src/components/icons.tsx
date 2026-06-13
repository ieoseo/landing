type IconProps = { className?: string };

/** Lucide-style check — used in showcase bullet lists and the time-debt flow. */
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/** Carry-forward (달력 + 앞으로 향하는 화살표) — 시간 빌려쓰기 흐름의 이월 아이콘. */
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
      <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

/** Apple logo glyph (App Store badge). */
export function AppleGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.04c-.02-2.07 1.69-3.06 1.77-3.11-.97-1.41-2.47-1.6-3-1.62-1.27-.13-2.49.75-3.14.75-.65 0-1.65-.73-2.71-.71-1.39.02-2.68.81-3.39 2.05-1.45 2.51-.37 6.22 1.04 8.26.69 1 1.51 2.12 2.58 2.08 1.04-.04 1.43-.67 2.69-.67 1.25 0 1.61.67 2.71.65 1.12-.02 1.83-1.02 2.51-2.02.79-1.16 1.12-2.28 1.13-2.34-.02-.01-2.17-.83-2.19-3.3M15.2 5.36c.57-.69.96-1.65.85-2.61-.83.03-1.83.55-2.42 1.24-.53.61-.99 1.59-.87 2.53.92.07 1.87-.47 2.44-1.16" />
    </svg>
  );
}

/** Google Play triangle glyph (Google Play badge). */
export function GooglePlayGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.6 2.3c-.24.26-.38.66-.38 1.18v17.04c0 .52.14.92.39 1.17l.06.06 9.54-9.54v-.22L3.66 2.24z" fill="#00D2FF" />
      <path d="M16.4 15.55l-3.18-3.18v-.22l3.18-3.18.07.04 3.77 2.14c1.08.61 1.08 1.62 0 2.24l-3.77 2.14z" fill="#FFCE00" />
      <path d="M16.47 15.51L13.22 12.26 3.6 21.7c.36.38.94.42 1.6.05l11.27-6.24" fill="#FF3B30" />
      <path d="M16.47 8.97L5.2 2.74c-.66-.38-1.24-.33-1.6.05l9.62 9.43z" fill="#00C853" />
    </svg>
  );
}
