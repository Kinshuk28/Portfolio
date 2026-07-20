import { SectionHead } from "@/components/site/section-head"
import { Entry } from "@/components/site/entry"
import { SectionCard } from "@/components/ui/section-card"
import { leadership } from "@/lib/content"

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="05" title="Leadership & Community" />
        <SectionCard className="p-8 sm:p-10 md:p-14">
          {leadership.map((entry) => (
            <Entry key={entry.date} entry={entry} />
          ))}
        </SectionCard>
      </div>
    </section>
  )
}
