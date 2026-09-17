import { Layout } from "./components/Layout"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { Experience } from "./components/sections/Experience"
import { Hero } from "./components/sections/Hero"
import { Projects } from "./components/sections/Projects"
import { Values } from "./components/sections/Values"


function App() {
  return (
    <Layout title="Michaela Havlíková | Frontend developer">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Values />
      <Contact />
    </Layout>
  )
}

export default App
