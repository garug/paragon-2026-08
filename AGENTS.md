# Paragon Map — AI / agent notes

## What this is
Small **static** site: one vertical game-style map over a full-bleed forest background. Each stone square opens a **small text overlay** (not external links). Not a large app.

## Stack
- **Vite** (vanilla HTML/CSS/JS) for local preview + production build
- No React/framework UI — keep it light
- Deploy target: **GitHub Pages**

## Key files
- `public/map.png` — map artwork
- `public/background.png` — full-viewport forest background
- `src/tiles.js` — hotspot positions (`left/top/width/height` as %) + overlay `title` / `text`
- `src/main.js` — renders hotspot buttons + overlay open/close (X, click outside, Escape)
- `vite.config.js` — `base: './'` for GitHub Pages; `server.host: '127.0.0.1'`
- `.github/workflows/deploy-pages.yml` — build + deploy `dist` via GitHub Actions

## Conventions
- Prefer editing `src/tiles.js` to change overlay copy or nudge hotspot boxes
- Keep dependencies minimal; avoid adding a SPA framework unless asked
- Do not create git commits or push unless the user asks

## Local
```bash
npm install
npm run dev
```
Open `http://127.0.0.1:5173/` (or the port Vite prints).

## Deploy (GitHub Pages)
1. Push to `main`/`master` (when the user asks)
2. Repo **Settings → Pages → Source: GitHub Actions**
3. Workflow builds with `npm run build` and publishes `dist`
4. Site URL: `https://<user>.github.io/<repo>/` thanks to relative `base`
