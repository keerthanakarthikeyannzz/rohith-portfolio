import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { personalInfo } from '../data/portfolioData'
import ParticlesBackground from './ParticlesBackground'
import AnimatedBlobs from './AnimatedBlobs'
import MagneticButton from './MagneticButton'

const heroSocials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-grid-glow" />
      <motion.div style={{ y: blobY }} className="absolute inset-0">
        <AnimatedBlobs />
      </motion.div>
      <ParticlesBackground />

      <div className="section-container relative z-10 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 eyebrow px-3 py-1.5 rounded-full border border-primary/20 mb-6">
            <HiOutlineSparkles className="text-secondary" />
            Seeking Full Stack Developer &amp; Software Engineer roles
          </span>

          <p className="font-mono text-accent mb-3 text-sm sm:text-base">
            Hello,
          </p>
          <p className="font-mono text-accent mb-3 text-sm sm:text-base">
            I&apos;m
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
            {personalInfo.name}
          </h1>

          <p className="font-display text-lg sm:text-xl text-text/70 mb-2">
            {personalInfo.role}
          </p>

          <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-text/85 mb-6 h-12">
            <TypeAnimation
              sequence={personalInfo.taglines.flatMap((t) => [t, 2000])}
              wrapper="span"
              speed={50}
              className="gradient-text"
              repeat={Infinity}
            />
          </div>

          <p className="text-text/60 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            I build web and mobile applications with Java, Spring Boot, React.js,
            Flutter, Python/FastAPI and PostgreSQL, from REST APIs and database
            design to responsive interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <MagneticButton>
              <motion.a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <FiDownload /> Download Resume
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <Link to="projects" smooth duration={600} offset={-80}>
                <motion.span
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline cursor-pointer"
                >
                  View Projects
                </motion.span>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.span
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide text-secondary hover:text-accent cursor-pointer transition-colors"
                >
                  <FiMessageSquare /> Contact Me
                </motion.span>
              </Link>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-3">
            {heroSocials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-secondary hover:text-accent hover:shadow-glow transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,#B7A48A,#8A7357,#6B5841,#B7A48A)] opacity-70 blur-md"
            />
            <div className="absolute inset-0 rounded-full bg-bg" />
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-2 rounded-full overflow-hidden glass shadow-glow"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="w-full h-full hidden items-center justify-center font-display text-6xl text-primary/60"
                style={{ display: 'none' }}
              >
                KK
              </div>
            </motion.div>

            {['Flutter', 'Spring Boot', 'PostgreSQL'].map((tag, i) => (
              <motion.span
                key={tag}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className={`absolute font-mono text-xs px-3 py-1.5 rounded-full glass border border-secondary/15 text-accent shadow-soft ${
                  i === 0
                    ? '-top-2 -left-6'
                    : i === 1
                    ? 'top-1/2 -right-10'
                    : '-bottom-2 left-1/3'
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-text/40"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <FiArrowDown />
      </motion.div>
    </section>
  )
}
