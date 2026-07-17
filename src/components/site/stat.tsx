import { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

export function Stat({
  to,
  decimals = 0,
  suffix = "",
  label,
  sub,
  className,
}: {
  to: number
  decimals?: number
  suffix?: string
  label: string
  sub: string
  className?: string
}) {
  const { ref, inView } = useReveal<HTMLDivElement>(0.4)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1600
    const start = performance.now()
    let frame: number

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(to * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setValue(to)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <div
      ref={ref}
      className={cn(
        "pt-8 px-6 border-l border-border opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0",
        inView && "opacity-100 translate-y-0",
        className
      )}
    >
      <span className="block font-mono font-semibold text-[clamp(1.8rem,3vw,2.4rem)] mb-3 tabular-nums">
        {value.toFixed(decimals)}
        {suffix}
      </span>
      <span className="text-muted-foreground text-[.85rem] leading-relaxed">
        {label}
        <br />
        {sub}
      </span>
    </div>
  )
}
