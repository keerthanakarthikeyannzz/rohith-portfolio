import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A small dot + trailing ring that follows the cursor with spring physics,
 * and grows when hovering interactive elements. Disabled entirely on
 * touch/coarse-pointer devices so mobile and tablet are unaffected.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 300, damping: 30 })
  const ringY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return

    document.documentElement.classList.add('custom-cursor')

    const moveCursor = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }

    const handleOver = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], input, textarea, [data-cursor-hover]'
      )
      setHovering(Boolean(interactive))
    }

    const handleLeaveWindow = () => setVisible(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseleave', handleLeaveWindow)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseleave', handleLeaveWindow)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[100] w-2 h-2 rounded-full bg-secondary pointer-events-none"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[99] rounded-full border border-secondary/50 pointer-events-none"
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering
            ? 'rgba(183, 164, 138, 0.10)'
            : 'rgba(183, 164, 138, 0)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}
