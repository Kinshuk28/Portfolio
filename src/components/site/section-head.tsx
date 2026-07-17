import { Reveal } from "@/components/site/reveal"
import { cn } from "@/lib/utils"

export function SectionHead({ num, title, light = false }: { num: string; title: string; light?: boolean }) {
  return (
    <Reveal
      as="div"
      className={cn(
        "flex items-baseline gap-4 border-b-2 pb-5 mb-14",
        light ? "border-background" : "border-foreground"
      )}
    >
      <span className={cn("font-mono text-[.8rem] tracking-wide", light ? "text-background/50" : "text-muted-foreground/70")}>
        {num}
      </span>
      <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.3rem)] tracking-tight text-balance">
        {title}
      </h2>
    </Reveal>
  )
}
