import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

/**
 * The portfolio is designed light-first with a soft beige palette,
 * so this toggle switches between the standard airy palette and a
 * slightly richer "dusk" deeper-beige variant rather than a full dark mode —
 * keeping the glassmorphism + premium feel intact either way.
 */
export default function ThemeToggle() {
  const [dusk, setDusk] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dusk', dusk)
  }, [dusk])

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setDusk((d) => !d)}
      aria-label="Toggle theme contrast"
      className="relative w-10 h-10 rounded-full glass border border-secondary/15 flex items-center justify-center text-secondary hover:border-secondary/50 transition-colors"
    >
      {dusk ? <FiSun size={16} /> : <FiMoon size={16} />}
    </motion.button>
  )
}
