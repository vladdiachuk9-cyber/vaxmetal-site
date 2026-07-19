import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { siteConfig } from "@/lib/site-config";

const INK = rgb(0.06, 0.06, 0.07);
const STEEL = rgb(0.33, 0.36, 0.4);
const BLUE = rgb(0.16, 0.36, 0.85);
const PAGE_WIDTH = 595.28; // A4 in points
const PAGE_HEIGHT = 841.89;
const MARGIN = 56;

/**
 * English-only by design: pdf-lib's standard 14 fonts are WinAnsi-encoded
 * and cannot render Cyrillic glyphs without embedding a custom TTF via
 * fontkit, which isn't wired up yet. Rather than ship silently garbled
 * Ukrainian text, this generates one EN capability statement, offered on
 * both locale pages and labeled "PDF, EN" in the UI.
 */
export async function generateCapabilityStatementPdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);

  const page1 = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  function heading(text: string, size = 20) {
    page1.drawText(text, { x: MARGIN, y, size, font: bold, color: INK });
    y -= size + 10;
  }

  function subheading(text: string, size = 12) {
    page1.drawText(text, { x: MARGIN, y, size, font: bold, color: BLUE });
    y -= size + 8;
  }

  function paragraph(text: string, size = 10, color = STEEL) {
    const maxWidth = PAGE_WIDTH - MARGIN * 2;
    const words = text.split(" ");
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (regular.widthOfTextAtSize(test, size) > maxWidth) {
        page1.drawText(line, { x: MARGIN, y, size, font: regular, color });
        y -= size + 4;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      page1.drawText(line, { x: MARGIN, y, size, font: regular, color });
      y -= size + 4;
    }
    y -= 6;
  }

  function bullet(text: string, size = 10) {
    page1.drawText("-", { x: MARGIN, y, size, font: bold, color: BLUE });
    page1.drawText(text, { x: MARGIN + 12, y, size, font: regular, color: STEEL });
    y -= size + 6;
  }

  heading(siteConfig.name, 26);
  page1.drawText(siteConfig.tagline, { x: MARGIN, y, size: 12, font: regular, color: STEEL });
  y -= 30;
  page1.drawLine({
    start: { x: MARGIN, y },
    end: { x: PAGE_WIDTH - MARGIN, y },
    thickness: 1,
    color: rgb(0.85, 0.85, 0.87),
  });
  y -= 24;

  subheading("Capability Statement");
  paragraph(
    "Full-cycle contract manufacturing based in Ukraine, serving OEMs and integrators across the EU. Laser cutting, CNC turning and milling, welding, powder coating and assembly under one roof."
  );

  subheading("Equipment on the floor");
  for (const item of siteConfig.capacity.processes) {
    bullet(item);
  }

  y -= 10;
  subheading("Why manufacturers overflow to us");
  bullet("One shop: cutting, machining, welding, finishing and assembly in-house");
  bullet("In-house engineering bureau — ODM and white-label capable");
  bullet("Priced 25-35% below German quotes, 15-25% below Polish");
  bullet("Duty-free EU delivery under DCFTA, 3-7 days DAP");
  bullet("Series of 100-5,000 units — our target range, not an exception");

  y -= 10;
  subheading("Product tracks");
  bullet("Trailer & truck body parts (drawbars, brackets, tool boxes, ramps)");
  bullet("Telescopic masts (surveillance, telecom, event technology, security integrators)");
  bullet("Robotics & UGV chassis (welded frames and enclosures)");
  bullet("Fire & emergency equipment (exterior cabinets, vehicle outfitting)");

  const page2 = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  y = PAGE_HEIGHT - MARGIN;
  const page = page2;

  function heading2(text: string, size = 16) {
    page.drawText(text, { x: MARGIN, y, size, font: bold, color: INK });
    y -= size + 14;
  }

  heading2("Materials & Certification Status");
  page.drawText(
    "Steel, stainless steel and aluminum across our process chain.",
    { x: MARGIN, y, size: 10, font: regular, color: STEEL }
  );
  y -= 26;
  page.drawText(
    "ISO 9001 and ISO 3834 certification in progress. TODO_VERIFY: update with",
    { x: MARGIN, y, size: 10, font: regular, color: STEEL }
  );
  y -= 14;
  page.drawText(
    "certificate numbers and completion date once issued.",
    { x: MARGIN, y, size: 10, font: regular, color: STEEL }
  );
  y -= 40;

  page.drawText("Contact", { x: MARGIN, y, size: 14, font: bold, color: INK });
  y -= 20;
  page.drawText(siteConfig.contact.salesEmail, { x: MARGIN, y, size: 10, font: regular, color: BLUE });
  y -= 14;
  page.drawText(siteConfig.url, { x: MARGIN, y, size: 10, font: regular, color: BLUE });

  page.drawText("TODO_VERIFY: contact details are placeholders pending owner sign-off.", {
    x: MARGIN,
    y: MARGIN,
    size: 8,
    font: regular,
    color: STEEL,
  });

  return doc.save();
}
