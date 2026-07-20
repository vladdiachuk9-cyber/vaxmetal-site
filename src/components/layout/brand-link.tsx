"use client";

import type { MouseEvent } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

/**
 * Clicking a Link whose target resolves to the current URL doesn't trigger
 * a Next.js navigation, so scroll position is left untouched — surprising
 * for a logo link when the visitor is scrolled down the homepage. Scroll
 * to top ourselves in that one case; every other route still navigates
 * home normally (which already resets scroll on its own).
 */
export function BrandLink({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
      onClick={handleClick}
    >
      <LogoMark inverted={inverted} className="h-7 w-7 shrink-0" />
      <span>
        VA<span className={inverted ? "text-pine-light" : "text-pine"}>X</span>Metal
      </span>
    </Link>
  );
}
