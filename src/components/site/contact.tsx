import { useState } from "react"
import { SectionHead } from "@/components/site/section-head"
import { Reveal } from "@/components/site/reveal"
import { CTASection } from "@/components/ui/hero-dithering-card"
import { contact } from "@/lib/content"

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section id="contact" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="06" title="Contact" />
      </div>

      <CTASection
        eyebrow="Open to Conversations"
        headline={
          <>
            Let's talk <br />
            <span className="text-foreground/80">strategy, or football.</span>
          </>
        }
        description="Whether it's a strategy problem, a project collaboration, or just talking football, I'd love to hear from you."
        ctaLabel={copied ? "Copied!" : "Copy Email"}
        onCtaClick={copyEmail}
        accentColor="#B45309"
      />

      <Reveal
        as="a"
        href={contact.linkedin}
        target="_blank"
        rel="noopener"
        className="text-link mx-auto w-fit flex"
      >
        LinkedIn <span>↗</span>
      </Reveal>
    </section>
  )
}
