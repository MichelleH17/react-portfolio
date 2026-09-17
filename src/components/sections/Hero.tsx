import { Container } from "../shared/Container"
import { Button } from "../shared/Button"
import { ArrowRight, Download } from "lucide-react"
import { AnimatedButton } from "../shared/AnimatedButton"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const skills = [
  "Vue.js",
  "Nuxt",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "UnoCSS",
  "PrimeVue",
  "Playwright",
  "Figma",
  "Git",
  "GitHub",
  "Directus",
  "GSAP",
]

export const Hero = () => { 
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-primary">
      <Container className="pt-32 pb-12 md:pb-20 relative z-10">        

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left column - text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
                <span className="w-2 h-2 bg-secondary text-white rounded-full animate-pulse" />
                Frontend developer · Vue/Nuxt · React
              </span>
            </div>

            <div className="max-w-lg space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                Hi, I'm <span className="text-secondary glow-text font-bold">Michaela Havlíková.</span>
              </h1>
              <div className="text-primary/70 text-lg animate-fade-in animation-delay-200">
                <p>
                  A frontend developer specializing in Vue and Nuxt, with TypeScript, and currently expanding my skills with React and Next.js. I build websites, interfaces and digital experiences I actually enjoy using.
                </p>
                <p className="mt-2">
                  I'm open to new opportunities across web development, from frontend and design to exploring other parts of the development process.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView()} size="lg">
                Contact me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedButton href="/cv_havlikova_en.pdf" download="Michaela-Havlikova-CV.pdf">
                <Download className="w-5 h-5"/>
                Download CV
              </AnimatedButton>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-primary/70">Follow me:</span>
              {[
                { icon: FaGithub, href: "https://github.com/MichelleH17" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/michaela-havlikova/?locale=en-US" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-secondary/10 hover:text-secondary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}               
            </div>
          </div>  

          {/* Right column */}  
          <div className="relative animate-fade-in animation-delay-300">

            {/* Profile image */}     
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10 blur-2xl animate-pulse" />
              <div className="relative">
                <img src="/michaela-photo.jpg" alt="Michaela Havlíková image" className="w-full aspect-[4/5] object-cover rounded-2xl glass glow-border" />

                {/* Badges */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-700 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-secondary">
                    4+
                  </div>
                  <div className="text-xs text-white">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Skills */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="mb-6 text-secondary uppercase text-sm font-medium tracking-wider">
              Technologies I work with
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"
              />
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-primary/70 hover:text-secondary transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors group">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div> */}
      </Container>
    </section>
  )
}