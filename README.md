# davidrajm.github.io

Academic CV website (Astro static site) for **Dr. David Raj M**.

**Live site:** [https://davidrajm.github.io](https://davidrajm.github.io)

## GitHub Pages setup (required once)

If you only see this README on the live site, Pages is publishing the **master** branch instead of the built site. Fix it in the repo:

1. Open **Settings → Pages → Build and deployment**
2. Under **Source**, choose **one** of:
   - **GitHub Actions** (recommended — uses `.github/workflows/deploy.yml`), or
   - **Deploy from a branch** → Branch: **`gh-pages`** → Folder: **`/ (root)`**

3. Save and wait 1–2 minutes, then hard-refresh [davidrajm.github.io](https://davidrajm.github.io).

Every push to `master` runs the workflow: it builds Astro and deploys to both GitHub Actions Pages and the `gh-pages` branch.

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

Edit **`data/cv.json`** (synced from Typst `content.typ` in the resume repo).

Place the latest PDF at **`public/downloads/David_Raj_M_Academic_CV.pdf`**.

## Deploy

```bash
git push origin master
```

GitHub Actions builds `dist/` and publishes to Pages.
