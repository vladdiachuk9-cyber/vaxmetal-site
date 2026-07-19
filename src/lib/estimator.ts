import { z } from "zod";

/**
 * estimator.ts — Price estimator for the contract-manufacturing platform.
 *
 * SCOPE & DISCLAIMER
 * ------------------
 * This produces an INDICATIVE range only, never a firm quote. Geometry parsing
 * of STEP/DWG/DXF is intentionally OUT OF SCOPE (needs a paid CAD kernel);
 * the user enters material / quantity / dimensions / complexity manually.
 * Always show the disclaimer returned in `Estimate.disclaimer` in the UI.
 *
 * CALIBRATION
 * -----------
 * Every value tagged `CALIBRATE_ME` is a public-market ballpark for Ukraine
 * (mid-2025 → 2026, UAH, VAT-INCLUSIVE). These are NOT the company's real cost.
 * The owner replaces them with real purchase/labour numbers. Change values in
 * RATES_UAH and EUR_UAH ONLY — never edit the logic to fix a price.
 *
 * IMPORTANT: materialPerKg is ROLLED SHEET/BAR STOCK, not scrap-metal prices.
 * Scrap listings (~5–50 грн/кг) are irrelevant here — do not use them.
 */

// ============================================================================
// 1. RATE TABLE — all CALIBRATE_ME, UAH incl. VAT
// ============================================================================

export const RATES_UAH = {
  // --- Laser cutting: per running metre of cut + pierce points ---
  laser: {
    perMeter: { steel: 25, stainless: 40, aluminum: 55 }, // грн/пог.м, mid-range
    piercePoint: 7,   // грн за точку врізання
    minOrder: 2000,   // грн мінімальне замовлення
  },

  // --- CNC machine-hour rates (шпиндель-година) ---
  cncPerHour: {
    turning: 800,     // грн/год токарна ЧПУ
    milling: 950,     // грн/год фрезерна 3-осьова
    milling5axis: 1500, // грн/год 4/5-осьова
  },
  cncSetupFee: 500,   // грн наладка/програмування (розмазується на партію)

  // --- Welding ---
  // Seam welds (TIG/MIG/laser) charged per CM of weld; spot welding per POINT.
  weldSeamPerCm: { tig: 18, mig: 14, laser: 22 }, // грн/см шва, лист 1–6мм
  weldSpotPerPoint: 6,                            // грн за точку контактного
  weldThicknessCoef: { "1-3mm": 1.0, "4-6mm": 1.35, "6-10mm": 1.8 },
  weldMinOrder: 500,                              // грн мінімальне зварювальне

  // --- Powder coating: per m² of surface ---
  powderCoating: { perM2: 220, minOrder: 700 },   // грн/м²

  // --- Bending: per bend ---
  bendPerBend: 15,    // грн за згин

  // --- Material stock (LISTOVYI PROKAT — NOT scrap!) грн/кг ---
  materialPerKg: { steel: 45, stainless: 190, aluminum: 240, brass: 380 },

  // --- Business logic ---
  marginPct: 0.30,        // CALIBRATE_ME цільова націнка поверх собівартості
  rushSurchargePct: 0.30, // терміновість
  vatRate: 0.20,          // ПДВ (UA ціни показуються incl.; EN може toggle)
} as const;

export const EUR_UAH = 45; // CALIBRATE_ME поточний курс для EN-версії

/** Volume discount on LABOUR only (not material), by quantity band. */
export const VOLUME_DISCOUNT: ReadonlyArray<{ min: number; discount: number }> = [
  { min: 200, discount: 0.20 }, // 200+
  { min: 50, discount: 0.12 },  // 50–199
  { min: 10, discount: 0.06 },  // 10–49
  { min: 1, discount: 0.0 },    // 1–9
];

/** Lead-time bands (working days) by rough job weight. Tune freely. */
export const LEADTIME_DAYS = {
  simple: [3, 7],
  standard: [7, 14],
  complex: [14, 25],
} as const;

// ============================================================================
// 2. TYPES
// ============================================================================

export type Locale = "uk" | "en";
export type Currency = "UAH" | "EUR";
export type MaterialSource = "own_material" | "customer_supplied";
export type Material = keyof typeof RATES_UAH.materialPerKg; // steel | stainless | aluminum | brass
export type ThicknessBand = keyof typeof RATES_UAH.weldThicknessCoef;
export type Complexity = keyof typeof LEADTIME_DAYS;

/** One process line the user configures in the UI. Only fill fields you use. */
export type ProcessInput =
  | { kind: "laser"; material: "steel" | "stainless" | "aluminum"; cutLengthM: number; pierceCount: number }
  | { kind: "cnc"; mode: "turning" | "milling" | "milling5axis"; machineHours: number }
  | { kind: "weld_seam"; method: "tig" | "mig" | "laser"; seamLengthCm: number; thickness: ThicknessBand }
  | { kind: "weld_spot"; spotCount: number }
  | { kind: "powder"; areaM2: number }
  | { kind: "bend"; bendCount: number };

export interface EstimateRequest {
  locale: Locale;
  materialSource: MaterialSource;
  /** Only used when materialSource === "own_material". */
  material?: Material;
  /** Part weight in kg (per unit). Only used with own_material. */
  weightKg?: number;
  quantity: number;
  processes: ProcessInput[];
  rush?: boolean;
  complexity?: Complexity;
}

// ============================================================================
// 2b. VALIDATION — mirrors the types above 1:1, used by the /api/estimate route
// ============================================================================

const processInputSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("laser"),
    material: z.enum(["steel", "stainless", "aluminum"]),
    cutLengthM: z.coerce.number().min(0).max(1000),
    pierceCount: z.coerce.number().int().min(0).max(10000),
  }),
  z.object({
    kind: z.literal("cnc"),
    mode: z.enum(["turning", "milling", "milling5axis"]),
    machineHours: z.coerce.number().min(0).max(1000),
  }),
  z.object({
    kind: z.literal("weld_seam"),
    method: z.enum(["tig", "mig", "laser"]),
    seamLengthCm: z.coerce.number().min(0).max(100000),
    thickness: z.enum(["1-3mm", "4-6mm", "6-10mm"]),
  }),
  z.object({
    kind: z.literal("weld_spot"),
    spotCount: z.coerce.number().int().min(0).max(100000),
  }),
  z.object({
    kind: z.literal("powder"),
    areaM2: z.coerce.number().min(0).max(10000),
  }),
  z.object({
    kind: z.literal("bend"),
    bendCount: z.coerce.number().int().min(0).max(10000),
  }),
]);

export const estimateRequestSchema = z.object({
  locale: z.enum(["uk", "en"]),
  materialSource: z.enum(["own_material", "customer_supplied"]),
  material: z.enum(["steel", "stainless", "aluminum", "brass"]).optional(),
  weightKg: z.coerce.number().min(0).max(100000).optional(),
  quantity: z.coerce.number().int().positive().max(1_000_000),
  processes: z.array(processInputSchema).min(1, "Select at least one process."),
  rush: z.boolean().optional(),
  complexity: z.enum(["simple", "standard", "complex"]).optional(),
});

export interface Estimate {
  currency: Currency;
  /** Low / point / high of the indicative range, per the FULL order (all units). */
  low: number;
  mid: number;
  high: number;
  perUnit: { low: number; mid: number; high: number };
  leadTimeDays: readonly [number, number];
  breakdown: {
    materialCost: number;
    labourCost: number;
    setupCost: number;
    volumeDiscountApplied: number;
    rushSurcharge: number;
    margin: number;
  };
  disclaimer: string;
}

// ============================================================================
// 3. HELPERS
// ============================================================================

function volumeDiscount(qty: number): number {
  return VOLUME_DISCOUNT.find((b) => qty >= b.min)?.discount ?? 0;
}

/** Per-UNIT process cost, split into labour (discountable) and setup (once/order). */
function processCostPerUnit(p: ProcessInput): { labour: number; setupPerOrder: number } {
  const R = RATES_UAH;
  switch (p.kind) {
    case "laser":
      return {
        labour: R.laser.perMeter[p.material] * p.cutLengthM + R.laser.piercePoint * p.pierceCount,
        setupPerOrder: 0,
      };
    case "cnc":
      return { labour: R.cncPerHour[p.mode] * p.machineHours, setupPerOrder: R.cncSetupFee };
    case "weld_seam":
      return {
        labour: R.weldSeamPerCm[p.method] * p.seamLengthCm * R.weldThicknessCoef[p.thickness],
        setupPerOrder: 0,
      };
    case "weld_spot":
      return { labour: R.weldSpotPerPoint * p.spotCount, setupPerOrder: 0 };
    case "powder":
      return { labour: R.powderCoating.perM2 * p.areaM2, setupPerOrder: 0 };
    case "bend":
      return { labour: R.bendPerBend * p.bendCount, setupPerOrder: 0 };
  }
}

/** Per-order minimums that must be enforced on the whole order's labour. */
function orderMinimum(processes: ProcessInput[]): number {
  const R = RATES_UAH;
  let min = 0;
  for (const p of processes) {
    if (p.kind === "laser") min = Math.max(min, R.laser.minOrder);
    if (p.kind === "weld_seam" || p.kind === "weld_spot") min = Math.max(min, R.weldMinOrder);
    if (p.kind === "powder") min = Math.max(min, R.powderCoating.minOrder);
  }
  return min;
}

function toEUR(uah: number): number {
  // round to a sensible EUR increment (nearest €5 above €50, else nearest €1)
  const eur = uah / EUR_UAH;
  return eur >= 50 ? Math.round(eur / 5) * 5 : Math.round(eur);
}

function roundUAH(uah: number): number {
  return Math.round(uah / 10) * 10; // nearest 10 грн
}

// ============================================================================
// 4. MAIN
// ============================================================================

export function estimate(req: EstimateRequest): Estimate {
  const R = RATES_UAH;
  const qty = Math.max(1, Math.floor(req.quantity));

  // --- Material (per unit, own material only) ---
  const materialPerUnit =
    req.materialSource === "own_material" && req.material && req.weightKg
      ? R.materialPerKg[req.material] * req.weightKg
      : 0;

  // --- Labour + setup ---
  let labourPerUnit = 0;
  let setupPerOrder = 0;
  for (const p of req.processes) {
    const c = processCostPerUnit(p);
    labourPerUnit += c.labour;
    setupPerOrder += c.setupPerOrder;
  }

  // Enforce per-order labour minimum (applied to the whole order's labour).
  const labourOrderRaw = labourPerUnit * qty;
  const labourOrder = Math.max(labourOrderRaw, orderMinimum(req.processes));

  // --- Volume discount (labour only) ---
  const disc = volumeDiscount(qty);
  const labourDiscounted = labourOrder * (1 - disc);
  const volumeDiscountApplied = labourOrder - labourDiscounted;

  // --- Assemble cost ---
  const materialOrder = materialPerUnit * qty;
  let cost = materialOrder + labourDiscounted + setupPerOrder;

  // --- Rush surcharge ---
  const rushSurcharge = req.rush ? cost * R.rushSurchargePct : 0;
  cost += rushSurcharge;

  // --- Margin ---
  const margin = cost * R.marginPct;
  const priceMidUAH = cost + margin;

  // --- Indicative band (±) ---
  const lowUAH = priceMidUAH * 0.85;
  const highUAH = priceMidUAH * 1.2;

  // --- Currency ---
  const isEN = req.locale === "en";
  const currency: Currency = isEN ? "EUR" : "UAH";
  const conv = isEN ? toEUR : roundUAH;

  const low = conv(lowUAH);
  const mid = conv(priceMidUAH);
  const high = conv(highUAH);

  const leadTimeDays = LEADTIME_DAYS[req.complexity ?? "standard"];

  const disclaimer = isEN
    ? "Preliminary estimate. Final price confirmed by an engineer within 24h."
    : "Попередня оцінка. Точну ціну інженер підтвердить протягом 24 год.";

  return {
    currency,
    low,
    mid,
    high,
    perUnit: { low: conv(lowUAH / qty), mid: conv(priceMidUAH / qty), high: conv(highUAH / qty) },
    leadTimeDays,
    breakdown: {
      materialCost: conv(materialOrder),
      labourCost: conv(labourDiscounted),
      setupCost: conv(setupPerOrder),
      volumeDiscountApplied: conv(volumeDiscountApplied),
      rushSurcharge: conv(rushSurcharge),
      margin: conv(margin),
    },
    disclaimer,
  };
}
