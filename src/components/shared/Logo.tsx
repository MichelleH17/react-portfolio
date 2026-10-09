interface LogoProps {
  full?: boolean
  href?: string
}

// Stacked name wordmark; `full` is larger and adds the small ring badge (footer).
export const Logo = ({ full = false, href = "/" }: LogoProps) => (
  <a href={href} aria-label="Michaela Havlíková" className="inline-flex items-center gap-3 text-text-primary font-extrabold tracking-tighter">
    {full && (
      <svg viewBox="0 0 64 64" className="w-14 h-14 text-navy animate-spin-slow" aria-hidden="true">
        <defs><path id="logo-ring" d="M32 32m-24 0a24 24 0 1 1 48 0a24 24 0 1 1 -48 0" /></defs>
        <text fill="currentColor" fontSize="8.5" fontWeight="800" className="uppercase">
          <textPath href="#logo-ring" textLength="146" lengthAdjust="spacing">Frontend • Web design •</textPath>
        </text>
      </svg>
    )}
    {full ? (
      <span className="text-2xl leading-[0.95]">Michaela<br />Havlíková<span className="text-accent">.</span></span>
    ) : (
      <span className="text-lg leading-[0.95]">Michaela<br />Havlíková<span className="text-accent">.</span></span>
    )}
  </a>
)
