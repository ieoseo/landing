# landing — 이어서 랜딩페이지 (Claude 작업 가이드)

[ieoseo.app](https://ieoseo.app) 마케팅 랜딩. Claude Design 핸드오프(`index.html`)를 **Next.js 정적 사이트**로 이식해 **GitHub Pages**로 apex 도메인에 배포한다. `ieoseo` 멀티레포(client/server/docs/landing)의 한 축이며 독립 git 저장소다.

## 핵심 제약 (반드시 지킨다)

- **정적 export 전용**: `next.config.mjs`의 `output: 'export'`. **서버 기능 금지** — SSR 런타임, route handler(API), `cookies()`/`headers()`, ISR, `next/image` 최적화(이미 `images.unoptimized: true`). 동적 데이터는 빌드타임으로만.
- **apex 도메인**: `ieoseo.app` 루트에 서비스 → `basePath`/`assetPrefix` 없음. `public/CNAME`(`ieoseo.app`)과 `.nojekyll`은 export에 포함돼야 한다(지우지 말 것).
- **`trailingSlash: true`**: 라우트는 `/terms/` 형태. 내부 링크·sitemap도 이 형태로 맞춘다.

## 명령어

```bash
npm run dev      # 로컬 개발(http://localhost:3000)
npm run build    # 정적 export → out/
```

빌드 산출물 `out/`을 CI(`deploy.yml`)가 Pages에 올린다. `main` 푸시가 곧 배포다.

## 구조 / 스타일

- 페이지: `src/app/{page,terms/page,privacy/page}.tsx`. 셸: `SiteHeader`/`SiteFooter`. 랜딩 섹션: `src/components/landing/*`.
- CSS는 **custom properties 토큰**(`src/styles/tokens.css`) + 기능별 파일(`base`/`landing`/`doc`). 전역 import는 `layout.tsx`에서만. 색/간격 하드코딩 대신 토큰 사용.
- 모션은 **`opacity`/`transform`만**(compositor 친화). 스크롤 리빌은 `RevealController`(클라이언트) + `.reveal` 클래스, `prefers-reduced-motion` 존중. 레이아웃 속성 애니메이트 금지.
- 폰트: Pretendard(dynamic subset CDN) + Wanted Sans(`.brand-font`, 큰 숫자/로고/통계). `layout.tsx`의 `<link>`로 로드(React 19 hoist).
- 이미지: `<img>`에 **명시적 width/height**(CLS 예약), 아래쪽은 `loading="lazy"`.

## FOUC / no-JS 규칙

`.reveal`은 기본 **보임**(크롤러·no-JS 안전). `layout.tsx`의 before-paint 인라인 스크립트가 `<html>`에 `js` 클래스를 달면 그때만 숨김 시작 상태가 켜진다(`html.js .reveal`). 이 구조를 깨지 말 것.

## 디자인 충실도

- 원본: Claude Design 핸드오프 `index.html`/`terms.html`/`privacy.html`. **시각 결과를 충실히 재현**하되 프로토타입 내부 구조를 그대로 베끼지 않는다.
- 브랜드/법무 카피의 em dash 등 표기는 **디자인 원문 그대로** 유지(전역 산문 규칙과 별개). 내가 새로 쓰는 산문·주석은 글로벌 규칙(em dash·§ 금지)을 따른다.
- 토큰 단일 출처는 `ieoseo/docs`의 `01-디자인분석/디자인시스템-토큰.md`. 토큰을 바꾸면 docs도 갱신(멀티레포 docs 동기화 원칙).

## 배포/도메인 메모

- `main` 푸시 = 배포(GitHub Actions → Pages). Pages Source = GitHub Actions(최초 1회).
- apex `ieoseo.app` 서비스. `public/CNAME`·`.nojekyll` 는 export 에 포함돼야 한다(지우지 말 것).
- DNS·도메인 운영 절차(레코드·www·공존)는 **내부 배포 가이드** 참조. 운영 중인 다른 서브도메인 레코드는 건드리지 않는다.
- 스토어 배지 링크는 `StoreBadges.tsx` placeholder(`#`) — 출시 시 교체.

## 워크플로우

`client`/`server`처럼 GitHub Flow(이슈 → 브랜치 → PR → squash 머지). 커밋은 한국어 Conventional Commits. 시큐리티 게이트(`git diff --cached`로 시크릿 차단)는 커밋 전제조건.
