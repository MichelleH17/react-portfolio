import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"

const SITE = "https://michaela-havlikova.vercel.app"
const { render, content, paths } = await import("../dist-ssr/entry-server.js")
const template = readFileSync("dist/index.html", "utf8")
const esc = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;")

for (const lang of ["cs", "en"]) {
  const { meta } = content[lang]
  const url = SITE + paths[lang]
  const head = [
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="cs" href="${SITE}${paths.cs}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE}${paths.en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE}${paths.cs}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
  ].join("\n    ")

  const html = template
    .replace(/<html lang="[^"]*">/, () => `<html lang="${lang}">`)
    .replace(/<title>.*<\/title>/, () => `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, () => `<meta name="description" content="${esc(meta.description)}" />`)
    .replace("<!--app-head-->", () => head)
    .replace("<!--app-html-->", () => render(lang))

  const out = lang === "cs" ? "dist/index.html" : "dist/en/index.html"
  mkdirSync(out.replace(/\/[^/]+$/, ""), { recursive: true })
  writeFileSync(out, html)
  console.log(`prerendered ${out}`)
}

rmSync("dist-ssr", { recursive: true, force: true })
