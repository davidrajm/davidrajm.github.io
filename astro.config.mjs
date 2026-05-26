import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://davidrajm.github.io",
  base: "/",
  output: "static",
  compressHTML: true,
});
