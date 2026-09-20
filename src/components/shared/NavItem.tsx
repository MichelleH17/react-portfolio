interface NavItemProps {
  href: string
  text: string
  onClick?: () => void
}

export const NavItem = ({ href, text, onClick }: NavItemProps) => {
  return (
    <a href={href} onClick={onClick} className="px-2 lg:px-4 py-2 text-sm lg:text-base text-text-primary hover:text-accent transition-colors">
      {text}
    </a>
  )
}