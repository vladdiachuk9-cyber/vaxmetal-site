"use client";

import { useRef, useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { UploadCloud, X, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";
import { CUSTOM_PROJECT_PRODUCT, MAX_FILES, MAX_TOTAL_UPLOAD_BYTES } from "@/lib/rfq/schema";
import { trackEvent } from "@/lib/analytics/track-event";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

type Status = "idle" | "submitting" | "success" | "error";

const ACCEPT = ".jpg,.jpeg,.png,.webp,.pdf,.dwg,.dxf,.step,.stp,.zip";

function formatMb(bytes: number) {
  return (bytes / (1024 * 1024)).toFixed(1);
}

export function CustomProjectForm({ locale }: { locale: Locale }) {
  const t = useTranslations("estimator");
  const router = useRouter();
  const copy = customFabricationPage.formCopy;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const startedRef = useRef(false);
  const referenceTrackedRef = useRef(false);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  const quantityOptions = locale === "uk" ? copy.quantityOptionsUk : copy.quantityOptions;
  const materialOptions = locale === "uk" ? copy.materialOptionsUk : copy.materialOptions;
  const timelineOptions = locale === "uk" ? copy.timelineOptionsUk : copy.timelineOptions;

  function markStarted() {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("custom_project_start");
    }
  }

  function handleFilesChange(e: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    if (selected.length === 0) return;
    setFiles((prev) => {
      const combined = [...prev, ...selected].slice(0, MAX_FILES);
      trackEvent("custom_project_upload", { file_count: combined.length });
      return combined;
    });
    e.target.value = "";
    markStarted();
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function handleReferenceBlur(e: FocusEvent<HTMLInputElement>) {
    if (!referenceTrackedRef.current && e.target.value.trim().length > 0) {
      referenceTrackedRef.current = true;
      trackEvent("custom_project_reference_added");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setDescriptionError(false);

    const form = event.currentTarget;
    const description = (form.elements.namedItem("message") as HTMLTextAreaElement | null)?.value ?? "";

    // The form is `noValidate` (matches the rest of the site — zod is the
    // real enforcement layer), but description is the *primary* field here,
    // so a cheap client-side check gives a better error than the generic
    // fallback string a server 400 would otherwise produce.
    if (description.trim().length === 0) {
      setDescriptionError(true);
      setStatus("error");
      setErrorMessage(locale === "uk" ? "Будь ласка, опишіть проєкт." : "Please describe your project.");
      return;
    }

    if (totalBytes > MAX_TOTAL_UPLOAD_BYTES) {
      setStatus("error");
      setErrorMessage(
        locale === "uk"
          ? "Загальний розмір файлів перевищує 50МБ."
          : "Combined file size exceeds the 50MB limit."
      );
      return;
    }

    setStatus("submitting");
    trackEvent("custom_project_submit");

    const formData = new FormData(form);
    formData.delete("files");
    for (const file of files) {
      formData.append("files", file);
    }
    formData.set("locale", locale);
    formData.set("product", CUSTOM_PROJECT_PRODUCT);

    if (typeof window !== "undefined") {
      formData.set("landingPage", window.location.pathname);
      formData.set("sourcePage", window.location.pathname);
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

      // Fire only after confirmed backend success, and only navigate to the
      // success route once that confirmation has actually arrived.
      trackEvent("custom_project_success");
      router.push("/project-received");
    } catch {
      setStatus("error");
      setErrorMessage(t("errorBody"));
    }
  }

  return (
    <form
      id="custom-project-form"
      onSubmit={handleSubmit}
      onFocus={markStarted}
      className="grid gap-5 rounded-xl border border-border bg-white p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot — hidden from real users via CSS, not display:none, so bots that skip hidden fields still trip it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="companyWebsite-cf">Company Website</label>
        <input id="companyWebsite-cf" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink">
        {copy.descriptionLabel[locale]}
        <textarea
          name="message"
          rows={5}
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

      <Field
        label={copy.referenceUrlLabel[locale]}
        name="referenceUrl"
        type="url"
        onBlur={handleReferenceBlur}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.approxDimensionsLabel[locale]} name="approxDimensions" />
        <SelectField label={copy.quantityLabel[locale]} name="quantity" options={quantityOptions} />
        <SelectField label={copy.materialLabel[locale]} name="material" options={materialOptions} />
        <SelectField label={copy.timelineLabel[locale]} name="timeline" options={timelineOptions} />
        <Field label={copy.deliveryCountryLabel[locale]} name="deliveryCountry" />
        <Field label={copy.deliveryCityLabel[locale]} name="deliveryCity" />
      </div>

      <label className="flex items-start gap-3 text-sm text-steel">
        <input
          type="checkbox"
          name="ndaRequired"
          className="mt-1 size-4 rounded border-input text-pine focus:ring-pine"
        />
        {copy.ndaLabel[locale]}
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t("nameLabel")} name="name" required autoComplete="name" />
        <Field label={t("emailLabel")} name="email" type="email" required autoComplete="email" />
        <Field label={t("companyLabel")} name="company" autoComplete="organization" />
        <Field label={copy.phoneLabel[locale]} name="phone_whatsapp" autoComplete="tel" />
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

      {status === "error" && errorMessage && (
        <p role="alert" className="flex items-start gap-2 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="size-4 shrink-0 translate-y-0.5" aria-hidden />
          {errorMessage}
        </p>
      )}

      {status === "success" ? (
        <p className="flex items-center gap-2 rounded-md bg-pine-tint px-4 py-3 text-sm font-medium text-pine-dark">
          <CheckCircle2 className="size-4" aria-hidden />
          {locale === "uk" ? "Надсилаємо…" : "Sending…"}
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t("submitting") : copy.submitLabel[locale]}
        </button>
      )}

      <p className="text-xs text-steel">{copy.submitNote[locale]}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  onBlur,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
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
        onBlur={onBlur}
        className="rounded-md border border-input bg-white px-3 py-2 text-sm text-ink placeholder:text-steel-light focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/30"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
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
