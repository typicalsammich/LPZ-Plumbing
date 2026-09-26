# Vercel deployment

This copy preserves the LPZ Plumbing website and uses the standard Next.js production pipeline on Vercel.

- Production build: `next build`
- Development: `next dev`
- Production start: `next start`
- Vercel framework: Next.js
- Vercel output directory: default (do not override)

The original Codex/vinext/Cloudflare helper files are retained for reference, but excluded from Next.js TypeScript checking so they cannot interfere with the Vercel build.
