interface BtnLinkProps {
  href: string
  text: string
  className?: string
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border border-accent bg-accent cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-white dark:text-bg"> {text}</span>
    </a>
  )
}