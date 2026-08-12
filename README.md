# Paragon Map

Página estática com um mapa clicável: cada quadrado abre um overlay com texto curto.

## Rodar local

```bash
npm install
npm run dev
```

Abra `http://127.0.0.1:5173/` (ou a URL que o Vite mostrar).

## Editar textos do overlay

Altere `title` e `text` (e, se precisar, as caixas) em [`src/tiles.js`](src/tiles.js). Posições são porcentagens sobre a imagem `public/map.png`.

## Build

```bash
npm run build
npm run preview
```

Saída em `dist/`.

## Deploy — GitHub Pages

O projeto usa `base: './'` no Vite para assets relativos (funciona em site de projeto `username.github.io/repo/`).

1. No GitHub: **Settings → Pages → Source → GitHub Actions**
2. Faça push em `main` ou `master`
3. O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) roda `npm ci` + `npm run build` e publica `dist`

URL esperada: `https://<usuario>.github.io/<repositorio>/`
