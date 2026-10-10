import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const socialIcons = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-secondary/10 py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <Link
              to="hero"
              smooth
              duration={600}
              className="font-display text-lg font-semibold tracking-tight cursor-pointer"
            >
              <span className="text-primary">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="text-text/50 text-sm mt-1.5 max-w-xs text-center sm:text-left">
              Building web and mobile applications with Java, Spring Boot, React and Flutter.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-secondary/[0.06] flex items-center justify-center text-text/60 hover:text-primary hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-soft transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text/40 text-xs font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind.
          </p>
          <p className="text-text/40 text-xs font-mono">
            Designed &amp; developed with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
