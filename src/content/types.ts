export type Lang = "cs" | "en"
export type SiteKind = "unsure" | "one" | "multi" | "redesign"

type Link = { label: string; href: string }

export interface Content {
  meta: { title: string; description: string; ogLocale: string }
  nav: {
    label: string
    skip: string
    services: string
    work: string
    about: string
    contact: string
    cta: string
    openMenu: string
    closeMenu: string
    menu: string
    langLabel: string
    themeToDark: string
    themeToLight: string
  }
  hero: {
    title: string
    titleStart: string
    roll: [string, string]
    leads: string[]
    ctaPrimary: string
    ctaSecondary: string
    portraitAlt: string
    pauseMotion: string
    playMotion: string
  }
  services: {
    title: string
    lead: string
    tabsLabel: string
    tabs: { web: { title: string; sub: string }; team: { title: string; sub: string } }
  }
  web: {
    intro: string
    list: string[]
    process: { title: string; lead: string; steps: { title: string; text: string }[]; after: string }
    prices: {
      title: string
      lead: string
      plans: {
        kind: Exclude<SiteKind, "unsure">
        title: string
        text: string
        priceNote: string
        price: string
        items: string[]
        meta: string
        cta: string
      }[]
      includedTitle: string
      included: string[]
      care: { title: string; items: { text: string; price: string }[] }
      notIncluded: { title: string; items: string[]; vat: string }
      unsure: { text: string; cta: string }
    }
  }
  team: {
    intro: string
    list: string[]
    toolsTitle: string
    toolsMore: string
    jobsTitle: string
    jobs: { years: string; company: string; text: string }[]
    cta: string
  }
  projects: {
    title: string
    lead: string
    wip: string
    builtWith: string
    items: {
      role: string
      title: string
      text: string
      tech: string
      image: string
      imageAlt: string
      frameLabel: string
      wip?: boolean
      links: [Link, ...Link[]]
    }[]
  }
  statement: { label: string; words: string[]; accent: number[] }
  about: { title: string; paragraphs: string[] }
  contact: {
    title: string
    leads: string[]
    directLabel: string
    form: {
      topicLegend: string
      topics: { web: { title: string; sub: string }; team: { title: string; sub: string } }
      siteLabel: string
      sites: Record<SiteKind, string>
      name: string
      namePlaceholder: string
      nameError: string
      email: string
      emailPlaceholder: string
      emailEmpty: string
      emailWrong: string
      message: string
      messagePlaceholder: { web: string; team: string }
      fail: string
      failRetry: string
      failLink: string
      sendWeb: string
      sendTeam: string
      sending: string
      sentTitle: string
      sentText: string
      again: string
    }
  }
  footer: { title: string; cta: string; copyright: string; cv: string; cvHref: string; emailLabel: string }
  backToTop: string
  notFound: { title: string; text: string; cta: string }
}

export function nbsp<T>(value: T): T {
  if (typeof value === "string") return value.replaceAll("~", " ") as T
  if (Array.isArray(value)) return value.map(nbsp) as T
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, nbsp(v)])) as T
  }
  return value
}
