import type { Lang } from "./content/types"
import { LangContext, content } from "./i18n"
import { Navbar } from "./components/layout/Navbar"
import { BackToTop, Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"
import { Projects } from "./components/sections/Projects"
import { Statement } from "./components/sections/Statement"
import { About } from "./components/sections/About"

function App({ lang }: { lang: Lang }) {
  const t = content[lang]
  return (
    <LangContext value={lang}>
      <Navbar />
      <main id="main" tabIndex={-1} className="pt-[88px] outline-none max-[860px]:pt-[72px]">
        <Hero />
        <Services />
        <Projects />
        <Statement />
        <About />
        <section id="contact" className="min-h-[90vh] py-26 max-[860px]:py-16">
          <div className="wrap">
            <h2 className="text-h2">{t.contact.title}</h2>
          </div>
        </section>
      </main>
      <BackToTop />
      <Footer />
    </LangContext>
  )
}

export default App
