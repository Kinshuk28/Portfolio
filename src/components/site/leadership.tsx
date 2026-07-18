import { SectionHead } from "@/components/site/section-head"
import { Entry } from "@/components/site/entry"
import { Reveal } from "@/components/site/reveal"
import { DitherCard } from "@/components/ui/dither-card"
import { leadership, badges } from "@/lib/content"

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="05" title="Leadership & Community" />
        <DitherCard className="p-8 sm:p-10 md:p-14">
          {leadership.map((entry) => (
            <Entry key={entry.date} entry={entry} />
          ))}

          <Reveal as="div" className="flex flex-wrap gap-2.5 mt-14 pt-10 border-t border-border">
            {badges.map((badge) => (
              <span key={badge} className="font-mono text-[.75rem] px-3.5 py-2 border border-border text-muted-foreground">
                {badge}
              </span>
            ))}
          </Reveal>
        </DitherCard>
      </div>
    </section>
  )
}
