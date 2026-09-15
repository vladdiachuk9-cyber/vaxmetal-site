"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { UploadCloud, X, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";
import { ANTI_DRONE_PRODUCT, MAX_FILES, MAX_TOTAL_UPLOAD_BYTES } from "@/lib/rfq/schema";
import { trackEvent } from "@/lib/analytics/track-event";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

type Status = "idle" | "submitting" | "success" | "error";

const ACCEPT = ".jpg,.jpeg,.png,.webp,.pdf,.dwg,.dxf,.step,.stp,.zip";

function formatMb(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(1);
}

export function AntiDroneRfqForm({ locale }: { locale: Locale }) {
  const t = useTranslations("estimator");
  const copy = antiDronePage.rfq;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [started, setStarted] = useState(false);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  function markStarted() {
    if (!started) {
      setStarted(true);
      trackEvent("anti_drone_form_start");
    }
  }

  function handleFilesChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    if (selected.length === 0) return;
    setFiles((prev) => [...prev, ...selected].slice(0, MAX_FILES));
    e.target.value = "";
    markStarted();
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setDescriptionError(false);

    const form = event.currentTarget;
    const description = (form.elements.namedItem("message") as HTMLTextAreaElement | null)?.value ?? "";

    if (description.trim().length === 0) {
      setDescriptionError(true);
      setStatus("error");
      setErrorMessage(locale === "uk" ? "Будь ласка, опишіть задачу." : "Please describe your project.");
      return;
    }

    if (totalBytes > MAX_TOTAL_UPLOAD_BYTES) {
      setStatus("error");
      setErrorMessage(
        locale === "uk" ? "Загальний розмір файлів перевищує 50МБ." : "Combined file size exceeds the 50MB limit."
      );
      return;
    }

    setStatus("submitting");
    trackEvent("anti_drone_form_submit");

    const formData = new FormData(form);
    formData.delete("files");
    for (const file of files) {
      formData.append("files", file);
    }
    formData.set("locale", locale);
    formData.set("product", ANTI_DRONE_PRODUCT);

    if (typeof window !== "undefined") {
      formData.set("landingPage", window.location.pathname);
      formData.set("sourcePage", `${window.location.pathname}?page_category=anti_drone_protection`);
      formData.set("referrer", document.referrer ?? "");
      const params = new URLSearchParams(window.location.search);
      formData.set("utmSource", params.get("utm_source") ?? "");
      formData.set("utmMedium", params.get("utm_medium") ?? "");
      formData.set("utmCampaign", params.get("utm_campaign") ?? "");
    }
    formData.set("timestamp", new Date().toISOString());

    try {
      const res = await fetch("/api/rfq", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("errorBody"));
        return;
      }

      setStatus("success");
      form.reset();
      setFiles([]);
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
        <CheckCircle2 className="size-10 text-pine" aria-hidden />
        <h3 className="font-heading text-xl font-semibold text-ink">{copy.successTitle[locale]}</h3>
        <p className="max-w-md text-steel">{copy.successBody[locale]}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={markStarted}
      className="grid gap-5 rounded-xl border border-border bg-white p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot — hidden from real users via CSS, not display:none, so bots that skip hidden fields still trip it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite-ad">Company Website</label>
        <input id="companyWebsite-ad" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SelectField label={copy.requestTypeLabel[locale]} name="requestType" options={copy.requestTypeOptions[locale]} />
      <SelectField label={copy.assetTypeLabel[locale]} name="assetType" options={copy.assetTypeOptions[locale]} />

      <label className="grid gap-2 text-sm font-medium text-ink">
        {copy.descriptionLabel[locale]}
        <textarea
          name="message"
          rows={4}
          placeholder={copy.textareaPlaceholder[locale]}
          onChange={() => descriptionError && setDescriptionError(false)}
          className={`rounded-md border bg-white px-3 py-2 text-sm text-ink placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-pine/30 ${
            descriptionError ? "border-red-400" : "border-input focus:border-pine"
          }`}
        />
      </label>

      <div className="grid gap-2">
        <span className="text-sm font-medium text-ink">{copy.uploadTitle[locale]}</span>
        <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-border px-4 py-6 text-steel hover:border-pine hover:text-pine">
          <UploadCloud className="size-5 shrink-0" aria-hidden />
          <span className="text-sm">{copy.uploadHelp[locale]}</span>
          <input type="file" multiple accept={ACCEPT} className="sr-only" onChange={handleFilesChange} />
        </label>

        {files.length > 0 && (
          <ul className="grid gap-1.5">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between gap-2 rounded-md bg-fog px-3 py-2 text-xs text-steel"
              >
                <span className="flex min-w-0 items-center gap-1.5">
                  <Paperclip className="size-3.5 shrink-0" aria-hidden />
                  <span className="truncate">{file.name}</span>
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  aria-label={locale === "uk" ? "Видалити файл" : "Remove file"}
                  className="shrink-0 text-steel hover:text-ink"
                >
                  <X className="size-3.5" />
                </button>
              </li>
            ))}
            <li className="text-xs text-steel">
              {formatMb(totalBytes)} / {formatMb(MAX_TOTAL_UPLOAD_BYTES)} MB · {files.length}/{MAX_FILES}
            </li>
          </ul>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.approxDimensionsLabel[locale]} name="approxDimensions" />
        <Field label={copy.quantityLabel[locale]} name="quantity" />
        <Field label={copy.deliveryCountryLabel[locale]} name="deliveryCountry" />
        <Field label={copy.deliveryCityLabel[locale]} name="deliveryCity" />
        <Field label={copy.requiredDateLabel[locale]} name="requiredDate" />
      </div>

      <label className="flex items-start gap-3 text-sm text-steel">
        <input
          type="checkbox"
          name="installationRequired"
          className="mt-1 size-4 rounded border-input text-pine focus:ring-pine"
        />
        {copy.installationLabel[locale]}
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.nameLabel[locale]} name="name" required autoComplete="name" />
        <Field label={copy.emailLabel[locale]} name="email" type="email" required autoComplete="email" />
        <Field label={copy.companyLabel[locale]} name="company" autoComplete="organization" />
        <Field label={copy.phoneLabel[locale]} name="phone" autoComplete="tel" />
      </div>

      <label className="flex items-start gap-3 text-sm text-steel">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 rounded border-input text-pine focus:ring-pine"
        />
        {t("consentLabel")}
      </label>

      <p className="text-xs text-steel">{copy.safetyNote[locale]}</p>

      {status === "error" && errorMessage && (
        <p role="alert" className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0 translate-y-0.5" aria-hidden />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t("submitting") : copy.submitLabel[locale]}
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
        className="rounded-md border border-input bg-white px-3 py-2 text-sm text-ink placeholder:text-steel-light focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/30"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <select
        name={name}
        defaultValue=""
        className="rounded-md border border-input bg-white px-3 py-2 text-sm text-ink focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/30"
      >
        <option value="" />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
