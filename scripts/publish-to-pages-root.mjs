/**
 * Copy Astro `dist/` output to the repository root so GitHub User Pages
 * (davidrajm.github.io) serves index.html from the default branch.
 */
import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const dist = join(root, "dist");

if (!existsSync(join(dist, "index.html"))) {
  console.error("[publish-to-pages-root] Run `npm run build` first (missing dist/index.html).");
  process.exit(1);
}

const files = [
  ".nojekyll",
  "index.html",
  "about.html",
  "favicon.svg",
  "robots.txt",
  "sitemap.xml",
];

const dirs = ["_astro", "images", "students", "downloads"];

for (const name of files) {
  const src = join(dist, name);
  if (!existsSync(src)) continue;
  cpSync(src, join(root, name));
  console.log(`[publish-to-pages-root] ${name}`);
}

for (const name of dirs) {
  const src = join(dist, name);
  if (!existsSync(src)) continue;
  const dest = join(root, name);
  rmSync(dest, { recursive: true, force: true });
  cpSync(src, dest, { recursive: true });
  console.log(`[publish-to-pages-root] ${name}/`);
}

console.log("[publish-to-pages-root] Done.");
