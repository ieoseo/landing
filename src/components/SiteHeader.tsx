import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

type SiteHeaderProps = {
  /** "doc" shows a back-to-home link; "landing" shows just the brand. */
  variant?: "landing" | "doc";
};

/** Sticky translucent header shared by the landing and the legal pages. */
export function SiteHeader({ variant = "landing" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="wrap site-nav">
        <Link className="logo brand-font" href="/" aria-label="이어서 홈">
          <BrandLogo gradientId="logoHeader" />
          이어서
        </Link>
        {variant === "doc" && (
          <Link className="nav-back" href="/">
            ← 홈으로
          </Link>
        )}
      </div>
    </header>
  );
}
