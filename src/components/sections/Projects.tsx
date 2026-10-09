import { ArrowUpRight } from "lucide-react";
import { Container } from "../shared/Container"
import { FaGithub } from "react-icons/fa6";
import { AnimatedButton } from "../shared/AnimatedButton";

const projects = [
  {
    title: "Booking Website",
    description:
      "A booking site for two family apartments in Bulgaria, with a shared calendar, automatic price calculation, email notifications and an admin panel.",
    image: "/projects/project3.png",
    tags: [
      "Vue",
      "Nuxt 4",
      "Tailwind CSS 4",
      "GSAP",
      "Drizzle ORM",
      "Turso",
    ],
    link: "https://nesebar-booking-website.vercel.app/",
    github: "https://github.com/MichelleH17/nesebar-booking-website",
  },
  {
    title: "Localazy",
    description:
      "Landing pages and microsites for Localazy, a localization platform, built with Nuxt and a headless CMS so the team can update content quickly.",
    image: "/projects/project2.png",
    tags: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS", "Directus"],
    link: "https://localazy.com/",
  },
  {
    title: "NejŘemeslníci.cz",
    description:
      "A Czech web platform for finding tradespeople. I built responsive interfaces and reusable components from Figma designs.",
    image: "/projects/project1.png",
    tags: ["Ruby on Rails", "Hotwire", "Stimulus", "Tailwind CSS", "Figma"],
    link: "https://www.nejremeslnici.cz/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-32 relative overflow-hidden text-text-primary">

      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-soft rounded-full blur-3xl" />
      <Container className="relative z-10">

        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-navy text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-accent">
            Things I've built,
            <span className="font-serif italic font-normal text-text-primary">
              {" "}
              at work and beyond.
            </span>
          </h2>
          <p className="text-text-secondary text-lg animate-fade-in animation-delay-200">
            A selection of professional and personal projects, from web applications to landing pages.
          </p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group card rounded-2xl overflow-hidden animate-fade-in transition-[border-color,box-shadow] duration-300 hover:border-navy hover:shadow-lg" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="relative overflow-hidden m-6 rounded-2xl border border-border">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bg/50">
                  <a href={project.link} className="p-3 rounded-full bg-surface border border-border hover:bg-accent hover:border-accent hover:text-white dark:hover:text-bg transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github &&
                    <a href={project.github} className="p-3 rounded-full bg-surface border border-border hover:bg-accent hover:border-accent hover:text-white dark:hover:text-bg transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  }
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="w-full">
                  <h3 className="flex items-center justify-between text-lg md:text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                </div>
                <p className="text-text-secondary text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 rounded-full border border-accent/40 text-accent text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}  
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedButton href="https://github.com/MichelleH17">
            View my GitHub
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedButton>
        </div>
      </Container>
    </section>
  )
} 