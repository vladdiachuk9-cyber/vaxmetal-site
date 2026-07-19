"use client";

import { useState } from "react";
import { X, CalendarClock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ""; // TODO_VERIFY

export function BookCallButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-fog"
      >
        <CalendarClock className="size-4" aria-hidden />
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex h-[min(80vh,700px)] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 rounded-md bg-white/90 p-1.5 text-ink hover:bg-fog"
            >
              <X className="size-5" />
            </button>

            {CALENDLY_URL ? (
              // Only mounted once the user opens the dialog — the Calendly
              // iframe never loads on initial page render.
              <iframe
                src={CALENDLY_URL}
                title="Book a call"
                className="h-full w-full border-0"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <CalendarClock className="size-8 text-steel-light" aria-hidden />
                <p className="max-w-sm text-steel">
                  Call scheduling isn&apos;t connected yet. Email us directly and we&apos;ll set up a
                  time.
                </p>
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
                >
                  {siteConfig.contact.salesEmail}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
