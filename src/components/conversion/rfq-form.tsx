"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { UploadCloud, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function RfqForm() {
  const t = useTranslations("estimator");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("locale", locale);

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("errorBody"));
        return;
      }

      setStatus("success");
      form.reset();
      setFileName(null);
    } catch {
      setStatus("error");
      setErrorMessage(t("errorBody"));
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-fog p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-blue" aria-hidden />
        <h3 className="font-heading text-xl font-semibold text-ink">{t("successTitle")}</h3>
        <p className="max-w-md text-steel">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-xl border border-border bg-white p-6 sm:p-8" noValidate>
      {/* Honeypot — hidden from real users via CSS, not display:none, so bots that skip hidden fields still trip it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company Website</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="rounded-md bg-blue-tint px-4 py-3 text-sm text-blue-dark">{t("disclaimer")}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("nameLabel")} name="name" required autoComplete="name" />
        <Field label={t("emailLabel")} name="email" type="email" required autoComplete="email" />
        <Field label={t("companyLabel")} name="company" autoComplete="organization" />
        <Field label={t("quantityLabel")} name="quantity" />
        <Field label={t("materialLabel")} name="material" />
        <Field label={t("finishLabel")} name="finish" />
      </div>

      <Field label={t("toleranceLabel")} name="tolerance" />

      <label className="grid gap-2 text-sm font-medium text-ink">
        {t("uploadLabel")}
        <div className="flex items-center gap-3 rounded-md border border-dashed border-border px-4 py-6 text-steel">
          <UploadCloud className="size-5 shrink-0" aria-hidden />
          <span className="truncate text-sm">{fileName ?? t("uploadLabel")}</span>
        </div>
        <input
          type="file"
          name="file"
          className="sr-only"
          accept=".step,.stp,.dxf,.dwg,.pdf,.zip"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-ink">
        {t("messageLabel")}
        <textarea
          name="message"
          rows={3}
          className="rounded-md border border-input bg-white px-3 py-2 text-sm text-ink placeholder:text-steel-light focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-steel">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 rounded border-input text-blue focus:ring-blue"
        />
        {t("consentLabel")}
      </label>

      {status === "error" && errorMessage && (
        <p role="alert" className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0 translate-y-0.5" aria-hidden />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      {required && <span className="sr-only">(required)</span>}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-input bg-white px-3 py-2 text-sm text-ink placeholder:text-steel-light focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
      />
    </label>
  );
}
