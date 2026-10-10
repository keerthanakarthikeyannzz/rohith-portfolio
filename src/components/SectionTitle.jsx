import { motion } from 'framer-motion'

/**
 * Consistent section heading used across the page.
 * `index` is optional — only pass it when the sections truly form
 * a sequence worth numbering (used here as a scroll-position marker).
 */
export default function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} mb-14`}
    >
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-text/60 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 h-px w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
    </motion.div>
  )
}
