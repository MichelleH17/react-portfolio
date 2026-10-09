interface NavItemProps {
  href: string
  text: string
  onClick?: () => void
  active?: boolean
}

export const NavItem = ({ href, text, onClick, active = false }: NavItemProps) => {
  return (
    <a href={href} onClick={onClick} aria-current={active ? "location" : undefined} className={`px-2 lg:px-4 py-2 text-sm lg:text-base hover:text-accent transition-colors ${active ? "text-accent" : "text-text-primary"}`}>
      {text}
    </a>
  )
}