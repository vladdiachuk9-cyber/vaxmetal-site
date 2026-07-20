/**
 * The "X" mark from the VAXMetal brand book: crossed axes of a CNC toolpath
 * with the cut-point dot at the origin. Stroke uses currentColor so it
 * inherits the surrounding text color (ink on light, white on navy); the dot
 * is passed explicitly since the brand book specifies a different pine shade
 * per background (pine on light, pine-light on navy).
 */
export function LogoMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 14 L42 42 M42 14 L14 42"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="28" cy="28" r="5" className={inverted ? "fill-pine-light" : "fill-pine"} />
    </svg>
  );
}
