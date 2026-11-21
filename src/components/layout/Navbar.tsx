import { useRef, useState, type MouseEvent } from "react"
import { useContent } from "@/i18n"
import { RingText } from "../ui/RingText"
import { Menu, X } from "lucide-react"
import { LangSwitch, Name, ThemeToggle } from "./Controls"

const RING_TEXT = "FRONTEND • WEB DESIGN •"

export function Navbar() {
  const t = useContent()
  const menu = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  const openMenu = () => {
    menu.current?.showModal()
    setOpen(true)
  }

  const goTo = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")!
    e.preventDefault()
    menu.current?.close()
    requestAnimationFrame(() => {
      history.pushState(null, "", href)
      const target = href === "#" ? null : document.querySelector<HTMLElement>(href)
      if (!target) return window.scrollTo({ top: 0 })
      target.tabIndex = -1
      target.focus({ preventScroll: true })
      target.scrollIntoView()
    })
  }

  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target !== e.currentTarget) return
    const box = e.currentTarget.getBoundingClientRect()
    const outside = e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom
    if (outside) menu.current?.close()
  }

  return (
    <>
      <a className="btn skip" href="#main">
        {t.nav.skip}
      </a>
      <div className="navbar">
        <header className="wrap nav">
          <a href="#" className="inline-flex items-center gap-3 justify-self-start no-underline">
            <RingText variant="logo" text={RING_TEXT} className="ring-spin size-12 text-ink max-[600px]:size-10" />
            <Name />
          </a>
          <nav className="nav-links" aria-label={t.nav.label}>
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <ThemeToggle className="-ml-2 size-10!" />
          </nav>
          <div className="nav-tools">
            <LangSwitch />
            <a className="btn nav-cta min-h-11! px-[18px]!" href="#contact">
              {t.nav.cta}
            </a>
            <button type="button" className="icon-btn menu-btn" aria-label={t.nav.openMenu} aria-expanded={open} onClick={openMenu}>
              <Menu size={20} />
            </button>
          </div>
        </header>
        <span className="progress" aria-hidden="true" />
      </div>

      <dialog ref={menu} className="mmenu" aria-label={t.nav.menu} onClose={() => setOpen(false)} onClick={onDialogClick}>
        <div className="flex h-[72px] items-center justify-between">
          <a href="#" className="no-underline" onClick={goTo}>
            <Name />
          </a>
          <button type="button" className="icon-btn" aria-label={t.nav.closeMenu} onClick={() => menu.current?.close()}>
            <X size={20} />
          </button>
        </div>
        <nav className="mm-links flex flex-col pt-6" aria-label={t.nav.label}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={goTo}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between pt-10">
          <LangSwitch />
          <ThemeToggle className="size-12!" />
        </div>
        <a className="btn mt-auto min-h-14! w-full text-[17px]!" href="#contact" onClick={goTo}>
          {t.nav.cta}
        </a>
      </dialog>
    </>
  )
}
