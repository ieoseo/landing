import Link from "next/link";

type SiteFooterProps = {
  /** Legal pages also link back home; the landing footer omits it. */
  showHome?: boolean;
};

/** Minimal footer: copyright + legal links, shared across pages. */
export function SiteFooter({ showHome = false }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="wrap foot-bottom">
        <span>© 2026 이어서. All rights reserved.</span>
        <div className="links">
          {showHome && <Link href="/">홈</Link>}
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보처리방침</Link>
        </div>
      </div>
    </footer>
  );
}
