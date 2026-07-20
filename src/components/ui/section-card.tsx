import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SectionCardProps {
  className?: string
  children: ReactNode
}

/** The rounded, bordered card frame used to group section content. */
export function SectionCard({ className, children }: SectionCardProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm", className)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-[.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
