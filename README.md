# davidrajm.github.io

Academic CV website (Astro static site) for **Dr. David Raj M**.

**Live site:** [https://davidrajm.github.io](https://davidrajm.github.io)

## GitHub Pages

This user site (`davidrajm.github.io`) is published from the **`master` branch root**. After each build, `npm run publish:root` copies `dist/` into the repo root (`index.html`, `_astro/`, etc.) so visitors see the CV, not this README.

Every push to `master` (except deploy-only file changes) runs `.github/workflows/deploy.yml`, which builds Astro, updates the root site files, and also publishes to the `gh-pages` branch.

Optional: in **Settings → Pages**, you can switch the source to **GitHub Actions** or branch **`gh-pages`** instead of relying on root files on `master`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Content

**Full guide:** [docs/SOP-UPDATE-CONTENT.md](docs/SOP-UPDATE-CONTENT.md) — section-by-section SOP for updating the live site.

Quick reference:

- **Canonical data (edit first):** `DavidResume/data/` — one JSON file per section (see `data/README.md` there)
- **`npm run sync:data`** — copies all section JSON into this repo’s `data/` (runs before `dev` / `build`)
- **`src/data/loadCv.ts`** — combines section files for Astro pages
- **`data/supervision.json`** — Research Supervision carousel ([field reference](data/supervision.schema.md))
- **`public/students/`** — student photos ([README](public/students/README.txt))
- **`public/downloads/David_Raj_M_Academic_CV.pdf`** — downloadable CV

## Deploy

```bash
git push origin master
```

GitHub Actions builds `dist/` and publishes to Pages.
