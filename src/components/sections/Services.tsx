import { useRef, type KeyboardEvent } from "react"
import { useContent } from "@/i18n"
import { useEnquiry, type EnquiryPath } from "@/store/EnquiryStore"
import { WebPanel } from "./WebPanel"
import { TeamPanel } from "./TeamPanel"

const order: EnquiryPath[] = ["web", "team"]

const look = {
  web: { on: "bg-sage border-accent", title: "text-accent-on-sage" },
  team: { on: "bg-sky border-lake", title: "" },
}

export function Services() {
  const t = useContent()
  const { path, setPath } = useEnquiry()
  const tabs = useRef<Partial<Record<EnquiryPath, HTMLButtonElement | null>>>({})

  const onKey = (e: KeyboardEvent) => {
    const keys: Record<string, EnquiryPath> = {
      ArrowLeft: order.find((p) => p !== path)!,
      ArrowRight: order.find((p) => p !== path)!,
      Home: order[0],
      End: order[order.length - 1],
    }
    const next = keys[e.key]
    if (!next) return
    e.preventDefault()
    setPath(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="services" className="bg-band py-26 max-[860px]:py-16">
      <div className="wrap">
        <div className="mb-10 flex flex-col gap-4">
          <h2 className="rise text-h2 font-normal">{t.services.title}</h2>
          <p className="rise text-lead max-w-[600px] text-body">{t.services.lead}</p>
        </div>
        <div role="tablist" aria-label={t.services.tabsLabel} className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1 max-[860px]:gap-4">
          {order.map((p) => {
            const selected = path === p
            return (
              <button
                key={p}
                ref={(el) => {
                  tabs.current[p] = el
                }}
                type="button"
                role="tab"
                id={`tab-${p}`}
                aria-selected={selected}
                aria-controls={`panel-${p}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setPath(p)}
                onKeyDown={onKey}
                className={`tab flex cursor-pointer flex-col gap-2 rounded-card border-2 px-9 py-8 text-left text-ink max-[860px]:p-6 ${selected ? look[p].on : "border-field bg-bg"}`}
              >
                <span className={`text-tab font-medium ${look[p].title}`}>{t.services.tabs[p].title}</span>
                <span className="text-body">{t.services.tabs[p].sub}</span>
              </button>
            )
          })}
        </div>
        <div role="tabpanel" id="panel-web" aria-labelledby="tab-web" hidden={path !== "web"} className="panel">
          <WebPanel />
        </div>
        <div role="tabpanel" id="panel-team" aria-labelledby="tab-team" hidden={path !== "team"} className="panel">
          <TeamPanel />
        </div>
      </div>
    </section>
  )
}
