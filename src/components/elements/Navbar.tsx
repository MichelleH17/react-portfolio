import { Container } from "../shared/Container"
import logoDark from "../../assets/logo-dark.svg"
import logoLight from "../../assets/logo-light.svg"
import { NavItem } from "../shared/NavItem"
import { useThemeStore } from "../../store/ThemeStore"
import { Button } from "../shared/Button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" },
  { href: "#values", text: "Values" },
  { href: "#contact", text: "Contact" },
]

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 glass-strong top-0 z-50 transition-all duration-500 border-b border-secondary/30 ${ isScrolled ? "py-3" : "py-5"}`}>
      <Container>
        <nav className="w-full flex justify-between">
          
          {/* Logo */}
          <div className="min-w-max">
            <a href="/" className="relative">
              <img src={theme === "dark" ? logoLight : logoDark} alt="MH Logo" className="h-10 w-10" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="px-2 py-1 flex items-center gap-1">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="hidden md:block md:whitespace-nowrap">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView()} size="sm" className="lg:px-6 lg:py-3 lg:text-base">
                Contact me
              </Button>
            </div>
            <div className="min-w-max">
              <button onClick={toggleTheme} className="outline-hidden flex relative text-primary rounded-full p-2 lg:p-3 border cursor-pointer">
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}              
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-primary cursor-pointer">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>            
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="py-6 flex flex-col gap-4">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} onClick={() => setIsMobileMenuOpen(false)} />
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  document.querySelector("#contact")?.scrollIntoView()
                }}
                className="text-lg"
              >
                  Contact me
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
