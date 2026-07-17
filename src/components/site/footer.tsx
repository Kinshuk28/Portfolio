export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center text-muted-foreground/70 text-[.8rem] font-mono">
        <span>© {new Date().getFullYear()} Kinshuk Khandelwal</span>
        <a href="#top" className="transition-colors duration-300 hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
