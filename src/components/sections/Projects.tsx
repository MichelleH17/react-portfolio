import { useContent } from "@/i18n"

const images = ["/projects/project3.webp", "/projects/project2.png", "/projects/project1.webp"]

export function Projects() {
  const t = useContent().projects
  return (
    <section id="work" className="py-26 max-[860px]:py-16">
      <div className="wrap flex flex-col gap-18">
        <div className="flex flex-col gap-4">
          <h2 className="rise text-h2 font-normal">{t.title}</h2>
          <p className="rise text-lead max-w-[600px] text-body">{t.lead}</p>
        </div>
        {t.items.map((p, i) => {
          const wip = i === 0
          return (
            <article key={p.title} className="case rise grid grid-cols-2 items-center gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-8">
              <a
                href={p.links[0].href}
                aria-label={p.frameLabel}
                className={`frame relative block aspect-[4/3] overflow-hidden rounded-card border border-field ${wip ? "wip bg-band" : ""} ${i === 1 ? "min-[861px]:order-2" : ""}`}
              >
                <img src={images[i]} alt={p.imageAlt} width={1282} height={1476} loading="lazy" className="size-full object-cover object-top" />
                {wip && <span className="absolute bottom-4 left-4 rounded-btn bg-ink px-3.5 py-2 text-tag font-semibold leading-none text-bg">{t.wip}</span>}
              </a>
              <div className="flex flex-col gap-[18px]">
                <p className="text-role font-medium text-accent">{p.role}</p>
                <h3 className="text-project font-medium">{p.title}</h3>
                <p className="text-body">{p.text}</p>
                <p className="text-meta text-muted">
                  <b className="font-semibold text-ink">{t.builtWith}</b> {p.tech}
                </p>
                <div className="flex flex-wrap gap-6">
                  {p.links.map((l) => (
                    <a key={l.href} className="tl" href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
