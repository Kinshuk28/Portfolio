import { useState, Suspense, lazy, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export interface DitherCardProps {
  /** Dithering shader tint. */
  accentColor?: string
  className?: string
  children: ReactNode
}

/** The rounded, bordered card with the animated dithering shader background from the Contact CTA, factored out so any section can wrap arbitrary content in it. */
export function DitherCard({ accentColor = "#B45309", className, children }: DitherCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm duration-500",
          className
        )}
      >
        <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
            <Dithering
              colorBack="#00000000"
              colorFront={accentColor}
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.6 : 0.2}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
