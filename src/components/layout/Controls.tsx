import { useContent, useLang, paths } from "@/i18n"
import { toggleTheme, useIsDark } from "@/theme"
import { MoonIcon, SunIcon } from "../ui/icons"

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
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

const langs = [
  { lang: "en", label: "EN", name: "English" },
  { lang: "cs", label: "CS", name: "Čeština" },
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

// The name with the green full stop, used in the nav, the menu and nowhere else.
export const Name = () => (
  <span className="text-[18px] leading-[1.02] font-semibold tracking-[-0.02em] text-ink">
    Michaela
    <br />
    Havlíková<span className="text-accent">.</span>
  </span>
)
