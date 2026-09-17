import { ArrowUpRight } from "lucide-react";
import { Container } from "../shared/Container"
import { FaGithub } from "react-icons/fa6";
import { AnimatedButton } from "../shared/AnimatedButton";

const projects = [
  {
    title: "Booking Website",
    description:
      "A private booking platform for two family apartments in Nessebar, Bulgaria, built from scratch with Nuxt 4 and Tailwind CSS. It combines a responsive UI with a shared reservation calendar, role-based access, an admin panel, price calculation and email notifications.",
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
      "Experimental landing pages and microsites built with Vue and Nuxt, focusing on responsive design, performance and fast iteration. I worked with Directus as a headless CMS, implemented typed data fetching and built reusable components for future projects.",
    image: "/projects/project2.png",
    tags: ["Vue", "Nuxt", "TypeScript", "Tailwind CSS", "Directus"],
    link: "https://localazy.com/",
  },
  {
    title: "NejŘemeslníci.cz",
    description:
      "A server-rendered web application where I implemented responsive interfaces from Figma designs and developed reusable components. I also worked with feature flags, continuous deployment and collaborative development through pull requests and code reviews.",
    image: "/projects/project1.png",
    tags: ["Ruby on Rails", "Hotwire", "Stimulus", "Tailwind CSS", "Figma"],
    link: "https://www.nejremeslnici.cz/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-32 relative overflow-hidden text-primary">

      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <Container className="relative z-10">

        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary">
            Things I've built,
            <span className="font-serif italic font-normal text-primary">
              {" "}
              at work and beyond.
            </span>
          </h2>   
          <p className="text-primary/70 text-lg animate-fade-in animation-delay-200">
            A selection of professional and personal projects, from web applications and responsive interfaces to landing pages and experiments. Along the way, I've also been exploring how AI tools like Claude Code can become a useful part of the development workflow.
          </p>       
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 ${idx === projects.length - 1 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""}`} style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="relative overflow-hidden m-6 rounded-2xl border border-primary/10">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card-50 to-transparent opacity-60" />
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-secondary hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github && 
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-secondary hover:text-white transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  }                  
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="w-full">
                  <h3 className="flex items-center justify-between text-lg md:text-xl font-semibold group-hover:text-secondary transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-primary/70 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                </div>
                <p className="text-primary/70 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-secondary/5 text-secondary text-sm font-medium border border-secondary/30 ">{tag}</span>
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