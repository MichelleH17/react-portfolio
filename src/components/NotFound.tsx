import { content, paths } from "@/i18n"
import { RingText } from "./ui/RingText"
import { Name } from "./layout/Controls"

export function NotFound() {
  const { cs, en } = content
  return (
    <>
      <header className="wrap flex h-[88px] items-center max-tablet:h-[72px]">
        <a href={paths.cs} className="inline-flex items-center gap-3 no-underline">
          <RingText variant="logo" text="FRONTEND • WEB DESIGN •" className="size-12 text-ink max-phone:size-10" />
          <Name />
        </a>
      </header>
      <main className="wrap flex flex-col gap-7 py-26 max-tablet:py-16">
        <p className="text-role font-medium text-accent">404</p>
        <h1 className="text-h1 max-w-[800px] font-normal">{cs.notFound.title}</h1>
        <p className="text-lead max-w-[600px] text-body">{cs.notFound.text}</p>
        <a className="btn self-start" href={paths.cs}>
          {cs.notFound.cta}
        </a>
        <p lang="en" className="mt-10 flex flex-col gap-2 text-body">
          <span>
            {en.notFound.title}. {en.notFound.text}
          </span>
          <a className="tl self-start" href={paths.en}>
            {en.notFound.cta}
          </a>
        </p>
      </main>
    </>
  )
}
