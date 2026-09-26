# LPZ Plumbing Solutions

Complete responsive plumbing website with service and area pages, interactive 3D service models, a geographic service map, customer testimonials, articles, and a service-request form.

## Run locally

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev -- --port 3000
```

Open http://localhost:3000. The default development port without the override is 5173.

```sh
npm run build
npm start
```

The start command runs the built Cloudflare Worker locally; use the address printed in the terminal. This project uses React, TypeScript, Vinext/Vite, Tailwind, Three.js and Leaflet. It includes a server API and is not a static GitHub Pages site.

## Put the project on GitHub

1. Extract the ZIP.
2. Create an empty GitHub repository.
3. Open a terminal in the extracted folder containing package.json.
4. Run the following, replacing YOUR-ACCOUNT and YOUR-REPOSITORY:

```sh
git init
git add .
git commit -m "Add LPZ Plumbing Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Upload the extracted source, not the ZIP itself. Include the hidden .openai folder, .gitignore and .env.example. Installed dependencies, generated build files and local credentials are excluded. GitHub stores the source; public hosting is a separate deployment step.

## Configure request delivery

Copy .env.example to .env.local for development. Set RESEND_API_KEY and SERVICE_REQUEST_FROM using a verified Resend sender. Configure these as server secrets in production. Without them, the form explains that delivery is unavailable and provides phone/email alternatives. Preferred dates are requests, not confirmed appointments. No credentials are included in this project.

Set NEXT_PUBLIC_SITE_URL to the final public domain before building. It currently defaults to https://lpzplumbing.com.

## Edit content

- lib/lpz-data.ts: business information, services, areas and customer testimonials.
- lib/journal.ts: articles.
- components/lpz-interactive.tsx: review selection and homepage interactions.
- app/globals.css: site styling.
- public/assets: logo, hero artwork, cursors and map boundaries.

The .openai/hosting.json file is required by the Vite configuration. The export contains neutral local settings without a linked hosting project. Runtime/build support is in build/, scripts/, vendor/ and lib/; retain those folders.

## Checks

```sh
npx tsc --noEmit
npm run build
```

See HANDOFF.md for content provenance, geographic attribution and production configuration notes. Real email delivery requires credentials and has not been verified. Map tiles require internet access; 3D scenes require WebGL.
