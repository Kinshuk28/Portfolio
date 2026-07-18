import { ArrowRight } from "lucide-react"
import { type ReactNode } from "react"
import { DitherCard } from "@/components/ui/dither-card"

export interface CTASectionProps {
  eyebrow?: string
  headline?: ReactNode
  description?: ReactNode
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  /** Dithering shader tint — defaults to the given demo's orange; pass your own accent to match a design system. */
  accentColor?: string
}

export function CTASection({
  eyebrow = "AI-Powered Writing",
  headline = (
    <>
      Your words, <br />
      <span className="text-foreground/80">delivered perfectly.</span>
    </>
  ),
  description = (
    <>
      Join 2,847 founders using the only AI that understands the nuance of your voice. Clean, precise, and
      uniquely yours.
    </>
  ),
  ctaLabel = "Start Typing",
  ctaHref,
  onCtaClick,
  accentColor = "#EC4E02",
}: CTASectionProps) {
  const button = (
    <button
      type="button"
      onClick={onCtaClick}
      className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
    >
      <span className="relative z-10">{ctaLabel}</span>
      <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  )

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div className="w-full max-w-7xl">
        <DitherCard
          accentColor={accentColor}
          className="min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center"
        >
          <div className="px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {eyebrow}
            </div>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.05]">
              {headline}
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              {description}
            </p>

            {ctaHref ? (
              <a href={ctaHref} target={ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener">
                {button}
              </a>
            ) : (
              button
            )}
          </div>
        </DitherCard>
      </div>
    </section>
  )
}
