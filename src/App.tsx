import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Experience } from "@/components/site/experience"
import { Skills } from "@/components/site/skills"
import { Work } from "@/components/site/work"
import { Leadership } from "@/components/site/leadership"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
