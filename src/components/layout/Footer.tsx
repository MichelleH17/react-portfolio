import { EMAIL, useContent } from "@/i18n"
import { ArrowUp, Mail } from "lucide-react"
import { LuGithub, LuLinkedin } from "react-icons/lu"

export function Footer() {
  const t = useContent()
  return (
    <footer className="border-t border-line bg-band pt-16 pb-7">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="rise max-w-[800px] flex-[1_1_560px] text-subhead leading-[1.15]">{t.footer.title}</h2>
          <a className="btn min-h-14! px-8! text-[18px]!" href="#contact">
            {t.footer.cta}
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6">
          <span className="text-tag text-muted">{t.footer.copyright}</span>
          <div className="flex flex-wrap items-center gap-6">
            <a className="tl" href="/cv_havlikova_en.pdf">
              {t.footer.cv}
            </a>
            <div className="flex gap-3">
              <a className="social" href="https://github.com/MichelleH17" aria-label="GitHub">
                <LuGithub size={20} aria-hidden="true" />
              </a>
              <a className="social" href={`mailto:${EMAIL}`} aria-label={t.footer.emailLabel}>
                <Mail size={20} />
              </a>
              <a className="social" href="https://www.linkedin.com/in/michaela-havlikova/" aria-label="LinkedIn">
                <LuLinkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function BackToTop() {
  const t = useContent()
  return (
    <a className="totop" href="#" aria-label={t.backToTop}>
      <ArrowUp size={20} strokeWidth={2.25} />
    </a>
  )
}
