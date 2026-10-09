import { useEffect } from "react"
import { Footer } from "./elements/Footer"
import { Navbar } from "./elements/Navbar"

interface LayoutProps {
  title: string
  children: React.ReactNode
}

export const Layout = ({title, children}: LayoutProps) => {
  useEffect(() => {
    document.title = title
  }, [title])

  // Below-the-fold fade-ins wait (paused) until scrolled into view, one shared observer.
  useEffect(() => {
    const targets = document.querySelectorAll("main > section:not(:first-child) .animate-fade-in")
    if (!("IntersectionObserver" in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.remove("reveal-pending")
        io.unobserve(e.target)
      })
    }, { rootMargin: "0px 0px -10% 0px" })
    targets.forEach((el) => { el.classList.add("reveal-pending"); io.observe(el) })
    return () => io.disconnect()
  }, [])

  // Endless loops (rings, marquee, rolling word) only run while on screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle("loop-paused", !e.isIntersecting))
    })
    document.querySelectorAll(".animate-spin-slow, .animate-marquee, .animate-roll").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  )
}
