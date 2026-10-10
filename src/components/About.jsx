import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { FiBookOpen, FiTarget, FiCpu, FiZap } from 'react-icons/fi'
import { aboutInfo, projects, skillCategories } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const BADGE_ICONS = {
  ai: FiCpu,
  learner: FiZap,
}

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [isInView, value])

  const isDecimal = value % 1 !== 0

  return (
    <span ref={ref} className="font-display text-3xl sm:text-4xl font-bold gradient-text">
      {isDecimal ? display.toFixed(1) : Math.floor(display)}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionTitle
          eyebrow="About"
          title="A little about how I build"
          description="Where I've studied, what I'm aiming for, and the numbers behind the work."
        />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-text/70 leading-relaxed text-base sm:text-lg">
              {aboutInfo.intro}
            </p>

            <div className="card flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <FiBookOpen size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">
                  {aboutInfo.education.degree}
                </h3>
                <p className="text-text/60 text-sm">
                  {aboutInfo.education.institution} &middot;{' '}
                  {aboutInfo.education.duration}
                </p>
                <p className="text-accent text-sm mt-1 font-mono">
                  CGPA: {aboutInfo.education.cgpa}
                </p>
              </div>
            </div>

            <div className="card flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                <FiTarget size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">
                  Career Objective
                </h3>
                <p className="text-text/60 text-sm leading-relaxed">
                  {aboutInfo.objective}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutInfo.stats.map((stat) => {
              if (stat.type === 'badge') {
                const BadgeIcon = BADGE_ICONS[stat.icon] || FiZap
                return (
                  <div
                    key={stat.label}
                    className="card flex flex-col items-center justify-center gap-2 text-center hover:-translate-y-1 hover:shadow-glow"
                  >
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-secondary to-accent">
                      <BadgeIcon size={16} />
                    </span>
                    <p className="text-text/70 text-xs sm:text-sm font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                )
              }
              return (
                <div
                  key={stat.label}
                  className="card text-center hover:-translate-y-1 hover:shadow-glow"
                >
                  <Counter
                    value={
                      stat.type === 'projects'
                        ? projects.length
                        : stat.type === 'skills'
                        ? new Set(skillCategories.flatMap((c) => c.skills)).size
                        : stat.value
                    }
                    suffix={stat.suffix}
                  />
                  <p className="mt-2 text-text/50 text-xs sm:text-sm font-mono uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
