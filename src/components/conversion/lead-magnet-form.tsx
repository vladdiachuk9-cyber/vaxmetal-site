"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Download, FileText } from "lucide-react";

type Status = "idle" | "submitting" | "done" | "error";

export function LeadMagnetForm() {
  const t = useTranslations("leadMagnet");
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, consent: true }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "capability-statement.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <FileText className="mt-0.5 size-8 shrink-0 text-pine" aria-hidden />
        <div>
          <h3 className="font-heading text-base font-semibold text-ink">{t("title")}</h3>
          <p className="mt-1 text-sm text-steel">{t("subtitle")}</p>
        </div>
      </div>

      {status === "done" ? (
        <p className="shrink-0 text-sm font-medium text-pine">{t("successBody")}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <input
            type="text"
            placeholder={t("nameLabel")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-input px-3 py-2 text-sm text-ink sm:w-36"
          />
          <input
            type="email"
            required
            placeholder={t("emailLabel")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-input px-3 py-2 text-sm text-ink sm:w-52"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy disabled:opacity-60"
          >
            <Download className="size-4" aria-hidden />
            {status === "submitting" ? t("submitting") : t("cta")}
          </button>
        </form>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {t("errorBody")}
        </p>
      )}
    </div>
  );
}
