"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Calculator } from "lucide-react";
import type {
  Estimate,
  Material,
  MaterialSource,
  ProcessInput,
  Complexity,
} from "@/lib/estimator";

type Status = "idle" | "loading" | "done" | "error";

// w-full + min-w-0 keep the field inside its grid cell — without min-w-0 a
// <select>/<input> refuses to shrink past its intrinsic content width and
// pushes the whole row wider than the panel.
const inputClass =
  "w-full min-w-0 rounded-md border border-input bg-white px-2 py-1.5 text-sm text-ink";
const labelClass = "grid min-w-0 gap-1 text-xs font-medium text-ink";

/** Every field always shows its label — a placeholder alone disappears the
 * moment the visitor types a value, leaving a bare number with no unit or
 * meaning attached to it. */
function NumField({
  label,
  value,
  onChange,
  step,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  step?: string;
}) {
  return (
    <label className={labelClass}>
      {label}
      <input
        type="number"
        min={0}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className={labelClass}>
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
        {children}
      </select>
    </label>
  );
}

export function QuoteEstimatorWidget() {
  const t = useTranslations("estimator");
  const tc = useTranslations("estimator.calc");
  const locale = useLocale() as "en" | "uk";

  const [materialSource, setMaterialSource] = useState<MaterialSource>("own_material");
  const [material, setMaterial] = useState<Material>("steel");
  const [weightKg, setWeightKg] = useState("1");
  const [quantity, setQuantity] = useState("100");
  const [rush, setRush] = useState(false);
  const [complexity, setComplexity] = useState<Complexity>("standard");

  const [laserOn, setLaserOn] = useState(true);
  const [laserMaterial, setLaserMaterial] = useState<"steel" | "stainless" | "aluminum">("steel");
  const [cutLengthM, setCutLengthM] = useState("1");
  const [pierceCount, setPierceCount] = useState("4");

  const [cncOn, setCncOn] = useState(false);
  const [cncMode, setCncMode] = useState<"turning" | "milling" | "milling5axis">("milling");
  const [machineHours, setMachineHours] = useState("0.5");

  const [weldSeamOn, setWeldSeamOn] = useState(false);
  const [weldMethod, setWeldMethod] = useState<"tig" | "mig" | "laser">("mig");
  const [seamLengthCm, setSeamLengthCm] = useState("20");
  const [thickness, setThickness] = useState<"1-3mm" | "4-6mm" | "6-10mm">("1-3mm");

  const [weldSpotOn, setWeldSpotOn] = useState(false);
  const [spotCount, setSpotCount] = useState("10");

  const [powderOn, setPowderOn] = useState(false);
  const [areaM2, setAreaM2] = useState("0.5");

  const [bendOn, setBendOn] = useState(false);
  const [bendCount, setBendCount] = useState("2");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<Estimate | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const processes: ProcessInput[] = [];
    if (laserOn) {
      processes.push({
        kind: "laser",
        material: laserMaterial,
        cutLengthM: Number(cutLengthM) || 0,
        pierceCount: Number(pierceCount) || 0,
      });
    }
    if (cncOn) {
      processes.push({ kind: "cnc", mode: cncMode, machineHours: Number(machineHours) || 0 });
    }
    if (weldSeamOn) {
      processes.push({
        kind: "weld_seam",
        method: weldMethod,
        seamLengthCm: Number(seamLengthCm) || 0,
        thickness,
      });
    }
    if (weldSpotOn) {
      processes.push({ kind: "weld_spot", spotCount: Number(spotCount) || 0 });
    }
    if (powderOn) {
      processes.push({ kind: "powder", areaM2: Number(areaM2) || 0 });
    }
    if (bendOn) {
      processes.push({ kind: "bend", bendCount: Number(bendCount) || 0 });
    }

    if (processes.length === 0) {
      setStatus("error");
      setErrorMessage(tc("selectProcessError"));
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          materialSource,
          material: materialSource === "own_material" ? material : undefined,
          weightKg: materialSource === "own_material" ? Number(weightKg) || 0 : undefined,
          quantity: Number(quantity) || 1,
          processes,
          rush,
          complexity,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("errorBody"));
        return;
      }
      setResult(data.result);
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMessage(t("errorBody"));
    }
  }

  return (
    <div className="rounded-xl border border-border bg-fog p-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-ink">
        <Calculator className="size-4 text-pine" aria-hidden />
        {t("quickEstimateTitle")}
      </div>
      <p className="mt-1 text-sm text-steel">{t("quickEstimateSubtitle")}</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <SelectField
            label={tc("materialSourceLabel")}
            value={materialSource}
            onChange={(v) => setMaterialSource(v as MaterialSource)}
          >
            <option value="own_material">{tc("ownMaterial")}</option>
            <option value="customer_supplied">{tc("customerSupplied")}</option>
          </SelectField>

          <NumField label={tc("quantityLabel")} value={quantity} onChange={setQuantity} />

          {materialSource === "own_material" && (
            <>
              <SelectField
                label={tc("materialLabel")}
                value={material}
                onChange={(v) => setMaterial(v as Material)}
              >
                <option value="steel">{tc("materialSteel")}</option>
                <option value="stainless">{tc("materialStainless")}</option>
                <option value="aluminum">{tc("materialAluminum")}</option>
                <option value="brass">{tc("materialBrass")}</option>
              </SelectField>
              <NumField
                label={tc("weightLabel")}
                value={weightKg}
                onChange={setWeightKg}
                step="0.1"
              />
            </>
          )}
        </div>

        <fieldset className="rounded-md border border-border bg-white p-3">
          <legend className="px-1 text-xs font-semibold text-ink">{tc("processesLabel")}</legend>
          <p className="text-xs text-steel">{tc("processesHint")}</p>

          <div className="mt-3 space-y-3">
            {/* Laser */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input type="checkbox" checked={laserOn} onChange={(e) => setLaserOn(e.target.checked)} />
                {tc("laser")}
              </label>
              {laserOn && (
                <div className="mt-2 grid max-w-xs grid-cols-1 gap-2 pl-6">
                  <SelectField
                    label={tc("laserMaterialLabel")}
                    value={laserMaterial}
                    onChange={(v) => setLaserMaterial(v as typeof laserMaterial)}
                  >
                    <option value="steel">{tc("materialSteel")}</option>
                    <option value="stainless">{tc("materialStainless")}</option>
                    <option value="aluminum">{tc("materialAluminum")}</option>
                  </SelectField>
                  <NumField
                    label={tc("cutLengthLabel")}
                    value={cutLengthM}
                    onChange={setCutLengthM}
                    step="0.1"
                  />
                  <NumField
                    label={tc("pierceCountLabel")}
                    value={pierceCount}
                    onChange={setPierceCount}
                  />
                </div>
              )}
            </div>

            {/* CNC */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input type="checkbox" checked={cncOn} onChange={(e) => setCncOn(e.target.checked)} />
                {tc("cnc")}
              </label>
              {cncOn && (
                <div className="mt-2 grid max-w-xs grid-cols-1 gap-2 pl-6">
                  <SelectField
                    label={tc("modeLabel")}
                    value={cncMode}
                    onChange={(v) => setCncMode(v as typeof cncMode)}
                  >
                    <option value="turning">{tc("modeTurning")}</option>
                    <option value="milling">{tc("modeMilling")}</option>
                    <option value="milling5axis">{tc("modeMilling5axis")}</option>
                  </SelectField>
                  <NumField
                    label={tc("machineHoursLabel")}
                    value={machineHours}
                    onChange={setMachineHours}
                    step="0.1"
                  />
                </div>
              )}
            </div>

            {/* Weld seam */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={weldSeamOn}
                  onChange={(e) => setWeldSeamOn(e.target.checked)}
                />
                {tc("weldSeam")}
              </label>
              {weldSeamOn && (
                <div className="mt-2 grid max-w-xs grid-cols-1 gap-2 pl-6">
                  <SelectField
                    label={tc("methodLabel")}
                    value={weldMethod}
                    onChange={(v) => setWeldMethod(v as typeof weldMethod)}
                  >
                    <option value="tig">{tc("methodTig")}</option>
                    <option value="mig">{tc("methodMig")}</option>
                    <option value="laser">{tc("methodLaser")}</option>
                  </SelectField>
                  <NumField
                    label={tc("seamLengthLabel")}
                    value={seamLengthCm}
                    onChange={setSeamLengthCm}
                  />
                  <SelectField
                    label={tc("thicknessLabel")}
                    value={thickness}
                    onChange={(v) => setThickness(v as typeof thickness)}
                  >
                    <option value="1-3mm">1–3mm</option>
                    <option value="4-6mm">4–6mm</option>
                    <option value="6-10mm">6–10mm</option>
                  </SelectField>
                </div>
              )}
            </div>

            {/* Weld spot */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input
                  type="checkbox"
                  checked={weldSpotOn}
                  onChange={(e) => setWeldSpotOn(e.target.checked)}
                />
                {tc("weldSpot")}
              </label>
              {weldSpotOn && (
                <div className="mt-2 max-w-xs pl-6">
                  <NumField label={tc("spotCountLabel")} value={spotCount} onChange={setSpotCount} />
                </div>
              )}
            </div>

            {/* Powder coating */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input type="checkbox" checked={powderOn} onChange={(e) => setPowderOn(e.target.checked)} />
                {tc("powder")}
              </label>
              {powderOn && (
                <div className="mt-2 max-w-xs pl-6">
                  <NumField
                    label={tc("areaLabel")}
                    value={areaM2}
                    onChange={setAreaM2}
                    step="0.1"
                  />
                </div>
              )}
            </div>

            {/* Bending */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-ink">
                <input type="checkbox" checked={bendOn} onChange={(e) => setBendOn(e.target.checked)} />
                {tc("bend")}
              </label>
              {bendOn && (
                <div className="mt-2 max-w-xs pl-6">
                  <NumField label={tc("bendCountLabel")} value={bendCount} onChange={setBendCount} />
                </div>
              )}
            </div>
          </div>
        </fieldset>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-2 text-sm font-medium text-ink">
            <input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} />
            {tc("rushLabel")}
          </label>
          <SelectField
            label={tc("complexityLabel")}
            value={complexity}
            onChange={(v) => setComplexity(v as Complexity)}
          >
            <option value="simple">{tc("complexitySimple")}</option>
            <option value="standard">{tc("complexityStandard")}</option>
            <option value="complex">{tc("complexityComplex")}</option>
          </SelectField>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md border border-ink bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-60"
        >
          {status === "loading" ? tc("calculating") : tc("calculate")}
        </button>
      </form>

      {status === "done" && result && (
        <div role="status" className="mt-4 rounded-md bg-pine-tint p-4">
          <p className="font-heading text-lg font-semibold text-pine-dark">
            {tc("totalRange")}: {result.low}–{result.high} {result.currency}
          </p>
          <p className="mt-1 text-sm text-pine-dark">
            {tc("perUnitRange")}: {result.perUnit.low}–{result.perUnit.high} {result.currency}
          </p>
          <p className="mt-1 text-sm text-pine-dark">
            {tc("leadTime")}: {result.leadTimeDays[0]}–{result.leadTimeDays[1]} {tc("days")}
          </p>

          <details className="mt-3">
            <summary className="cursor-pointer text-xs font-semibold text-pine-dark">
              {tc("breakdownTitle")}
            </summary>
            <dl className="mt-2 space-y-1 text-xs text-pine-dark">
              <div className="flex justify-between">
                <dt>{tc("materialCostLabel")}</dt>
                <dd>{result.breakdown.materialCost} {result.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{tc("labourCostLabel")}</dt>
                <dd>{result.breakdown.labourCost} {result.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{tc("setupCostLabel")}</dt>
                <dd>{result.breakdown.setupCost} {result.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{tc("volumeDiscountLabel")}</dt>
                <dd>-{result.breakdown.volumeDiscountApplied} {result.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{tc("rushSurchargeLabel")}</dt>
                <dd>{result.breakdown.rushSurcharge} {result.currency}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{tc("marginLabel")}</dt>
                <dd>{result.breakdown.margin} {result.currency}</dd>
              </div>
            </dl>
          </details>

          <p className="mt-3 text-xs text-pine-dark/80">{result.disclaimer}</p>
        </div>
      )}

      {status === "error" && errorMessage && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
