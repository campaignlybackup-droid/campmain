// Approximates Hostinger: brotli, .htaccess cache headers, trailing-slash redirects, 404.html.
const http = require("node:http"), fs = require("node:fs"), path = require("node:path"), zlib = require("node:zlib");
const ROOT = process.argv[2], PORT = Number(process.argv[3] || 4180);
const types = { ".html": "text/html; charset=utf-8", ".js": "application/javascript", ".css": "text/css", ".png": "image/png", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".woff2": "font/woff2", ".json": "application/json", ".svg": "image/svg+xml", ".ico": "image/x-icon" };
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(ROOT, u);
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
    if (!u.endsWith("/")) { res.writeHead(301, { Location: u + "/" }); return res.end(); }
    f = path.join(f, "index.html");
  }
  let status = 200;
  if (!fs.existsSync(f)) { f = path.join(ROOT, "404.html"); status = 404; }
  const ext = path.extname(f);
  const headers = { "Content-Type": types[ext] || "application/octet-stream" };
  headers["Cache-Control"] = u.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : /\.(html|txt|xml)$/.test(f) ? "public, max-age=0, must-revalidate" : "public, max-age=604800";
  let body = fs.readFileSync(f);
  if (/text|javascript|json|xml|svg/.test(headers["Content-Type"]) && /br/.test(req.headers["accept-encoding"] || "")) { body = zlib.brotliCompressSync(body); headers["Content-Encoding"] = "br"; }
  res.writeHead(status, headers); res.end(body);
}).listen(PORT);
