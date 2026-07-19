import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionCardProps {
  className?: string
  children: ReactNode
}

/** The rounded, bordered card frame used to group section content. */
export function SectionCard({ className, children }: SectionCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-[48px] border border-border bg-card shadow-sm", className)}>
      {children}
    </div>
  )
}
