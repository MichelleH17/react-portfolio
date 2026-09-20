import { Container } from "../shared/Container"

const experiences = [
  {
    period: "2025 — 2026",
    role: "Frontend developer",
    company: "Localazy",
    description:
      "Designed, built and prototyped experimental landing pages and microsites with a focus on responsive design, performance and fast iteration. Worked with Directus as a headless CMS, maintained reusable components and used Claude Code as part of my development workflow.",
    technologies: [
      "Vue",
      "Nuxt",
      "TypeScript",
      "Tailwind CSS",
      "Directus",
      "Playwright",
      "Claude Code",
    ],
    current: true,
  },
  {
    period: "2025",
    role: "Frontend developer",
    company: "Develit.io",
    description:
      "Contributed to web application development with a focus on UI implementation, responsive design and interactive prototypes. Helped establish the foundations of a design system and worked with reusable UI components.",
    technologies: [
      "Vue 3",
      "Nuxt 3",
      "Tailwind CSS",
      "UnoCSS",
      "PrimeVue",
      "Figma",
    ],
    current: false,
  },
  {
    period: "2025",
    role: "Frontend developer",
    company: "NAVISYS",
    description:
      "Worked in a SaaS development environment as part of an intensive onboarding process. Gained experience with the project's architecture, testing practices and established development workflow.",
    technologies: ["Vue 3", "Nuxt", "Tailwind CSS", "Cypress"],
    current: false,
  },
  {
    period: "2021 — 2024",
    role: "Frontend developer",
    company: "NejŘemeslníci.cz",
    description:
      "Developed a server-rendered web application with a component-based interface. Implemented responsive designs from Figma, built reusable components, managed feature flags and collaborated through pull requests and code reviews.",
    technologies: [
      "Ruby on Rails",
      "Hotwire",
      "Stimulus",
      "Turbo Frames",
      "ViewComponents",
      "Tailwind CSS",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="pt-32 relative overflow-hidden text-text-primary">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-1/2"/>
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-navy text-sm font-medium tracking-wider uppercase animate-fade-in">Career journey</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 font-bold text-accent leading-tight animate-fade-in animation-delay-100">
            Always learning,
            <span className="font-serif text-text-primary italic font-normal">
              {" "}
              always building.
            </span>
          </h2>
          <p className="text-text-secondary text-lg animate-fade-in animation-delay-200">
            My path into front-end development has taken me from server-rendered applications with Ruby on Rails to modern Vue and Nuxt projects. Today, I'm continuing to expand my toolkit with React and Next.js while exploring new technologies and ways of working.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute timeline-glow left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-navy via-navy/50 to-transparent md:-translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((experience, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 bg-navy w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-bg z-10">
                  {experience.current && (
                    <span className="absolute inset-0 rounded-full bg-navy animate-ping opacity-75"/>
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="card p-6 rounded-2xl hover:border-navy transition-all duration-500">
                    <span className="text-sm text-navy font-medium">{experience.period}</span>
                    <h3 className="text-xl font-semibold mt-2 text-text-primary">{experience.role}</h3>
                    <p className="text-text-secondary">{experience.company}</p>
                    <p className="text-sm text-text-secondary mt-4">{experience.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {experience.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 border border-navy/40 text-navy rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
} 