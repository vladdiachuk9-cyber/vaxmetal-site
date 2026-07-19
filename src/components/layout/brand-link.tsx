"use client";

import type { MouseEvent } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

/**
 * Clicking a Link whose target resolves to the current URL doesn't trigger
 * a Next.js navigation, so scroll position is left untouched — surprising
 * for a logo link when the visitor is scrolled down the homepage. Scroll
 * to top ourselves in that one case; every other route still navigates
 * home normally (which already resets scroll on its own).
 */
export function BrandLink({ className }: { className?: string }) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link href="/" className={className} onClick={handleClick}>
      {siteConfig.name}
    </Link>
  );
}
