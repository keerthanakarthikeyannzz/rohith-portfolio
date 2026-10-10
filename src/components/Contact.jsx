import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import MagneticButton from './MagneticButton'

// Optional EmailJS credentials come from environment variables (see .env.example).
// Never hard-code keys in source. When they are missing, the form falls back to
// opening the visitor's email app with the message prefilled — nothing is faked.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailjsConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
)

const contactDetails = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: personalInfo.phoneHref },
]

function Toast({ toast, onClose }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 40, x: '-50%' }}
          className={`fixed bottom-8 left-1/2 z-[80] flex items-center gap-3 px-5 py-3.5 rounded-xl glass shadow-soft border ${
            toast.type === 'success' ? 'border-accent/40' : 'border-red-400/40'
          }`}
        >
          {toast.type === 'success' ? (
            <FiCheckCircle className="text-accent" size={18} />
          ) : (
            <FiAlertCircle className="text-red-400" size={18} />
          )}
          <span className="text-sm text-text/90">{toast.message}</span>
          <button
            onClick={onClose}
            className="text-text/40 hover:text-text/80 text-xs ml-2"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 4000)
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name'
    if (!values.email.trim()) {
      next.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email address'
    }
    if (!values.message.trim()) next.message = 'Please add a short message'
    else if (values.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    try {
      if (emailjsConfigured) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        )
        showToast('success', "Message sent — I'll get back to you soon!")
      } else {
        const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
        const body = encodeURIComponent(
          `${values.message}\n\n— ${values.name} (${values.email})`
        )
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
        showToast('success', 'Opening your email app with your message ready to send.')
      }
      setValues({ name: '', email: '', message: '' })
    } catch (err) {
      showToast('error', `Could not send the message. Please email ${personalInfo.email} directly.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something"
          description="I am seeking a Full Stack Developer or Software Engineer role. Reach out any way that's easiest."
        />

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="card flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 glass shadow-soft">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-text/50 text-sm">{personalInfo.role}</p>
              </div>
            </div>

            {contactDetails.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="card flex items-center gap-4 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-text/40 text-xs font-mono uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-text/90 text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}

            <div className="card flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/[0.06] flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/[0.06] flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="card space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wide text-text/40 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name" id="contact-name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full bg-secondary/[0.06] border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                  errors.name
                    ? 'border-red-400/50 focus:border-red-400'
                    : 'border-secondary/15 focus:border-primary/60'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wide text-text/40 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email" id="contact-email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full bg-secondary/[0.06] border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
                  errors.email
                    ? 'border-red-400/50 focus:border-red-400'
                    : 'border-secondary/15 focus:border-primary/60'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wide text-text/40 mb-2">
                Message
              </label>
              <textarea
                name="message" id="contact-message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                className={`w-full bg-secondary/[0.06] border rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none ${
                  errors.message
                    ? 'border-red-400/50 focus:border-red-400'
                    : 'border-secondary/15 focus:border-primary/60'
                }`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            <MagneticButton className="w-full">
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
              >
                {sending ? 'Sending…' : (
                  <>
                    Send Message <FiSend size={15} />
                  </>
                )}
              </motion.button>
            </MagneticButton>
          </motion.form>
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  )
}
