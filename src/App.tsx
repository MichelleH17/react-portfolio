import type { Lang } from "./content/types"
import { LangContext, content } from "./i18n"
import { Navbar } from "./components/layout/Navbar"
import { BackToTop, Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"

function App({ lang }: { lang: Lang }) {
  const t = content[lang]
  const stubs = [
    { id: "work", title: t.projects.title, band: false },
    { id: "about", title: t.about.title, band: true },
    { id: "contact", title: t.contact.title, band: false },
  ]
  return (
    <LangContext value={lang}>
      <Navbar />
      <main id="main" tabIndex={-1} className="pt-[88px] outline-none max-[860px]:pt-[72px]">
        <Hero />
        <Services />
        {stubs.map((s) => (
          <section key={s.id} id={s.id} className={`min-h-[90vh] py-26 max-[860px]:py-16 ${s.band ? "bg-band" : ""}`}>
            <div className="wrap">
              <h2 className="text-h2">{s.title}</h2>
            </div>
          </section>
        ))}
      </main>
      <BackToTop />
      <Footer />
    </LangContext>
  )
}

export default App
