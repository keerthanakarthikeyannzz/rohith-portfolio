import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import { navLinks, personalInfo } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="section-container">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-soft' : ''
          }`}
        >
          <Link
            to="hero"
            smooth
            duration={600}
            spy
            className="font-display text-lg font-semibold tracking-tight cursor-pointer"
          >
            <span className="text-primary">&lt;</span>
            {personalInfo.name.split(' ')[0]}
            <span className="text-primary">/&gt;</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                spy
                offset={-90}
                onSetActive={() => setActive(link.to)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors ${
                  active === link.to
                    ? 'text-white bg-gradient-to-r from-secondary to-accent'
                    : 'text-text/70 hover:text-text hover:bg-secondary/[0.06]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-secondary/[0.06] transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-secondary/[0.06] transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-text p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-2"
          >
            <div className="section-container">
              <div className="glass rounded-2xl p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm font-medium rounded-xl cursor-pointer text-text/80 hover:text-text hover:bg-secondary/[0.06] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-2 flex items-center gap-3">
                  <ThemeToggle />
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-secondary/[0.06] transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-text/60 hover:text-primary hover:bg-secondary/[0.06] transition-colors"
                  >
                    <FiLinkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
