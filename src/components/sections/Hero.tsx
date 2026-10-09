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

const words = ["Vue", "Nuxt", "React", "TypeScript"]

export const Hero = () => { 
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-text-primary">
      <Container className="pt-32 pb-12 md:pb-20 relative z-10">        

        {/* Content */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">

          {/* Left column - text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm text-text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available for freelance projects
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="word-mask"><span style={{ animationDelay: "200ms" }}>Hi,</span></span>{" "}
                <span className="word-mask"><span style={{ animationDelay: "300ms" }}>I'm</span></span>{" "}
                <span className="word-mask"><span className="text-accent font-bold" style={{ animationDelay: "400ms" }}>Michaela.</span></span>
              </h1>
              <div className="flex items-center gap-3 text-2xl md:text-3xl animate-fade-in animation-delay-600">
                <span className="sr-only">building with {words.join(", ")}</span>
                <span className="text-text-secondary" aria-hidden="true">building with</span>
                <div className="h-[1.4em] overflow-hidden text-navy font-bold" aria-hidden="true">
                  <div className="animate-roll leading-[1.4]">
                    {[...words, words[0]].map((w, i) => <div key={i}>{w}</div>)}
                  </div>
                </div>
              </div>
              <div className="max-w-lg text-text-secondary text-lg animate-fade-in animation-delay-200">
                <p>
                  I'm a frontend developer with 4+ years of experience, working with Vue, Nuxt and TypeScript and currently adding React and Next.js. I build fast, clean websites and interfaces that are a pleasure to use.
                </p>
                <p className="mt-2">
                  I'm also studying web design and UX, so I can take your project from layout to working code.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView()} size="lg">
                Work with me
                <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedButton href="/cv_havlikova_en.pdf" download="Michaela-Havlikova-CV.pdf">
                <Download className="w-5 h-5"/>
                Download CV
              </AnimatedButton>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-text-muted">Follow me:</span>
              {[
                { icon: FaGithub, href: "https://github.com/MichelleH17" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/michaela-havlikova/?locale=en-US" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full border border-border hover:bg-accent-soft hover:border-accent hover:text-accent transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>  

          {/* Right column */}  
          <div className="relative animate-fade-in animation-delay-300 lg:pr-10">

            {/* Profile image */}     
            <div className="relative max-w-[16rem] sm:max-w-[20rem] xl:max-w-[22rem] mx-auto lg:mr-0">
              <svg viewBox="0 0 200 200" className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] sm:-inset-10 sm:w-[calc(100%+5rem)] sm:h-[calc(100%+5rem)] animate-spin-slow text-navy pointer-events-none" aria-hidden="true">
                <defs><path id="hero-ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" /></defs>
                <text fill="currentColor" fontSize="8" className="uppercase">
                  <textPath href="#hero-ring" textLength="548" lengthAdjust="spacing">Frontend developer • Web design • UX • Vue • Nuxt • React •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-soft via-transparent to-blue-soft blur-2xl opacity-60 animate-pulse" />
              <div className="relative">
                <img src="/michaela-photo.jpg" alt="Michaela Havlíková image" className="w-full aspect-square object-cover rounded-full border border-border animate-reveal" />

              </div>
            </div>
          </div>
          </div>

          {/* Skills */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="mb-6 text-navy uppercase text-sm font-medium tracking-wider">
              Technologies I work with
            </p>
            <div className="relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10"
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10"
              />
              <div className="flex w-max animate-marquee will-change-transform">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="flex-shrink-0 px-5 sm:px-8 py-4 animate-fade-in" style={{ animationDelay: `${800 + (idx % skills.length) * 60}ms` }}>
                    <span className="text-lg sm:text-xl font-semibold text-text-secondary hover:text-accent transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div> */}
      </Container>
    </section>
  )
}