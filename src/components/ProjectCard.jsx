import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import {
  FiShield,
  FiFileText,
  FiServer,
  FiGift,
  FiCheckSquare,
  FiCrosshair,
  FiMusic,
  FiEye,
  FiTrash2,
  FiMapPin,
  FiTrendingUp,
  FiMessageCircle,
  FiBarChart2,
} from 'react-icons/fi'

const ICONS = {
  certificate: FiShield,
  resume: FiFileText,
  server: FiServer,
  reminder: FiGift,
  testing: FiCheckSquare,
  detection: FiCrosshair,
  music: FiMusic,
  attention: FiEye,
  waste: FiTrash2,
  parking: FiMapPin,
  trading: FiTrendingUp,
  chat: FiMessageCircle,
  analytics: FiBarChart2,
}

export default function ProjectCard({ project, index }) {
  const Icon = ICONS[project.image] || FiFileText

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group card flex flex-col overflow-hidden"
    >
      <div className="relative -m-6 mb-4 h-44 flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-b border-secondary/10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-32 h-32 rounded-full bg-primary/20 blur-3xl"
        />
        <Icon className="relative z-10 text-primary/80 group-hover:text-secondary transition-colors" size={52} />
        {project.featured && (
          <span className="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display font-semibold text-lg mb-2">
        {project.title}
      </h3>

      {project.subtitle && (<p className="text-accent text-sm font-medium -mt-1 mb-2">{project.subtitle}</p>)}
      <p className="text-text/60 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {project.features && project.features.length > 0 && (
        <details className="mb-4">
          <summary className="cursor-pointer text-sm font-medium text-accent hover:text-text select-none">
            Key features
          </summary>
          <ul className="mt-3 space-y-1.5 list-disc pl-5 marker:text-primary">
            {project.features.map((f) => (
              <li key={f} className="text-text/60 text-sm leading-relaxed">
                {f}
              </li>
            ))}
          </ul>
        </details>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary/[0.06] text-text/70 border border-secondary/15"
          >
            {t}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
      <div className="flex gap-3 mt-auto">
        {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium border border-secondary/15 hover:border-primary/50 hover:bg-primary/10 transition-colors"
        >
          <FiGithub size={16} /> Code
        </a>
        )}
        {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-secondary to-accent text-white shadow-soft hover:shadow-elegant hover:opacity-95 transition-all"
        >
          <FiExternalLink size={16} /> Live Demo
        </a>
        )}
      </div>
      )}
    </motion.div>
  )
}
