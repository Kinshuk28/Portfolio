import { useEffect, useRef, useState } from "react"
import { nav as navItems } from "@/lib/content"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

const NAV_OFFSET = 84

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState<string>(navItems[0].id)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    function update() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setScrolled(scrollTop > 40)

      const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
      let current = sections[0]?.id
      const scrollPos = scrollTop + window.innerHeight * 0.3
      for (const sec of sections) {
        if (sec.offsetTop <= scrollPos) current = sec.id
      }
      if (current) setActiveId(current)
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }

    update()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-primary z-[300] transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-[200] py-6 border-b border-transparent transition-[padding,background,border-color] duration-350",
          scrolled && "py-4 bg-background/90 backdrop-blur-sm border-border"
        )}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#top" onClick={(e) => handleAnchorClick(e, "top")} className="font-display font-bold text-lg">
            Kinshuk Khandelwal
          </a>

          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleAnchorClick(e, item.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 font-mono text-[.78rem] tracking-wide text-muted-foreground transition-colors",
                    "hover:text-foreground",
                    activeId === item.id && "text-foreground"
                  )}
                >
                  <span className={cn("text-[.72rem] text-muted-foreground/70", activeId === item.id && "text-primary")}>
                    {item.num}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative z-[210] flex flex-col items-center justify-center gap-1.5 w-11 h-11"
          >
            <span
              className={cn(
                "block h-[1.5px] w-[26px] bg-foreground transition-transform duration-350",
                mobileOpen && "translate-y-[3.75px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-[26px] bg-foreground transition-transform duration-350",
                mobileOpen && "-translate-y-[3.75px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={cn(
          "fixed inset-0 z-[190] bg-background flex items-center justify-center transition-[opacity,visibility] duration-400",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <ul className="flex flex-col gap-1 text-left">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleAnchorClick(e, item.id)}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
                className={cn(
                  "flex items-baseline gap-4 font-display text-3xl font-bold py-2.5 transition-[opacity,transform] duration-500",
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <span className="font-mono text-sm text-muted-foreground/70 font-normal">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
