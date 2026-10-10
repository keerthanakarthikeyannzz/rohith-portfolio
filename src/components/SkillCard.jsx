import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu, FiTool, FiSmartphone, FiTerminal } from 'react-icons/fi'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa6'
import {
  SiReact, SiJavascript, SiPython, SiFlutter, SiSpringboot, SiPostgresql, SiOpenjdk,
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFastapi, SiSqlite, SiDart, SiOpencv,
  SiPytest, SiJira, SiGit, SiGithub, SiAndroidstudio, SiIntellijidea, SiPostman,
} from 'react-icons/si'

const CATEGORY_ICONS = {
  languages: FiCode,
  frontend: FiSmartphone,
  backend: FiServer,
  databases: FiDatabase,
  ai: FiCpu,
  tools: FiTool,
}

// Icons are optional — skills without one render as plain text chips.
const SKILL_ICONS = {
  Python: SiPython, JavaScript: SiJavascript, TypeScript: SiTypescript, Dart: SiDart,
  HTML5: FaHtml5, CSS3: FaCss3Alt, Java: SiOpenjdk, Flutter: SiFlutter,
  'React.js': SiReact, 'Next.js': SiNextdotjs, 'Tailwind CSS': SiTailwindcss,
  'Spring Boot': SiSpringboot, FastAPI: SiFastapi, PostgreSQL: SiPostgresql, SQLite: SiSqlite,
  OpenCV: SiOpencv, Pytest: SiPytest, Jira: SiJira, Git: SiGit, GitHub: SiGithub,
  'Android Studio': SiAndroidstudio, 'IntelliJ IDEA': SiIntellijidea, Postman: SiPostman,
  'VS Code': FiTerminal,
}

export default function SkillCard({ category }) {
  const CategoryIcon = CATEGORY_ICONS[category.id] || FiCode

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="card group"
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${category.accent} shadow-soft group-hover:shadow-glow transition-shadow`}
        >
          <CategoryIcon size={16} />
        </span>
        <h3 className="font-display font-semibold text-lg">{category.title}</h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = SKILL_ICONS[skill]
          return (
            <li
              key={skill}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full bg-secondary/[0.06] text-text/80 border border-secondary/15"
            >
              {SkillIcon && <SkillIcon size={14} className="text-secondary/80 flex-shrink-0" />}
              {skill}
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
