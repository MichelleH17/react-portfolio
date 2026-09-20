import { BookOpen, Search, PanelsTopLeft, Hammer, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "../shared/Container"
import { useState } from "react"

const values = [
  {
    icon: Search,
    title: "I like to understand things",
    description: "I don't want to only know what to change. I like understanding why something works and how the different parts fit together.",
  },
  {
    icon: PanelsTopLeft,
    title: "I care about the details",
    description: "Working with Figma and implementing designs taught me to notice the small things - spacing, responsiveness, consistency and how components behave.",
  },
  {
    icon: Hammer,
    title: "I learn by building",
    description: "Most of what I've learned has come from building real things. That's how I moved from Rails and Hotwire to Vue and Nuxt, and now to React and Next.js.",
  },
  {
    icon: Users,
    title: "I like figuring things out together",
    description: "I enjoy discussing ideas, asking questions and getting feedback. Working through a problem together often leads to a better solution.",
  },
  {
    icon: BookOpen,
    title: "I'm always learning",
    description: "Frontend keeps changing, and I enjoy that. I'm naturally curious about new technologies and like exploring them through projects and experimentation.",
  },
]

export const Values = () => { 
  const [currentIdx, setCurrentIdx] = useState(0)

  const next = () => {
    setCurrentIdx((prev: number) => (prev + 1) % values.length)
  }

  const previous = () => {
    setCurrentIdx((prev: number) => (prev - 1 + values.length) % values.length)
  }

  const Icon = values[currentIdx].icon

  return (
    <section id="values" className="pt-32 relative text-text-primary overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <Container className="relative z-10">

        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-navy text-sm font-medium tracking-wider uppercase animate-fade-in">
            How I work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-accent">
            More than just
            <span className="font-serif italic font-normal text-text-primary">
              {" "}
              writing code.
            </span>
          </h2>
          <p className="text-text-secondary text-lg animate-fade-in animation-delay-200">
            I believe good development comes from thoughtful decisions, clear communication and a willingness to keep learning along the way.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="relative">

            {/* Main card */}
            <div className="card p-8 md:p-12 rounded-3xl animate-fade-in animation-delay-200">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white dark:text-bg" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold leading-relaxed mb-2 text-text-primary">{values[currentIdx].title}</h3>
                <p className="text-sm md:text-lg font-medium text-text-secondary">{values[currentIdx].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 my-8">
            <button onClick={previous} className="p-3 rounded-full border border-border hover:bg-accent hover:border-accent hover:text-white dark:hover:text-bg transition-all">
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {values.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIdx ? "w-8 bg-accent" : "bg-border hover:bg-accent/50"}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border border-border hover:bg-accent hover:border-accent hover:text-white dark:hover:text-bg transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}