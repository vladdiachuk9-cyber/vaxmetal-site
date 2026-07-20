import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 font-heading text-2xl font-semibold text-ink" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 font-heading text-xl font-semibold text-ink" {...props} />
  ),
  p: (props) => <p className="mt-4 leading-relaxed text-steel" {...props} />,
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-steel" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-steel" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => <a className="font-medium text-pine underline underline-offset-2" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-4 border-l-2 border-pine pl-4 italic text-steel" {...props} />
  ),
  table: (props) => (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th className="border-b border-border bg-fog px-3 py-2 text-left font-semibold text-ink" {...props} />
  ),
  td: (props) => <td className="border-b border-border px-3 py-2 text-steel" {...props} />,
  hr: (props) => <hr className="my-10 border-border" {...props} />,
};
