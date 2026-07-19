import { useState } from "react"
import { SectionHead } from "@/components/site/section-head"
import { Reveal } from "@/components/site/reveal"
import { Stat } from "@/components/site/stat"
import { SectionCard } from "@/components/ui/section-card"
import { stats } from "@/lib/content"
import { cn } from "@/lib/utils"

export function About() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <section id="about" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="01" title="About" />

        <SectionCard className="p-8 sm:p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-12 lg:gap-[72px] mb-20">
          <Reveal as="div" className="flex flex-col gap-3 max-w-[220px] md:max-w-none">
            <div className="aspect-[3/4] border border-foreground bg-card flex items-center justify-center overflow-hidden">
              {photoError ? (
                <span className="font-display font-bold text-[3.5rem] text-muted-foreground/60">KK</span>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Kinshuk Khandelwal"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover grayscale contrast-[1.05]"
                />
              )}
            </div>
            <span className="font-mono text-[.72rem] text-muted-foreground/70 tracking-wide">
              Fig. 01 · Kinshuk Khandelwal
            </span>
          </Reveal>

          <div>
            <Reveal as="p" className="font-display text-[1.3rem] leading-snug mb-5">
              I'm currently pursuing my MBA at the Indian Institute of Management Udaipur, building on a path
              that's taken me from engineering workshops to AI labs to community leadership.
            </Reveal>
            <Reveal as="p" delay={120} className="text-muted-foreground max-w-[640px] mb-5">
              I started out in mechanical engineering, testing turbines at BHEL, evaluating metro systems at
              DMRC, and designing a 3D printer from scratch. That hands-on, systems-first thinking carried into
              my work as a Business Analyst at Turing Enterprises, where I helped fine-tune large language
              models (including work that trained Apple's LLM) through reinforcement learning from human
              feedback.
            </Reveal>
            <Reveal as="p" delay={180} className="text-muted-foreground max-w-[640px] mb-5">
              Outside of resumes and reports, I organize community events for Delhi's Real Madrid fan base and
              helped steer an all-terrain vehicle racing team's outreach to a top-30 national finish. I like
              building things, whether that's a model, a machine, or a room full of 600 football fans.
            </Reveal>
            <Reveal
              as="a"
              delay={240}
              href={`${import.meta.env.BASE_URL}Kinshuk_Khandelwal_Resume.pdf`}
              download
              className="text-link mt-2"
            >
              Download Résumé <span>↓</span>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {stats.map((s, i) => (
            <Stat
              key={s.label}
              to={s.to}
              decimals={s.decimals}
              suffix={s.suffix}
              label={s.label}
              sub={s.sub}
              className={cn(
                "max-sm:border-l-0 max-sm:pl-0 first:border-l-0 first:pl-0",
                i === 2 && "sm:max-lg:border-l-0 sm:max-lg:pl-0"
              )}
            />
          ))}
        </div>
        </SectionCard>
      </div>
    </section>
  )
}
