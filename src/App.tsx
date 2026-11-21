import type { Lang } from "./content/types"
import { LangContext } from "./i18n"
import { Navbar } from "./components/layout/Navbar"
import { BackToTop, Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"
import { Projects } from "./components/sections/Projects"
import { Statement } from "./components/sections/Statement"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"

function App({ lang }: { lang: Lang }) {
  return (
    <LangContext value={lang}>
      <Navbar />
      <main id="main" tabIndex={-1} className="pt-[88px] outline-none max-[860px]:pt-[72px]">
        <Hero />
        <Services />
        <Projects />
        <Statement />
        <About />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </LangContext>
  )
}

export default App
