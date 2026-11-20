import { useId } from "react"

type Props = {
  text: string
  className?: string
  // Geometry from the V9 design: the small nav logo and the big ring around the portrait.
  variant: "logo" | "portrait"
}

const shapes = {
  logo: { box: 64, r: 24, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.5, textLength: 146 },
  portrait: { box: 200, r: 91, fontSize: 8, fontWeight: 500, letterSpacing: 2, textLength: 566 },
}

// Text running round a circle. Decorative: the same words are on the page elsewhere.
export function RingText({ text, className, variant }: Props) {
  const id = useId()
  const { box, r, ...type } = shapes[variant]
  const c = box / 2
  return (
    <svg viewBox={`0 0 ${box} ${box}`} className={className} aria-hidden="true">
      <defs>
        <path id={id} d={`M${c} ${c}m-${r} 0a${r} ${r} 0 1 1 ${2 * r} 0a${r} ${r} 0 1 1 -${2 * r} 0`} />
      </defs>
      <text fill="currentColor" fontSize={type.fontSize} fontWeight={type.fontWeight} letterSpacing={type.letterSpacing}>
        <textPath href={`#${id}`} textLength={type.textLength} lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
