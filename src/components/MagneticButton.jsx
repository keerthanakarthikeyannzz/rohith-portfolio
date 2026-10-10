import { useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Wraps any element (button/link) and gives it a subtle "magnetic" pull
 * toward the cursor on hover — a small, premium touch used across the
 * hero and contact CTAs. Falls back to a static element on touch devices
 * since there's no hover/cursor to react to.
 */
export default function MagneticButton({ children, className = '', strength = 18 }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    el.style.setProperty('--mx', `${(relX / rect.width) * strength}px`)
    el.style.setProperty('--my', `${(relY / rect.height) * strength}px`)
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0px')
    el.style.setProperty('--my', '0px')
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: 'translate(var(--mx, 0px), var(--my, 0px))',
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </motion.div>
  )
}
