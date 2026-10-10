import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiAward, FiStar, FiX, FiExternalLink } from 'react-icons/fi'
import { certificates } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionTitle
          eyebrow="Certificates & Achievements"
          title="Learning, documented"
          description="Certifications and training listed on my resume."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => {
            const Icon = cert.type === 'achievement' ? FiStar : FiAward
            return (
              <motion.button
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(cert)}
                className="card text-left group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-base mb-1">
                  {cert.title}
                </h3>
                <p className="text-text/50 text-sm">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </motion.button>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-bg/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-md w-full shadow-glow relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-text/50 hover:text-text transition-colors"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center mb-5">
                {selected.type === 'achievement' ? (
                  <FiStar size={26} />
                ) : (
                  <FiAward size={26} />
                )}
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {selected.title}
              </h3>
              <p className="text-text/60 text-sm mb-1">
                {selected.type === 'achievement' ? '' : 'Issued by '}
                {selected.issuer}
              </p>
              <p className="text-text/40 text-xs font-mono mb-2">
                {selected.date}
              </p>

              {selected.type !== 'achievement' && selected.credentialUrl && (
                <a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  View Credential <FiExternalLink size={14} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
