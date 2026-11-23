import { useContent, useLang, paths } from "@/i18n"
import { toggleTheme, useIsDark } from "@/theme"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const t = useContent()
  const dark = useIsDark()
  return (
    <button
      type="button"
      className={`icon-btn ${className}`}
      aria-label={dark ? t.nav.themeToLight : t.nav.themeToDark}
      onClick={toggleTheme}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

const langs = [
  { lang: "en", label: "EN", name: "EN, English" },
  { lang: "cs", label: "CS", name: "CS, Čeština" },
] as const

export function LangSwitch() {
  const t = useContent()
  const current = useLang()
  return (
    <div className="lang" role="group" aria-label={t.nav.langLabel}>
      {langs.map(({ lang, label, name }) => (
        <a
          key={lang}
          href={paths[lang]}
          hrefLang={lang}
          lang={lang}
          aria-label={name}
          aria-current={lang === current ? "true" : undefined}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export const Name = () => (
  <span className="text-[18px] leading-[1.02] font-semibold tracking-[-0.02em] text-ink">
    Michaela
    <br />
    Havlíková<span className="text-accent">.</span>
  </span>
)
