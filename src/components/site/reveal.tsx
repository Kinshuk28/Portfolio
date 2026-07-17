import { type ElementType, type ComponentPropsWithoutRef } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

type RevealOwnProps<T extends ElementType> = {
  as?: T
  delay?: number
  className?: string
}

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  ...props
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType
  const { ref, inView } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "opacity-0 translate-y-5 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        inView && "opacity-100 translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
