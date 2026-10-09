import { Logo } from "../shared/Logo"
import { Container } from "../shared/Container"
import { NavItem } from "../shared/NavItem"
import { useThemeStore } from "../../store/ThemeStore"
import { Button } from "../shared/Button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" },
  { href: "#values", text: "How I work" },
  { href: "#contact", text: "Contact" },
]

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  const [activeId, setActiveId] = useState("")

  // The section crossing a thin band near the top of the viewport is the active one.
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveId(`#${e.target.id}`)
        else setActiveId((cur) => (cur === `#${e.target.id}` ? "" : cur))
      })
    }, { rootMargin: "-35% 0px -60% 0px" })
    navItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 glass-strong top-0 z-50 transition-all duration-500 border-b border-border ${ isScrolled ? "py-3" : "py-5"}`}>
      <Container>
        <nav className="w-full flex justify-between">
          
          {/* Logo */}
          <div className="min-w-max">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="px-2 py-1 flex items-center gap-1">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} active={activeId === item.href} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="hidden md:block md:whitespace-nowrap">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView()} size="sm" className="lg:px-6 lg:py-3 lg:text-base">
                Work with me
              </Button>
            </div>
            <div className="min-w-max">
              <button onClick={toggleTheme} className="outline-hidden flex relative text-text-primary hover:text-accent hover:border-accent rounded-full p-2 lg:p-3 border border-border cursor-pointer transition-colors">
                {theme === "dark" ? (
                  <Moon strokeWidth={1.5} className="w-5 h-5 lg:w-6 lg:h-6" />
                ) : (
                  <Sun strokeWidth={1.5} className="w-5 h-5 lg:w-6 lg:h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-text-primary hover:text-accent cursor-pointer transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="py-6 flex flex-col gap-4">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} active={activeId === item.href} onClick={() => setIsMobileMenuOpen(false)} />
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  document.querySelector("#contact")?.scrollIntoView()
                }}
                className="text-lg"
              >
                  Work with me
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
