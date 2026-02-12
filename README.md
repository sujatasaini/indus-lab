# Indus Script Exhibition (Next.js 14)

Minimal responsive web app for a virtual exhibition, ticket booking, and sponsor/donation demo flows.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

This project is configured for static export (`output: export`) so it can run on GitHub Pages.

### Automatic deploy (recommended)

1. Push this repo to GitHub.
2. In GitHub, open **Settings → Pages** and set source to **Deploy from branch**.
3. Select branch **gh-pages** and folder **/(root)**.
4. Merge to `main` to publish `latest` automatically via Actions.

Workflow file: `.github/workflows/deploy-gh-pages.yml`.

### Publish multiple visible versions

Run the workflow manually from **Actions → Deploy to GitHub Pages → Run workflow** and set:

- `version_path=latest` for root site
- `version_path=v1`
- `version_path=v1.1`
- etc.

Published URLs will look like:

- `https://<username>.github.io/<repo>/` (latest)
- `https://<username>.github.io/<repo>/v1/`
- `https://<username>.github.io/<repo>/v1.1/`

The workflow keeps older version folders on `gh-pages` so you can browse multiple versions side-by-side.

### Local versioned build test

```bash
npm install
npm run build:version -- v1
```

This writes a static build under `gh-pages-dist/v1`.
