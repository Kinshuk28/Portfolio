import { SectionHead } from "@/components/site/section-head"
import { Reveal } from "@/components/site/reveal"
import { skills } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-[84px] border-t border-border py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="03" title="Skills" />
        <div className="border-t border-border">
          {skills.map((group, i) => (
            <Reveal
              key={group.title}
              as="div"
              delay={i * 60}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] lg:grid-cols-[240px_1fr] gap-6 lg:gap-10 py-7 border-b border-border"
            >
              <h3 className="font-mono text-[.82rem] uppercase tracking-wide pt-0.5">{group.title}</h3>
              <p className="text-muted-foreground text-[1.02rem] leading-[1.7]">{group.items}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
