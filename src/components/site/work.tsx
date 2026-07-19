import { SectionHead } from "@/components/site/section-head"
import { Reveal } from "@/components/site/reveal"
import { SectionCard } from "@/components/ui/section-card"
import { work } from "@/lib/content"

export function Work() {
  return (
    <section id="work" className="scroll-mt-[84px] py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <SectionHead num="04" title="Selected Work" />
        <SectionCard className="p-8 sm:p-10 md:p-14">
          {work.map((item) => (
            <Reveal
              key={item.index}
              as="article"
              className="group grid grid-cols-[36px_1fr] md:grid-cols-[60px_1fr] gap-5 md:gap-8 py-10 border-b border-border transition-colors duration-300 hover:bg-[linear-gradient(to_right,transparent,rgba(180,83,9,.05)_4%,transparent_100%)]"
            >
              <span className="font-mono text-[.85rem] text-foreground/70 pt-1.5">{item.index}</span>
              <div>
                <div className="flex items-baseline gap-4 flex-wrap mb-1.5">
                  <h3 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary text-balance">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[.68rem] uppercase tracking-wide text-primary border border-primary px-2.5 py-[3px]">
                    {item.tag}
                  </span>
                </div>
                <span className="block text-foreground/70 text-[.85rem] mb-3">{item.org}</span>
                <p className="text-muted-foreground text-[.97rem] max-w-[680px]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </SectionCard>
      </div>
    </section>
  )
}
