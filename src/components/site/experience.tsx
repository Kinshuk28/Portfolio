import { SectionHead } from "@/components/site/section-head"
import { Entry } from "@/components/site/entry"
import { experience } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-[84px] border-t border-border py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="02" title="Experience" />
        <div className="border-t border-border">
          {experience.map((entry) => (
            <Entry key={entry.date} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
