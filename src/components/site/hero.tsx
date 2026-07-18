import { HeroCanvas } from "@/components/site/hero-canvas"
import { BlurName } from "@/components/site/blur-name"
import { Reveal } from "@/components/site/reveal"
import { useReveal } from "@/hooks/use-reveal"

export function Hero() {
  const { ref: nameRef, inView: nameInView } = useReveal<HTMLHeadingElement>()

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-[90px]">
      <HeroCanvas />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none opacity-5 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-[2] max-w-[1180px] mx-auto px-6 md:px-10 w-full">
        <Reveal as="p" className="font-mono text-[.82rem] text-muted-foreground tracking-wide mb-7">
          MBA Candidate, IIM Udaipur · Delhi, India
        </Reveal>

        <h1
          ref={nameRef}
          className="font-display font-black text-[clamp(3.2rem,10vw,7.5rem)] tracking-tight leading-[.95] mb-8"
        >
          <BlurName words={["Kinshuk", "Khandelwal"]} inView={nameInView} />
        </h1>

        <Reveal
          as="p"
          delay={120}
          className="font-mono text-[clamp(.95rem,1.6vw,1.15rem)] tracking-wide uppercase mb-7"
        >
          Strategic Thinker <span className="text-primary mx-1">·</span> Workflow Builder
        </Reveal>

        <Reveal
          as="p"
          delay={180}
          className="font-display italic text-muted-foreground text-[1.15rem] max-w-[520px] mb-10"
        >
          Engineer by training, business analyst by trade, strategist by choice. I turn complex, ambiguous
          problems into systems that work.
        </Reveal>

        <Reveal as="div" delay={240} className="flex gap-8 flex-wrap">
          <a href="#work" className="text-link">
            View Work <span>→</span>
          </a>
          <a href="#contact" className="text-link">
            Get In Touch <span>→</span>
          </a>
        </Reveal>
      </div>

      <Reveal
        as="a"
        href="#about"
        delay={300}
        aria-label="Scroll down"
        className="absolute z-[2] bottom-11 left-6 md:left-10 flex items-center gap-2.5 font-mono text-[.72rem] tracking-[.1em] uppercase text-muted-foreground/70"
      >
        Scroll
        <span className="relative w-8 h-px bg-muted-foreground/70 overflow-hidden">
          <span className="absolute inset-y-0 w-full bg-primary animate-[cue-slide_1.8s_ease-in-out_infinite] motion-reduce:hidden" />
        </span>
      </Reveal>
    </section>
  )
}
