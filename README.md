# Michaela Havlíková, portfolio

My portfolio and freelance website: I build websites for small businesses and work as a frontend developer in product teams. Czech is at `/`, English at `/en/`.

Live: [michaela-havlikova.vercel.app](https://michaela-havlikova.vercel.app)

## What's on the page

- **Hero** with a turning text ring around the portrait
- **Services** in two tabs: websites for small businesses (process, pricing, care) and team work (toolbox, work history)
- **Projects** with screenshots and links
- **Statement** and **About**
- **Contact form** sent through EmailJS, plus a direct email link
- **404 page** in the same style

Light and dark mode follow the system setting and can be switched by hand. Motion runs on scroll and stops with `prefers-reduced-motion`.

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS 4
- Zustand for the contact form state
- EmailJS for the form
- Hanken Grotesk, self-hosted via Fontsource
- Hosted on Vercel

## How it's built

Both language versions are prerendered to static HTML at build time, so the content, meta tags and JSON-LD are there before any JavaScript loads. React then hydrates the page.

```
src/
  content/       all texts, cs.ts and en.ts share one type in types.ts
  components/
    layout/      navigation, language and theme controls, footer
    sections/    one file per page section
    ui/          RingText, the turning text ring
  entry-server.tsx   render functions used by the prerender
  i18n.ts        language context and paths
  theme.ts       dark mode toggle
scripts/
  prerender.mjs  writes dist/index.html, dist/en/index.html and dist/404.html
public/          photos, project screenshots, tool logos, CVs, OG images
vercel.json      security headers (CSP and others)
```

To change a text, edit `src/content/cs.ts` and `src/content/en.ts`. TypeScript reports any key that's missing in one of them.

## Getting started

```bash
npm install
npm run dev
```

The contact form needs EmailJS keys in `.env`:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without them the form shows its error state and offers the email link instead.

## Scripts

- `npm run dev`: dev server
- `npm run build`: type check, client build, server build and prerender into `dist/`
- `npm run preview`: serve the production build
- `npm run lint`: ESLint

## Security headers

`vercel.json` sets a Content Security Policy. The inline script in `index.html` that applies dark mode before the first paint is allowed by its sha256 hash. If you edit that script, update the hash in `vercel.json`, otherwise the browser blocks it.
