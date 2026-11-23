import { Fragment, type CSSProperties } from "react"
import { useContent } from "@/i18n"

export function Statement() {
  const t = useContent().statement
  return (
    <section aria-label={t.label} className="bg-sage py-24">
      <div className="wrap">
        <p className="wh mx-auto max-w-[1160px] text-center text-statement text-ink">
          {t.words.map((w, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span style={{ "--i": i } as CSSProperties} className={t.accent.includes(i) ? "a text-accent-on-sage" : ""}>
                {w}
              </span>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
