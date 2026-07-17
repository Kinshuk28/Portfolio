import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

/** Per-letter blur-in reveal, staggered — carries the hero's entrance motion. */
export function BlurName({ words, inView }: { words: string[]; inView: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <>
      {words.map((word, wi) => (
        <span key={word} className="block">
          {word.split("").map((ch, i) => (
            <span
              key={i}
              style={{ transitionDelay: reduceMotion ? "0ms" : `${i * 32}ms` }}
              className={cn(
                "inline-block transition-[filter,opacity,transform] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                "blur-[10px] opacity-0 -translate-y-[.12em]",
                "motion-reduce:blur-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                inView && "blur-none opacity-100 translate-y-0"
              )}
            >
              {ch}
            </span>
          ))}
          {wi < words.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}
