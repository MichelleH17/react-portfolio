import { useContent } from "@/i18n"
import { useEnquiry } from "@/store/EnquiryStore"

const tools = [
  { name: "Vue.js", file: "vue", w: 40, h: 35 },
  { name: "Nuxt", file: "nuxt", w: 40, h: 26 },
  { name: "React", file: "react", w: 40, h: 36 },
  { name: "Next.js", file: "nextjs", w: 36, h: 36, invert: true },
  { name: "JavaScript", file: "javascript", w: 36, h: 36 },
  { name: "TypeScript", file: "typescript", w: 36, h: 36 },
  { name: "Ruby on Rails", file: "rails", w: 80, h: 28 },
  { name: "Tailwind CSS", file: "tailwind", w: 40, h: 24 },
  { name: "Figma", file: "figma", w: 24, h: 36 },
  { name: "Framer", file: "framer", w: 24, h: 36, invert: true },
  { name: "Directus", file: "directus", w: 40, h: 26, invert: true },
  { name: "GitHub", file: "github", w: 36, h: 35, invert: true },
  { name: "Playwright", file: "playwright", w: 40, h: 30 },
  { name: "GSAP", file: "gsap", w: 80, h: 30, invert: true },
]

export function TeamPanel() {
  const t = useContent().team
  const setPath = useEnquiry((s) => s.setPath)
  return (
    <>
      <div className="intro">
        <p className="text-lead text-body">{t.intro}</p>
        <ul className="dash text-body">
          {t.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rise flex flex-col gap-7 rounded-card border border-field bg-band p-10 max-[600px]:p-6">
        <h3 className="text-box font-medium">{t.toolsTitle}</h3>
        <ul className="tools">
          {tools.map((tool) => (
            <li key={tool.file} className="tool">
              <img
                src={`/tools/${tool.file}.svg`}
                alt=""
                width={tool.w}
                height={tool.h}
                loading="lazy"
                className={tool.invert ? "dark:invert" : ""}
              />
              <span className="name">{tool.name}</span>
            </li>
          ))}
        </ul>
        <p className="text-meta text-muted">{t.toolsMore}</p>
      </div>
      <div className="flex max-w-[820px] flex-col gap-3">
        <h3 className="rise text-subhead font-normal">{t.jobsTitle}</h3>
        <ol className="jobs">
          {t.jobs.map((job) => (
            <li key={job.company}>
              <span className="dot" aria-hidden="true" />
              <span className="mb-0.5 text-meta text-muted">{job.years}</span>
              <p className="text-[24px] leading-[1.2] font-medium tracking-[-0.02em] max-[860px]:text-[22px]">{job.company}</p>
              <p className="mt-1 text-body">{job.text}</p>
            </li>
          ))}
        </ol>
      </div>
      <a className="btn self-start" href="#contact" onClick={() => setPath("team")}>
        {t.cta}
      </a>
    </>
  )
}
