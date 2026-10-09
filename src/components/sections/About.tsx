import { Container } from "../shared/Container"
import { Code2, Lightbulb, PanelsTopLeft, Users } from "lucide-react"

const highlights = [
  {
    icon: PanelsTopLeft,
    title: "Thoughtful UI",
    description: "Turning designs into responsive, intuitive interfaces, with attention to detail.",
  },
  {
    icon: Code2,
    title: "Modern frontend",
    description: "Reusable, maintainable interfaces with Vue, Nuxt and TypeScript, and now React and Next.js.",
  },
  {
    icon: Users,
    title: "Clear communication",
    description: "Working directly with clients and teams to turn ideas and designs into polished, working websites.",
  },
  {
    icon: Lightbulb,
    title: "Curious & experimental",
    description: "Trying new technologies and turning ideas into working prototypes.",
  },
]

export const About = () => {
  return (
    <section id="about" className="pt-32 relative overflow-hidden text-text-primary">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-navy text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-accent leading-tight animate-fade-in animation-delay-100">
              Clear design,
              <span className="font-serif text-text-primary italic font-normal">
                {" "}
                solid code.</span>
            </h2>
            <div className="space-y-4 text-text-secondary text-lg animate-fade-in animation-delay-200">
              <p>
                I'm a frontend developer with over 4 years of professional experience, building web applications and responsive websites that are easy to use and easy to maintain.
              </p>
              <p>
                My main tools are Vue, Nuxt and TypeScript with Tailwind CSS, and I'm adding React and Next.js. I'm also studying web design and UX, so I can think about how a site looks and feels, not only how it's built.
              </p>
            </div>
            <div className="card border-l-4 border-l-navy rounded-2xl p-6 animate-fade-in animation-delay-300">
              <p className="font-medium italic text-lg text-text-primary">
                "I like building things that make sense, for the people who use them and the people who maintain them."
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="card p-6 rounded-2xl animate-fade-in transition-[border-color,box-shadow] duration-300 hover:border-navy hover:shadow-lg" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
} 