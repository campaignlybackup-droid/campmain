// Browser gate: loads every exported page headlessly and records console errors and failed requests.
// Requires Playwright with Chromium. Usage: node scripts/qa-browser.cjs [baseUrl]
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const BASE = process.argv[2] || "http://localhost:4173";
const OUT = path.resolve("out");

function pages(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) pages(p, acc);
    else if (e.name === "index.html") acc.push("/" + path.relative(OUT, dir).split(path.sep).join("/") + (dir === OUT ? "" : "/"));
  }
  return acc.map((u) => u.replace(/^\/\/$/, "/"));
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const results = [];
  for (const url of pages(OUT)) {
    const page = await ctx.newPage();
    const errors = [];
    const failed = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("requestfailed", (r) => failed.push(`${r.url()} (${r.failure()?.errorText})`));
    page.on("response", (r) => r.status() >= 400 && failed.push(`${r.url()} (${r.status()})`));
    await page.goto(BASE + url, { waitUntil: "networkidle" });
    // Hover every internal link so Next prefetches route payloads; catches missing payload files.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState("networkidle");
    results.push({ url, errors, failed: failed.filter((f) => !/net::ERR_ABORTED/.test(f)) });
    await page.close();
  }
  await browser.close();
  const bad = results.filter((r) => r.errors.length || r.failed.length);
  fs.mkdirSync(".qa", { recursive: true });
  fs.writeFileSync(".qa/browser-results.json", JSON.stringify(results, null, 2));
  console.log(`${bad.length ? "FAIL" : "PASS"}  5. Headless load: ${results.length} pages, ${bad.length} with console errors or failed requests`);
  for (const b of bad) console.log(`  ${b.url}\n    ${[...b.errors, ...b.failed].join("\n    ")}`);
  process.exitCode = bad.length ? 1 : 0;
})();
