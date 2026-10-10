import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * A short, elegant loading screen shown on first paint. Keeps the same
 * palette as the rest of the site so there's no flash of mismatched
 * color, and respects prefers-reduced-motion by finishing instantly.
 */
export default function PageLoader({ onFinish }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const timer = setTimeout(
      () => setLoading(false),
      prefersReducedMotion ? 0 : 1100
    )
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display text-2xl font-semibold tracking-tight"
            >
              <span className="text-primary">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">/&gt;</span>
            </motion.div>

            <div className="relative w-40 h-1 rounded-full bg-secondary/15 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-secondary to-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
