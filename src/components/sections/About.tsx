import { useContent } from "@/i18n"

export function About() {
  const t = useContent().about
  return (
    <section id="about" className="bg-band py-26 max-[860px]:py-16">
      <div className="wrap">
        <div className="flex max-w-[760px] flex-col gap-5">
          <h2 className="rise text-h2 font-normal">{t.title}</h2>
          {t.paragraphs.map((p) => (
            <p key={p} className="rise text-lead text-body">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
