import { useRef, useState, type FormEvent } from "react"
import { flushSync } from "react-dom"
import emailjs from "@emailjs/browser"
import { ChevronDown, Mail } from "lucide-react"
import { EMAIL, useContent } from "@/i18n"
import { useEnquiry, type EnquiryPath } from "@/store/EnquiryStore"
import type { SiteKind } from "@/content/types"

const MESSAGE_MAX = 1000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const plain = (s: string) => s.replaceAll("\u00a0", " ")

export function Contact() {
  const t = useContent().contact
  return (
    <section id="contact" className="bg-bg py-26 max-tablet:py-16">
      <div className="wrap grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-18 max-tablet:grid-cols-1 max-tablet:gap-8">
        <div className="flex flex-col gap-5">
          <h2 className="rise text-h2 font-normal">{t.title}</h2>
          {t.leads.map((p) => (
            <p key={p} className="rise text-lead text-body">
              {p}
            </p>
          ))}
          <div className="rise flex flex-col gap-1.5 pt-5">
            <span className="text-meta text-muted">{t.directLabel}</span>
            <a className="tl inline-flex items-center gap-2 self-start text-mail" href={`mailto:${EMAIL}`}>
              <Mail size={20} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  const t = useContent().contact.form
  const { path, site, setPath, pickSite } = useEnquiry()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [tried, setTried] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle")
  const busy = useRef(false)
  const trap = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const radios = useRef<Partial<Record<EnquiryPath, HTMLInputElement | null>>>({})

  const nameOk = name.trim().length > 0
  const emailEmpty = email.trim().length === 0
  const emailOk = EMAIL_RE.test(email.trim())
  const ready = nameOk && emailOk
  const sentRef = useRef<HTMLHeadingElement>(null)
  const nameBad = tried && !nameOk
  const emailBad = tried && !emailOk
  const web = path === "web"

  const send = async (e: FormEvent) => {
    e.preventDefault()
    if (busy.current) return
    if (!ready) {
      setTried(true)
      ;(nameOk ? emailRef : nameRef).current?.focus()
      return
    }
    busy.current = true
    setTried(false)
    if (trap.current?.value) {
      flushSync(() => setStatus("sent"))
      sentRef.current?.focus()
      busy.current = false
      return
    }
    setStatus("sending")
    const topic = plain(t.topics[path].title)
    const siteText = web ? plain(t.sites[site]) : ""
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJS is not configured")
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name.trim(),
          email: email.trim(),
          message: [[topic, siteText].filter(Boolean).join(", "), message.trim()].filter(Boolean).join("\n\n"),
          topic,
          site: siteText,
        },
        publicKey,
      )
      flushSync(() => setStatus("sent"))
      sentRef.current?.focus()
    } catch (err) {
      console.error(err)
      setStatus("failed")
    } finally {
      busy.current = false
    }
  }

  const again = () => {
    flushSync(() => {
      setName("")
      setEmail("")
      setMessage("")
      setStatus("idle")
    })
    radios.current[path]?.focus()
  }

  if (status === "sent")
    return (
      <div role="status" className="flex flex-col gap-3 rounded-card bg-sage p-8 max-phone:p-6">
        <h3 ref={sentRef} tabIndex={-1} className="text-card font-medium text-on-sage outline-none">
          {t.sentTitle}
        </h3>
        <p className="text-on-sage">{t.sentText}</p>
        <button type="button" className="tl cursor-pointer self-start text-accent-on-sage" onClick={again}>
          {t.again}
        </button>
      </div>
    )

  const sending = status === "sending"

  return (
    <form noValidate onSubmit={send} className="rise relative flex flex-col gap-5">
      <fieldset>
        <legend className="mb-3 text-meta font-semibold">{t.topicLegend}</legend>
        <div className="grid grid-cols-2 gap-3 max-phone:grid-cols-1">
          {(["web", "team"] as const).map((p) => (
            <label key={p} className="opt">
              <input
                ref={(el) => {
                  radios.current[p] = el
                }}
                type="radio"
                name="topic"
                value={p}
                checked={path === p}
                onChange={() => setPath(p)}
              />
              <span>
                <span className="block font-semibold">{t.topics[p].title}</span>
                <span className="block text-meta text-muted">{t.topics[p].sub}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {web && (
        <div className="field">
          <label htmlFor="c-site">{t.siteLabel}</label>
          <div className="relative">
            <select id="c-site" className="w-full" value={site} onChange={(e) => pickSite(e.target.value as SiteKind)}>
              {(Object.keys(t.sites) as SiteKind[]).map((k) => (
                <option key={k} value={k}>
                  {t.sites[k]}
                </option>
              ))}
            </select>
            <ChevronDown size={18} strokeWidth={2.25} aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ink" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 max-phone:grid-cols-1">
        <div className="field">
          <label htmlFor="c-name">
            {t.name}
            <span className="text-error" aria-hidden="true">
              {" "}*
            </span>
          </label>
          <input
            ref={nameRef}
            id="c-name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            aria-required="true"
            aria-invalid={nameBad}
            aria-describedby={nameBad ? "c-name-err" : undefined}
            placeholder={t.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameBad && (
            <p id="c-name-err" className="err">
              {t.nameError}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="c-email">
            {t.email}
            <span className="text-error" aria-hidden="true">
              {" "}*
            </span>
          </label>
          <input
            ref={emailRef}
            id="c-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-required="true"
            aria-invalid={emailBad}
            aria-describedby={emailBad ? "c-email-err" : undefined}
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailBad && (
            <p id="c-email-err" className="err">
              {emailEmpty ? t.emailEmpty : t.emailWrong}
            </p>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-msg">{t.message}</label>
        <textarea
          id="c-msg"
          rows={5}
          maxLength={MESSAGE_MAX}
          aria-describedby="c-msg-count"
          placeholder={t.messagePlaceholder[path]}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p id="c-msg-count" className="self-end text-meta text-muted">
          {message.length} / {MESSAGE_MAX}
        </p>
      </div>
      <div className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="c-web">Website</label>
        <input ref={trap} id="c-web" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-box border border-error-line bg-error-bg px-4.5 py-4 text-meta text-error-text">
          <b className="font-semibold">{t.fail}</b> {t.failRetry}{" "}
          <a className="text-error-text underline hover:text-error-text" href={`mailto:${EMAIL}`}>
            {t.failLink}
          </a>
          .
        </p>
      )}

      <button type="submit" className="btn send self-start px-8" aria-disabled={!ready} aria-busy={sending}>
        {sending ? (
          <>
            <span className="spinner" aria-hidden="true" />
            {t.sending}
          </>
        ) : web ? (
          t.sendWeb
        ) : (
          t.sendTeam
        )}
      </button>
    </form>
  )
}
