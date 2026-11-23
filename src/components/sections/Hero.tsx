import { Fragment, type CSSProperties } from "react"
import { useContent } from "@/i18n"
import { RingText } from "../ui/RingText"

const RING_TEXT = "FRONTEND • WEB DESIGN • VUE.JS • NUXT • REACT • NEXT.JS •"

export function Hero() {
  const t = useContent()
  const words = t.hero.titleStart.split(" ")
  const [first, second] = t.hero.roll
  return (
    <section id="top" className="wrap py-16">
      <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start gap-16 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[860px]:gap-8">
        <div className="flex flex-col gap-7">
          <h1 className="hero-title text-h1 font-normal">
            <span className="sr-only">{t.hero.title}</span>
            <span aria-hidden="true">
              {words.map((w, i) => (
                <Fragment key={i}>
                  <span className="w" style={{ "--i": i } as CSSProperties}>
                    {w}
                  </span>{" "}
                </Fragment>
              ))}
              <span className="w rollwrap" style={{ "--i": words.length } as CSSProperties}>
                <span className="roll">
                  <span>{first}</span>
                  <span>{second}</span>
                  <span>{first}</span>
                </span>
              </span>
            </span>
          </h1>
          <div className="enter flex flex-col gap-3 [animation-delay:.25s]">
            {t.hero.leads.map((p) => (
              <p key={p} className="text-lead max-w-[600px] text-body">
                {p}
              </p>
            ))}
          </div>
          <div className="enter flex flex-wrap gap-4 [animation-delay:.35s]">
            <a className="btn" href="#contact">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-2" href="#work">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative aspect-square w-[500px] overflow-hidden max-w-full justify-self-end max-[1000px]:justify-self-center">
          <RingText variant="portrait" text={RING_TEXT} className="hero-ring absolute inset-0 size-full text-lake" />
          <div className="iris absolute inset-[11%] overflow-hidden rounded-full">
            <picture>
              <source srcSet="/michaela-photo.webp" type="image/webp" />
              <img
                className="develop block size-full object-cover"
                src="/michaela-photo.jpg"
                alt={t.hero.portraitAlt}
                width={1000}
                height={1000}
                fetchPriority="high"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
