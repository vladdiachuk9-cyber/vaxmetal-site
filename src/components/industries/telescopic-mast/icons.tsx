/**
 * Icon set for the telescopic-mast product page, adapted from the brief's
 * source SVGs (12/assets/icons_svg/). Recolored to the site's actual brand
 * tokens instead of the brief's own #072856/#79BE20 — main strokes use
 * currentColor (inherits ink/white from context, same convention as
 * LogoMark), accent strokes use the site's pine green.
 */

type IconProps = { className?: string };

export function UavGroundIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42h80" />
        <path d="M42 42L28 28M86 42l14-14" />
        <path d="M56 42v18h16V42" />
        <path d="M17 83c14-14 30-14 44 0" className="stroke-pine" />
        <path d="M67 83c14-14 30-14 44 0" className="stroke-pine" />
        <path d="M31 97c7-7 15-7 22 0M77 97c7-7 15-7 22 0" strokeWidth="5" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function RfDataLinkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 111V59M47 111h34M51 87h26M56 70h16" />
        <circle cx="64" cy="42" r="7" className="fill-pine" stroke="none" />
        <path d="M45 46c-9-9-9-23 0-32M83 46c9-9 9-23 0-32" />
        <path d="M34 52c-15-15-15-39 0-54M94 52c15-15 15-39 0-54" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function DeployableCommsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="58" width="88" height="50" rx="8" />
        <path d="M38 58V41h18v17M73 58V33h18v25" />
        <circle cx="44" cy="83" r="9" className="stroke-pine" />
        <path d="M63 78h29M63 91h20" />
        <path d="M78 20c9-9 22-9 31 0" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function OemAdaptationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="24" y="24" width="31" height="31" />
        <rect x="73" y="24" width="31" height="31" />
        <rect x="24" y="73" width="31" height="31" />
        <rect x="73" y="73" width="31" height="31" />
        <path d="M55 39h18M39 55v18M89 55v18M55 89h18" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function PublicSafetyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 13l38 15v31c0 24-15 44-38 57-23-13-38-33-38-57V28l38-15z" />
        <path d="M64 39v42M43 60h42" strokeWidth="10" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function MonitoringSensorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 110V58M48 110h32" />
        <rect x="51" y="28" width="26" height="22" rx="4" />
        <path d="M77 35l22-11v30L77 43" className="stroke-pine" />
        <path d="M36 71c8-8 17-8 25 0M92 71c-8-8-17-8-25 0" className="stroke-pine" />
      </g>
    </svg>
  );
}

export function FieldPlatformIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 12l40 16v32c0 25-16 46-40 59-24-13-40-34-40-59V28l40-16z" />
        <path d="M43 64l14 14 30-34" strokeWidth="9" className="stroke-pine" />
      </g>
    </svg>
  );
}
