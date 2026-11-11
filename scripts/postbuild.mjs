// Removes routes that rendered the 404 page because their content does not exist yet
// (e.g. /case-studies/ with no case studies), so Apache serves a real 404 for them.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const removed = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const index = path.join(p, "index.html");
      if (fs.existsSync(index) && fs.readFileSync(index, "utf8").includes("<title>Page Not Found | Campaignly</title>")) {
        fs.rmSync(p, { recursive: true, force: true });
        removed.push(path.relative(OUT, p));
        continue;
      }
      walk(p);
    }
  }
}

walk(OUT);
// Next's internal 404 route folders are not needed on Apache; 404.html is served via ErrorDocument.
for (const d of ["_not-found", "404"]) {
  const p = path.join(OUT, d);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    removed.push(d);
  }
}
console.log(removed.length ? `postbuild: removed ${removed.join(", ")}` : "postbuild: nothing to remove");
