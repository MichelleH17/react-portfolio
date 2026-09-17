import { useEffect } from "react"
import { Footer } from "./elements/Footer"
import { Navbar } from "./elements/Navbar"
import { AnimatedBackground } from "./elements/AnimatedBackground"

interface LayoutProps {
  title: string
  children: React.ReactNode
}

export const Layout = ({title, children}: LayoutProps) => {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <>
      <AnimatedBackground />
      
      <Navbar />

      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  )
}
