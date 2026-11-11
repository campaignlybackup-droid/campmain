// Static quality gates for the exported site in out/ (see docs/qa-report.md).
// Usage: node scripts/qa.mjs [--client-names path/to/names.txt]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { parse } from "node-html-parser";

const OUT = path.resolve("out");
const ORIGIN = "https://campaignlymedia.com";
const args = process.argv.slice(2);
const namesArg = args.indexOf("--client-names");
const namesFile = namesArg >= 0 ? args[namesArg + 1] : ".qa/client-names.txt";

const results = [];
const fail = (gate, msg) => results.push({ gate, ok: false, msg });
const pass = (gate, msg) => results.push({ gate, ok: true, msg });

// ---------- collect pages ----------
function htmlFiles(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) htmlFiles(p, acc);
    else if (e.name === "index.html") acc.push(p);
  }
  return acc;
}
const files = htmlFiles(OUT);
const urlOf = (f) => "/" + path.relative(OUT, path.dirname(f)).split(path.sep).join("/") + (path.dirname(f) === OUT ? "" : "/");
const pages = files.map((f) => {
  const html = fs.readFileSync(f, "utf8");
  const root = parse(html, { comment: false });
  return { file: f, url: urlOf(f).replace(/^\/\/$/, "/"), html, root };
});
const pageByUrl = new Map(pages.map((p) => [p.url, p]));
const resolveFile = (u) => {
  const clean = u.split("#")[0].split("?")[0];
  if (clean.endsWith("/")) return path.join(OUT, clean, "index.html");
  return path.join(OUT, clean);
};

// ---------- Gate 2: crawl ----------
const linkGraph = new Map();
let broken = [], missingImg = [], noSlash = [];
for (const p of pages) {
  const out = new Set();
  for (const a of p.root.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || /^(mailto:|tel:|https?:)/.test(href)) continue;
    if (!href.startsWith("/")) { broken.push(`${p.url} -> ${href} (relative)`); continue; }
    const clean = href.split("#")[0].split("?")[0];
    if (!clean.endsWith("/") && !/\.[a-z0-9]+$/i.test(clean)) noSlash.push(`${p.url} -> ${href}`);
    if (!fs.existsSync(resolveFile(clean))) broken.push(`${p.url} -> ${href}`);
    out.add(clean);
  }
  linkGraph.set(p.url, out);
  for (const img of p.root.querySelectorAll("img[src]")) {
    const src = img.getAttribute("src");
    if (src.startsWith("/") && !fs.existsSync(path.join(OUT, src))) missingImg.push(`${p.url} -> ${src}`);
    if (img.getAttribute("alt") === undefined) missingImg.push(`${p.url} -> ${src} (no alt attribute)`);
  }
  for (const m of p.root.querySelectorAll('meta[property="og:image"]')) {
    const u = m.getAttribute("content").replace(ORIGIN, "");
    if (!fs.existsSync(path.join(OUT, u))) missingImg.push(`${p.url} -> og:image ${u}`);
  }
}
broken.length ? fail("2. Internal links", `${broken.length} broken: ${broken.slice(0, 10).join("; ")}`) : pass("2. Internal links", `All internal links resolve across ${pages.length} pages`);
noSlash.length ? fail("2. Trailing slashes", noSlash.slice(0, 10).join("; ")) : pass("2. Trailing slashes", "Every internal page link uses a trailing slash");
missingImg.length ? fail("2. Images", missingImg.slice(0, 10).join("; ")) : pass("2. Images", "All images and OG images exist; every <img> has an alt attribute");

// Orphans and click depth from Home
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const u = queue.shift();
  for (const v of linkGraph.get(u) ?? []) if (pageByUrl.has(v) && !depth.has(v)) { depth.set(v, depth.get(u) + 1); queue.push(v); }
}
const inbound = new Map(pages.map((p) => [p.url, 0]));
for (const [from, tos] of linkGraph) for (const t of tos) if (t !== from && inbound.has(t)) inbound.set(t, inbound.get(t) + 1);
const orphans = [...inbound].filter(([u, n]) => u !== "/" && n === 0).map(([u]) => u);
orphans.length ? fail("2. Orphan pages", orphans.join(", ")) : pass("2. Orphan pages", "Every page has at least one inbound internal link");
const deep = pages.filter((p) => !depth.has(p.url) || depth.get(p.url) > 3).map((p) => `${p.url} (${depth.get(p.url) ?? "unreachable"})`);
const maxDepth = Math.max(...[...depth.values()]);
deep.length ? fail("2. Click depth", deep.join(", ")) : pass("2. Click depth", `All pages within ${maxDepth} clicks of Home (limit 3)`);

// Titles, descriptions, canonicals, H1s, breadcrumbs
const seen = { title: new Map(), desc: new Map() };
const meta = [];
for (const p of pages) {
  const title = p.root.querySelector("title")?.text ?? "";
  const desc = p.root.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
  const canon = p.root.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "";
  const h1s = p.root.querySelectorAll("h1").length;
  const robots = p.root.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  meta.push({ url: p.url, title, desc, canon, h1s, robots });
  for (const [k, v] of [["title", title], ["desc", desc]]) seen[k].set(v, [...(seen[k].get(v) ?? []), p.url]);
}
const dupT = [...seen.title].filter(([, u]) => u.length > 1);
const dupD = [...seen.desc].filter(([, u]) => u.length > 1);
dupT.length || dupD.length
  ? fail("2. Duplicate titles/descriptions", [...dupT, ...dupD].map(([v, u]) => `"${v}" on ${u.join(", ")}`).join("; "))
  : pass("2. Duplicate titles/descriptions", "All titles and meta descriptions are unique");
const longT = meta.filter((m) => m.title.length >= 60 || !m.title);
const longD = meta.filter((m) => m.desc.length >= 155 || !m.desc);
longT.length || longD.length
  ? fail("2. Title/description length", [...longT.map((m) => `${m.url} title ${m.title.length}`), ...longD.map((m) => `${m.url} desc ${m.desc.length}`)].join("; "))
  : pass("2. Title/description length", `Titles max ${Math.max(...meta.map((m) => m.title.length))} chars (<60); descriptions max ${Math.max(...meta.map((m) => m.desc.length))} chars (<155)`);
const badCanon = meta.filter((m) => m.canon !== ORIGIN + m.url);
badCanon.length ? fail("2. Canonicals", badCanon.map((m) => `${m.url} -> ${m.canon || "missing"}`).join("; ")) : pass("2. Canonicals", "Every page has a self-referencing absolute canonical on https://campaignlymedia.com");
const badH1 = meta.filter((m) => m.h1s !== 1);
badH1.length ? fail("2. One H1", badH1.map((m) => `${m.url}: ${m.h1s}`).join("; ")) : pass("2. One H1", "Exactly one H1 on every page");
const noCrumb = pages.filter((p) => p.url !== "/" && !p.root.querySelector('nav[aria-label="Breadcrumb"]')).map((p) => p.url);
noCrumb.length ? fail("2. Breadcrumbs", noCrumb.join(", ")) : pass("2. Breadcrumbs", "Every inner page has visible breadcrumbs");

// Sitemap consistency
const sm = fs.readFileSync(path.join(OUT, "sitemap.xml"), "utf8");
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, ""));
const indexable = meta.filter((m) => !/noindex/.test(m.robots)).map((m) => m.url);
const missingSm = indexable.filter((u) => !smUrls.includes(u));
const extraSm = smUrls.filter((u) => !indexable.includes(u));
const noLastmod = (sm.match(/<url>/g) ?? []).length !== (sm.match(/<lastmod>/g) ?? []).length;
missingSm.length || extraSm.length || noLastmod
  ? fail("2. Sitemap", `missing: ${missingSm.join(", ")} extra: ${extraSm.join(", ")} lastmod ok: ${!noLastmod}`)
  : pass("2. Sitemap", `${smUrls.length} indexable URLs, all with lastmod; noindex pages excluded`);
const robotsTxt = fs.readFileSync(path.join(OUT, "robots.txt"), "utf8");
const bots = ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot"];
const missingBots = bots.filter((b) => !new RegExp(`User-Agent: ${b}\\nAllow: /`).test(robotsTxt));
missingBots.length || !robotsTxt.includes(`Sitemap: ${ORIGIN}/sitemap.xml`)
  ? fail("2. robots.txt", `missing bots: ${missingBots.join(", ")}`)
  : pass("2. robots.txt", `Allows ${bots.join(", ")}; references the sitemap`);

// ---------- Gate 3: JSON-LD ----------
const ldDir = path.resolve(".qa/jsonld");
fs.rmSync(ldDir, { recursive: true, force: true });
fs.mkdirSync(ldDir, { recursive: true });
const ldIssues = [];
const typesSeen = new Map();
const nodesOf = (g) => (g["@graph"] ?? [g]);
const typeOf = (n) => [].concat(n["@type"] ?? []);
for (const p of pages) {
  const scripts = p.root.querySelectorAll('script[type="application/ld+json"]');
  if (scripts.length !== 1) ldIssues.push(`${p.url}: ${scripts.length} JSON-LD blocks (expected 1 @graph)`);
  scripts.forEach((s, i) => {
    let g;
    try { g = JSON.parse(s.text); } catch (e) { ldIssues.push(`${p.url}: invalid JSON (${e.message})`); return; }
    if (g["@context"] !== "https://schema.org" || !Array.isArray(g["@graph"])) ldIssues.push(`${p.url}: missing @context/@graph`);
    const nodes = nodesOf(g);
    for (const n of nodes) for (const t of typeOf(n)) typesSeen.set(t, (typesSeen.get(t) ?? 0) + 1);
    const text = p.root.querySelector("main")?.text.replace(/\s+/g, " ") ?? "";
    const has = (t) => nodes.some((n) => typeOf(n).includes(t));
    if (!has("Organization")) ldIssues.push(`${p.url}: no Organization`);
    if (p.url === "/" && !has("WebSite")) ldIssues.push(`${p.url}: no WebSite`);
    if (p.url !== "/" && !has("BreadcrumbList")) ldIssues.push(`${p.url}: no BreadcrumbList`);
    for (const n of nodes) {
      const t = typeOf(n);
      if (t.includes("Organization")) {
        if (n.name !== "Campaignly" || !n.alternateName?.includes("Campaignly Media") || !n.url) ldIssues.push(`${p.url}: Organization name/alternateName/url`);
      }
      if (t.includes("FAQPage")) {
        for (const q of n.mainEntity ?? []) {
          if (q["@type"] !== "Question" || !q.name || !q.acceptedAnswer?.text) ldIssues.push(`${p.url}: malformed Question`);
          if (!text.includes(q.name) || !text.includes(q.acceptedAnswer.text)) ldIssues.push(`${p.url}: FAQ not visible: ${q.name}`);
        }
      }
      if (t.includes("BreadcrumbList")) {
        (n.itemListElement ?? []).forEach((li, idx) => {
          if (li.position !== idx + 1 || !li.name || !li.item?.startsWith(ORIGIN)) ldIssues.push(`${p.url}: breadcrumb item ${idx + 1}`);
        });
      }
      if (t.includes("Article")) {
        for (const k of ["headline", "datePublished", "dateModified", "author", "image", "publisher"]) if (!n[k]) ldIssues.push(`${p.url}: Article missing ${k}`);
        if (!text.includes(n.headline)) ldIssues.push(`${p.url}: Article headline not visible`);
      }
      if (t.includes("Service") && (!n.name || !n.provider)) ldIssues.push(`${p.url}: Service missing name/provider`);
      if (t.includes("Review") || t.includes("AggregateRating") || n.aggregateRating || n.review) ldIssues.push(`${p.url}: Review/AggregateRating present`);
    }
    const name = (p.url === "/" ? "home" : p.url.replace(/^\/|\/$/g, "").replace(/\//g, "--")) + (i ? `-${i}` : "");
    fs.writeFileSync(path.join(ldDir, `${name}.ts`), `import type { Graph } from "schema-dts";\nexport const g = ${JSON.stringify(g, null, 1)} as const satisfies Graph;\n`);
  });
}
// schema.org vocabulary check: every node must type-check against schema-dts (unknown types or properties fail).
fs.writeFileSync(path.join(ldDir, "tsconfig.json"), JSON.stringify({ compilerOptions: { strict: true, noEmit: true, module: "esnext", moduleResolution: "bundler", skipLibCheck: true, typeRoots: [] }, include: ["*.ts"] }));
let tscOut = "";
try { execFileSync("npx", ["tsc", "-p", ldDir], { stdio: "pipe" }); } catch (e) { tscOut = String(e.stdout || e.message); }
if (tscOut) ldIssues.push(`schema-dts type check failed:\n${tscOut.split("\n").slice(0, 20).join("\n")}`);
ldIssues.length
  ? fail("3. JSON-LD", ldIssues.slice(0, 25).join("\n"))
  : pass("3. JSON-LD", `${pages.length} pages, one @graph each; types: ${[...typesSeen].map(([t, n]) => `${t} (${n})`).join(", ")}. All nodes type-check against schema-dts (schema.org vocabulary); Google required properties present; every FAQ and Article headline is visible; no Review or AggregateRating.`);

// ---------- Gate 6: placeholders ----------
const visibleText = (p) => {
  const r = parse(p.html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, ""));
  return r.text + " " + r.querySelectorAll("[alt],[title],[aria-label],[placeholder],meta[content]").map((e) => `${e.getAttribute("alt") ?? ""} ${e.getAttribute("title") ?? ""} ${e.getAttribute("aria-label") ?? ""} ${e.getAttribute("content") ?? ""}`).join(" ");
};
const bad = /\b(lorem|ipsum|YourBrand|your brand here|null|undefined|NaN|TODO|TBD|placeholder|\[object Object\])\b/i;
const ph = [];
for (const p of pages) {
  const t = visibleText(p);
  const m = t.match(bad);
  if (m) ph.push(`${p.url}: "${t.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, " ")}"`);
  for (const s of p.root.querySelectorAll('script[type="application/ld+json"]')) if (/:\s*null|"null"|undefined/.test(s.text)) ph.push(`${p.url}: null in JSON-LD`);
}
for (const f of ["llms.txt", "robots.txt", "sitemap.xml"]) {
  const t = fs.readFileSync(path.join(OUT, f), "utf8");
  if (bad.test(t)) ph.push(`${f}: ${t.match(bad)[0]}`);
}
ph.length ? fail("6. Placeholder text", ph.join("\n")) : pass("6. Placeholder text", `No lorem ipsum, YourBrand, null, undefined, NaN, TODO or placeholder strings in visible text, attributes, meta tags, JSON-LD, llms.txt, robots.txt or sitemap.xml`);

// ---------- Gate 7: client names ----------
if (fs.existsSync(namesFile)) {
  const names = fs.readFileSync(namesFile, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
  const hits = [];
  const all = [];
  (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); e.isDirectory() ? walk(p) : all.push(p); } })(OUT);
  for (const f of all) {
    const rel = path.relative(OUT, f);
    const buf = /\.(png|jpg|jpeg|webp|avif|woff2?|ico)$/i.test(f) ? "" : fs.readFileSync(f, "utf8");
    for (const n of names) if (rel.toLowerCase().includes(n.toLowerCase()) || buf.toLowerCase().includes(n.toLowerCase())) hits.push(`${rel}: ${n}`);
  }
  hits.length ? fail("7. Client names", hits.slice(0, 20).join("; ")) : pass("7. Client names", `${names.length} client names checked against file names and contents of ${all.length} files in out/: none found`);
} else {
  fail("7. Client names", `No client name list at ${namesFile}. Add one name per line (this file is git-ignored) and rerun.`);
}

// ---------- report ----------
fs.mkdirSync(".qa", { recursive: true });
fs.writeFileSync(".qa/static-results.json", JSON.stringify({ pages: pages.length, results, meta }, null, 2));
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.gate}: ${r.msg}`);
process.exitCode = results.every((r) => r.ok) ? 0 : 1;
