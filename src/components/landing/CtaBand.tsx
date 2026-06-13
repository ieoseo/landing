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
          <p>App Store와 Google Play에서 만나요. 평생 무료로 제공돼요.</p>
          <div className="cta-stores">
            <StoreBadges dark />
          </div>
        </div>
      </div>
    </section>
  );
}
