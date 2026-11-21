import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs"

const SITE = "https://michaela-havlikova.vercel.app"
const { render, content, paths } = await import("../dist-ssr/entry-server.js")
const template = readFileSync("dist/index.html", "utf8")
const esc = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;")
const SAME_AS = ["https://github.com/MichelleH17", "https://www.linkedin.com/in/michaela-havlikova/"]
const JOB = { cs: "Webdesignérka a frontend vývojářka", en: "Web designer and frontend developer" }
const DEV = { cs: "Frontend vývoj pro produktové týmy", en: "Frontend development for product teams" }

const jsonLd = (lang, url) => {
  const { plans } = content[lang].web.prices
  const person = {
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: "Michaela Havlíková",
    jobTitle: JOB[lang],
    url,
    image: `${SITE}/michaela-photo.jpg`,
    sameAs: SAME_AS,
  }
  const service = {
    "@type": "ProfessionalService",
    name: `Michaela Havlíková | ${JOB[lang]}`,
    url,
    image: `${SITE}/michaela-photo.jpg`,
    founder: { "@id": person["@id"] },
    areaServed: [
      { "@type": "City", name: lang === "cs" ? "Praha" : "Prague" },
      { "@type": "Country", name: lang === "cs" ? "Česko" : "Czechia" },
    ],
    priceRange: `${plans[0].priceNote} ${plans[0].price}`,
    knowsLanguage: ["cs", "en"],
    serviceType: [...plans.map((p) => p.title), DEV[lang]],
  }
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": [person, service] })
  return `<script type="application/ld+json">${json.replaceAll("<", "\\u003c").replaceAll("\u00a0", " ")}</script>`
}

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
    `<meta property="og:image" content="${SITE}/og-${lang}.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(meta.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    jsonLd(lang, url),
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
