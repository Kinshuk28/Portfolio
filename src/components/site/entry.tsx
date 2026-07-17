import type { Entry as EntryType } from "@/lib/content"
import { Reveal } from "@/components/site/reveal"

export function Entry({ entry }: { entry: EntryType }) {
  return (
    <Reveal
      as="div"
      className="grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 py-9 border-b border-border transition-colors duration-300 hover:bg-[linear-gradient(to_right,transparent,rgba(180,83,9,.05)_4%,transparent_100%)]"
    >
      <span className="font-mono text-[.8rem] text-muted-foreground tracking-wide pt-1">{entry.date}</span>
      <div>
        <h3 className="font-display text-[1.35rem] font-bold mb-1 text-balance">{entry.title}</h3>
        <span className="block text-primary text-[.92rem] font-medium mb-3.5">{entry.org}</span>
        {entry.bullets && (
          <ul className="flex flex-col gap-2 max-w-[640px]">
            {entry.bullets.map((b) => (
              <li key={b} className="relative pl-[18px] text-muted-foreground text-[.95rem]">
                <span className="absolute left-0 text-muted-foreground/70">—</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {entry.body && <p className="text-muted-foreground text-[.95rem] max-w-[640px]">{entry.body}</p>}
      </div>
    </Reveal>
  )
}
