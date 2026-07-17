import { useEffect, useRef } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type Blob = { x: number; y: number; r: number; rgb: string; a: number; sx: number; sy: number; phase: number }

// Soft, slow-drifting blobs in the site's own palette — amber echoes the
// accent, charcoal adds quiet depth. No new hues introduced.
const BLOBS: Blob[] = [
  { x: 0.2, y: 0.3, r: 0.4, rgb: "180,83,9", a: 0.12, sx: 0.00011, sy: 0.00008, phase: 0 },
  { x: 0.8, y: 0.65, r: 0.44, rgb: "180,83,9", a: 0.08, sx: -0.00009, sy: 0.00012, phase: 2.1 },
  { x: 0.55, y: 0.12, r: 0.32, rgb: "28,25,23", a: 0.05, sx: 0.00007, sy: -0.0001, phase: 4.2 },
]

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const hero = canvas?.closest("section")
    if (!canvas || !hero) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0
    let h = 0
    let frame = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = hero!.clientWidth
      h = hero!.clientHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h)
      for (const b of BLOBS) {
        const cx = (b.x + Math.sin(t * b.sx + b.phase) * 0.07) * w
        const cy = (b.y + Math.cos(t * b.sy + b.phase) * 0.07) * h
        const r = b.r * Math.max(w, h)
        const grad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, r)
        grad.addColorStop(0, `rgba(${b.rgb},${b.a})`)
        grad.addColorStop(1, `rgba(${b.rgb},0)`)
        ctx!.fillStyle = grad
        ctx!.fillRect(0, 0, w, h)
      }
    }

    resize()
    window.addEventListener("resize", resize)

    if (reduceMotion) {
      draw(0)
      return () => window.removeEventListener("resize", resize)
    }

    function loop(t: number) {
      draw(t)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(frame)
    }
  }, [reduceMotion])

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full z-0" />
}
