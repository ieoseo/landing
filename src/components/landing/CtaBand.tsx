import { StoreBadges } from "./StoreBadges";

/** Closing gradient call-to-action band. */
export function CtaBand() {
  return (
    <section className="block" id="download">
      <div className="wrap">
        <div className="ctaband reveal">
          <h2>
            마감에 쫓기지 않는
            <br />
            자기관리를 시작해요
          </h2>
          <p>곧 App Store와 Google Play에서 만나요. 지금은 Android 내부 테스트 중이에요.</p>
          <div className="cta-stores">
            <StoreBadges dark />
          </div>
        </div>
      </div>
    </section>
  );
}
