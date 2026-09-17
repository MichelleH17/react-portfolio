import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { Container } from "../shared/Container"
import { Button } from "../shared/Button"
import { useState } from "react"
import type { FormEvent } from "react"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "michelle.hav17@gmail.com",
    href: "mailto:michelle.hav17@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+420 724 304 557",
    href: "tel:+420724304557",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Prague, CZ",
    href: "#",
  },
]

export const Contact = () => { 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: "", // success || error
    message: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true)
    setSubmitStatus({ type: "", message: "" })
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJs configuration is missing. Please check your environment values."
        )
      }

      await emailjs.send(
        serviceId, 
        templateId, 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }, 
        publicKey
      )

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJs error: ", err)
      const message =
        err instanceof EmailJSResponseStatus
          ? err.text
          : "Failed to send message. Please try again later."
      setSubmitStatus({
        type: "error",
        message
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <section id="contact" className="pt-32 pb-20 md:pb-32 relative text-primary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Let's build{" "}
            <span className="font-serif italic font-normal text-secondary">
              something together.
            </span>
          </h2>
          <div className="text-primary/70 text-lg animate-fade-in animation-delay-200">
            <p>
              I'm looking for my next opportunity in web development, with a strong focus on frontend. I'm open to full-time roles, collaborations and interesting projects and I'd be happy to contribute beyond frontend when it makes sense.
            </p>
            <p className="mt-2">
              If you have something in mind, I'd love to hear from you.
            </p>
          </div>
        </div>  

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="glass p-8 rounded-3xl animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input 
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                  placeholder="Your name..." 
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-secondary/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input 
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                  placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-surface border border-secondary/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea 
                  id="message" 
                  rows={6} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                  placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-surface border border-secondary/30 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" />
              </div>
              <Button 
                className="w-full" 
                type="submit" 
                size="lg"
                disabled={isLoading}>
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send message
                      <Send className="w-5 h-5" />
                    </>
                  )}                  
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                    p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-primary/70">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-700 rounded-full animate-pulse" />
                <span className="font-semibold text-lg">Open to new opportunities</span>
              </div>
              <p className="text-primary/70 text-sm">
                I'm looking for my next opportunity where I can keep learning, contribute to meaningful projects and work with great people. My main focus is frontend development, but I'm also open to collaborations involving design, backend or other parts of web development.
              </p>
            </div>
          </div>
        </div>        
      </Container>
    </section>
  )
}