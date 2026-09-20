import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { Container } from "../shared/Container";
import logoDark from "../../assets/logo-dark.svg"
import logoLight from "../../assets/logo-light.svg"
import { useThemeStore } from "../../store/ThemeStore"

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/MichelleH17", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/michaela-havlikova/?locale=en-US", label: "LinkedIn" },
]

export const Footer = () => {
  const { theme } = useThemeStore()
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-t text-text-primary border-border glass-strong">
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-3">

          {/* Logo & Copyright */}

          <a href="#" className="relative md:-mb-2">
            <img src={theme === "dark" ? logoLight : logoDark} alt="MH Logo" className="h-10 w-10" />
          </a>
          <p className="text-sm text-text-secondary md:-mb-1">
            © {currentYear} Michaela Havlíková. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full border border-border hover:bg-accent-soft hover:border-accent hover:text-accent transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};