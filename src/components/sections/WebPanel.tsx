import { useContent } from "@/i18n"
import { useEnquiry } from "@/store/EnquiryStore"

function DashList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`dash ${className}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Process() {
  const { process } = useContent().web
  return (
    <div id="process" className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="rise text-subhead font-normal">{process.title}</h3>
        <p className="rise text-lead max-w-[600px] text-body">{process.lead}</p>
      </div>
      <div className="steps relative rounded-card border border-line bg-band">
        <span className="rail" aria-hidden="true" />
        <ol className="diagram">
          {process.steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3">
              <span className="node" aria-hidden="true">
                {i + 1}
              </span>
              <h4 className="mt-2 text-box font-medium">{s.title}</h4>
              <p className="text-body">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="after">
          <span className="after-dot" aria-hidden="true" />
          {process.after}
        </p>
      </div>
    </div>
  )
}

function Prices() {
  const { prices } = useContent().web
  const pickSite = useEnquiry((s) => s.pickSite)
  return (
    <div id="prices" className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="rise text-subhead font-normal">{prices.title}</h3>
        <p className="rise text-lead max-w-[600px] text-body">{prices.lead}</p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-1">
        {prices.plans.map((plan, i) => (
          <div key={plan.kind} className="price-card flex flex-col gap-[18px] rounded-card border border-line bg-bg p-9 max-[600px]:p-7">
            <h4 className="text-card font-medium">{plan.title}</h4>
            <p className="text-body">{plan.text}</p>
            <p className="text-price flex flex-col gap-1.5 whitespace-nowrap text-ink">
              <small className="text-meta tracking-normal text-muted">{plan.priceNote}</small>
              {plan.price}
            </p>
            <DashList items={plan.items} className="text-body" />
            <p className="mt-auto border-t border-line pt-3.5 text-meta text-muted">{plan.meta}</p>
            <a className={`btn ${i === 2 ? "btn-2" : ""}`} href="#contact" onClick={() => pickSite(plan.kind)}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
      <div className="rise flex flex-col gap-3.5 rounded-card border border-line bg-bg p-8 max-[600px]:p-6">
        <h4 className="text-box font-medium">{prices.includedTitle}</h4>
        <DashList
          items={prices.included}
          className="grid! grid-cols-3 gap-x-10 text-body max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 max-[600px]:grid-cols-1">
        <div className="rise flex flex-col gap-3.5 rounded-card bg-sage p-8 text-on-sage max-[600px]:p-6">
          <h4 className="text-box font-medium text-ink">{prices.care.title}</h4>
          <ul className="dash">
            {prices.care.items.map((item) => (
              <li key={item.text}>
                {item.text} <b className="font-semibold whitespace-nowrap text-ink">{item.price}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="rise flex flex-col gap-3.5 rounded-card border border-line bg-bg p-8 text-body max-[600px]:p-6">
          <h4 className="text-box font-medium text-ink">{prices.notIncluded.title}</h4>
          <DashList items={prices.notIncluded.items} />
          <p className="text-meta text-muted">{prices.notIncluded.vat}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-8">
        <p className="text-lead max-w-[760px] text-body">{prices.unsure.text}</p>
        <a className="btn" href="#contact" onClick={() => pickSite("unsure")}>
          {prices.unsure.cta}
        </a>
      </div>
    </div>
  )
}

export function WebPanel() {
  const t = useContent().web
  return (
    <>
      <div className="intro">
        <p className="text-lead text-body">{t.intro}</p>
        <DashList items={t.list} className="text-body" />
      </div>
      <Process />
      <Prices />
    </>
  )
}
