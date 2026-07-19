/**
 * Gera os PDFs da Cover Letter (EN e PT) em public/ a partir de
 * scripts/cover-letter-data.mjs, no mesmo branding do CV.
 *
 * Uso: npm run letter
 * Requer um Chromium/Chrome local (mesma resolução de caminho do generate-cv).
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { chromium } from "playwright-core";
import { letter } from "./cover-letter-data.mjs";
import { shared } from "./cv-data.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function chromiumPath() {
  if (process.env.PW_CHROMIUM) return process.env.PW_CHROMIUM;
  const candidates = [
    "/opt/pw-browsers/chromium",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ];
  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      "Chromium não encontrado. Defina PW_CHROMIUM=/caminho/para/chrome e rode de novo.",
    );
  }
  return found;
}

const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function html(t) {
  const company = t.company.trim() || t.genericCompany;
  const roleLine = t.role.trim()
    ? `<div class="role-line">${esc(t.role)}${t.company.trim() ? ` · ${esc(t.company)}` : ""}</div>`
    : "";
  const fill = (p) => esc(p).replaceAll("{company}", `<b>${esc(company)}</b>`);

  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2937; font-size: 11px; line-height: 1.6; }

    .header { background: #021C35; color: #fff; padding: 24px 44px 20px; }
    .header h1 { font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .rule { width: 44px; height: 3px; background: #C9A227; margin: 9px 0; }
    .role { font-size: 12px; font-weight: 600; color: #60A5FA; }
    .contacts { margin-top: 9px; font-size: 9.5px; color: rgba(255,255,255,.75); }
    .contacts span + span::before { content: "·"; margin: 0 7px; color: rgba(255,255,255,.35); }

    .body { padding: 30px 44px; }
    .role-line { font-size: 11.5px; font-weight: 700; color: #021C35; margin-bottom: 16px; }
    .salutation { font-weight: 600; margin-bottom: 14px; }
    p { margin-bottom: 12px; text-align: justify; }
    p b { color: #021C35; }
    .closing { margin-top: 20px; }
    .signature { margin-top: 26px; font-weight: 700; color: #021C35; font-size: 12.5px; }
    .sig-contacts { font-size: 9.5px; color: #6B7280; margin-top: 2px; }
  </style></head><body>
    <div class="header">
      <h1>${esc(shared.name)}</h1>
      <div class="rule"></div>
      <div class="role">AI Product Manager · Technical Product Manager</div>
      <div class="contacts">
        <span>${esc(shared.email)}</span>
        <span>${esc(shared.linkedin)}</span>
        <span>${esc(shared.site)}</span>
      </div>
    </div>
    <div class="body">
      ${roleLine}
      <div class="salutation">${esc(t.salutation)}</div>
      ${t.paragraphs.map((p) => `<p>${fill(p)}</p>`).join("")}
      <div class="closing">${esc(t.closing)}</div>
      <div class="signature">${esc(shared.name)}</div>
      <div class="sig-contacts">${esc(shared.email)} · ${esc(shared.linkedin)} · ${esc(shared.site)}</div>
    </div>
  </body></html>`;
}

const names = { en: "cover-letter-igor-ferreira-en.pdf", pt: "carta-apresentacao-igor-ferreira-pt.pdf" };

const browser = await chromium.launch({ executablePath: chromiumPath() });
const page = await browser.newPage();

for (const lang of Object.keys(letter)) {
  const t = letter[lang];
  const out = path.join(root, "public", names[lang]);
  await page.setContent(html(t), { waitUntil: "load" });
  await page.pdf({ path: out, format: "A4", printBackground: true });
  console.log("gerado:", out);
}

await browser.close();
