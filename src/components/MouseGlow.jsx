import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A large, very soft radial-gradient blob that trails the cursor,
 * giving the page a subtle "spotlight" feel (à la Linear/Vercel).
 * Purely decorative — pointer-events disabled, low opacity, and skipped
 * on touch devices where there's no persistent pointer to follow.
 */
export default function MouseGlow() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const glowX = useSpring(x, { stiffness: 60, damping: 20 })
  const glowY = useSpring(y, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-0 w-[520px] h-[520px] rounded-full pointer-events-none mix-blend-multiply hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(183,164,138,0.18) 0%, rgba(183,164,138,0) 70%)',
      }}
    />
  )
}
