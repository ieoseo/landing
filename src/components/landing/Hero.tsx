import { BrandLogo } from "../BrandLogo";
import { StoreBadges } from "./StoreBadges";

/** Above-the-fold hero: headline + store CTAs + phone mock with in-app splash. */
export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            자기관리, 끊기지 않게
          </div>
          <h1>
            못 한 일은 사라지지 않아요.
            <br />
            <span className="accent">이어서</span> 하면 되니까요.
          </h1>
          <p className="lede">
            D-Day, 할 일, 집중 타이머를 하나로. 오늘 못 끝낸 일은 여유 있는 날로 똑똑하게 옮겨드려요. 마감에
            쫓기지 않고, 매일 이어가는 자기관리.
          </p>
          <div className="cta-row">
            <StoreBadges />
          </div>
          <p className="cta-note">지금은 Android 내부 테스트 중이에요. 정식 출시를 준비하고 있어요.</p>
        </div>
        <div className="phone-stage">
          <div className="glow" />
          <div className="device-shot hero-shot">
            <div className="splash-screen">
              <BrandLogo className="sl" gradientId="heroSplash" />
              <div className="sw brand-font">이어서</div>
              <div className="st">D-Day · 할 일 · 집중을 하나로</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
