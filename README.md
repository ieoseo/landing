# 이어서 랜딩페이지 (ieoseo/landing)

[이어서(ieoseo)](https://ieoseo.app) 마케팅 랜딩페이지. **Next.js 정적 사이트**(GitHub Pages).

## 스택

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- `output: 'export'` 정적 빌드 (서버 없음)
- 디자인 토큰은 **CSS custom properties**(`src/styles/`), 컴포넌트는 기능 단위 분리
- 폰트: **Pretendard** + **Wanted Sans**(브랜드 디스플레이)
- 스크롤 리빌은 `IntersectionObserver`(compositor 친화 `opacity`/`transform`만)

## 로컬 개발

```bash
npm install
npm run dev      # http://localhost:3000
```

## 빌드

```bash
npm run build    # → out/ (정적 HTML/CSS/JS)
```

## 구조

```text
src/
├── app/
│   ├── layout.tsx            # 메타데이터/OG, 폰트, 루트 셸
│   ├── page.tsx              # 랜딩 (/)
│   ├── terms/page.tsx        # 이용약관 (/terms)
│   ├── privacy/page.tsx      # 개인정보처리방침 (/privacy)
│   ├── robots.ts · sitemap.ts
├── components/
│   ├── SiteHeader · SiteFooter · BrandLogo · RevealController · icons
│   └── landing/              # Hero·Trust·Showcase·Features·TimeDebt·Steps·CtaBand
└── styles/                   # tokens·base·landing·doc (CSS custom properties)
```

## 배포

`main` 에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드 후 **GitHub Pages**로 배포한다. `main` 푸시가 곧 배포.

## 디자인

Claude Design 핸드오프(`index.html`/`terms.html`/`privacy.html`)를 이식했다.
