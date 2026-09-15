import type { SVGProps } from "react";

/**
 * Lightweight inline SVGs for brand glyphs not in lucide-react (which dropped
 * brand icons from its default set). Drawn in the same stroke style as the
 * rest of the site's lucide icons (24x24, currentColor, strokeWidth 2, round
 * caps/joins) so they sit naturally next to Phone/Mail/Send from lucide.
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21l1.5-4.5A8 8 0 1 1 8.5 19.5L3 21z" />
      <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.4 1.4-1l.3-.7a.8.8 0 0 0-.4-1l-1.4-.7a.8.8 0 0 0-.9.1l-.3.3a5 5 0 0 1-2.6-2.6l.3-.3a.8.8 0 0 0 .1-.9l-.7-1.4a.8.8 0 0 0-1-.4l-.7.3c-.6.2-1 .8-1 1.4z" />
    </svg>
  );
}
