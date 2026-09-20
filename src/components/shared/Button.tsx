interface ButtonProps {
  className?: string
  children: React.ReactNode
  size?: "sm" | "default" | "lg"
  type?: "button" | "reset" | "submit" | undefined
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ children, className = "", size = "default", type, disabled = false, onClick }: ButtonProps) => {

  const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 bg-accent text-white dark:text-bg hover:bg-accent/90 cursor-pointer"

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
  return (
    <button onClick={onClick} type={type} disabled={disabled}
      className={classes}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}