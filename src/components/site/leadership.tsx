import { SectionHead } from "@/components/site/section-head"
import { Entry } from "@/components/site/entry"
import { Reveal } from "@/components/site/reveal"
import { leadership, badges } from "@/lib/content"

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-[84px] border-t border-border py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="05" title="Leadership & Community" />
        <div className="border-t border-border">
          {leadership.map((entry) => (
            <Entry key={entry.date} entry={entry} />
          ))}
        </div>

        <Reveal as="div" className="flex flex-wrap gap-2.5 mt-14 pt-10 border-t border-border">
          {badges.map((badge) => (
            <span key={badge} className="font-mono text-[.75rem] px-3.5 py-2 border border-border text-muted-foreground">
              {badge}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
