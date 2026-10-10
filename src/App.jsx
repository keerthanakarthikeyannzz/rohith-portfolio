import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import MouseGlow from './components/MouseGlow'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)

  return (
    <div className="relative min-h-screen bg-bg text-text font-body selection:bg-primary/30">
      <PageLoader onFinish={() => setLoaderDone(true)} />
      <CustomCursor />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />

      <main
        className="transition-opacity duration-500"
        style={{ opacity: loaderDone ? 1 : 0 }}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
