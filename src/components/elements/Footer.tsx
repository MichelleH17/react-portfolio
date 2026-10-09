import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { Container } from "../shared/Container";
import { Logo } from "../shared/Logo"

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/MichelleH17", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/michaela-havlikova/?locale=en-US", label: "LinkedIn" },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-t text-text-primary border-border glass-strong">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo full href="#" />
          <p className="text-sm text-text-secondary">
            © {currentYear} Michaela Havlíková. All rights reserved.
          </p>
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
