import { AppleGlyph, GooglePlayGlyph } from "../icons";

type StoreBadgesProps = {
  /** Dark badges (white background) for use on colored bands like the CTA. */
  dark?: boolean;
};

/**
 * App Store + Google Play badges. Links are placeholders (#) until the app ships
 * publicly — swap the hrefs for the real store URLs at launch.
 */
export function StoreBadges({ dark = false }: StoreBadgesProps) {
  const className = dark ? "store-badge dark" : "store-badge";
  return (
    <>
      <a className={className} href="#" aria-label="App Store에서 다운로드">
        <AppleGlyph />
        <span>
          <strong>App Store</strong>
        </span>
      </a>
      <a className={className} href="#" aria-label="Google Play에서 다운로드">
        <GooglePlayGlyph />
        <span>
          <strong>Google Play</strong>
        </span>
      </a>
    </>
  );
}
