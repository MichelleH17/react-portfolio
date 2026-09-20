import { Container } from "../shared/Container"
import { Code2, Lightbulb, PanelsTopLeft, Users } from "lucide-react"

const highlights = [
  {
    icon: PanelsTopLeft,
    title: "Thoughtful UI",
    description: "Turning designs into responsive, intuitive interfaces with attention to detail and a focus on user experience.",
  },
  {
    icon: Code2,
    title: "Modern frontend",
    description: "Building reusable and maintainable interfaces with Vue, Nuxt and TypeScript, while expanding my skills with React and Next.js.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with designers, product and marketing teams to turn ideas into polished, working experiences.",
  },
  {
    icon: Lightbulb,
    title: "Curious & experimental",
    description: "Exploring new technologies and ideas, turning them into working prototypes and continuously expanding my skills.",
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
              Turning ideas into reality,
              <span className="font-serif text-text-primary italic font-normal">
                {" "}
                one component at a time.</span>
            </h2>
            <div className="space-y-4 text-text-secondary text-lg animate-fade-in animation-delay-200">
              <p>
                I'm a creative front-end developer with over 4 years of professional experience building web applications and digital experiences. I enjoy taking ideas and turning them into responsive, functional and thoughtfully designed websites.
              </p>
              <p>
                My main experience is with Vue and Nuxt, working with TypeScript, Tailwind CSS and reusable components. I'm also expanding my skills with React and Next.js through personal projects and exploring new ways to build for the web.
              </p>
              <p>
                I enjoy collaborating with designers and product teams, experimenting with new technologies and finding simple solutions to interesting problems. I'm naturally curious and always looking for something new to learn.
              </p>
            </div>
            <div className="card border-l-4 border-l-navy rounded-2xl p-6 animate-fade-in animation-delay-300">
              <p className="font-medium italic text-lg text-text-primary">
                "I like building things that make sense - for the people using them and for the people maintaining them. And I'm always curious about what I could build next."
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="card p-6 rounded-2xl animate-fade-in" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
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