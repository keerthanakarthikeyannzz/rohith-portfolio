import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filters = useMemo(() => {
    const set = new Set()
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)))
    return ['all', 'featured', ...Array.from(set).slice(0, 5)]
  }, [])

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'featured') return p.featured
    return p.tech.includes(filter)
  })

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-alt">
      <div className="section-container">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          description="Mobile, full stack and AI projects. Open a card's feature list for details."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono capitalize transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-secondary to-accent text-white font-medium'
                  : 'border border-secondary/15 text-text/60 hover:border-primary/40 hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
