export function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
      {specs.map((spec) => (
        <div key={spec.label} className="flex flex-col gap-1 bg-white p-5">
          <dt className="text-xs font-semibold font-mono uppercase tracking-wide text-steel">{spec.label}</dt>
          <dd className="font-heading text-base font-semibold text-ink">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
