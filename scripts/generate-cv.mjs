/**
 * Gera os PDFs do CV (EN e PT) em public/ a partir de scripts/cv-data.mjs.
 *
 * Uso: npm run cv
 * Requer um Chromium/Chrome local. O caminho é resolvido nesta ordem:
 *   1. env PW_CHROMIUM (caminho do executável)
 *   2. playwright instalado (chromium gerenciado)
 *   3. caminhos comuns do Chrome/Chromium no sistema
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { chromium } from "playwright-core";
import { cv, shared } from "./cv-data.mjs";

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
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2937; font-size: 10.5px; line-height: 1.5; }

    .header { background: #021C35; color: #fff; padding: 28px 40px 24px; }
    .header h1 { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
    .rule { width: 44px; height: 3px; background: #C9A227; margin: 10px 0; }
    .role { font-size: 13px; font-weight: 600; color: #60A5FA; }
    .contacts { margin-top: 10px; font-size: 9.5px; color: rgba(255,255,255,.75); }
    .contacts span + span::before { content: "·"; margin: 0 7px; color: rgba(255,255,255,.35); }

    .body { padding: 22px 40px 28px; }
    h2 { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #021C35; margin: 18px 0 8px; padding-bottom: 4px; border-bottom: 2px solid #C9A227; }
    h2:first-child { margin-top: 0; }

    .job { margin-bottom: 12px; page-break-inside: avoid; }
    .job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .job-title { font-size: 11.5px; font-weight: 700; color: #111827; }
    .job-org { font-weight: 600; color: #2563EB; }
    .job-period { font-size: 9.5px; color: #6B7280; white-space: nowrap; font-variant-numeric: tabular-nums; }
    ul { margin: 4px 0 0 14px; }
    li { margin-bottom: 2.5px; }

    .skill-row { display: flex; gap: 10px; margin-bottom: 4px; }
    .skill-group { flex-shrink: 0; width: 92px; font-weight: 700; color: #021C35; }
    .edu li { list-style: none; }
    .edu { margin-left: 0; }

    .footer { margin-top: 18px; font-size: 8.5px; color: #9CA3AF; text-align: center; }
  </style></head><body>
    <div class="header">
      <h1>${esc(shared.name)}</h1>
      <div class="rule"></div>
      <div class="role">${esc(t.role)}</div>
      <div class="contacts">
        <span>${esc(shared.email)}</span>
        <span>${esc(shared.linkedin)}</span>
        <span>${esc(shared.site)}</span>
        <span>${esc(t.location)}</span>
      </div>
    </div>
    <div class="body">
      <h2>${esc(t.summaryTitle)}</h2>
      <p>${esc(t.summary)}</p>

      <h2>${esc(t.experienceTitle)}</h2>
      ${t.experience
        .map(
          (job) => `<div class="job">
            <div class="job-head">
              <div class="job-title">${esc(job.title)} <span class="job-org">— ${esc(job.org)}</span></div>
              <div class="job-period">${esc(job.period)}</div>
            </div>
            <ul>${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </div>`,
        )
        .join("")}

      <h2>${esc(t.skillsTitle)}</h2>
      ${shared.skills
        .map(
          (s) => `<div class="skill-row">
            <div class="skill-group">${esc(s.group)}</div>
            <div>${esc(s.items)}</div>
          </div>`,
        )
        .join("")}

      <h2>${esc(t.educationTitle)}</h2>
      <ul class="edu">${t.education.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>

      <h2>${esc(t.languagesTitle)}</h2>
      <p>${esc(t.languages)}</p>

      <div class="footer">${esc(t.footer)}</div>
    </div>
  </body></html>`;
}

const browser = await chromium.launch({ executablePath: chromiumPath() });
const page = await browser.newPage();

for (const lang of Object.keys(cv)) {
  const t = cv[lang];
  const out = path.join(root, "public", `cv-igor-paes-ferreira-${t.fileSuffix}.pdf`);
  await page.setContent(html(t), { waitUntil: "load" });
  await page.pdf({ path: out, format: "A4", printBackground: true });
  console.log("gerado:", out);
}

await browser.close();
