import { SectionHead } from "@/components/site/section-head"
import { Reveal } from "@/components/site/reveal"
import { SectionCard } from "@/components/ui/section-card"
import { skills } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="03" title="Skills" />
        <SectionCard className="p-8 sm:p-10 md:p-14">
          {skills.map((group, i) => (
            <Reveal
              key={group.title}
              as="div"
              delay={i * 60}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] lg:grid-cols-[240px_1fr] gap-6 lg:gap-10 py-7 border-b border-border"
            >
              <h3 className="font-mono text-[.82rem] uppercase tracking-wide pt-0.5">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[.8rem] px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </SectionCard>
      </div>
    </section>
  )
}
