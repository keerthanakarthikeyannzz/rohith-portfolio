import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:-translate-x-1/2" />

      <div className="space-y-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex sm:items-center gap-6 ${
                isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Node */}
              <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center text-primary shadow-glow z-10">
                <FiBriefcase size={16} />
              </div>

              {/* Spacer for mobile node */}
              <div className="w-10 sm:hidden flex-shrink-0" />

              <div
                className={`flex-1 card sm:max-w-[calc(50%-2.5rem)] ${
                  isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                }`}
              >
                <span className="eyebrow">{item.duration}</span>
                <h3 className="font-display text-xl font-semibold mt-2">
                  {item.role}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {item.company} &middot; {item.type}
                </p>
                {item.points ? (
                  <ul className="space-y-2 mb-4 list-disc pl-5 marker:text-primary">
                    {item.points.map((point) => (
                      <li key={point} className="text-text/60 text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-accent border border-primary/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
